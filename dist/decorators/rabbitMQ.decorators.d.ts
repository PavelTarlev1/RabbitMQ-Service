import { Topic } from "../abstract.topic";
import { Messages } from "../abstract.messages/Messages";
interface MessageConstructor<T extends Messages> {
    new (...args: unknown[]): T;
}
export declare function RabbitSubscribe(config: Topic): MethodDecorator;
export declare function RabbitMessage<T extends Messages>(msgType: MessageConstructor<T>): ParameterDecorator;
export {};
//# sourceMappingURL=rabbitMQ.decorators.d.ts.map