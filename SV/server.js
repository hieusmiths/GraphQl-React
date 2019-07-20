const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const graphQl = require('graphql');


dotenv.config({ path: './variables.env' });
const PORT = process.env.PORT || 4444;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

const Recipe = require('./models/Recipe');
const User = require('./models/User');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolver');
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))

// Connect Shema With GraphQl
app.use('/graphql',bodyParser.json(), graphqlExpress({
    schema,
    context: {
        Recipe,
        User
    }
}))



function mongooSetup() {
    mongoose.set('useCreateIndex', true);
    mongoose
    .connect('mongodb://localhost/GraphQl', { useNewUrlParser: true })
    .then(() => console.log('Connected'))
    .catch(err => console.log('err  ', err));
}
mongooSetup();
app.listen(PORT, () => {
    console.log('SV-4444')
})






































// const MongoClient = require(‘mongodb’).MongoClient;
// const uri = "mongodb+srv://root:<password>@graphql-react-tj5uw.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });