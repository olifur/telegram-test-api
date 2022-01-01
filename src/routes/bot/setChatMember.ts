import { handle } from './utils';
import type { Route } from '../route';

/**
 * this method is not part of official api but nevertheless
 * very useful for writing tests :)
 */
export const setChatMember: Route = (app, telegramServer) => {
  handle(app, '/bot:token/setChatMember', (req, res, _next) => {
    const chatId = Number(req.body.chat_id);
    const userId = Number(req.body.user_id);
    const firstName = String(req.body.first_name)
    const username = String(req.body.username)
   // this.storage.chatMembers[chatId][userId] = {'user': {'id': userId, is_bot: false, 'first_name': firstName, 'username': username, language_code: 'en'}, 'status': 'creator','is_anonymous':false}


    if (!Number.isFinite(chatId) || !Number.isFinite(userId) || !String(firstName) || !String(username)) {
      res.sendResult({
        ok: false,
        error_code: 400,
        description: 'Bad Request: please specify `chat_id`, `user_id`, `first_name` and `usernme`',
      });
      return;
    }

    telegramServer.setChatMember(chatId, userId, firstName, username);

    res.sendResult({
      ok: true,
      result: "object has been set",
    });
  });
};
