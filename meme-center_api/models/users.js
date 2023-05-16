const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * User Schema
 */

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        hash_password: {
            type: String
        },
        choices: [{
            type: Schema.Types.ObjectId,
            ref: 'Choices'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }],
        created: {
            type: Date,
            default: Date.now
        }

    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
)

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password);
};

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const Users = model('Users', UserSchema);

module.exports = Users;