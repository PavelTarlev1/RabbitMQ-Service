import { MessageGameInfo, MessageId } from "../abstract.messages/Messages";
import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
export declare class CreateUserDto extends MessageGameInfo {
    constructor(id: number, username: string);
}
export declare class CreateUserGameTopic extends Topic {
    messageType: CreateUserDto;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class deleteAllCredentials extends MessageId {
    constructor(id: number);
}
export declare class deleteAllCredentialsTopic extends Topic {
    messageType: deleteAllCredentials;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
//# sourceMappingURL=multiple-api.topic.d.ts.map