import { MessageGameInfo, MessageId } from "../abstract.messages/Messages";
import { Topic } from "../abstract.topic";
import { ExchangeHolding, ExchangeType } from "../providers/providers";

export class CreateUserDto extends MessageGameInfo {
  constructor(id:number,username: string) {
    super(id, username);
    this.id =id;
    this.username = username;

  }
}
// CreationDto
export class CreateUserGameTopic extends Topic {
  messageType: CreateUserDto;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'createGameUserInfo-queue';
  routingKey = 'createGameUserInfo-key';
}

export class deleteAllCredentials extends MessageId {
  constructor(id:number) {
    super(id);
    this.id = id;
  }
}

export class deleteAllCredentialsTopic extends Topic {
  messageType: deleteAllCredentials;

  exchange = ExchangeHolding.gameUserApiExchange;
  exchangeType = ExchangeType.Topic;
  queue = 'deleteAllCredentialsTopic-queue';
  routingKey = 'deleteAllCredentialsTopic';

}
