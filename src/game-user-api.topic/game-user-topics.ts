import { Topic} from "../abstract.topic";
import { ExchangeHolding, ExchangeType} from "../providers/providers";
import { MessageGameInfo, MessageId, Messages } from "../abstract.messages/Messages";



// Creation --- >
// PullData --- >
// SendDto < ---
// Delete GameInfo --- >
// Delete AuthUser --- >

// Creation --- >
export class CreateUserMessage extends MessageGameInfo {
    constructor(id:number,username: string) {
        super(id, username);
        this.id =id;
        this.username = username;

    }
}
// CreationDto
export class CreateUserGameTopic extends Topic {
    messageType: CreateUserMessage;

    exchange = ExchangeHolding.gameUserApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'createGameUserInfo-queue';
    routingKey = 'createGameUserInfo-key';
}


// PullData --- >
export class PullUserTopic extends Topic {
    messageType: PullUserMessage;

    exchange = ExchangeHolding.gameUserApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'findUserInfo-queue';
    routingKey = 'findUserInfo-key';
}
// PullDataDto --- >
export class PullUserMessage extends MessageId {
    public userId: number;
    constructor(userId: number) {
        super(userId);
        this.userId = userId;
    }
}


// SendUser <---
export class SendUserTopic extends Topic {
    messageType:SendUserMessage ;

    exchange = ExchangeHolding.gameUserApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'sendUserInfo-queue';
    routingKey = 'sendUserInfo-key';

}
// SendUserDto < ---
export class SendUserMessage extends MessageGameInfo {
    constructor(id:number,username: string) {
        super(id,username)
        this.id = id;
        this.username = username;
    }
}


// deleteUser --- >
export class DeleteUserTopic extends Topic {
    messageType: DeleteUserMessage;

    exchange = ExchangeHolding.authApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'deleteGameUserInfo-queue';
    routingKey = 'deleteGameUserInfo-key';
}

export class DeleteUserMessage extends MessageId {
    public userId: number;

    constructor(userId: number) {
        super(userId);
        this.userId = userId;
    }
}

// Auth <---
export class ErrorUserTopic extends Topic {
    messageType: ErrorUserMessage;

    exchange = ExchangeHolding.authApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'ErrorGameUserInfo-queue';
    routingKey = 'ErrorGameUserInfo-key';

}
// errorGameUserDto <---
export class ErrorUserMessage extends MessageId {
    constructor(id: number) {
        super(id);
        this.id = id;
    }
}



export class ExpUserMessage extends MessageId {
    public exp: number;
    constructor(id: number, exp: number) {
        super(id);
        this.id = id;
        this.exp = exp;
    }
}

export class ExperianceTopic extends Topic {
    messageType: ExpUserMessage;

    exchange = ExchangeHolding.gameUserApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'ExpAddUserInfo-queue';
    routingKey = 'ExpAddUserInfo-key';

}

export class BuyCardResponseTopic extends Topic {
    messageType: BuyCardResponseMessage;

    exchange = ExchangeHolding.auctionApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'BuyCardResponseTopic-queue';
    routingKey = 'BuyCardResponseTopic-key';

}
export class BuyCardResponseMessage extends Messages {
    public userId: number;
    public cardId: number;
    public goldAmount: number;
    constructor(userId: number, cardId:number, goldAmount:number) {
        super();
        this.goldAmount = goldAmount;
        this.userId = userId;
        this.cardId = cardId;
    }
}
