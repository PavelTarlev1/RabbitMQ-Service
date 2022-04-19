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
export declare class CheckGoldMessage extends Messages {
    cardId: number;
    goldGiving: number;
    CardCost: number;
    userId: number;
    constructor(userId: number, cardId: number, goldGiving: number, CardCost: number);
}
export declare class CheckCreditTopic extends Topic {
    messageType: CheckCreditsMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class CheckCreditsMessage extends MessageId {
    private cardId;
    private gold;
    private cost;
    constructor(id: number, cardId: number, gold: number, cost: number);
}
export declare class DeleteCardAuctionTopic extends Topic {
    messageType: DeleteCardAuctionMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class DeleteCardAuctionMessage extends Messages {
    cardsID: number[];
    constructor(cardsID: number[]);
}
export declare class CardAcquiredTopic extends Topic {
    messageType: CardAcquiredMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class CardAcquiredMessage extends Messages {
    cardId: number;
    userId: number;
    constructor(userId: number, cardId: number);
}
export declare class BidWithGoldTopic extends Topic {
    messageType: BidWithGoldRabbitMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class BidWithGoldRabbitMessage extends Messages {
    cardId: number;
    userId: number;
    amountGold: number;
    constructor(userId: number, cardId: number, amountGold: number);
}
//# sourceMappingURL=auction-api.d.ts.map