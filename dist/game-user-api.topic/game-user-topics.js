"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUserMessage = exports.ErrorUserTopic = exports.DeleteUserMessage = exports.DeleteUserTopic = exports.SendUserMessage = exports.SendUserTopic = exports.PullUserMessage = exports.PullUserTopic = exports.CreateUserGameTopic = exports.CreateUserMessage = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
// Creation --- >
// PullData --- >
// SendDto < ---
// Delete GameInfo --- >
// Delete AuthUser --- >
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
class ErrorUserTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.authApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'RetriveErrorGameUserInfo-queue';
    routingKey = 'RetriveErrorGameUserInfo-key';
}
exports.ErrorUserTopic = ErrorUserTopic;
// errorGameUserDto <---
class ErrorUserMessage extends Messages_1.MessageId {
    userId;
    constructor(userId) {
        super(userId);
        this.userId = userId;
    }
}
exports.ErrorUserMessage = ErrorUserMessage;
//# sourceMappingURL=game-user-topics.js.map