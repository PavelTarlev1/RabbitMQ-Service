import {Topic} from "../abstract.topic";
import {ExchangeHolding, ExchangeType} from "../providers/providers";
import {MessageId} from "../abstract.messages/Messages";


export class SendDeckMessage extends MessageId {
  public userId: number;
  constructor(userId: number) {
    super(userId);
    this.userId = userId;
  }
}

// <--- Auth
export class SendDeckTopic extends Topic {
  messageType: SendDeckMessage;

  exchange = ExchangeHolding.fileManagerExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'SendDeckTopic-queue';
  routingKey = 'SendDeckTopic-key';
}
