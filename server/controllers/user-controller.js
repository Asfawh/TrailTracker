import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from "../models/user-model.js";

/* load .env contents */
dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET;

/* jwt generator */
function generateToken(id) {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: '1d'});
}

/* login erros object */
const errors = {
    credentials: {
        message: 'Could not log in. Please check your credentials.',
    },
};

async function registerUser(req, res) {
    try {
        const user = await User.create(req.body);
        const userToken = generateToken(user._id)
        res.status(201).json({
            token: userToken,
            username: user.username,
            id: user._id,
        });
    }
    catch (err) {
        console.log(err);
        res.status(422).json(err);
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if(!user) {
            console.log('Email incorrect.');
            return res.status(400).json( { errors });
        }
        const passwordIsCorrect = await bcrypt.compare(password, user.password);

        if(!passwordIsCorrect) {
            console.log('Password incorrect');
            return res.status(400).json( { errors });
        }

        const userToken = generateToken(user._id);

        res.status(200).json({
            token: userToken,
            username: user.username,
            id: user._id,
        });
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

export { registerUser, loginUser, getAllUsers };