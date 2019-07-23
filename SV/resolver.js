const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = 'Bi-Mat-Lam-Nha'
const createToken = (user, secret, expiresIn) => {
    const {username, email }  = user;
    return jwt.sign({username, email}, secret, { expiresIn })
}

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
        },
        singupUser: async (root, { username, email, password }, { User }) => {
            const isExitUser = await  User.findOne({username})
            if(isExitUser) {
                throw new Error('User already exits')
            }
            const newUser = new User({
                username, email, password
            })
            await newUser.save();
            const token = await createToken({ username, email }, secret, '1hr')
            return {
                token
            }
        },
        signInUser: async (root, { username, password }, { User }) => {
            const user = await User.findOne({username})
            if(!user) {
                throw new Error('User not found')
            }
            console.log(user.password)
            const isValidPasswordBcrypt = bcrypt.compareSync(password, user.password)
            if(!isValidPasswordBcrypt) {
                throw new Error('Password false')
            }
            return {
                token: createToken({user}, secret, '1hr' )
            }
        }
    }
};