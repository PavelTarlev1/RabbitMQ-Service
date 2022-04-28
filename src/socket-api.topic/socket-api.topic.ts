import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";
import { MessageId, Messages } from "../abstract.messages/Messages";

export class WebsocketNotifyAllMessage extends Messages {
  public event: string;
  public payload: any;

  constructor(event: string, payload: any) {
    super();
    this.event = event;
    this.payload = payload;
  }
}

export class WebsocketNotifyUserMessage  extends Messages{
  public event: string;
  public payload: any;
  public userId: number;

  constructor(userId: number, event: string, payload: any) {
    super();
    this.userId = userId;
    this.event = event;
    this.payload = payload;
  }
}

export class WebsocketNotifyUserTopic extends Topic {
  messageType: WebsocketNotifyUserMessage;

  exchange = ExchangeHolding.socketManagerExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'WebsocketNotifyUser-queue';
  routingKey = 'WebsocketNotifyUser-key';
}


export class WebsocketNotifyAllTopic extends Topic {
  messageType: WebsocketNotifyAllMessage;

  exchange = ExchangeHolding.socketManagerExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'WebsocketNotifyAllTopic-queue';
  routingKey = 'WebsocketNotifyAllTopic-key';
}
