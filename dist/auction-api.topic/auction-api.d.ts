import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageId, Messages } from "../abstract.messages/Messages";
export declare class SendDeckAuctionGenTopic extends Topic {
    messageType: SendDeckAuctionGenMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class SendDeckAuctionGenMessage extends Messages {
}
export declare class SendDeckAuctionTopic extends Topic {
    messageType: SendDeckAuctionMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class SendDeckAuctionMessage extends Messages {
    arr: number[];
    constructor(arr: number[]);
}
export declare class BuyCardsTopic extends Topic {
    messageType: BuyCardsRbMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class BuyCardsRbMessage extends MessageId {
    constructor(id: number);
}
//# sourceMappingURL=auction-api.d.ts.map