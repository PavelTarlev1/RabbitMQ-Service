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

