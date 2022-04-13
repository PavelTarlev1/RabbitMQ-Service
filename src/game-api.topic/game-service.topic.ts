import {Topic} from "../abstract.topic";
import {ExchangeHolding, ExchangeType} from "../providers/providers";
import {MessageId} from "../abstract.messages/Messages";


export class LevelUpRBMessage extends MessageId {
    constructor(id:number) {
        super(id);
        this.id = id;
    }
}

// <--- deckService !
export class LevelUpTopic extends Topic {
    messageType: LevelUpRBMessage;

    exchange = ExchangeHolding.deckUserApiExchange;
    exchangeType = ExchangeType.Topic;
    queue = 'LevelUpTopic-queue';
    routingKey = 'LevelUpTopic-key';
}
