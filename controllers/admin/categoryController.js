const Category = require('../../models/Category');

module.exports = {
    viewCategory: async (req, res) => {
        try {
            const data = await Category.find();
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMessage, status: alertStatus};
            res.render('admin/category/view_category', {category: data, alert: alert, title: 'Staycation | Category'})
        } catch (error) {
            res.render('admin/category/view_category', {category: [], title: 'Staycation | Category'})
        }
    },
    addCategory: async (req, res) => {
        try {
            const { name } = req.body
            const data = await Category.create({name});
            req.flash('alertMessage', 'Success Add Category');
            req.flash('alertStatus', 'success')
            if (data) {
                res.redirect('/admin/category')
            }
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/category')
        }
    },
    editCategory: async (req, res) => {
        try {
            const {id, name} = req.body;
            const category = await Category.findOneAndUpdate({_id: id}, {$set: {name}});
            req.flash('alertMessage', 'Success Edit Category');
            req.flash('alertStatus', 'success')
            if (category) {
                res.redirect('/admin/category'); 
            } 
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/category'); 
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const {id} = req.params;
            const category = await Category.findOneAndRemove({_id: id});
            req.flash('alertMessage', 'Success Delete Category');
            req.flash('alertStatus', 'success')
            if (category) {
                res.redirect('/admin/category');
            }
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger')
            res.redirect('/admin/category');
        }
    }
}
