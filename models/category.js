const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Word Schema
const CategorySchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    title: {
        type: String,
        unique: true
    }
});

const Category = module.exports = mongoose.model('Category', CategorySchema);

module.exports.getCategoryById = function(id, callback) {
    Category.findById(id, callback);
}

module.exports.getCategory = function(callback) {
    Category.find(callback);
}

module.exports.getCategoryByTitle = function(title, callback) {
    const query = {title: title}
    Category.findOne(query, callback);
}

module.exports.deleteCategory = async (req, res) => {
    await Category.findOneAndDelete(req.params.id);
    res.json({status: 'Categoria deletada com sucesso!'});
}

module.exports.updateCategory = async (req, res) => {
    await Category.findByIdAndUpdate(req.params.id);
    res.json({status: 'Categoria atualizada com sucesso!'});
}

module.exports.addCategory = function(newCategory, callback) {
        newCategory.save(callback);
}
