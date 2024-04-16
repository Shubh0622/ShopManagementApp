const path = require('path');

exports.getContactUs = (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
};

exports.postContactUs = (req,res,next)=>{
    res.redirect('/success');
};

exports.contactSuccess = (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
};