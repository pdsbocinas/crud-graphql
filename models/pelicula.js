import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PeliculasSchema = new Schema({
    id: Number,
    title: String,
    genre: String,
    duration: String,
    public: String,
    sinopsis: String
})

export default mongoose.model('peliculas', PeliculasSchema)
