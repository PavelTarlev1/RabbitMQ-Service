"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BidWithGoldRabbitMessage = exports.BidWithGoldTopic = exports.CardAcquiredMessage = exports.CardAcquiredTopic = exports.DeleteCardAuctionMessage = exports.DeleteCardAuctionTopic = exports.CheckCreditsMessage = exports.CheckCreditTopic = exports.CheckGoldMessage = exports.CheckGoldTopic = exports.BuyCardsRbMessage = exports.BuyCardsTopic = exports.SendDeckAuctionMessage = exports.SendDeckAuctionTopic = exports.SendDeckAuctionGenMessage = exports.SendDeckAuctionGenTopic = void 0;
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
class CheckGoldTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'CheckGoldTopic-queue';
    routingKey = 'CheckGoldTopic-key';
}
exports.CheckGoldTopic = CheckGoldTopic;
class CheckGoldMessage extends Messages_1.Messages {
    cardId;
    goldGiving;
    CardCost;
    userId;
    constructor(userId, cardId, goldGiving, CardCost) {
        super();
        this.userId = userId;
        this.cardId = cardId;
        this.goldGiving = goldGiving;
        this.CardCost = CardCost;
    }
}
exports.CheckGoldMessage = CheckGoldMessage;
class CheckCreditTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'CheckCreditTopic-queue';
    routingKey = 'CheckCreditTopicc-key';
}
exports.CheckCreditTopic = CheckCreditTopic;
class CheckCreditsMessage extends Messages_1.MessageId {
    cardId;
    gold;
    cost;
    constructor(id, cardId, gold, cost) {
        super(id);
        this.id = id;
        this.cardId = cardId;
        this.gold = gold;
        this.cost = cost;
    }
}
exports.CheckCreditsMessage = CheckCreditsMessage;
class DeleteCardAuctionTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'deleteCardAuctionTopic-queue';
    routingKey = 'deleteCardAuctionTopic-key';
}
exports.DeleteCardAuctionTopic = DeleteCardAuctionTopic;
class DeleteCardAuctionMessage extends Messages_1.Messages {
    cardsID;
    constructor(cardsID) {
        super();
        this.cardsID = cardsID;
    }
}
exports.DeleteCardAuctionMessage = DeleteCardAuctionMessage;
class CardAcquiredTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.deckUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'CardAcquiredTopic-queue';
    routingKey = 'CardAcquiredTopic-key';
}
exports.CardAcquiredTopic = CardAcquiredTopic;
class CardAcquiredMessage extends Messages_1.Messages {
    cardId;
    userId;
    constructor(userId, cardId) {
        super();
        this.userId = userId;
        this.cardId = cardId;
    }
}
exports.CardAcquiredMessage = CardAcquiredMessage;
class BidWithGoldTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'BidWithGoldTopic-queue';
    routingKey = 'BidWithGoldTopic-key';
}
exports.BidWithGoldTopic = BidWithGoldTopic;
class BidWithGoldRabbitMessage extends Messages_1.Messages {
    cardId;
    userId;
    amountGold;
    constructor(userId, cardId, amountGold) {
        super();
        this.userId = userId;
        this.cardId = cardId;
        this.amountGold = amountGold;
    }
}
exports.BidWithGoldRabbitMessage = BidWithGoldRabbitMessage;
//# sourceMappingURL=auction-api.js.map