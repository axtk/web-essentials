const fs = require('fs');
const { join } = require('path');

let cachedVarMap;

function getVarBounds(style) {
    let bounds = [style.indexOf(':root')];
    bounds.push(style.indexOf('{', bounds[0]));
    bounds.push(style.indexOf('}', bounds[1]));
    return bounds;
}

function getVars() {
    if (cachedVarMap) return cachedVarMap;

    let baseStyle = fs.readFileSync(join(__dirname, './components/index.css')).toString();
    let [, i0, i1] = getVarBounds(baseStyle);

    let varLines = baseStyle
        .substring(i0 + 1, i1)
        .split(/\r?\n/)
        .filter(Boolean);

    let varMap = {}, i;

    while ((i = varLines.findIndex(s => /^\s*(--[^:]+):\s*([^;]+);/.test(s))) !== -1) {
        let [, k, v] = varLines[i].match(/(--[^:]+):\s*([^;]+);/) || [];

        if (k && v) {
            varMap[k] = v;

            for (let j = i + 1; j < varLines.length; j++)
                varLines[j] = varLines[j].replace(new RegExp(`var\\(${k}\\)`, 'g'), v);
        }

        varLines.splice(i, 1);
    }

    return cachedVarMap = varMap;
}

function replaceVars(s, varMap) {
    return s.replace(/var\(([^\)]+)\)/g, (match, varName) => varMap[varName] || match);
}

function processStylesheet(filePath, compatFilePath, preprocess) {
    const { argv } = process;
    let s = fs.readFileSync(filePath).toString(), varMap;

    if (preprocess)
        s = preprocess(s);

    if (argv.includes('--no-vars') && Object.keys(varMap = getVars()).length !== 0)
        s = replaceVars(s, varMap);

    if (argv.includes('--tweak-hover-media'))
        s = s.replace(/(@media\s*\(hover:\s*hover\))/g, '$1, all');

    fs.writeFileSync(compatFilePath, s);
}

function processStyles() {
    const { argv } = process;

    fs.readdirSync(join(__dirname, 'components'))
        .filter(name => fs.lstatSync(join(__dirname, 'components', name)).isDirectory())
        .forEach(name => {
            const filePath = join(__dirname, 'components', name, 'index.css');
            const compatFilePath = join(__dirname, 'components', name, 'compat.css');

            if (argv.includes('--rm'))
                fs.existsSync(compatFilePath) && fs.unlinkSync(compatFilePath);
            else processStylesheet(filePath, compatFilePath);
        });

    const filePath = join(__dirname, 'components', 'index.css');
    const compatFilePath = join(__dirname, 'components', 'compat.css');

    if (argv.includes('--rm'))
        fs.existsSync(compatFilePath) && fs.unlinkSync(compatFilePath);
    else {
        processStylesheet(filePath, compatFilePath, s => {
            let bounds = getVarBounds(s);
            return s.substring(0, bounds[0]) + s.substring(bounds[2] + 1);
        });
    }
}

processStyles();
