const swag = require('../models/swag')

module.exports = {
    search: (req, res, next) => {
        const {category} = req.query
        let filtered = swag.filter(val => val.category === category)
        if(filtered){
            res.status(200).send(filtered)
        }
        else{
            res.status(200).send(swag)
        }
    }
}