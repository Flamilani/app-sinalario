const mongoose = require('mongoose');
const config = require('../config/database');

// Word Schema
const WordSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    category: {
        type: String
    },
    video: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    user: {
        type: String
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
   
});

const Word = module.exports = mongoose.model('Word', WordSchema);

module.exports.getWordById = function(id, callback) {
    Word.findById(id, callback);
}

module.exports.getWord = function(callback) {
    Word.find(callback);
}

module.exports.getWordByTitle = function(name, callback) {
    const query = {name: name}
    Word.findOne(query, callback);
}

module.exports.deleteWord = async (req, res) => {
    await Word.findByIdAndRemove(req.params.id);
    res.json({status: 'Termo deletado com sucesso!'});
}

module.exports.addWord = function(newWord, callback) {
        newWord.save(callback);
}


