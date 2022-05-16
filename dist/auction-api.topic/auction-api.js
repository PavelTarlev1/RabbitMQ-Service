"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldRefundMessage = exports.GoldRefundTopic = exports.AuctionedCardRemoveFromUserDeckMessage = exports.AuctionedCardRemoveFromUserDeckTopic = exports.AuctionCardToAuctionServiceMessage = exports.AuctionCardToAuctionServiceTopic = exports.AuctionCardToUserServiceMessage = exports.AuctionCardToUserServiceTopic = exports.AuctionedCardsToGameUserMessage = exports.AuctionedCard = exports.UsedFor = exports.GetNameCard = exports.AuctionedCardsToGameUserTopic = exports.BidWithGoldRabbitMessage = exports.BidWithGoldTopic = exports.CardAcquiredMessage = exports.CardAcquiredTopic = exports.DeleteCardAuctionMessage = exports.DeleteCardAuctionTopic = exports.BuyCardTopicMessage = exports.BuyCardTopic = exports.CheckGoldMessage = exports.CheckGoldTopic = exports.BuyCardsRbMessage = exports.BuyCardsTopic = exports.SendDeckAuctionMessage = exports.SendDeckAuctionTopic = exports.SendDeckAuctionGenMessage = exports.SendDeckAuctionGenTopic = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
const class_transformer_1 = require("class-transformer");
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
class BuyCardsRbMessage extends Messages_1.Messages {
    userId;
    cardId;
    constructor(userId, cardId) {
        super();
        this.userId = userId;
        this.cardId = cardId;
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
class BuyCardTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'buyCardTopic-queue';
    routingKey = 'buyCardTopic-key';
}
exports.BuyCardTopic = BuyCardTopic;
class BuyCardTopicMessage extends Messages_1.Messages {
    cardId;
    credits;
    userId;
    constructor(userId, cardId, credits) {
        super();
        this.userId = userId;
        this.cardId = cardId;
        this.credits = credits;
    }
}
exports.BuyCardTopicMessage = BuyCardTopicMessage;
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
class AuctionedCardsToGameUserTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'AuctionedCardsToGameUserTopic-queue';
    routingKey = 'AuctionedCardsToGameUserTopic-key';
}
exports.AuctionedCardsToGameUserTopic = AuctionedCardsToGameUserTopic;
class GetNameCard {
    cardId;
    bidder;
}
exports.GetNameCard = GetNameCard;
var UsedFor;
(function (UsedFor) {
    UsedFor[UsedFor["gameCards"] = 0] = "gameCards";
    UsedFor[UsedFor["userCards"] = 1] = "userCards";
    UsedFor[UsedFor["historyCards"] = 2] = "historyCards";
})(UsedFor = exports.UsedFor || (exports.UsedFor = {}));
class AuctionedCard {
    cards;
    usedFor;
    userId;
    toAll;
}
exports.AuctionedCard = AuctionedCard;
class AuctionedCardsToGameUserMessage extends Messages_1.Messages {
    auctionedCards;
    constructor(gameCards) {
        super();
        this.auctionedCards = gameCards;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => AuctionedCard),
    __metadata("design:type", AuctionedCard)
], AuctionedCardsToGameUserMessage.prototype, "auctionedCards", void 0);
exports.AuctionedCardsToGameUserMessage = AuctionedCardsToGameUserMessage;
class AuctionCardToUserServiceTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'AuctionCardToUserServiceTopic-queue';
    routingKey = 'AuctionCardToUserServiceTopic-key';
}
exports.AuctionCardToUserServiceTopic = AuctionCardToUserServiceTopic;
class AuctionCardToUserServiceMessage extends Messages_1.Messages {
    userId;
    cardId;
    goldAmount;
    constructor(userId, cardId, goldAmount) {
        super();
        this.userId = userId;
        this.cardId = cardId;
        this.goldAmount = goldAmount;
    }
}
exports.AuctionCardToUserServiceMessage = AuctionCardToUserServiceMessage;
class AuctionCardToAuctionServiceTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.auctionApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'AuctionCardToAuctionServiceTopic-queue';
    routingKey = 'AuctionCardToAuctionServiceTopic-key';
}
exports.AuctionCardToAuctionServiceTopic = AuctionCardToAuctionServiceTopic;
class AuctionCardToAuctionServiceMessage extends Messages_1.Messages {
    userId;
    cardId;
    goldAmount;
    attack;
    health;
    constructor(userId, cardId, attack, health, goldAmount) {
        super();
        this.userId = userId;
        this.cardId = cardId;
        this.attack = attack;
        this.health = health;
        this.goldAmount = goldAmount;
    }
}
exports.AuctionCardToAuctionServiceMessage = AuctionCardToAuctionServiceMessage;
class AuctionedCardRemoveFromUserDeckTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.deckUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'auctionedCardRemoveFromUserDeckTopic-queue';
    routingKey = 'auctionedCardRemoveFromUserDeckTopic-key';
}
exports.AuctionedCardRemoveFromUserDeckTopic = AuctionedCardRemoveFromUserDeckTopic;
class AuctionedCardRemoveFromUserDeckMessage extends Messages_1.Messages {
    userId;
    cardId;
    constructor(userId, cardId) {
        super();
        this.userId = userId;
        this.cardId = cardId;
    }
}
exports.AuctionedCardRemoveFromUserDeckMessage = AuctionedCardRemoveFromUserDeckMessage;
class GoldRefundTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'GoldRefundTopic-queue';
    routingKey = 'GoldRefundTopic-key';
}
exports.GoldRefundTopic = GoldRefundTopic;
class GoldRefundMessage extends Messages_1.Messages {
    userId;
    goldAmount;
    constructor(userId, goldAmount) {
        super();
        this.userId = userId;
        this.goldAmount = goldAmount;
    }
}
exports.GoldRefundMessage = GoldRefundMessage;
//# sourceMappingURL=auction-api.js.map