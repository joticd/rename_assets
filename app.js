const fs = require('fs');
const sharp = require('sharp');
const {whatToDo, symbolAnimation, rescale} = require('./config/config.json');

const assetsPath = `${__dirname}/assets`;
const files = fs.readdirSync(assetsPath);

const prefixOriginal = symbolAnimation.original;
const prefixReplace = symbolAnimation.replace;

files.forEach(element =>{    
    // let replaceName = element.replace(new RegExp(prefixOriginal), prefixReplace )
    // fs.renameSync(`${assetsPath}/${element}`, `${assetsPath}/${replaceName}`);
    
})