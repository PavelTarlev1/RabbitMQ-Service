import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";
import { MessageId, Messages } from "../abstract.messages/Messages";


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

export class BuyCardsRbMessage extends MessageId {
  constructor(id: number) {
    super(id);
    this.id = id;

  }
}


export class CheckGoldTopic extends Topic {
  messageType: CheckGoldMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'CheckGoldTopic-queue';
  routingKey = 'CheckGoldTopic-key';


}

export class CheckGoldMessage extends MessageId {
  private gold: number;
  private cardId: number;
  private cost: number;

  constructor(id: number, cardId: number, gold: number, cost:number) {
    super(id);
    this.cardId = cardId;
    this.id = id;
    this.gold = gold;
    this.cost = cost;
  }
}


export class CheckCreditTopic extends Topic {
  messageType: CheckCreditsMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'CheckCreditTopic-queue';
  routingKey = 'CheckCreditTopicc-key';
}

export class CheckCreditsMessage extends MessageId {
  private cardId: number;
  private gold: number;
  private cost: number;

  constructor(id: number, cardId: number, gold: number, cost:number) {
    super(id);
    this.id = id;
    this.cardId = cardId;
    this.gold = gold;
    this.cost = cost;
  }
}

export class DeleteCardAuctionTopic extends Topic {
  messageType: CheckCreditsMessage;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'deleteCardAuctionTopic-queue';
  routingKey = 'deleteCardAuctionTopic-key';
}

export class DeleteCardAuctionMessage extends MessageId{
  constructor(id: number) {
    super(id);
    this.id = id;
  }

}
