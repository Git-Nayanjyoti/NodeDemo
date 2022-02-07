const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

//app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/'))); 

app.set('views', './src/views');
app.set('view engine', 'ejs'); 
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