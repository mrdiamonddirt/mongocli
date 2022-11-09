// const movieCollection = connect();
class Movie {
    constructor(title, actor="Not Specified", director="Not Specified") {
        this.title = title;
        this.actor = actor;
        this.director = director;
    };
    async add(movieCollection) {
        console.log('Entering add within index.js')
        // code to log a film to the database
        await movieCollection.insertOne(this)
    };
    // async update() {
    //     console.log('Entering update within index.js')
    //     // code to update film in database
    //     // await movieCollection.findOneAndReplace()
    // };
    async delete(movieCollection) {
        console.log('Entering delete within index.js')
        await movieCollection.deleteOne(this)
    }

};

module.exports = Movie;