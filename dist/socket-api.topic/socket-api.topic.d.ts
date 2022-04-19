import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageId, Messages } from "../abstract.messages/Messages";
export declare class WebsocketNotifyAllMessage extends MessageId {
    private event;
    payload: any;
    userId: number;
    constructor(userId: number, event: string, payload: any);
}
export declare class WebsocketNotifyUserMessage extends Messages {
    private event;
    payload: any;
    userId: number;
    constructor(userId: number, event: string, payload: any);
}
export declare class WebsocketNotifyUserTopic extends Topic {
    messageType: WebsocketNotifyUserMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class WebsocketNotifyAllTopic extends Topic {
    messageType: WebsocketNotifyAllMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
//# sourceMappingURL=socket-api.topic.d.ts.map