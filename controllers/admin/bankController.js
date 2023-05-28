const Bank = require('../../models/Bank');
const {sendAlert, initAlert} = require('../../utils/alert');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
    viewBank: async (req, res) => {
        try {
            const data = await Bank.find();
            const alert = initAlert(req);
            res.render('admin/bank/view_bank', {bank: data, alert: alert, title: 'Staycation | Bank'})
        } catch (error) {
            sendAlert(req, {message: `${error.message}`, status: 'danger'});
            res.render('admin/bank/view_bank', {bank: [], title: 'Staycation | Bank'})
        }
    },
    addBank: async (req, res) => {
        try {
            const {nameBank, nomorRekening, name} = req.body;
            const data = await Bank.create({
                name,
                nameBank,
                nomorRekening,
                imageUrl: `images/${req.file.filename}`
            });
            sendAlert(req, {message: 'Success Add Bank', status: 'success'});
            if (data) {
                res.redirect('/admin/bank');
            }
        } catch (error) {
            sendAlert(req, {message: `${error.message}`, status: 'danger'});
            res.redirect('/admin/bank');
        }
    },
    editBank: async (req, res) => {
        try {
            const {id, name, nameBank, nomorRekening} = req.body;
            const data = await Bank.findOne({_id: id});
            if (req.file === undefined) {
                await data.updateOne({$set: {name, nameBank, nomorRekening}});
            } else {
                await fs.unlink(path.join(`public/${data.imageUrl}`));
                await data.updateOne({$set: {name, nameBank, nomorRekening, imageUrl: `images/${req.file.filename}`}});
            }

            sendAlert(req, {message: 'Success Edit Bank', status: 'success'});
            if (data) {
                res.redirect('/admin/bank');
            }
            
        } catch (error) {
            sendAlert(req, {message: `${error.message}`, status: 'danger'});
            res.redirect('/admin/bank'); 
        }
    },
    deleteBank: async (req, res) => {
        try {
            const {id} = req.params;
            const data = await Bank.findOne({_id: id});
            await fs.unlink(path.join(`public/${data.imageUrl}`));
            await data.deleteOne({_id: id});
            sendAlert(req, {message: 'Success Delete Bank', status: 'success'});
            if (data) {
                res.redirect('/admin/bank');
            }
        } catch (error) {
            sendAlert(req, {message: `${error.message}`, status: 'danger'});
            res.redirect('/admin/bank');
        }
    }
}
