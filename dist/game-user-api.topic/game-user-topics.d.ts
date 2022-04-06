import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageGameInfo, MessageId } from "../abstract.messages/Messages";
export declare class CreateUserMessage extends MessageGameInfo {
    constructor(id: number, username: string);
}
export declare class CreateUserGameTopic extends Topic {
    messageType: CreateUserMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class PullUserTopic extends Topic {
    messageType: PullUserMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class PullUserMessage extends MessageId {
    userId: number;
    constructor(userId: number);
}
export declare class SendUserTopic extends Topic {
    messageType: SendUserMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class SendUserMessage extends MessageGameInfo {
    constructor(id: number, username: string);
}
export declare class DeleteUserTopic extends Topic {
    messageType: DeleteUserMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class DeleteUserMessage extends MessageId {
    userId: number;
    constructor(userId: number);
}
export declare class ErrorUserTopic extends Topic {
    messageType: ErrorUserMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class ErrorUserMessage extends MessageId {
    constructor(id: number);
}
//# sourceMappingURL=game-user-topics.d.ts.map