import Joi, { string } from "joi";


const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);
const price = Joi.number().integer().min(1).max(40000);
const size = Joi.string().min(1).max(2);
const sale = Joi.number().integer().min(1).max(40000);
const team = Joi.string().alphanum().min(3).max(20);
const players = Joi.array().items(Joi.string());
const season = Joi.array().items(Joi.string()) || Joi.string().alphanum().min(4).max(12);
const stock = Joi.number().integer().min(1).max(3);
const technology = Joi.array().items(Joi.string());
const link = Joi.string().uri();
const img = Joi.array().items(Joi.string().uri())
const brand = Joi.string().alphanum().min(2).max(20);

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    size: size.required(),
    sale: sale.required(),
    team: team.required(),
    players: players,
    season: season.required(),
    stock: stock.required(),
    technology: technology.required(),
    link: link.required(),
    img: img.required(),
    brand: brand.required()

})

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    size: size,
    sale: sale,
    team: team,
    players: players,
    season: season,
    stock: stock,
    technology: technology,
    link: link,
    img: img,
    brand: brand
})

const getProductSchema = Joi.object({
    id: id.required()
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }