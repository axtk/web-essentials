const fs = require('fs');
const { join } = require('path');
const { EOL } = require('os');
const { repository, version } = require('./package.json');

const DEFAULT_DESTINATION = 'essentials.css';

function createBundle() {
    let destination = DEFAULT_DESTINATION;
    let args = process.argv.slice(2);

    let destArgIndex = [
        args.indexOf('-d'),
        args.indexOf('--dest'),
        args.indexOf('--destination')
    ].find(k => k !== -1);

    if (destArgIndex !== undefined) {
        destination = args[destArgIndex + 1];
        args.splice(destArgIndex, 2);
    }

    let bundledComponents = args;

    if (bundledComponents.length === 0)
        bundledComponents = fs.readdirSync(join(__dirname, 'components'));

    let s = [
        `/* ${repository}@${version} */`,
        fs.readFileSync(join(__dirname, 'components', 'index.css')).toString()
    ]
    .concat(
        bundledComponents
            .filter(name => {
                let dirPath = join(__dirname, 'components', name);
                return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
            })
            .map(name => (
                `/* ${name} */` + EOL +
                fs.readFileSync(join(__dirname, 'components', name, 'index.css')).toString()
            ))
    )
    .join(EOL);

    fs.writeFileSync(join(__dirname, destination), s);
    console.log(`Created bundle file: ${join(__dirname, destination)}`);
}

createBundle();
