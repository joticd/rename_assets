const fs = require('fs');
const sharp = require('sharp');
const {whatToDo, symbolAnimation, rescale, crop} = require('./config/config.json');

const assetsPath = `${__dirname}/assets`;
const files = fs.readdirSync(assetsPath);	

files.forEach(element =>{    
    if(whatToDo.rename){
        renameSymFun(element);
    }
    if(whatToDo.rescale){
        rescaleSymFun(element);
    }
    if(whatToDo.crop){
        rescaleSymFun(element);
    }
});

function renameSymFun (element){
    const prefixOriginal = symbolAnimation.original;
    const prefixReplace = symbolAnimation.replace;
    let replaceName = element.replace(new RegExp(prefixOriginal), prefixReplace );
    fs.renameSync(`${assetsPath}/${element}`, `${assetsPath}/${replaceName}`);
};

function rescaleSymFun (element){  
    sharp(`${assetsPath}/${element}`)
    .resize({height : rescale.height})
    .toBuffer()
    .then( data => {
        fs.writeFileSync(`${assetsPath}/${element}`, data);
    })
    .catch( err => {
        console.log(err);
    });
}

function rescaleSymFun (element){  
    sharp(`${assetsPath}/${element}`)
    .extract({ left: crop.left, top: crop.top, width: crop.width, height: crop.height })
    .toBuffer()
    .then( data => {
        fs.writeFileSync(`${assetsPath}/${element}`, data);
    })
    .catch( err => {
        console.log(err);
    });
}



