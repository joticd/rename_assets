const fs = require('fs');
const configJSON = require('./config/config.json');

const assetsPath = `${__dirname}/assets`;
const files = fs.readdirSync(assetsPath);

const prefixOriginal = configJSON.symbolAnimation.original;
const prefixReplace = configJSON.symbolAnimation.replace;

files.forEach(element =>{    
    let replaceName = element.replace(new RegExp(prefixOriginal), prefixReplace )
    fs.renameSync(`${assetsPath}/${element}`, `${assetsPath}/${replaceName}`);
    
})