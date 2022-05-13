import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { Messages } from "../abstract.messages/Messages";
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
export declare class BuyCardsRbMessage extends Messages {
    private userId;
    private cardId;
    constructor(userId: number, cardId: number);
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
export declare class CheckCreditsMessage extends Messages {
    cardId: number;
    credits: number;
    private userId;
    constructor(userId: number, cardId: number, credits: number);
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
export declare class AuctionedCardsToGameUserTopic extends Topic {
    messageType: AuctionedCardsToGameUserMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class AuctionedCardsToGameUserMessage extends Messages {
    userId: number;
    toAll: boolean;
    gameCards: AuctionedCard[];
    playerCards: AuctionedCard[];
    historyCards: HistoryCards[];
    constructor(userId: number, gameCards: AuctionedCard[], playerCards: AuctionedCard[], historyCards: HistoryCards[], toAll?: boolean);
}
export declare class AuctionedCard {
    cardId: number;
    goldCost: number;
    creditCost: number;
    bidderId?: number;
}
export declare class HistoryCards {
    cardId: number;
    wonByWhoId?: number;
    cost?: number;
    wonOn?: Date;
    wonWith: WonWith;
}
export declare enum WonWith {
    credits = 0,
    gold = 1
}
export declare class AuctionCardToUserServiceTopic extends Topic {
    messageType: AuctionCardToUserServiceMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class AuctionCardToUserServiceMessage extends Messages {
    userId: number;
    cardId: number;
    goldAmount: number;
    constructor(userId: number, cardId: number, goldAmount: number);
}
export declare class AuctionCardToAuctionServiceTopic extends Topic {
    messageType: AuctionCardToAuctionServiceMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class AuctionCardToAuctionServiceMessage extends Messages {
    userId: number;
    cardId: number;
    goldAmount: number;
    attack: number;
    health: number;
    constructor(userId: number, cardId: number, attack: number, health: number, goldAmount: number);
}
export declare class AuctionedCardRemoveFromUserDeckTopic extends Topic {
    messageType: AuctionCardToAuctionServiceMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class AuctionedCardRemoveFromUserDeckMessage extends Messages {
    userId: number;
    cardId: number;
    constructor(userId: number, cardId: number);
}
//# sourceMappingURL=auction-api.d.ts.map