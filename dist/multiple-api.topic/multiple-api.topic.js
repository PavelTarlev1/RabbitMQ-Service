"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAllCredentialsTopic = exports.deleteAllCredentials = void 0;
const Messages_1 = require("../abstract.messages/Messages");
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
class deleteAllCredentials extends Messages_1.MessageId {
    constructor(id) {
        super(id);
        this.id = id;
    }
}
exports.deleteAllCredentials = deleteAllCredentials;
class DeleteAllCredentialsTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'deleteAllCredentialsTopic-queue';
    routingKey = 'deleteAllCredentialsTopic';
}
exports.DeleteAllCredentialsTopic = DeleteAllCredentialsTopic;
//# sourceMappingURL=multiple-api.topic.js.map