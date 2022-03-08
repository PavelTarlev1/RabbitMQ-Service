"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorUserDto = exports.ErrorUserTopic = exports.DeleteUserDto = exports.DeleteUserTopic = exports.SendUserDto = exports.SendUserTopic = exports.PullUserDto = exports.PullUserTopic = exports.CreateUserGameTopic = exports.CreateUserDto = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
// Creation --- >
// PullData --- >
// SendDto < ---
// Delete GameInfo --- >
// Delete AuthUser --- >
// Creation --- >
class CreateUserDto extends Messages_1.MessageGameInfo {
    constructor(id, username) {
        super(id, username);
        this.id = id;
        this.username = username;
    }
}
exports.CreateUserDto = CreateUserDto;
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
class PullUserDto extends Messages_1.MessageId {
    userId;
    constructor(userId) {
        super(userId);
        this.userId = userId;
    }
}
exports.PullUserDto = PullUserDto;
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
class SendUserDto extends Messages_1.MessageGameInfo {
    constructor(id, username) {
        super(id, username);
        this.id = id;
        this.username = username;
    }
}
exports.SendUserDto = SendUserDto;
// deleteUser --- >
class DeleteUserTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'deleteGameUserInfo-queue';
    routingKey = 'deleteGameUserInfo-key';
}
exports.DeleteUserTopic = DeleteUserTopic;
class DeleteUserDto extends Messages_1.MessageId {
    userId;
    constructor(userId) {
        super(userId);
        this.userId = userId;
    }
}
exports.DeleteUserDto = DeleteUserDto;
class ErrorUserTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'RetriveErrorGameUserInfo-queue';
    routingKey = 'RetriveErrorGameUserInfo-key';
}
exports.ErrorUserTopic = ErrorUserTopic;
// errorGameUserDto <---
class ErrorUserDto extends Messages_1.MessageId {
    userId;
    constructor(userId) {
        super(userId);
        this.userId = userId;
    }
}
exports.ErrorUserDto = ErrorUserDto;
//# sourceMappingURL=game-user-topics.js.map