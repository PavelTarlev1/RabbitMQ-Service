import { Topic} from "../abstract.topic";
import { ExchangeHolding, ExchangeType} from "../providers/providers";
import {MessageGameInfo, MessageId} from "../abstract.messages/Messages";



// Creation --- >
// PullData --- >
// SendDto < ---
// Delete GameInfo --- >
// Delete AuthUser --- >

// Creation --- >
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


// PullData --- >
export class PullUserTopic extends Topic {
    messageType: PullUserDto;

    exchange = ExchangeHolding.gameUserApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'findUserInfo-queue';
    routingKey = 'findUserInfo-key';
}
// PullDataDto --- >
export class PullUserDto extends MessageId {
    public userId: number;
    constructor(userId: number) {
        super(userId);
        this.userId = userId;
    }
}


// SendUser <---
export class SendUserTopic extends Topic {
    messageType:SendUserDto ;

    exchange = ExchangeHolding.gameUserApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'sendUserInfo-queue';
    routingKey = 'sendUserInfo-key';

}
// SendUserDto < ---
export class SendUserDto extends MessageGameInfo {
    constructor(id:number,username: string) {
        super(id,username)
        this.id = id;
        this.username = username;
    }
}


// deleteUser --- >
export class DeleteUserTopic extends Topic {
    messageType: DeleteUserDto;

    exchange = ExchangeHolding.authApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'deleteGameUserInfo-queue';
    routingKey = 'deleteGameUserInfo-key';
}

export class DeleteUserDto extends MessageId {
    public userId: number;

    constructor(userId: number) {
        super(userId);
        this.userId = userId;
    }
}


export class ErrorUserTopic extends Topic {
    messageType: ErrorUserDto;

    exchange = ExchangeHolding.authApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'RetriveErrorGameUserInfo-queue';
    routingKey = 'RetriveErrorGameUserInfo-key';

}
// errorGameUserDto <---
export class ErrorUserDto extends MessageId {
    public userId: number;
    constructor(userId: number) {
        super(userId);
        this.userId = userId;
    }
}
