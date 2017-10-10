var router = require('express').Router();




router.get('/map', function(req ,res )
{


res.render('../views/map.ejs');

}          
);





module.exports = router;