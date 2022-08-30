const router = require('./route');
const {connect}= require('./src/db/mongo')
module.exports = function(app)
{
    connect();
    router(app);
    
    //undifine function
    app.use((req, res)=>{
        res.status(404).json({message:'404 - Not Found'});
    })

    app.use((err,req,res)=>{
        res.status(500).json({message:'internal Server error',error:err});
    })
}