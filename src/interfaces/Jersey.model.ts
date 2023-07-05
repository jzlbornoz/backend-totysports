export interface JerseyModel {
    id: number;
    name: string;
    size: string[];
    price: number;
    sale: number;
    team: string;
    players?: string[];
    season: string | string[];
    stock: number;
    technology: string[];
    link: string;
    img: string[];
    arrive: boolean;
    brand: string;
  }