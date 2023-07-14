"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotService = void 0;
const qrcode_terminal_1 = __importDefault(require("qrcode-terminal"));
const whatsapp_web_js_1 = require("whatsapp-web.js");
class BotService {
    static instance; // Se agrega la instancia estatica del bot para implementar el patron sigleton
    client;
    connected;
    orderData;
    constructor() {
        this.client = new whatsapp_web_js_1.Client({
            authStrategy: new whatsapp_web_js_1.NoAuth(),
            puppeteer: {
                args: ['--no-sandbox'],
            }
        });
        this.connected = false;
        this.orderData = null;
        this.initialize();
    }
    static getInstance() {
        if (!BotService.instance) {
            BotService.instance = new BotService();
        }
        return BotService.instance;
    }
    initialize() {
        this.client.on('qr', (qr) => {
            qrcode_terminal_1.default.generate(qr, { small: true });
        });
        this.client.on('ready', () => {
            console.log("Conexion exitosa");
            this.connected = true;
        });
        this.client.on('message', (message) => {
            console.log('body', message.body);
            if (message.body.includes(`Mi orden`)) {
                if (this.orderData) {
                    this.hanlderOrderMessage(message, this.orderData);
                }
                else {
                    console.log("No se encontro la orden");
                }
            }
            else {
                console.log(`El mensaje no es`);
            }
        });
        this.client.initialize(); //Inicializa el cliente de whatsApp
    }
    async isConnected() {
        return this.connected;
    }
    async hanlderOrderMessage(message, data) {
        const information = `Tu orden es la numero ${data.id} y los articulos son: ${data.jerseys.map(item => ` \n ⚽Jersey: 
        ${item.name} - Talla: ${item.size[0]} \n`)} 💵 Para un precio final de ${data.total}$ \n Por favor enviar el comprobante de pago.`;
        message.reply(information);
    }
    async SendOrder(data) {
        this.orderData = data;
    }
}
exports.BotService = BotService;
