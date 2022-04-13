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
export declare class CheckGoldTopic extends Topic {
    messageType: CheckGoldMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class CheckGoldMessage extends MessageId {
    private gold;
    constructor(id: number, gold: number);
}
export declare class CheckCreditTopic extends Topic {
    messageType: CheckCreditsMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class CheckCreditsMessage extends MessageId {
    private credits;
    constructor(id: number, credits: number);
}
//# sourceMappingURL=auction-api.d.ts.map