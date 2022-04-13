"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyCardsRbMessage = exports.BuyCardsTopic = exports.SendDeckAuctionMessage = exports.SendDeckAuctionTopic = exports.SendDeckAuctionGenMessage = exports.SendDeckAuctionGenTopic = void 0;
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
class SendDeckAuctionTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.auctionApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'SendDeckAuction-queue';
    routingKey = 'SendDeckAuction-key';
}
exports.SendDeckAuctionTopic = SendDeckAuctionTopic;
class SendDeckAuctionMessage extends Messages_1.Messages {
    arr;
    constructor(arr) {
        super();
        this.arr = arr;
    }
}
exports.SendDeckAuctionMessage = SendDeckAuctionMessage;
class BuyCardsTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.deckUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'BuyCardsTopic-queue';
    routingKey = 'BuyCardsTopic-key';
}
exports.BuyCardsTopic = BuyCardsTopic;
class BuyCardsRbMessage extends Messages_1.MessageId {
    constructor(id) {
        super(id);
        this.id = id;
    }
}
exports.BuyCardsRbMessage = BuyCardsRbMessage;
//# sourceMappingURL=auction-api.js.map