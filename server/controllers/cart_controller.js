const swag = require('../models/swag')

module.exports = {
    add: (req, res, next) => {
            const index = req.session.user.cart.findIndex( swag => swag.id === req.query.id)
            if(index === -1){
                const selectedSwag = swag.find(swag => swag.id == req.query.id)
                req.session.user.cart.push(selectedSwag)
                req.session.user.total += selectedSwag.price
            }
            res.status(200).send(req.session.user)
    },

    delete: (req, res, next) => {
        const index = cart.findIndex( swag => swag.id === req.query.id)
            if(index !== -1){
                const selectedSwag = swag.find(swag => swag.id == id)
                cart.splice(index, 1)
                req.session.user.total -= selectedSwag.price
            }
        res.status(200).send(req.session.user)
    },

    checkout: (req, res, next) => {
        req.session.user.total = 0
        req.session.user.cart = []
        res.status(200).send(req.session.user)
    }

}