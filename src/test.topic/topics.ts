import { Topic} from "../abstract.topic";
import {ExchangeHolding, ExchangeType} from "../providers/providers";
import {Messages} from "../abstract.messages/Messages";

//only for testing purpose !
export class TestTopic extends Topic {
    declare messageType: TestMessage;

    public readonly exchange = ExchangeHolding.gameUserApiExchange;
    public readonly queue = 'register-queue';
    public readonly routingKey = 'register-key';
    public readonly exchangeType = ExchangeType.Topic;
}

//only for testing purpose !
export class TestMessage extends Messages {

    public userId: number;
    private someString: string;

    constructor(userId: number, someString: string) {
        super();
        this.userId = userId;
        this.someString = someString;
    }
}











