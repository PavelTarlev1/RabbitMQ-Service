export class ExchangeHolding {
  public static authApiExchange = 'AuthApi-Exchange'
  public static gameUserApiExchange = 'GameUserApi-Exchange';
  public static deckUserApiExchange = 'DeckUserApi-Exchange';
  public static fileManagerExchange = 'FileApi-Exchange';
  public static socketManagerExchange = 'SocketApi-Exchange';
  public static auctionApiExchange = 'AuctionApi-Exchange';
}

export enum ExchangeType {
    Topic = 'topic',
    Fanout = 'fanout',
    Direct = 'direct'
}
