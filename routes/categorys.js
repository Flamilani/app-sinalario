const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Category = require('../models/category');

// Category
router.post('/create', (req, res) => {
    let newCategory = new Category({
        id: req.body.id,
        title: req.body.title
    });

    Category.addCategory(newCategory, (err, category) => {
        if(err) {
            res.json({success: false, msg: 'Erro ao adicionar categoria'});
        } else {
            res.json({success: true, msg: 'Adicionado com sucesso!'});
        }
    });
});

 router.get('/', (req, res, next) => {
    Category.find((err, categorys) => {
        if (err) return next(err);
        res.json(categorys);
    });
}); 

router.delete('/delete/:id', (req, res, next) => {
    Category.findByIdAndRemove(req.params.id, req.body, (err, result) => {
        if (err) return next(err);
        res.json(result);
   });
});

router.put('/:id', (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) return next(err);
        res.json(result);
   });
});

/* 
router.put('/', (req, res, next) => {
    const categ = req.body;
    const updateCateg = {};
    if (categ.title) {
        updateCateg.title = categ.title;

    }

    if(!updateCateg) {
        res.status(400).json({
            error: 'Bad Request'
        });
    } else {
        Category.update({_id: mongojs.ObjectId(req.params.id)}, (err, categ) => {
            if (err) return next(err);
            res.json(categ);
        });
    }
 
});
 */

module.exports = router;