import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";
import { MessageId } from "../abstract.messages/Messages";


// Auth --->
export class SendDeckTopic extends Topic {
  messageType: SendDeckMessage;

  exchange = ExchangeHolding.deckUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'SendDeckTopic-queue';
  routingKey = 'SendDeckTopic-key';
}

export class SendDeckMessage extends MessageId {
  public userId: number;

  constructor(userId: number) {
    super(userId);
    this.userId = userId;
  }
}

// <--- Auth
export class ErrorDeckTopic extends Topic {
  messageType: ErrorDeckMessage;

  exchange = ExchangeHolding.authApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'ErrorDeckTopic-queue';
  routingKey = 'ErrorDeckTopic-key';
}

export class ErrorDeckMessage extends MessageId {

  constructor(id: number) {
    super(id);
    this.id = id;
  }
}
