import {IsNumber, IsPositive, IsString, MaxLength, MinLength} from "class-validator";

export abstract class Messages {

}

export abstract class MessageId extends Messages{

    @IsNumber()
    @IsPositive()
    public id: number;
    protected constructor(id) {
        super();
        this.id = id;
    }
}

export abstract class MessageGameInfo extends MessageId{

    @IsString()
    @MaxLength(25)
    @MinLength(3)
    public username: string;

    protected constructor(id:number, username: string) {
        super(id);
        this.username = username;
    }
}

