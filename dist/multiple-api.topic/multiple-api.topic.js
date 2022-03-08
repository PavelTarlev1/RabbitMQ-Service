"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllCredentialsTopic = exports.deleteAllCredentials = exports.CreateUserGameTopic = exports.CreateUserDto = void 0;
const Messages_1 = require("../abstract.messages/Messages");
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
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
class deleteAllCredentials extends Messages_1.MessageId {
    constructor(id) {
        super(id);
        this.id = id;
    }
}
exports.deleteAllCredentials = deleteAllCredentials;
class deleteAllCredentialsTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'deleteAllCredentialsTopic-queue';
    routingKey = 'deleteAllCredentialsTopic';
}
exports.deleteAllCredentialsTopic = deleteAllCredentialsTopic;
//# sourceMappingURL=multiple-api.topic.js.map