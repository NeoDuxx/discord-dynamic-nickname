const Discord = require('discord.js');
const client = new Discord.Client();

//Your token
client.login(process.env.BOT_TOKEN);
//Your server id (right click server and copy id)
var guildId = '';


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(function(){setNick()}, 500);
});


client.login(token);

  var counter = 1;
  function setNick(){
    var server = client.guilds.get(guildId);
    var member = server.members.get(client.user.id);
       switch(counter)
       {
           case 1:
               member.setNickname('D');
               break;
               case 2:
                   member.setNickname('Do');
                   break;
                   case 3:
                       member.setNickname('Dok');
                       break;
                       case 4:
                           member.setNickname('Doki')
                           break;
                           case 5:
                               member.setNickname('DokiD');
                               break;
                               case 6:
                                   member.setNickname('DokiDo');
                                   break;
                                   case 7:
                                       member.setNickname('DokiDok');
                                       break;
                                       case 8:
                                           member.setNickname('DokiDoki')
                                           break;
                                           case 9:
                                               member.setNickname('DokiDok');
                                               break;
                                               case 10:
                                                   member.setNickname('DokiDo');
                                                   break;
                                                   case 11:
                                                       member.setNickname('DokiD');
                                                       break;
                                                       case 12:
                                                           member.setNickname('Doki');
                                                           break;
                                                           case 13:
                                                               member.setNickname('Dok');
                                                               break;
                                                               case 14:
                                                                   member.setNickname('Do');
                                                                   break;
                                                                   case 15:
                                                                       counter = 0;
                                                                       break;
       }
       counter++;
  }
