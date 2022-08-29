const router = require('./route');
module.exports = function(app)
{
    router(app);
    
    //define function
    app.use('/get',(req, res) =>{
        res.status(200).send('succesfully');
    })
    app.use('/put',(req,res) => {
        res.status(200).send('changed req');
    })
    app.use('/post',(req,res) => {
        res.status(200).send('hello');
    })
    //undifine function
    app.use((req, res)=>{
        res.status(404).json({message:'404 - Not Found'});
    })

    app.use((err,req,res)=>{
        res.status(500).json({message:'internal Server error',error:err});
    })
}