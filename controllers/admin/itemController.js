const Category = require('../../models/Category');

module.exports = {
    viewItem: (req, res) => {
        res.render('admin/item/view_item', {title: 'Staycation | Item'})
    }
}
