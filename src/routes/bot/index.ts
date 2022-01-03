import { deleteMessage } from './deleteMessage';
import { getUpdates } from './getUpdates';
import { getMe } from './getMe';
import { answerCallbackQuery } from './answerCallbackQuery';
import { sendMessage } from './sendMessage';
import { editMessageText } from './editMessageText';
import { setWebhook } from './setWebhook';
import { deleteWebhook } from './deleteWebhook';
import { unknownMethod } from './unknownMethod';
import { getChatMember } from './getChatMember';
import { setChatMember } from './setChatMember';
import { sendChatAction } from './sendChatAction';


export const botRoutes = [
  deleteMessage,
  getUpdates,
  answerCallbackQuery,
  getMe,
  editMessageText,
  sendMessage,
  setWebhook,
  deleteWebhook,
  getChatMember,
  setChatMember,
  sendChatAction,
  unknownMethod // This route should go after all bot API methods.
];
