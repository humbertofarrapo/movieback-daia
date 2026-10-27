// chatConfig.js

const chatConfig = {
    bot: {
      name: 'MovieBack',
  
      initialMessage:
        'Olá! 👋 Eu sou o **MovieBack** 🎬 e estou aqui para ajudar você a descobrir filmes que combinem com seu gosto. Posso recomendar filmes de suspense, ação, comédia, romance, ficção científica e muito mais, além de sugerir títulos com base nos seus filmes favoritos. 🍿 **Me conte: que tipo de filme você está procurando hoje?**',
    },
  
    interface: {
      headerText: 'Assistente Virtual - Recomendação',
      placeholderText: 'Pergunte ao MovieBack...',
      loadingText: '🔎 Consultando a base de conhecimento',
    },
  
    images: {
      botAvatar: 'MentorIA_avatar.svg',
      userAvatar: 'ifb_estudante_avatar.svg',
      banner: 'MentorIA_banner_300kb.svg',
    },
  
    backend: {
      webhookUrl:
        'https://n8n.incluc0de.com.br/webhook/movieback:chat',
    },
 
    colors: {
      botMessageBox: '#F5B7B7',
      chatButton: '#4A90D9',
      botAvatarBorder: '#D94A4A',
      userAvatarBorder: '#8BC4F0',
    },
  };
  
  export default chatConfig;
