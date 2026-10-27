// chatConfig.js

const chatConfig = {
    bot: {
      name: 'MentorIA - IFB',
  
      initialMessage:
        'Olá! 👋 Eu sou o **MentorIA** e estou aqui para ajudar você a **compreender problemas de programação e construir suas próprias soluções algorítmicas**, passo a passo. Posso auxiliar com pseudocódigo, Portugol e diferentes linguagens de programação. Envie um problema, exercício ou código que esteja desenvolvendo e vamos construir a solução juntos. **Antes de começarmos, como posso chamar você?**',
    },
  
    interface: {
      headerText: 'Assistente Virtual - Programação',
      placeholderText: 'Digite sua dúvida...',
      loadingText: '🔎 Consultando a base de conhecimento',
    },
  
    images: {
      botAvatar: 'MentorIA_avatar.svg',
      userAvatar: 'ifb_estudante_avatar.svg',
      banner: 'MentorIA_banner_300kb.svg',
    },
  
    backend: {
      webhookUrl:
        'https://n8n.incluc0de.com.br/webhook/mentoria',
    },
  
    colors: {
      botMessageBox: '#98A92C',
      chatButton: '#509E2F',
      botAvatarBorder: '#98A92C',
      userAvatarBorder: '#509E2F',
    },
  };
  
  export default chatConfig;