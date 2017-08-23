var router = require('express').Router();




router.get('/map', function(req ,res )
{
    console.log('map routes called');

res.render('../views/map.ejs');

}          
);





module.exports = router;