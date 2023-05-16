
const { Users } = require('../models');
var mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    User = mongoose.model('Users');

const usersController = {

    profile(req, res, next) {
        if (req.user) {
            res.send(req.user);
            next();
        }
        else {
            return res.status(401).json({ message: 'Invalid token' });
        }
    },

    loginRequired(req, res, next) {
        if (req.user) {
            next();
        } else {

            return res.status(401).json({ message: 'Unauthorized user!!' });
        }
    },

    sign_in(req, res) {
        User.findOne({
            email: req.body.email
        }, function (err, user) {
            if (err) throw err;
            if (!user || !user.comparePassword(req.body.password)) {
                return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' + user });
            }
            return res.json({ token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id }, 'RESTFULAPIs') });
        });
    },

    register(req, res) {
        var newUser = new User(req.body);
        newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
        console.log(newUser)
        newUser.save(function (err, user) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            } else {
                user.hash_password = undefined;
                return res.json(user);
            }
        });
    },

    createUsers({ body }, res) {
        Users.create(body)
            .then(UserData => res.json(UserData))
            .catch(err => res.status(400).json(err));
    },

    AllUsers(req, res) {
        Users.find({})
            .populate({ path: 'choices', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(UserData => res.json(UserData))
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    OneUser({ params }, res) {
        Users.findOne({ _id: params.id })
            .populate({ path: 'choices', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(UserData => {
                if (!UserData) {
                    res.status(404).json({ message: 'the users are out to lunch' });
                    return;
                }
                res.json(UserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    updateUsers({ params, body }, res) {
        Users.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(UserData => {
                if (!UserData) {
                    res.status(404).json({ message: 'the users are out to lunch' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err))
    },

    deleteUsers({ params }, res) {
        Users.findOneAndDelete({ _id: params.id })
            .then(UserData => {
                if (!UserData) {
                    res.status(404).json({ message: 'the users are out to lunch' });
                    return;
                }
                res.json(UserData);
            })
            .catch(err => res.status(400).json(err));
    },

    addFriend({ params }, res) {
        Users.findOneAndUpdate({ _id: params.id }, { $push: { friends: params.friendId } }, { new: true })
            .populate({ path: 'friends', select: ('-__v') })
            .select('-__v')
            .then(UserData => {
                if (!UserData) {
                    res.status(404).json({ message: 'the users are out to lunch' });
                    return;
                }
                res.json(UserData);
            })
            .catch(err => res.json(err));
    },

    deleteFriend({ params }, res) {
        Users.findOneAndUpdate({ _id: params.id }, { $pull: { friends: params.friendId } }, { new: true })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then(UserData => {
                if (!UserData) {
                    res.status(404).json({ message: 'the users are out to lunch' });
                    return;
                }
                res.json(UserData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = usersController; 