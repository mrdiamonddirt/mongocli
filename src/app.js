const { ConnectionClosedEvent } = require("mongodb");
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
    } else if (yargsObject.updateActor) {
        console.log('entering Update functionality')
        // code to update record
        const updateMovie = await movieCollection.findOneAndUpdate({title: yargsObject.title}, {$set:{actor: yargsObject.actor}}, {new: true})
        console.log(updateMovie)
        console.log('Actor Updated')
        // await updateMovie.replace()
    } else if (yargsObject.updateDirector) {
        console.log('entering Update functionality')
        // code to update record
        const updateMovie = await movieCollection.findOneAndUpdate({title: yargsObject.title}, {$set:{director: yargsObject.director}}, {new: true})
        console.log(updateMovie)
        console.log('Director Updated')
        // await updateMovie.replace()
    } else if (yargsObject.delete) {
        console.log('entering Delete functionality')
        // code to delete movie
        const query = {title: yargsObject.title};
        const result = await movieCollection.deleteOne(query);
        if (result.deletedCount === 1) {
            console.log('deleted')
        } else {
            console.log('error')
        }
    } else {
        console.log('command not recognised')
    };
    await client.close();
};

app(yargs.argv)