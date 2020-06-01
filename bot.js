const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1082615951:AAGpQ2vI5-DEk9v3zMOj8ZOR6LiNW3Qih8E';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var photo;

// Matches "/echo [whatever]"
bot.onText(/\/start (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

var options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Мне нужен кот', callback_data: '1' }],
      [{ text: 'Мне нужен пес', callback_data: '0' }]   
    ]
  })
};

bot.onText(/\/start_/, function (msg, match) {
  bot.sendMessage(msg.chat.id, 'Выберите то что вам нужно:', options);
});

// Listen for any kind of message. There are different kinds of
// messages.
 


bot.on('callback_query', function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;

    var chat_id = msg.chat.id;



  if (action === '1') {
    photo = 'cat.png';
    bot.sendPhoto(chat_id, photo);
  }
  else if (action === '0')
  {
     photo = 'dog.jpg';
    bot.sendPhoto(chat_id, photo);
  }


  
});