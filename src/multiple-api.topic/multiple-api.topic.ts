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
  public routingKey: string;
  constructor(routingKeyAttach: string) {
    super();
    this.routingKeyAttach = routingKeyAttach;
    this.routingKey = `deleteAllCredentialsTopic${this.routingKeyAttach}`;
  }
  public routingKeyAttach: string;

}

