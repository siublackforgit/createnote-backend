const mongoose = require('mongoose');

const noteSchema = {
    title:String,
    content:String
}

const Note = mongoose.model("newnotes",noteSchema);

module.exports = Note;