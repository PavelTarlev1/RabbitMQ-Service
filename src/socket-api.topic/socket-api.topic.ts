import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";
import { MessageId, Messages } from "../abstract.messages/Messages";
import { FileSendMessage } from "../file-manager.topic/file-manager.topic";

export class sendSocketData extends MessageId {
  constructor(id:number) {
    super(id);
    this.id = id;
  }
}


export class WebsocketNotifyUserMessage extends MessageId {
  private event: any;
  private payload: any;
  constructor(id:number, event: any , payload:any) {
    super(id);
    this.id = id;
    this.event = event;
    this.payload = payload;
  }
}


export class WebsocketNotifyAllMessage extends MessageId {
  private event: any;
  private payload: any;
  constructor(id:number, event: any , payload:any) {
    super(id);
    this.event = event;
    this.payload = payload;
    this.id = id;
    }
}

export class WebsocketNotifyUser extends Topic {
  messageType: FileSendMessage;

  exchange = ExchangeHolding.fileManagerExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'WebsocketNotifyUser-queue';
  routingKey = 'WebsocketNotifyUser-key';
}


export class WebsocketNotifyAllTopic extends Topic {
  messageType: FileSendMessage;

  exchange = ExchangeHolding.fileManagerExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'WebsocketNotifyAllTopic-queue';
  routingKey = 'WebsocketNotifyAllTopic-key';
}


