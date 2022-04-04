import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageId } from "../abstract.messages/Messages";
export declare class sendSocketData extends MessageId {
    constructor(id: number);
}
export declare class WebsocketNotifyAllMessage extends MessageId {
    private event;
    payload: any;
    userId: number;
    constructor(userId: number, event: string, payload: any);
}
declare class WebsocketNotifyUserMessage extends MessageId {
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
export {};
//# sourceMappingURL=socket-api.topic.d.ts.map