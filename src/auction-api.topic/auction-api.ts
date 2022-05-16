import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";
import {  Messages } from "../abstract.messages/Messages";
import { Type } from "class-transformer";


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


export class BuyCardTopic extends Topic {
  messageType: BuyCardTopicMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'buyCardTopic-queue';
  routingKey = 'buyCardTopic-key';
}

export class BuyCardTopicMessage extends Messages {
  public cardId: number;
  public credits: number;
  public userId: number;

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


  @Type(() => AuctionedCard)
  public auctionedCards: AuctionedCard;
}

export class AuctionedCard {

  public cards:GetNameCard[];

  public usedFor:UsedFor | (boolean | undefined);

  public userId:number;

  public toAll:boolean;

}


export class GetNameCard {
  cardId:number;

  bidder:number;
}
export enum UsedFor {
  gameCards = 0,
  userCards,
  historyCards,
}



export class AuctionCardToUserServiceTopic extends Topic {
  messageType: AuctionCardToUserServiceMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'AuctionCardToUserServiceTopic-queue';
  routingKey = 'AuctionCardToUserServiceTopic-key';

}

export class AuctionCardToUserServiceMessage extends Messages {
  public userId: number;
  public cardId: number;
  public goldAmount: number;
  constructor(userId:number, cardId:number, goldAmount:number) {
    super();
    this.userId = userId;
    this.cardId = cardId;
    this.goldAmount = goldAmount;
  }
}

export class AuctionCardToAuctionServiceTopic extends Topic{
  messageType: AuctionCardToAuctionServiceMessage;

  exchange = ExchangeHolding.auctionApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'AuctionCardToAuctionServiceTopic-queue';
  routingKey = 'AuctionCardToAuctionServiceTopic-key';

}


export class AuctionCardToAuctionServiceMessage extends Messages {
  public userId: number;
  public cardId: number;
  public goldAmount: number;
  public attack: number;
  public health: number;
  constructor(userId:number, cardId:number, attack:number, health:number,goldAmount:number) {
    super();
    this.userId = userId;
    this.cardId = cardId;
    this.attack = attack;
    this.health = health;
    this.goldAmount = goldAmount;
  }
}

export class AuctionedCardRemoveFromUserDeckTopic extends Topic{
  messageType: AuctionedCardRemoveFromUserDeckMessage;

  exchange = ExchangeHolding.deckUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'auctionedCardRemoveFromUserDeckTopic-queue';
  routingKey = 'auctionedCardRemoveFromUserDeckTopic-key';

}


export class AuctionedCardRemoveFromUserDeckMessage extends Messages {
  public userId: number;
  public cardId: number;

  constructor(userId:number, cardId:number,) {
    super();
    this.userId = userId;
    this.cardId = cardId;
  }
}

export class GoldRefundTopic extends Topic {
  messageType: GoldRefundMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'GoldRefundTopic-queue';
  routingKey = 'GoldRefundTopic-key';
}

export class GoldRefundMessage extends Messages {
  public userId: number;
  public goldAmount: number;

  constructor(userId:number, goldAmount:number,) {
    super();
    this.userId = userId;
    this.goldAmount = goldAmount;
  }
}

