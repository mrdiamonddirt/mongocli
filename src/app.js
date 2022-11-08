const yargs = require("yargs");


function app(yargsObject) {
    if (yargsObject.create) {
        console.log('entering Add functionality')
        // code to add movie
    } else if (yargsObject.read) {
        console.log('entering Read functionality')
        // code to read movie document
    } else if (yargsObject.update) {
        console.log('entering Update functionality')
        // code to update record
    } else if (yargsObject.delete) {
        console.log('entering Delete functionality')
        // code to delete movie
    } else {
        console.log('command not recognised')
    }
};

app(yargs.argv)