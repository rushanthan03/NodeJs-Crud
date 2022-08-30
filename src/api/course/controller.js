const service = require('./service');

exports.getAllCources = (req, res)=> {
    try{
        const cources = service.findAllCources();
        res.status(200).json(cources);
    }
    catch(error)
    {
         res.status(500).json({message:'500 - Internal Server Error'});
    }
}