const express = require('express');
const sessions = require('../data/sessions.json');
const sessionsRouter = express.Router();
sessionsRouter.route('/').get((req,res)=>{
    // res.render('sessions',{
    //     sessions: [
    //         {title: 'Session 1', description: 'this is sessino 1'},
    //         {title: 'session 2', description: 'this is session 2'},
    //         {title: 'session 3', description: 'this is session 3'},
    //         {title: 'session 4', description: 'this is session 4'},
    //     ]
    // })
    res.render('sessions',{
        sessions,
    });
})

sessionsRouter.route('/:id')
.get((req,res)=>{
    const id = req.params.id;
    // res.send('hello single sessions ' + id);
    res.render('session',{
        session: sessions[id],
    });
});

module.exports = sessionsRouter;