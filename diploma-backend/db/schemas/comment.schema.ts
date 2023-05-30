import mongoose from 'mongoose';

export default new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    upvote: {
        type: Number,
        default: 0
    }
}, {timestamps: true, versionKey: false})
