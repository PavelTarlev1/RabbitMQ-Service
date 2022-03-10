import { MessageId } from "../abstract.messages/Messages";
import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
export declare class deleteAllCredentials extends MessageId {
    constructor(id: number);
}
export declare class DeleteAllCredentialsTopic extends Topic {
    messageType: deleteAllCredentials;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
    private queueAttach;
    constructor(queueAttach: string);
}
//# sourceMappingURL=multiple-api.topic.d.ts.map