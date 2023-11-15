const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression')
var path = require('path');
var routes = require('./api/route/index');




const app = express();

const port = process.env.PORT || 3000 ;
const host = process.env.HOST || 'localhost';
// set up domain 
app.set('port', port);
app.set('host', host);

// setup network security 
app.use(cors());
app.options('*', cors());


// setup compression for increased performance
app.use(compression());

// limit date to post in json 
app.use(bodyParser.json({limit: '50mb'}));

//set up static files
app.use(express.static('./build'));
// app.engine('ejs',require('ejs-locals'));
// app.set('view engine', 'ejs');
// app.set('views',path.join(__dirname,'views'));



app.listen(app.get('port'), app.get('host'),()=>{
    console.log(`hello Server is running at http://${app.get('host')}:${app.get('port')}`)
})

// app.use(limitConcurrentSessions)
app.use('/api',routes);

