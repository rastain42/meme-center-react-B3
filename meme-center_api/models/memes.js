const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const MemeSchema = new Schema(
    {
        memeId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
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


ChoicesSchema.virtual('memeCount').get(function () {
    return this.votes.length;
});

const Choices = model('Choices', ChoicesSchema);

module.exports = Choices;