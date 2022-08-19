export type IMessage =  {
    id?: string;
    author: string;
    payload: string;
    sendAt?: number;
};