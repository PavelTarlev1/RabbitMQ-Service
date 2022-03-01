"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMessage = exports.RabbitSubscribe = void 0;
const nestjs_rabbitmq_1 = require("@golevelup/nestjs-rabbitmq");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
function RabbitSubscribe(config) {
    return (target, propertyKey, descr) => {
        const msgType = Reflect.getMetadata('ROUTE_PATH', target.constructor.prototype[propertyKey]);
        const originalFunc = descr.value;
        descr.value = async function (...args) {
            const msg = (0, class_transformer_1.plainToClass)(msgType, args[0], { excludeExtraneousValues: true });
            const errors = await (0, class_validator_1.validate)(msg);
            if (errors.length > 0) {
                console.error(errors.map(err => err.toString()).join("\n"));
                return;
            }
            return originalFunc.apply(this, [msg, args[0]]);
        };
        (0, nestjs_rabbitmq_1.RabbitSubscribe)(config)(target, propertyKey, descr);
    };
}
exports.RabbitSubscribe = RabbitSubscribe;
function RabbitMessage(msgType) {
    return (target, propertyKey, index) => {
        Reflect.defineMetadata('ROUTE_PATH', msgType, target.constructor.prototype[propertyKey]);
    };
}
exports.RabbitMessage = RabbitMessage;
//# sourceMappingURL=rabbitMQ.decorators.js.map