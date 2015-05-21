var fs = Npm.require('fs');
var base = '../';

function traverse(path) {
    var result = fs.readdirSync(path);
    //console.log(result);
    result.forEach(function(file) {
        var newPath = path + file;
        if (isDirectory(newPath)) {
            traverse(newPath + '/');
            console.log('directory: ' + path + file);
        }else{
            //console.log('file: ' + file);
        }
    });
}

function isDirectory(filePath){
    var stats = fs.statSync(filePath);
    return stats.isDirectory();
}

traverse(base);