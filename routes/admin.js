const router = require('express').Router();
const {upload} = require('../middlewares/multer');
const adminDashboardController = require('../controllers/admin/dashboardController');
const adminCategoryController = require('../controllers/admin/categoryController');
const adminBankController = require('../controllers/admin/bankController');
const adminItemController = require('../controllers/admin/itemController');
const adminBookingController = require('../controllers/admin/bookingController');


router.get('/dashboard', adminDashboardController.viewDashboard);

// endpoint category
router.get('/category', adminCategoryController.viewCategory);
router.post('/category', adminCategoryController.addCategory);
router.put('/category', adminCategoryController.editCategory);
router.delete('/category/:id', adminCategoryController.deleteCategory);

// endpoint bank
router.get('/bank', adminBankController.viewBank);
router.post('/bank', upload, adminBankController.addBank);
router.put('/bank', upload, adminBankController.editBank);
router.delete('/bank/:id', adminBankController.deleteBank);

// endpoint item
router.get('/item', adminItemController.viewItem);

// endpoint booking
router.get('/booking', adminBookingController.viewBooking);

module.exports = router;