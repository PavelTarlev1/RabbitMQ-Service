import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";
import { MessageId } from "../abstract.messages/Messages";

export class WebsocketNotifyAllMessage extends MessageId {
  private event: string;
  public payload: any;
  public userId: number;

  constructor(userId: number, event: string, payload: any) {
    super(userId);
    this.userId = userId;
    this.event = event;
    this.payload = payload;
  }
}

export class WebsocketNotifyUserMessage  extends MessageId{
  private event: string;
  public payload: any;
  public userId: number;

  constructor(userId: number, event: string, payload: any) {
    super(userId);
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


