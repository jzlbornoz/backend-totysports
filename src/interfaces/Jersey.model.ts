import { Optional } from "sequelize";
import { Product } from "../db/models/product.model";

export interface JerseyModel extends Optional<Product, 'id'> {
  name: string;
  size: string;
  price: number;
  sale: number;
  team: string;
  players: string | null;
  season: string;
  stock: number;
  technology: string;
  link: string;
  img: string;
  brand: string;
}
