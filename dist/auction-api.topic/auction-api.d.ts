import { Topic } from "../abstract.topic";
import { ExchangeType } from "../providers/providers";
import { Messages } from "../abstract.messages/Messages";
export declare class SendDeckAuctionGenTopic extends Topic {
    messageType: SendDeckAuctionGenMessage;
    exchange: string;
    exchangeType: ExchangeType;
    queue: string;
    routingKey: string;
}
export declare class SendDeckAuctionGenMessage extends Messages {
}
//# sourceMappingURL=auction-api.d.ts.map