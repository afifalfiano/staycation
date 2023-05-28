const Category = require('../models/Category');

module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/view_dashboard')
    },
    viewCategory: async (req, res) => {
        const data = await Category.find();
        res.render('admin/category/view_category', {category: data})
    },
    addCategory: async (req, res) => {
        const { name } = req.body
        const data = await Category.create({name});
        console.log(data, 'dat');
        if (data) {
            res.redirect('/admin/category')
        }
    },
    viewBank: (req, res) => {
        res.render('admin/bank/view_bank')
    },
    viewItem: (req, res) => {
        res.render('admin/item/view_item')
    },
    viewBooking: (req, res) => {
        res.render('admin/booking/view_booking')
    },
}
