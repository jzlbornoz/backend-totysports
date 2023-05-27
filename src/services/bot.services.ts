import qrcode from 'qrcode-terminal';
import { Client, LocalAuth, Message } from 'whatsapp-web.js';

interface Order {
    id: number;
    jerseys: number;
}

class BotService {
    private client: Client;
    private connected: boolean;

    constructor() {
        this.client = new Client({
            authStrategy: new LocalAuth()
        })

        this.connected = false;
    }
    private async initialize(information: string): Promise<void> {
        this.client.on('qr', (qr: string) => {
            qrcode.generate(qr, { small: true });
        });

        this.client.on('ready', () => {
            console.log("Conexion exitosa");
            this.connected = true;
        });

        this.client.on('message', (message: Message) => {
            console.log('body', message.body);
            if (message.body === 'orden') {
                message.reply(information);
            } else {
                console.log(`log ${information}`);
            }
        });

        this.client.initialize(); //Inicializa el cliente de whatsApp
    }
    public async isConnected(): Promise<boolean> {
        return this.connected;
    }

    public async SendOrder(data: Order): Promise<void> {
        this.initialize(`Tu orden es la numero ${data.id} y los articulos son ${data.jerseys}`);
    }
}
export { BotService };