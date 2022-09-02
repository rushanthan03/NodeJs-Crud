
const data = require('./data');

exports.findAllCources = async (req, res)=> {
    try{
        const cources = await data.findCourcesDetails();
        console.log(cources);
        return cources;
    }
    catch(error)
    {
         throw new Error(error);
    }
}
