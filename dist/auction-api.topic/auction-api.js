"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendDeckAuctionGenMessage = exports.SendDeckAuctionGenTopic = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
// Auth --->
class SendDeckAuctionGenTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.deckUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'SendGenerate-queue';
    routingKey = 'SendGenerateTopic-key';
}
exports.SendDeckAuctionGenTopic = SendDeckAuctionGenTopic;
class SendDeckAuctionGenMessage extends Messages_1.Messages {
}
exports.SendDeckAuctionGenMessage = SendDeckAuctionGenMessage;
//# sourceMappingURL=auction-api.js.map