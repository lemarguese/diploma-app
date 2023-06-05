import mongoose from 'mongoose';

export default new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    video: {
        type: String
    },
    liked: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', default: []}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: []}],
    viewed: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', default: []}]
}, {versionKey: false, timestamps: true})
