const TelegramBot = require('node-telegram-bot-api');
const token = '1082615951:AAGpQ2vI5-DEk9v3zMOj8ZOR6LiNW3Qih8E';
const bot = new TelegramBot(token, {polling: true});

var photo;

bot.on('message', msg => 
{
  const chatId = msg.chat.id;


  if (msg.text === 'Мне нужен кот')
  {
  	photo = 'cat.png';
    bot.sendPhoto(chatId, photo);
  }
  else if (msg.text === 'Мне нужен пес')
  {
  	photo = 'dog.jpg';
    bot.sendPhoto(chatId, photo);
  }
  else if(msg.text === 'Мне нужен кот и пес')
  {
  	photo = 'cat-dog.png';
    bot.sendPhoto(chatId, photo);
  }

  bot.sendMessage(chatId, 'фото', {
  	reply_markup: {
  		keyboard: 
  		[
  			['Мне нужен кот'],
  			['Мне нужен пес'],
  			['Мне нужен кот и пес']
  	
  		]
  	}
  })
})
