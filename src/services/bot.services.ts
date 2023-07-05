import qrcode from 'qrcode-terminal';
import { Client, LocalAuth, Message, NoAuth } from 'whatsapp-web.js';
import { JerseyModel } from '../interfaces/Jersey.model';

interface Order {
    id: number;
    jerseys: JerseyModel[];
    total: number;
}

class BotService {
    private static instance: BotService // Se agrega la instancia estatica del bot para implementar el patron sigleton
    private client: Client;
    private connected: boolean;
    private orderData: Order | null;


    constructor() {
        this.client = new Client({
            authStrategy: new NoAuth(),
            puppeteer: {
                args: ['--no-sandbox'],
            }
        })

        this.connected = false;
        this.orderData = null;
        this.initialize();
    }

    public static getInstance(): BotService {
        if (!BotService.instance) {
            BotService.instance = new BotService();
        }
        return BotService.instance;
    }

    private initialize(): void {
        this.client.on('qr', (qr: string) => {
            qrcode.generate(qr, { small: true });
        });

        this.client.on('ready', () => {
            console.log("Conexion exitosa");
            this.connected = true;
        });

        this.client.on('message', (message: Message) => {
            console.log('body', message.body);
            if (message.body.includes(`Mi orden`)) {
                if (this.orderData) {
                    this.hanlderOrderMessage(message, this.orderData);
                } else {
                    console.log("No se encontro la orden")
                }
            } else {
                console.log(`El mensaje no es`);
            }
        });

        this.client.initialize(); //Inicializa el cliente de whatsApp
    }
    public async isConnected(): Promise<boolean> {
        return this.connected;
    }

    private async hanlderOrderMessage(message: Message, data: Order): Promise<void> {
        const information = `Tu orden es la numero ${data.id} y los articulos son: ${data.jerseys.map(item => ` \n ⚽Jersey: 
        ${item.name} - Talla: ${item.size[0]} \n`)} 💵 Para un precio final de ${data.total}$ \n Por favor enviar el comprobante de pago.`

        message.reply(information);
    }

    public async SendOrder(data: Order): Promise<void> {
        this.orderData = data;
    }
}
export { BotService };