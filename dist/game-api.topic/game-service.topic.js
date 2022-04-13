"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelUpTopic = exports.LevelUpRBMessage = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
class LevelUpRBMessage extends Messages_1.MessageId {
    constructor(id) {
        super(id);
        this.id = id;
    }
}
exports.LevelUpRBMessage = LevelUpRBMessage;
// <--- deckService !
class LevelUpTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.deckUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'LevelUpTopic-queue';
    routingKey = 'LevelUpTopic-key';
}
exports.LevelUpTopic = LevelUpTopic;
//# sourceMappingURL=game-service.topic.js.map