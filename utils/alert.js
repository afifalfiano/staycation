

exports.sendAlert = (req, {message = '', status = ''}) => {
    req.flash('alertMessage', message);
    req.flash('alertStatus', status);
}

exports.initAlert = (req) => {
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = {message: alertMessage, status: alertStatus};
    return alert;
}