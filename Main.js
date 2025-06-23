const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({
    authStrategy: new LocalAuth() 
});

client.on('qr', qr => {
    console.log('📲 Escaneie o QR Code abaixo para autenticar:');
    qrcode.generate(qr, { small: true });
});


client.on('ready', () => {
    console.log('✔️ WhatsApp conectado!');
});

client.initialize();

const MESSAGES = [
    "Bom dia, meu amor! 🌅❤️",
  "Acorda, linda! Seu café está me esperando ☕️😘",
  "Bom dia, princesa! Que seu dia seja tão incrível quanto você 💖",
  "Bom dia, meu bem! Te amo cada segundo ⏳💕",
  "Bom dia amor! Que seu dia seja lindo como você!",
  "Bom dia amor! Mais um dia para te amar!",
  "Bom dia amor! Sorria, o mundo é seu!",
  "Bom dia amor! Que a felicidade te acompanhe hoje!",
  "Bom dia amor! Você é meu primeiro pensamento!",
  "Bom dia amor! Que nada estrague seu sorriso!",
  "Bom dia amor! Que seu dia seja iluminado!",
  "Bom dia amor! Pense em mim e sorria!",
  "Bom dia amor! Que a vida te surpreenda positivamente!",
  "Bom dia amor! Seu sorriso é minha paz!",
  "Bom dia amor! Estou torcendo por você hoje!",
  "Bom dia amor! Mais um dia para ser feliz ao seu lado!",
  "Bom dia amor! Que a energia boa te envolva!",
  "Bom dia amor! Já estou com saudades!",
  "Bom dia amor! Que seu dia seja doce como você!",
  "Bom dia amor! Que cada segundo te traga alegria!",
  "Bom dia amor! Que a vida sorria pra você hoje!",
  "Bom dia amor! Lembre-se o quanto eu te amo!",
  "Bom dia amor! Te desejo um dia leve e feliz!",
  "Bom dia amor! Que seu café venha com boas notícias!",
  "Bom dia amor! Que a paz te acompanhe o dia todo!",
  "Bom dia amor! Hoje o dia vai ser incrível!",
  "Bom dia amor! Você merece tudo de bom!",
  "Bom dia amor! Que só coisas boas te aconteçam hoje!",
  "Bom dia amor! Você é minha inspiração diária!",
  "Bom dia amor! Já sonhando com você novamente!",
  "Bom dia amor! Acordei pensando em nós!",
  "Bom dia amor! Que cada momento hoje seja especial!",
  "Bom dia amor! Seja luz onde passar!",
  "Bom dia amor! Muita energia positiva pra você!",
  "Bom dia amor! Que Deus abençoe seu dia!",
  "Bom dia amor! Mais um dia de conquista pra você!",
  "Bom dia amor! Sorria, você é amada!",
  "Bom dia amor! Que a sorte esteja ao seu lado!",
  "Bom dia amor! Um beijo virtual pra começar bem!",
  "Bom dia amor! Que sua manhã seja radiante!",
  "Bom dia amor! Te amo cada vez mais!",
  "Bom dia amor! Vai com tudo hoje!",
  "Bom dia amor! Que venha um dia lindo pela frente!",
  "Bom dia amor! Que a vida te surpreenda com coisas boas!",
  "Bom dia amor! Cada dia com você é um presente!",
  "Bom dia amor! Pense positivo, sempre!",
  "Bom dia amor! Seu sorriso faz meu dia!",
  "Bom dia amor! Já contei hoje o quanto você é especial?",
  "Bom dia amor! Meu coração é só seu!",
  "Bom dia amor! Seja feliz hoje e sempre!",
  "Bom dia amor! Você é minha razão de sorrir!",
  "Bom dia amor! Que tudo flua bem pra você hoje!",
  "Bom dia amor! Vamos vencer mais um dia juntos!",
  "Bom dia amor! Que hoje seja leve e cheio de amor!",
  "Bom dia amor! Meu pensamento já está aí com você!",
  "Bom dia amor! Seu brilho ilumina meus dias!",
  "Bom dia amor! Que a felicidade te abrace!",
  "Bom dia amor! Respire fundo e sorria!",
  "Bom dia amor! Um dia lindo só pra você!",
  "Bom dia amor! Te envio um abraço apertado!",
  "Bom dia amor! Espero que seu dia seja incrível!",
  "Bom dia amor! Cada detalhe de hoje vai ser especial!",
  "Bom dia amor! Você merece o melhor sempre!",
  "Bom dia amor! Já tô contando os minutos pra te ver!",
  "Bom dia amor! Seu olhar é minha motivação!",
  "Bom dia amor! Que seu dia seja tão lindo quanto seu sorriso!",
  "Bom dia amor! Você é minha poesia matinal!",
  "Bom dia amor! Te desejo leveza e alegrias!",
  "Bom dia amor! Que hoje você conquiste o mundo!",
  "Bom dia amor! Um dia cheio de boas surpresas!",
  "Bom dia amor! Que o universo conspire a seu favor!",
  "Bom dia amor! Hoje acordei com saudade de você!",
  "Bom dia amor! Seu carinho me faz bem!",
  "Bom dia amor! Que seu dia comece com boas notícias!",
  "Bom dia amor! Que sua manhã seja iluminada!",
  "Bom dia amor! Meu pensamento não sai de você!",
  "Bom dia amor! Que hoje seja mais um capítulo lindo da sua história!",
  "Bom dia amor! Lembre-se: você é incrível!",
  "Bom dia amor! Te envio um sorriso cheio de amor!",
  "Bom dia amor! Que hoje você brilhe ainda mais!",
  "Bom dia amor! Vamos viver um dia maravilhoso!",
  "Bom dia amor! Seu bom humor é contagiante!",
  "Bom dia amor! Que a sorte bata na sua porta!",
  "Bom dia amor! Mais um dia de amor e carinho pra nós!",
  "Bom dia amor! Hoje o mundo é todo seu!",
  "Bom dia amor! Nunca esqueça o quanto você é importante!",
  "Bom dia amor! Te desejo paz e muitas alegrias!",
  "Bom dia amor! Um dia lindo está te esperando!",
  "Bom dia amor! Que hoje você realize sonhos!",
  "Bom dia amor! Que o sol aqueça seu coração!",
  "Bom dia amor! Que o dia seja produtivo e feliz!",
  "Bom dia amor! Estou enviando pensamentos positivos!",
  "Bom dia amor! Já disse que te amo hoje?",
  "Bom dia amor! Um sorriso seu ilumina tudo!",
  "Bom dia amor! Te desejo um dia leve e cheio de coisas boas!",
  "Bom dia amor! Vamos conquistar o mundo juntos!",
  "Bom dia amor! Que hoje você colecione sorrisos!",
  "Bom dia amor! Que tudo de bom te aconteça hoje!",
  "Bom dia amor! Cada instante de hoje vai ser especial!",
  "Bom dia amor! Que sua energia seja sempre positiva!",
  "Bom dia amor! Você é minha razão de sorrir pela manhã!",
  "Bom dia amor! Que hoje seja repleto de momentos felizes!",
  "Bom dia amor! Obrigado por existir na minha vida!",
  "Bom dia amor! Que a felicidade te acompanhe o dia todo!",
  "Bom dia amor! Que sua manhã seja cheia de luz!",
  "Bom dia amor! Você mora no meu coração!",
  "Bom dia amor! Já estou com saudades de você!",
  "Bom dia amor! Que a vida te traga alegrias hoje!",
  "Bom dia amor! Que seu dia seja mágico!",
  "Bom dia amor! Fica com Deus hoje e sempre!",
  "Bom dia amor! Te amo mais do que palavras podem dizer!"
];


const TARGET_ID = "557191981445@c.us"; 

function sendRandomGoodMorning() {
    const idx = Math.floor(Math.random() * MESSAGES.length);
    const text = MESSAGES[idx];
    client.sendMessage(TARGET_ID, text)
        .then(() => console.log(`✔️ Enviado: ${text}`))
        .catch(err => console.error('❌ Erro ao enviar:', err));
}

app.get('/goodmorning', async (req, res) => {
    await sendRandomGoodMorning();
    res.send('Mensagem de bom dia enviada!');
});

app.get('/', (req, res) => {
    res.send('Bot no ar 🟢')
});

app.listen(PORT, () => {
    console.log(`🌐 Server escutando na porta ${PORT}`);
});
