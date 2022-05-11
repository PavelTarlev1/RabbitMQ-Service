import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";
import { MessageId, Messages } from "../abstract.messages/Messages";
import exp from "constants";


// Auth --->
export class SendDeckAuctionGenTopic extends Topic {
  messageType: SendDeckAuctionGenMessage;

  exchange = ExchangeHolding.deckUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'SendGenerate-queue';
  routingKey = 'SendGenerateTopic-key';
}

export class SendDeckAuctionGenMessage extends Messages {

}

export class SendDeckAuctionTopic extends Topic {
  messageType: SendDeckAuctionMessage;

  exchange = ExchangeHolding.auctionApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'SendDeckAuction-queue';
  routingKey = 'SendDeckAuction-key';
}

export class SendDeckAuctionMessage extends Messages {
  public arr: number[];
  constructor(arr: number[]) {
    super();
    this.arr = arr;
  }
}

export class BuyCardsTopic extends Topic {
  messageType: BuyCardsRbMessage;

  exchange = ExchangeHolding.deckUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'BuyCardsTopic-queue';
  routingKey = 'BuyCardsTopic-key';
}

export class BuyCardsRbMessage extends Messages {
  private userId: number;
  private cardId: number;
  constructor(userId: number, cardId:number) {
    super();
    this.userId = userId;
    this.cardId = cardId;
  }
}


export class CheckGoldTopic extends Topic {
  messageType: CheckGoldMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'CheckGoldTopic-queue';
  routingKey = 'CheckGoldTopic-key';


}

export class CheckGoldMessage extends Messages {

  public cardId: number;
  public goldGiving: number;
  public CardCost: number;
  public userId: number;

  constructor(userId: number, cardId: number, goldGiving: number, CardCost:number) {
    super();
    this.userId = userId;
    this.cardId = cardId;
    this.goldGiving = goldGiving;
    this.CardCost = CardCost;
  }
}


export class CheckCreditTopic extends Topic {
  messageType: CheckCreditsMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'CheckCreditTopic-queue';
  routingKey = 'CheckCreditTopicc-key';
}

export class CheckCreditsMessage extends Messages {
  public cardId: number;
  public credits: number;
  private userId: number;

  constructor(userId: number, cardId: number, credits: number) {
    super();
    this.userId = userId;
    this.cardId = cardId;
    this.credits = credits;
  }
}

export class DeleteCardAuctionTopic extends Topic {
  messageType: DeleteCardAuctionMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'deleteCardAuctionTopic-queue';
  routingKey = 'deleteCardAuctionTopic-key';
}

export class DeleteCardAuctionMessage extends Messages{
  public cardsID: number[];
  constructor(cardsID:number[]) {
    super();
    this.cardsID = cardsID;
  }
}

export class CardAcquiredTopic extends Topic {
  messageType: CardAcquiredMessage;

  exchange = ExchangeHolding.deckUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'CardAcquiredTopic-queue';
  routingKey = 'CardAcquiredTopic-key';

}

export class CardAcquiredMessage extends Messages{
  public cardId: number;
  public userId: number;
  constructor(userId:number, cardId:number) {
    super();
    this.userId = userId;
    this.cardId = cardId;
  }
}

export class BidWithGoldTopic extends Topic {
  messageType: BidWithGoldRabbitMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'BidWithGoldTopic-queue';
  routingKey = 'BidWithGoldTopic-key';


}
export class BidWithGoldRabbitMessage extends Messages{
  public cardId: number;
  public userId: number;
  public amountGold:number;
  constructor(userId:number, cardId:number, amountGold:number) {
    super();
    this.userId = userId;
    this.cardId = cardId;
    this.amountGold = amountGold;
  }
}

export class AuctionedCardsToGameUserTopic extends Topic {
  messageType: AuctionedCardsToGameUserMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'AuctionedCardsToGameUserTopic-queue';
  routingKey = 'AuctionedCardsToGameUserTopic-key';

}






export class AuctionedCardsToGameUserMessage extends Messages {
  public userId: number;
  public toAll: boolean;
  public gameCards: AuctionedCards[];
  public playerCards: AuctionedCards[];
  public historyCards:HistoryCards[];


  constructor(userId:number,gameCards:AuctionedCards[],
    playerCards:AuctionedCards[],
    historyCards: HistoryCards[] ,toAll?: boolean) {
    super();
    this.userId = userId;
    this.gameCards = gameCards;
    this.playerCards = playerCards;
    this.historyCards = historyCards;
    this.toAll = toAll;

  }
}

export class AuctionedCards {
  cardId:number;
  fromPlayer:boolean;
  creditCost:number;
  userIdCard:number;
}

export class HistoryCards {
  cardId:number;
  wonByWhoId:number;
  cost:number;
  wonOn:string;
  wonWith:WonWith
}
export enum WonWith{
  credits,
  gold,
}
