import {Topic} from "../abstract.topic";
import {ExchangeHolding, ExchangeType} from "../providers/providers";
import {MessageId} from "../abstract.messages/Messages";





export class FileSendMessage extends MessageId {
    public photo: Buffer;
    constructor(id:number, photo:Buffer) {
        super(id);
        this.photo = photo;
    }
}

// <--- Auth
export class SendFileTopic extends Topic {
    messageType: FileSendMessage;

    exchange = ExchangeHolding.fileManagerExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'SendFileTopic-queue';
    routingKey = 'SendFileTopic-key';
}

export class ResponseSuccessMessage extends MessageId {
    public loaded: boolean;
    constructor(id:number, loaded:boolean) {
        super(id);
        this.loaded = loaded;
    }
}

// ---> Auth
export class ResponseFileTopic extends Topic {
    messageType: ResponseSuccessMessage;

    exchange = ExchangeHolding.gameUserApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'ResponseFileCreated-queue';
    routingKey = 'ResponseFileCreated-key' ;
}

export class DeleteFileMessage extends MessageId {

    constructor(id:number) {
        super(id);
    }
}

export class DeleteFileTopic extends Topic {
    messageType: DeleteFileMessage;
    exchange = ExchangeHolding.fileManagerExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'DeleteFile-queue';
    routingKey = 'DeleteFile-queue-key';
}
