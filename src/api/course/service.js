
const data = require('./data');

exports.findAllCources = (req, res)=> {
    try{
        const cources = data.findCourcesDetails();
        return cources;
    }
    catch(error)
    {
         throw new Error(error);
    }
}
