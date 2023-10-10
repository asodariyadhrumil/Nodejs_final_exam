const Joi = require("joi");

// create cart 
const createCart = {
    body : Joi.object().keys({
        quantity : Joi.number().integer().required(),
    })
};

module.exports = {
    createCart
}