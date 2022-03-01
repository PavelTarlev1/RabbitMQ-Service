"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFileTopic = exports.DeleteFileMessage = exports.ResponseFileTopic = exports.ResponseSuccessMessage = exports.SendFileTopic = exports.FileSendMessage = void 0;
const abstract_topic_1 = require("../abstract.topic");
const providers_1 = require("../providers/providers");
const Messages_1 = require("../abstract.messages/Messages");
class FileSendMessage extends Messages_1.MessageId {
    photo;
    constructor(id, photo) {
        super(id);
        this.photo = photo;
    }
}
exports.FileSendMessage = FileSendMessage;
// <--- Auth
class SendFileTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.fileManagerExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'SendFileTopic-queue';
    routingKey = 'SendFileTopic-key';
}
exports.SendFileTopic = SendFileTopic;
class ResponseSuccessMessage extends Messages_1.MessageId {
    loaded;
    constructor(id, loaded) {
        super(id);
        this.loaded = loaded;
    }
}
exports.ResponseSuccessMessage = ResponseSuccessMessage;
// ---> Auth
class ResponseFileTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.gameUserApiExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'ResponseFileCreated-queue';
    routingKey = 'ResponseFileCreated-key';
}
exports.ResponseFileTopic = ResponseFileTopic;
class DeleteFileMessage extends Messages_1.MessageId {
    constructor(id) {
        super(id);
    }
}
exports.DeleteFileMessage = DeleteFileMessage;
class DeleteFileTopic extends abstract_topic_1.Topic {
    messageType;
    exchange = providers_1.ExchangeHolding.fileManagerExchange;
    exchangeType = providers_1.ExchangeType.Topic;
    queue = 'DeleteFile-queue';
    routingKey = 'DeleteFile-queue-key';
}
exports.DeleteFileTopic = DeleteFileTopic;
//# sourceMappingURL=file-manager.topic.js.map