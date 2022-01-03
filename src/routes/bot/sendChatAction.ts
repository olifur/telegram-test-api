import { handle } from './utils';
import type { Route } from '../route';

/**
 * Use this method to send a chat action
 * very useful for e.g. testing inline keyboard buttons :)
 * @see https://core.telegram.org/bots/api#sendchataction
 */
export const sendChatAction: Route = (app, telegramServer) => {
  handle(app, '/bot:token/sendChatAction', (req, res, _next) => {
    const chatId = Number(req.body.chat_id);
    //const action = Number(req.body.action);

    if (!Number.isFinite(chatId)) {
      res.sendResult({
        ok: false,
        error_code: 400,
        description: 'Bad Request: please specify `chat_id` and `action`',
      });
      return;
    }

    telegramServer.addBotMessage(req.body, req.params.token);

    res.sendResult({
      ok: true,
      result: null,
    });
  });
};
