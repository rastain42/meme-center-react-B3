
const {Choices, Users} = require('../models');

const choicesController = {

    createChoices({params, body}, res) {
        Choices.create(body)
        .then(({_id}) => {
            return Users.findOneAndUpdate({ _id: params.userId}, {$push: {choices: _id}}, {new: true});
        })
        .then(ChoiceData => {
            if(!ChoiceData) {
                res.status(404).json({message: 'My brain is empty'});
                return;
            }
            res.json(ChoiceData)
        })
        .catch(err => res.json(err)); 
    },

    getAllChoices(req,res) {
        Choices.find({})
        .populate({path: 'votes', select: '-__v'})
        .select('-__v')
        .then(ChoiceData => res.json(ChoiceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    getChoicesById({params}, res) {
        Choices.findOne({ _id: params.id })
        .populate({path: 'votes',select: '-__v'})
        .select('-__v')
        .then(ChoiceData => {
            if(!ChoiceData) {
            res.status(404).json({message: 'My brain is empty'});
            return;
        }
        res.json(ChoiceData)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    updateChoices({params, body}, res) {
        Choices.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .populate({path: 'votes', select: '-__v'})
        .select('-___v')
        .then(ChoiceData => {
            if (!ChoiceData) {
                res.status(404).json({message: 'My brain is empty'});
                return;
            }
                res.json(ChoiceData);
        })
        .catch(err => res.json(err));
    },

    deleteChoices({params}, res) {
        Choices.findOneAndDelete({_id: params.id})
        .then(ChoiceData => {
            if (!ChoiceData) {
                res.status(404).json({message: 'My brain is empty'});
                return;
            }
            res.json(ChoiceData);
            })
            .catch(err => res.status(400).json(err));
    },

    addVote({params, body}, res) {
        Choices.findOneAndUpdate({_id: params.choiceId}, {$push: {votes: body}}, {new: true, runValidators: true})
        .populate({path: 'votes', select: '-__v'})
        .select('-__v')
        .then(ChoiceData => {
        if (!ChoiceData) {
            res.status(404).json({message: 'My brain is empty'});
            return;
        }
        res.json(ChoiceData);
        })
        .catch(err => res.status(400).json(err))

    },

    deleteVote({params}, res) {
        Choices.findOneAndUpdate({_id: params.choiceId}, {$pull: {votes: {voteId: params.voteId}}}, {new : true})
        .then(ChoiceData => {
            if (!ChoiceData) {
                res.status(404).json({message: 'My brain is empty'});
                return;
            }
            res.json(ChoiceData);
        })
        .catch(err => res.status(400).json(err));
    }

};

module.exports = choicesController;