import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { Messages } from "../abstract.messages/Messages";
export declare class TestTopic extends Topic {
    messageType: TestMessage;
    readonly exchange: string;
    readonly queue = "register-queue";
    readonly routingKey = "register-key";
    readonly exchangeType = ExchangeType.Topic;
}
export declare class TestMessage extends Messages {
    userId: number;
    private someString;
    constructor(userId: number, someString: string);
}
//# sourceMappingURL=topics.d.ts.map