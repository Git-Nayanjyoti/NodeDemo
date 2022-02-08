const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const app = express(); 
const PORT = process.env.PORT || 3000;
const sessionsRouter = express.Router();

//app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/'))); 
// sessionsRouter.route('/')
// .get((req,res)=>{
//     res.send('hello sessions');
// });
// sessionsRouter.route('/1')
// .get((req,res)=>{
//     res.send('hello single sessions');
// });

app.use('/sessions', sessionsRouter);
app.set('views', './src/views');
app.set('view engine', 'ejs'); 

sessionsRouter.route('/').get((req,res)=>{
    res.render('sessions',{
        sessions: [
            {title: 'Session 1', description: 'this is sessino 1'},
            {title: 'session 2', description: 'this is session 2'},
            {title: 'session 3', description: 'this is session 3'},
            {title: 'session 4', description: 'this is session 4'},
        ]
    })
})

app.get('/',(req,res)=>{
    // res.send('Hello from my app'); 
    res.render('index', {title: 'Globomantics', data: ['a','b','c']});
});

app.listen(PORT, ()=>{
    //console.log('listening on port ' + chalk.green('3000'));
    // console.log(`listening on port ${chalk.green('3000')}`);
    debug(`listening to port ${chalk.green(PORT)}`);
});

// function sayHello(name){

//     console.log("Hello" + name);
// }
// sayHello("Nayan");