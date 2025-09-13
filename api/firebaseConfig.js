// Acessa as variáveis de ambiente que o Vercel injeta neste ambiente de servidor.
// O "process.env" é um objeto do Node.js que só funciona aqui no backend.
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Esta função retorna a configuração do Firebase
module.exports = (req, res) => {
  // Define os cabeçalhos para permitir que o seu frontend acesse esta API
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responda com a configuração JSON
  res.status(200).json(firebaseConfig);
};
