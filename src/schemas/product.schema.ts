import Joi from "joi";


const id = Joi.string();
const name = Joi.string().min(3).max(80);
const price = Joi.number().integer().min(1).max(40000);
const size = Joi.string();
const sale = Joi.number().integer().min(1).max(40000);
const team = Joi.string().alphanum().min(3).max(20);
const players = Joi.string();
const season = Joi.string().min(4).max(12);
const stock = Joi.number().integer().min(1).max(3);
const technology = Joi.string();
const link = Joi.string().uri();
const img = Joi.string().uri()
const brand = Joi.string().alphanum().min(2).max(20);
const club = Joi.boolean();

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
    brand: brand.required(),
    club: club.required(),

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
    brand: brand,
    club: club
})

const getProductSchema = Joi.object({
    id: id.required()
})

export { createProductSchema, updateProductSchema, getProductSchema }