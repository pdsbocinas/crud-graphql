import Peliculas from '../models/pelicula';

export const resolvers = {
    Query: {
        async getFilm(root, {
            _id
        }) {
            return await Peliculas.findById(_id);
        },
        async allFilms() {
            return await Peliculas.find();
        }
    },
    Mutation: {
        async createFilm(root, {
            input
        }) {
            return await Peliculas.create(input);
        },
        async updateFilm(root, {
            _id,
            input
        }) {
            return await Peliculas.findOneAndUpdate({
                _id
            }, input, {
                new: true
            })
        }
    }
}
