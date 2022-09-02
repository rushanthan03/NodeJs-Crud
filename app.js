const router = require('./route');
const bodyParser = require("body-parser")
module.exports = function(app)
{
   // connect();
   app.use(bodyParser.json());
    router(app);
    
    //undifine function
    app.use((req, res)=>{
        res.status(404).json({message:'404 - Not Found'});
    })

    app.use((err,req,res)=>{
        console.log(err);
        res.status(500).json({message:'internal Server error',error:err});
    })
}