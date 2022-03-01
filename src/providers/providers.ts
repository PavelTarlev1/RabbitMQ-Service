export class ExchangeHolding {
  public static gameUserApiExchange = 'exchange1';
  public static fileManagerExchange = 'exchange2';
}

export enum ExchangeType {
    Topic = 'topic',
    Fanout = 'fanout',
    Direct = 'direct'
}
