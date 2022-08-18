import { socket } from './config';
import { IMessage } from 'Types';

export const sendMessage = (message: IMessage) => {
    socket.emit('sendMessage',message);
};