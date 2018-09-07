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



