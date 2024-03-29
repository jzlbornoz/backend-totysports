"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string();
const name = joi_1.default.string().min(3).max(80);
const price = joi_1.default.number().integer().min(1).max(40000);
const size = joi_1.default.string();
const sale = joi_1.default.number().integer().min(1).max(40000);
const team = joi_1.default.string().alphanum().min(3).max(20);
const players = joi_1.default.string();
const season = joi_1.default.string().min(4).max(12);
const stock = joi_1.default.number().integer().min(1).max(3);
const technology = joi_1.default.string();
const link = joi_1.default.string().uri();
const img = joi_1.default.string().uri();
const brand = joi_1.default.string().alphanum().min(2).max(20);
const club = joi_1.default.boolean();
const createProductSchema = joi_1.default.object({
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
});
exports.createProductSchema = createProductSchema;
const updateProductSchema = joi_1.default.object({
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
});
exports.updateProductSchema = updateProductSchema;
const getProductSchema = joi_1.default.object({
    id: id.required()
});
exports.getProductSchema = getProductSchema;
