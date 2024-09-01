import { model, Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcrypt'

/* email and password regex */
const EMAIL_REGEX = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/);
const PASSWORD_REGEX = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
);

/* define mongoose user schema */
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Please ebter your username.'],
            minLength: [2, 'Username must be at least two character.']
        },
        email: {
            type: String,
            required: [true, 'Please enter your email.'],
            validate: {
                validator: (value) => EMAIL_REGEX.test(value),
                message: 'Please enter a valid email.',
            },
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter your password.'],
            validate: {
                validator:(value) => PASSWORD_REGEX.test(value),
                message: '1 uppercase, 1 lowercase, 1 number, at least 8 characters.',
            },
        },
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Item',
            },
        ],
    },
    { timestamps: true }
);

/* set enauk validation message */
userSchema.plugin(mongooseUniqueValidator, {
    message: 'Email in use. Please log in.'
});

/* hash password before saving */
userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});

/* create mongoose model and export */
const User = model('User', userSchema);
export default User