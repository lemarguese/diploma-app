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
    auditory: {
        type: String,
        required: true
    },
    video: {
        type: String
    },
    likes: {type: Number, default: 0},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment', default: []}]
}, {versionKey: false, timestamps: true})
