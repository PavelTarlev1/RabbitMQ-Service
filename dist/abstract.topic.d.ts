import { AmqpConnection } from "@golevelup/nestjs-rabbitmq";
import { ExchangeType } from "./providers/providers";
import { Messages } from "./abstract.messages/Messages";
export declare abstract class Topic {
    abstract messageType: Messages;
    abstract exchange: string;
    abstract exchangeType: ExchangeType;
    abstract routingKey: string;
    abstract queue: string;
}
export declare class RabbitMQ {
    private readonly amqpConnections;
    constructor(amqpConnections: AmqpConnection);
    sendMessage<T extends Topic>(topic: T, msg: T['messageType']): Promise<void>;
}
//# sourceMappingURL=abstract.topic.d.ts.map