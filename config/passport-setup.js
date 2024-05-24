const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/User')


passport.serializeUser(function(user, done){
    done(null, user.id)
});

passport.deserializeUser(function(id, done){
    User.findById(id)
        .then(user => done(null, user))
        .catch(err => done(err));
});


passport.use('local.signup', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) => {

    if (req.body.password != req.body.confirm_password) {
        return done(null, false, req.flash('error', 'passwords do not match'))
    } else {
        User.findOne({ email: username })
            .then(user => {
                if (user) {
                    return done(null, false, req.flash('error', 'Email already used'))
                }

                if (!user) {

                    let newUser = new User()
                    newUser.email = req.body.email
                    newUser.password = newUser.hashPassword(req.body.password)
                    newUser.save()
                        .then(user => done(null, user, req.flash('success', 'User added')))
                        .catch(err => done(err));
                }
            })
            .catch(err => done(err));
    }
}));

passport.use('local.login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) => {
    User.findOne({ email: username })
        .then(user => {
            if (!user) {
                return done(null, false, req.flash('error', 'user was not found'))
            }

            if (user && !user.comparePasswords(password, user.password)) {
                return done(null, false, req.flash('error', 'password is wrong'))
            }

            return done(null, user, req.flash('success', 'welcome back'))
        })
        .catch(err => done(err));
}));