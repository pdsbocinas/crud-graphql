import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from '../resolvers/resolvers'

const typeDefs = `
  type Pelicula {
    _id: ID!
    title: String!,
    genre: String!,
    duration: Int,
    public: String,
    sinopsis: String!,
  }
  
  type Query {
    getFilm(_id: ID!): Pelicula
    allFilms: [Pelicula]
  }
  
  input PeliculaInput {
    _id: ID
    title: String!,
    genre: String!,
    duration: Int,
    public: String,
    sinopsis: String!,
  }
  
  type Mutation {
    createFilm(input: PeliculaInput) : Pelicula
    updateFilm(_id: ID!, input: PeliculaInput): Pelicula
  }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema;

