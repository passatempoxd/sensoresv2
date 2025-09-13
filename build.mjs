// Conteúdo para o arquivo build.mjs
import fs from 'fs';

console.log("🚀 Iniciando o script de build v2 (mais seguro)...");

const filePath = './index.html';

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Pega os valores das variáveis de ambiente. 
    // O '|| '' ' garante que, se a variável não existir, usaremos uma string vazia.
    const apiKey = process.env.FIREBASE_API_KEY || '';
    const authDomain = process.env.FIREBASE_AUTH_DOMAIN || '';
    const projectId = process.env.FIREBASE_PROJECT_ID || '';
    const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || '';
    const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '';
    const appId = process.env.FIREBASE_APP_ID || '';

    // Substitui cada placeholder no conteúdo do arquivo pelo valor real da variável
    content = content.replace(/__FIREBASE_API_KEY__/g, apiKey);
    content = content.replace(/__FIREBASE_AUTH_DOMAIN__/g, authDomain);
    content = content.replace(/__FIREBASE_PROJECT_ID__/g, projectId);
    content = content.replace(/__FIREBASE_STORAGE_BUCKET__/g, storageBucket);
    content = content.replace(/__FIREBASE_MESSAGING_SENDER_ID__/g, messagingSenderId);
    content = content.replace(/__FIREBASE_APP_ID__/g, appId);

    fs.writeFileSync(filePath, content);

    console.log("✅ Chaves do Firebase injetadas com sucesso no index.html!");

} catch (error) {
    console.error("❌ Erro durante o script de build:", error);
    process.exit(1);
}
