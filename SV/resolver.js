// const Recipe = require('./models/Recipe')


exports.resolvers = {
    Query: {
        getAllRecipes : async (root, args, { Recipe }) => {
            const allRecipes = await Recipe.find()
            return allRecipes
        }
    },
    Mutation: {
        addRecipe: async (root, { name, description, category, instructions, username }, { Recipe }) => {
            const newRecipe =  new Recipe({
                name,
                description,
                category,
                instructions,
                username
            });
            return await newRecipe.save();
        }
    }
};