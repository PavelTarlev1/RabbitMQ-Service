import {Topic } from "../abstract.topic";
import {RabbitSubscribe as rabbit} from "@golevelup/nestjs-rabbitmq";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {Constructor} from "@nestjs/common/utils/merge-with-values.util";
import {Messages} from "../abstract.messages/Messages";
interface MessageConstructor<T extends Messages> {
    new (...args: unknown[]): T
}

export function RabbitSubscribe(config: Topic): MethodDecorator {
    return (target: Constructor<unknown>, propertyKey: string, descr: PropertyDescriptor) => {
        const msgType = Reflect.getMetadata('ROUTE_PATH', target.constructor.prototype[propertyKey]);
        const originalFunc = descr.value;

        descr.value = async function(...args: unknown[]) {
            const msg: Messages = plainToClass(msgType, args[0], { excludeExtraneousValues: true });
            const errors = await validate(msg)
            if (errors.length > 0) {
                console.error(errors.map(err => err.toString()).join("\n"));
                return
            }

            return originalFunc.apply(this, [msg, args[0]]);
        }

        rabbit(config)(target, propertyKey, descr)
    }
}

export function RabbitMessage<T extends Messages>(msgType: MessageConstructor<T>): ParameterDecorator {
    return (target, propertyKey, index) => {
        Reflect.defineMetadata('ROUTE_PATH', msgType, target.constructor.prototype[propertyKey]);
    }
}
