export declare abstract class Messages {
}
export declare abstract class MessageId extends Messages {
    id: number;
    protected constructor(id: any);
}
export declare abstract class MessageGameInfo extends MessageId {
    username: string;
    protected constructor(id: number, username: string);
}
//# sourceMappingURL=Messages.d.ts.map