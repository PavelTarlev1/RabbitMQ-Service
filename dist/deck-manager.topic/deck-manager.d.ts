import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageId } from "../abstract.messages/Messages";
export declare class SendDeckMessage extends MessageId {
    userId: number;
    constructor(userId: number);
}
export declare class SendDeckTopic extends Topic {
    messageType: SendDeckMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
//# sourceMappingURL=deck-manager.d.ts.map