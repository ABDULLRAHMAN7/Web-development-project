const express = require("express");
const router = express.Router();
const User = require('../models/User');
const passport = require("passport");


isAuthenticated = (req,res,next) => {
    if(req.isAuthenticated()) return next()
        res.redirect('/users/login')
}

router.get('/login', (req,res)=>{
    res.render('user/login', {
        error: req.flash('error')
    })

})

router.post('/login', passport.authenticate('local.login',{
    successRedirect: '/recipes',
    failureRedirect: '/users/login',
    failureFlash: true
    }))
    


router.get('/signup', (req,res)=>{
    res.render('user/signup', {
        error: req.flash('error')
    })
})

router.post('/signup', passport.authenticate('local.signup',{
successRedirect: '/recipes',
failureRedirect: '/users/signup',
failureFlash: true
}))

router.get('/logout', function(req, res) {
    req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/users/login');
    });
});

module.exports = router;




