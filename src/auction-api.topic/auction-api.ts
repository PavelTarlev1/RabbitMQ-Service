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

export class SendDeckAuctionTopic extends Topic{
  messageType: SendDeckAuctionMessage;

  exchange = ExchangeHolding.auctionApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'SendDeckAuction-queue';
  routingKey = 'SendDeckAuction-key';
}

export class SendDeckAuctionMessage extends Messages {
  public arr: number[];
  constructor(arr:number[]) {
    super();
    this.arr = arr;
  }
}


