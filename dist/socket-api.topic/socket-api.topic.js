"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketNotifyAllTopic = exports.WebsocketNotifyUserTopic = exports.WebsocketNotifyUserMessage = exports.WebsocketNotifyAllMessage = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
class WebsocketNotifyAllMessage extends Messages_1.MessageId {
    event;
    payload;
    userId;
    constructor(userId, event, payload) {
        super(userId);
        this.userId = userId;
        this.event = event;
        this.payload = payload;
    }
}
exports.WebsocketNotifyAllMessage = WebsocketNotifyAllMessage;
class WebsocketNotifyUserMessage extends Messages_1.Messages {
    event;
    payload;
    userId;
    constructor(userId, event, payload) {
        super();
        this.userId = userId;
        this.event = event;
        this.payload = payload;
    }
}
exports.WebsocketNotifyUserMessage = WebsocketNotifyUserMessage;
class WebsocketNotifyUserTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.socketManagerExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'WebsocketNotifyUser-queue';
    routingKey = 'WebsocketNotifyUser-key';
}
exports.WebsocketNotifyUserTopic = WebsocketNotifyUserTopic;
class WebsocketNotifyAllTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.socketManagerExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'WebsocketNotifyAllTopic-queue';
    routingKey = 'WebsocketNotifyAllTopic-key';
}
exports.WebsocketNotifyAllTopic = WebsocketNotifyAllTopic;
//# sourceMappingURL=socket-api.topic.js.map