/// <reference types="node" />
import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageId } from "../abstract.messages/Messages";
export declare class FileSendMessage extends MessageId {
    photo: Buffer;
    constructor(id: number, photo: Buffer);
}
export declare class SendFileTopic extends Topic {
    messageType: FileSendMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class ResponseSuccessMessage extends MessageId {
    loaded: boolean;
    constructor(id: number, loaded: boolean);
}
export declare class ResponseFileTopic extends Topic {
    messageType: ResponseSuccessMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class DeleteFileMessage extends MessageId {
    constructor(id: number);
}
export declare class DeleteFileTopic extends Topic {
    messageType: DeleteFileMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class ErrorFileMessage extends MessageId {
    private event;
    payload: any;
    userId: number;
    constructor(userId: number, event: string, payload: any);
}
export declare class ErrorFileTopic extends Topic {
    messageType: ErrorFileMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
//# sourceMappingURL=file-manager.topic.d.ts.map