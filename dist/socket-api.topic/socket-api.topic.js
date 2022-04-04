"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketNotifyAllTopic = exports.WebsocketNotifyUser = exports.WebsocketNotifyAllMessage = exports.WebsocketNotifyUserMessage = exports.sendSocketData = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
class sendSocketData extends Messages_1.MessageId {
    constructor(id) {
        super(id);
        this.id = id;
    }
}
exports.sendSocketData = sendSocketData;
class WebsocketNotifyUserMessage extends Messages_1.MessageId {
    event;
    payload;
    constructor(id, event, payload) {
        super(id);
        this.id = id;
        this.event = event;
        this.payload = payload;
    }
}
exports.WebsocketNotifyUserMessage = WebsocketNotifyUserMessage;
class WebsocketNotifyAllMessage extends Messages_1.MessageId {
    event;
    payload;
    constructor(id, event, payload) {
        super(id);
        this.event = event;
        this.payload = payload;
        this.id = id;
    }
}
exports.WebsocketNotifyAllMessage = WebsocketNotifyAllMessage;
class WebsocketNotifyUser extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.fileManagerExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'WebsocketNotifyUser-queue';
    routingKey = 'WebsocketNotifyUser-key';
}
exports.WebsocketNotifyUser = WebsocketNotifyUser;
class WebsocketNotifyAllTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.fileManagerExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'WebsocketNotifyAllTopic-queue';
    routingKey = 'WebsocketNotifyAllTopic-key';
}
exports.WebsocketNotifyAllTopic = WebsocketNotifyAllTopic;
//# sourceMappingURL=socket-api.topic.js.map