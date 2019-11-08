const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Word = require('../models/word');

// Get All Word
router.get('/', (req, res, next) => {
    Word.find((err, words) => {
        if (err) return next(err)
        res.json(words);
    });
});

// Get Single Word by ID
router.get('/:id', (req, res, next) => {
    Word.findById(req.params.id, (err, word) => {
        if (err) return next(err)
        res.json(word);
    });
});

// Save Word
/* router.post('/create', (res, req, next) => {
    Word.create(req.body, (err, word) => {
        if (err) return next(err)
        res.json(word);
    });
}); */

router.post('/create', (req, res) => {
    let newWord = new Word({
        name: req.body.name,
        category: req.body.category,
        video: req.body.video,
        image: req.body.image,
        description: req.body.description,
        user: req.body.user,
        updated_date: req.body.updated_date
    });

    Word.addWord(newWord, (err, word) => {
        if(err) {
            res.json({success: false, msg: 'Erro ao adicionar termo'});
        } else {
            res.json({success: true, msg: 'Adicionado com sucesso!'});
        }
    });
});

// Update Word
router.put('/:id', (req, res, next) => {
    Word.findByIdAndUpdate(req.params.id, req.body, (err, word) => {
        if (err) return next(err);
        res.json(word);
    });
});

// Delete Word
router.delete('/delete/:id', (req, res, next) => {
    Word.findByIdAndRemove(req.params.id, req.body, (err, word) => {
        if (err) return next(err);
        res.json(word);
    });
});

module.exports = router;