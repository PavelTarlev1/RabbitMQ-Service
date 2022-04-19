import {Injectable} from "@nestjs/common";
import {AmqpConnection} from "@golevelup/nestjs-rabbitmq";
import {ExchangeType} from "./providers/providers";
import {Messages} from "./abstract.messages/Messages";


export abstract class Topic {
    abstract messageType: Messages
    abstract exchange: string;
    abstract exchangeType: ExchangeType;
    abstract routingKey: string;
    abstract queue: string;
}

@Injectable()
export class RabbitMQ {
    constructor(
        private readonly amqpConnections: AmqpConnection,
    ) {
    }
    public async sendMessage<T extends Topic>(topic: T, msg: T['messageType']): Promise<void>{
        console.log(topic);
        await this.amqpConnections.publish(topic.exchange, topic.routingKey, msg);
    }


}




