const Category = require('../../models/Category');

module.exports = {
    viewBank: (req, res) => {
        res.render('admin/bank/view_bank', {title: 'Staycation | Bank'})
    }
}
