const Category = require('../../models/Category');
const {sendAlert, initAlert} = require('../../utils/alert');

module.exports = {
    viewCategory: async (req, res) => {
        try {
            const data = await Category.find();
            const alert = initAlert(req);
            res.render('admin/category/view_category', {category: data, alert: alert, title: 'Staycation | Category'})
        } catch (error) {
            sendAlert(req, {message: `${error.message}`, status: 'danger'});
            res.render('admin/category/view_category', {category: [], title: 'Staycation | Category'})
        }
    },
    addCategory: async (req, res) => {
        try {
            const { name } = req.body
            const data = await Category.create({name});
            sendAlert(req, {message: 'Success Add Category', status: 'success'});
            if (data) {
                res.redirect('/admin/category')
            }
        } catch (error) {
            sendAlert(req, {message: `${error.message}`, status: 'danger'});
            res.redirect('/admin/category')
        }
    },
    editCategory: async (req, res) => {
        try {
            const {id, name} = req.body;
            const category = await Category.findOneAndUpdate({_id: id}, {$set: {name}});
            sendAlert(req, {message: 'Success Edit Category', status: 'success'});
            if (category) {
                res.redirect('/admin/category'); 
            } 
        } catch (error) {
            sendAlert(req, {message: `${error.message}`, status: 'danger'});
            res.redirect('/admin/category'); 
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const {id} = req.params;
            const category = await Category.findOneAndRemove({_id: id});
            sendAlert(req, {message: 'Success Delete Category', status: 'success'});
            if (category) {
                res.redirect('/admin/category');
            }
        } catch (error) {
            sendAlert(req, {message: `${error.message}`, status: 'danger'});
            res.redirect('/admin/category');
        }
    }
}
