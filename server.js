var express = require('express');

var app =     express();

var mapRoutes = require('./routes/map.js');

app.set('view engine', 'ejs');


//Using routes
app.use(mapRoutes);

//===================================
//      Listening Routes
//===================================

app.listen(3000, function()
{
    
    console.log('Server started on Port 3000');

}          
);