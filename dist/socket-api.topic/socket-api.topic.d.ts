import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageId } from "../abstract.messages/Messages";
import { FileSendMessage } from "../file-manager.topic/file-manager.topic";
export declare class sendSocketData extends MessageId {
    constructor(id: number);
}
export declare class WebsocketNotifyUserMessage extends MessageId {
    private event;
    private payload;
    constructor(id: number, event: any, payload: any);
}
export declare class WebsocketNotifyAllMessage extends MessageId {
    private event;
    private payload;
    constructor(id: number, event: any, payload: any);
}
export declare class WebsocketNotifyUser extends Topic {
    messageType: FileSendMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class WebsocketNotifyAllTopic extends Topic {
    messageType: FileSendMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
//# sourceMappingURL=socket-api.topic.d.ts.map