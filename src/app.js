const yargs = require("yargs");
const {client, connect} = require('./db/connections');
const Movie = require('./utils/index')


async function app(yargsObject) {
    const movieCollection = await connect()
    if (yargsObject.create) {
        console.log('entering Add functionality')
        const newMovie = new Movie(yargsObject.title, yargsObject.actor, yargsObject.director)
        await newMovie.add(movieCollection);
        // code to add movie
    } else if (yargsObject.read) {
        console.log('entering Read functionality')
        const results = await movieCollection.find({}).toArray();
        console.table(results)
        // code to read movie document
    } else if (yargsObject.update) {
        console.log('entering Update functionality')
        // code to update record
    } else if (yargsObject.delete) {
        console.log('entering Delete functionality')
        // code to delete movie
    } else {
        console.log('command not recognised')
    };
    await client.close();
};

app(yargs.argv)