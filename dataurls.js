const fs = require('fs');
const { join } = require('path');
const { EOL } = require('os');

function toDataURL(s) {
    return `url('data:image/svg+xml,${encodeURIComponent(s.trim())}')`;
}

function getBaseColors(style) {
    return ['text-color', 'highlight-color']
        .reduce((map, key) => {
            let matches = style.match(new RegExp(`${key}:\\s*([^;]+);`));
            if (matches) map[key] = matches[1];
            return map;
        }, {});
}

function getImageVarMap(baseColorMap) {
    const { argv } = process;
    const assetsDirPath = join(__dirname, 'assets');

    return fs.readdirSync(assetsDirPath)
        .filter(name => /\.svg$/.test(name))
        .reduce((map, name) => {
            let s = fs.readFileSync(join(assetsDirPath, name)).toString();
            let varName = name
                .replace(/\.svg$/, '')
                .replace(/[_\.]/g, '-');

            if (argv.includes('--currentColor') || argv.includes('--currentcolor')) {
                map[`--${varName}-image-url`] = toDataURL(
                    s.replace(/\bcurrentColor\b/gi, baseColorMap['text-color'])
                );
                map[`--highlighted-${varName}-image-url`] = toDataURL(
                    s.replace(/\bcurrentColor\b/gi, baseColorMap['highlight-color'])
                );
            }
            else map[`--${varName}-image-url`] = toDataURL(s);

            return map;
        }, {});
}

function getVarBounds(style) {
    let bounds = [style.indexOf(':root')];
    bounds.push(style.indexOf('{', bounds[0]));
    bounds.push(style.indexOf('}', bounds[1]));
    return bounds;
}

function getVarTab(style) {
    let matches = style.match(/\n(\s*)--[^:]+:\s*[^;]+;/);
    return matches ? matches[1] : '';
}

function processStyles() {
    const baseStylePath = join(__dirname, './components/index.css');

    let baseStyle = fs.readFileSync(baseStylePath).toString();
    let imageVarMap = getImageVarMap(getBaseColors(baseStyle));

    if (Object.keys(imageVarMap).length === 0)
        return;

    let tab = getVarTab(baseStyle);

    for (let [k, v] of Object.entries(imageVarMap)) {
        if (new RegExp(`${k}:\\s*([^;]+);`).test(baseStyle))
            baseStyle = baseStyle.replace(new RegExp(`${k}:\\s*([^;]+);`), `${k}: ${v};`);
        else {
            let varBounds = getVarBounds(baseStyle);
            baseStyle = baseStyle.substring(0, varBounds[2]) + 
                `${tab}${k}: ${v};${EOL}` +
                baseStyle.substring(varBounds[2]);
        }
    }

    fs.writeFileSync(baseStylePath, baseStyle);
}

processStyles();
