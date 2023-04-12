const TOKEN = '5894516111:AAG3PqwbQAbCpcPLoNNtaYZWcmcTcXHExZ8'
const TelegramBot = require('node-telegram-bot-api');
const vasyaId = 1631596525;
const dinaId = 234566331;
const bogdanId = 558164764;
let count = 0;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const fromUserId = msg.from.id;
  const text = msg.text;
  
  if (fromUserId === vasyaId) {
    count++;
    console.log(count);
    if(count === 3){
        bot.sendAnimation(chatId, 'https://media3.giphy.com/media/VJfZ1qYFbYv6lTL042/giphy.gif?cid=ecf05e473alql86zmvevxvqfjdyxt1mfgbmswbjnato6wglm&rid=giphy.gif&ct=g');
        count = 0;
    }
  } else {
    count = 0;
  }
  
  if (fromUserId === dinaId && text.includes('мам') || text.includes('мать')) {
    bot.sendMessage(chatId, 'Дина, поешь говна');
  }
});
