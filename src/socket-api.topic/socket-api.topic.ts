import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";
import { MessageId, Messages } from "../abstract.messages/Messages";

export class sendSocketData extends MessageId {
  constructor(id:number) {
    super(id);
    this.id = id;
  }
}


export class WebsocketNotifyUserMessage extends MessageId {
  private event: any;
  private payload: any;
  constructor(userId:number, event: any , payload:any) {
    super(userId);
    this.id = userId;
    this.event = event;
    this.payload = payload;
  }
}


export class WebsocketNotifyAllMessage extends MessageId {
  private event: any;
  private payload: any;
  constructor(userId:number, event: any , payload:any) {
    super(userId);
    this.event = event;
    this.payload = payload;
    this.id = userId;
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


