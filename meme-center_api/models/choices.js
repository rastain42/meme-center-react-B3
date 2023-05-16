const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const VotesSchema = new Schema(
    {
    voteId: {
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId()
    },
    voteBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
    },
    {
    toJSON: {
        getters: true
    } 
    }
);

const ChoicesSchema = new Schema(
    {
    choiceText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    votes: [VotesSchema]
    },
    {
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }
)

ChoicesSchema.virtual('voteCount').get(function() {
    return this.votes.length;
});

const Choices = model('Choices', ChoicesSchema);

module.exports = Choices;