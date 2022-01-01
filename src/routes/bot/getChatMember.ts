import { handle } from './utils';
import type { Route } from '../route';

/**
 * Use this method to get information about a member of a chat. 
 * @see https://core.telegram.org/bots/api#getchatmember
 */
export const getChatMember: Route = (app, telegramServer) => {
  handle(app, '/bot:token/getChatMember', (req, res, _next) => {
    const chatId = Number(req.body.chat_id);
    const userId = Number(req.body.user_id);

    if (!Number.isFinite(chatId) || !Number.isFinite(userId)) {
      res.sendResult({
        ok: false,
        error_code: 400,
        description: 'Bad Request: please specify `chat_id` and `user_id`',
      });
      return;
    }

    const chatMember = telegramServer.getChatMember(chatId, userId);

    if (!chatMember) {
      res.sendResult({
        ok: false,
        // It seems like 404 would be better but that's the way Telegram actually works.
        error_code: 400,
        description: `Bad Request: invalid user_id specified`,
      });
      return;
    }

    res.sendResult({
      ok: true,
      result: chatMember,
    });
  });
};
