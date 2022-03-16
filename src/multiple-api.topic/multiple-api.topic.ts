import { MessageGameInfo, MessageId } from "../abstract.messages/Messages";
import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";


export class deleteAllCredentials extends MessageId {
  constructor(id:number) {
    super(id);
    this.id = id;
  }
}

export class DeleteAllCredentialsTopic extends Topic {
  messageType: deleteAllCredentials;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'deleteAllCredentialsTopic-queue';
  routingKey = 'deleteAllCredentialsTopic';
  private queueAttach: string;

  constructor(queueAttach: string) {
    super();
    this.queueAttach = queueAttach;
    this.queue = `deleteAllCredentialsTopic${this.queueAttach}`
  }

}

export class createAllCredentials extends MessageId {
  constructor(id:number) {
    super(id);
    this.id = id;
  }
}

export class CreateAllCredentialsTopic extends Topic {
  messageType: deleteAllCredentials;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'createAllCredentialsTopic-queue';
  routingKey = 'createAllCredentialsTopic';
  private queueAttach: string;

  constructor(queueAttach: string) {
    super();
    this.queueAttach = queueAttach;
    this.queue = `createAllCredentialsTopic${this.queueAttach}`
  }

}
