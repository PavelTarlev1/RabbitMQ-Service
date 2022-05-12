import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { MessageGameInfo, MessageId, Messages } from "../abstract.messages/Messages";
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
export declare class ExpUserMessage extends MessageId {
    exp: number;
    constructor(id: number, exp: number);
}
export declare class ExperianceTopic extends Topic {
    messageType: ExpUserMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class BitCardResponseTopic extends Topic {
    messageType: BitCardResponseMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class BitCardResponseMessage extends Messages {
    userId: number;
    cardId: number;
    goldAmount: number;
    constructor(userId: number, cardId: number, goldAmount: number);
}
export declare class BuyCardResponseTopic extends Topic {
    messageType: BuyCardResponseMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class BuyCardResponseMessage extends Messages {
    userId: number;
    cardId: number;
    constructor(userId: number, cardId: number);
}
export declare class AuctionGetCardInfoTopic extends Topic {
    messageType: AuctionGetCardInfoMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class AuctionGetCardInfoMessage extends Messages {
    userId: number;
    toAll: boolean;
    gameCards: ResultAuctionedCards[];
    playerCards: ResultPlayerCards[];
    historyCards: ResultHistoryCards[];
    constructor(userId: number, gameCards: ResultAuctionedCards[], playerCards: ResultPlayerCards[], historyCards: ResultHistoryCards[], toAll: boolean);
}
export declare class ResultAuctionedCards {
    cardId: number;
    goldCost: number;
    creditCost: number;
    bidderName?: string;
}
export declare class ResultPlayerCards {
    cardId: number;
    goldCost: number;
    creditCost: number;
    bidderName?: string;
}
export declare class ResultHistoryCards {
    cardId: number;
    wonBy: string;
    wonOn: string;
}
export declare class AuctionCardToCardServiceTopic extends Topic {
    messageType: AuctionCardToCardServiceMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class AuctionCardToCardServiceMessage extends Messages {
    userId: number;
    cardId: number;
    constructor(userId: number, cardId: number);
}
//# sourceMappingURL=game-user-topics.d.ts.map