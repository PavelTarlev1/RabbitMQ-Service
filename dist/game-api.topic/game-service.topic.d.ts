import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageId } from "../abstract.messages/Messages";
export declare class LevelUpRBMessage extends MessageId {
    constructor(id: number);
}
export declare class LevelUpTopic extends Topic {
    messageType: LevelUpRBMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
//# sourceMappingURL=game-service.topic.d.ts.map