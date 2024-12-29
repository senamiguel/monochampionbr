export class Comentario {
  id: number;
  monoid: number;
  autorID: number;
  autorNick: string;
  autorIcon: string;
  message: string;
  messageDate: Date;
  constructor(
    id: number,
    monoid: number,
    autorID: number,
    autorNick: string,
    autorIcon: string,
    message: string,
    messageDate: Date
  ) {
    this.id = id;
    this.monoid = monoid;
    this.autorID = autorID;
    this.autorNick = autorNick;
    this.autorIcon = autorIcon;
    this.message = message;
    this.messageDate = messageDate;
  }
}
