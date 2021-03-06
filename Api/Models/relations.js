const character  =require('./character')
const movie      =require('./movie')
const genre      =require('./genre')
const user       =require('./user')


    character.belongsToMany(movie, { through: "character_movies" });
    movie.belongsToMany(character, { through: "character_movies" });

    movie.belongsToMany(genre, { through: "movie_genre" });
    genre.belongsToMany(movie, { through: "movie_genre" });
