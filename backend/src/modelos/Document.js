const mongoose = require('mongoose');
const {Schema} = mongoose;

const DocumentSchema = new Schema({
    user: String,
    msg: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Document', DocumentSchema);