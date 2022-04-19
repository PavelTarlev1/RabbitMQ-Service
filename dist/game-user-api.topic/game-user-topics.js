"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyCardResponseMessage = exports.BuyCardResponseTopic = exports.BitCardResponseMessage = exports.BitCardResponseTopic = exports.ExperianceTopic = exports.ExpUserMessage = exports.ErrorUserMessage = exports.ErrorUserTopic = exports.DeleteUserMessage = exports.DeleteUserTopic = exports.SendUserMessage = exports.SendUserTopic = exports.PullUserMessage = exports.PullUserTopic = exports.CreateUserGameTopic = exports.CreateUserMessage = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
// Creation --- >
class CreateUserMessage extends Messages_1.MessageGameInfo {
    constructor(id, username) {
        super(id, username);
        this.id = id;
        this.username = username;
    }
}
exports.CreateUserMessage = CreateUserMessage;
// CreationDto
class CreateUserGameTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'createGameUserInfo-queue';
    routingKey = 'createGameUserInfo-key';
}
exports.CreateUserGameTopic = CreateUserGameTopic;
// PullData --- >
class PullUserTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'findUserInfo-queue';
    routingKey = 'findUserInfo-key';
}
exports.PullUserTopic = PullUserTopic;
// PullDataDto --- >
class PullUserMessage extends Messages_1.MessageId {
    userId;
    constructor(userId) {
        super(userId);
        this.userId = userId;
    }
}
exports.PullUserMessage = PullUserMessage;
// SendUser <---
class SendUserTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'sendUserInfo-queue';
    routingKey = 'sendUserInfo-key';
}
exports.SendUserTopic = SendUserTopic;
// SendUserDto < ---
class SendUserMessage extends Messages_1.MessageGameInfo {
    constructor(id, username) {
        super(id, username);
        this.id = id;
        this.username = username;
    }
}
exports.SendUserMessage = SendUserMessage;
// deleteUser --- >
class DeleteUserTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.authApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'deleteGameUserInfo-queue';
    routingKey = 'deleteGameUserInfo-key';
}
exports.DeleteUserTopic = DeleteUserTopic;
class DeleteUserMessage extends Messages_1.MessageId {
    userId;
    constructor(userId) {
        super(userId);
        this.userId = userId;
    }
}
exports.DeleteUserMessage = DeleteUserMessage;
// Auth <---
class ErrorUserTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.authApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'ErrorGameUserInfo-queue';
    routingKey = 'ErrorGameUserInfo-key';
}
exports.ErrorUserTopic = ErrorUserTopic;
// errorGameUserDto <---
class ErrorUserMessage extends Messages_1.MessageId {
    constructor(id) {
        super(id);
        this.id = id;
    }
}
exports.ErrorUserMessage = ErrorUserMessage;
class ExpUserMessage extends Messages_1.MessageId {
    exp;
    constructor(id, exp) {
        super(id);
        this.id = id;
        this.exp = exp;
    }
}
exports.ExpUserMessage = ExpUserMessage;
class ExperianceTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'ExpAddUserInfo-queue';
    routingKey = 'ExpAddUserInfo-key';
}
exports.ExperianceTopic = ExperianceTopic;
class BitCardResponseTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.auctionApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'BitCardResponseTopic-queue';
    routingKey = 'BitCardResponseTopic-key';
}
exports.BitCardResponseTopic = BitCardResponseTopic;
class BitCardResponseMessage extends Messages_1.Messages {
    userId;
    cardId;
    goldAmount;
    constructor(userId, cardId, goldAmount) {
        super();
        this.goldAmount = goldAmount;
        this.userId = userId;
        this.cardId = cardId;
    }
}
exports.BitCardResponseMessage = BitCardResponseMessage;
class BuyCardResponseTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.auctionApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'BuyCardResponseTopic-queue';
    routingKey = 'BuyCardResponseTopic-key';
}
exports.BuyCardResponseTopic = BuyCardResponseTopic;
class BuyCardResponseMessage extends Messages_1.Messages {
    userId;
    cardId;
    constructor(userId, cardId) {
        super();
        this.userId = userId;
        this.cardId = cardId;
    }
}
exports.BuyCardResponseMessage = BuyCardResponseMessage;
//# sourceMappingURL=game-user-topics.js.map