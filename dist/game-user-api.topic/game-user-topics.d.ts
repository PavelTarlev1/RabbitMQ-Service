import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageGameInfo, MessageId } from "../abstract.messages/Messages";
export declare class CreateUserDto extends MessageGameInfo {
    constructor(id: number, username: string);
}
export declare class CreateUserGameTopic extends Topic {
    messageType: CreateUserDto;
    s: any;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class PullUserTopic extends Topic {
    messageType: PullUserDto;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class PullUserDto extends MessageId {
    userId: number;
    constructor(userId: number);
}
export declare class SendUserTopic extends Topic {
    messageType: SendUserDto;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class SendUserDto extends MessageGameInfo {
    constructor(id: number, username: string);
}
export declare class DeleteUserTopic extends Topic {
    messageType: DeleteUserDto;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class DeleteUserDto extends MessageId {
    userId: number;
    constructor(userId: number);
}
export declare class ErrorUserTopic extends Topic {
    messageType: ErrorUserDto;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class ErrorUserDto extends MessageId {
    userId: number;
    constructor(userId: number);
}
//# sourceMappingURL=game-user-topics.d.ts.map