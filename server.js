// const express = require('express');
// const graphiqlExpress = require('apollo-server-express')
// const graphqlExpress = require('apollo-server-express')
// import { makeExecutableSchema } from 'graphql-tools';
// // const mongoose = require('mongoose');
// // const models = require('./models/models');
// import bodyParser from 'body-parser';
//
// import typeDefs from './schema/schema'
// import resolvers from './resolvers/resolvers'
//
// export const schema = makeExecutableSchema({
//     typeDefs,
//     resolvers
// })
//
// let app = express();
//
// app.use('/graphql',bodyParser.json(), graphqlExpress({ schema }));
//
// app.use("/graphiql", graphiqlExpress({endpointUrl: "/graphql"}));
//
// app.listen(4000);
//
// console.log('Running a GraphQL API server at localhost:4000');
require('dotenv').config();
const express = require('express');
import graphlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './schema/schema';

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECT_DB)

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to GraphQL'
    })
});

app.use('/graphql', graphlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});



