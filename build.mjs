// build.mjs (versão 3 - final)
import fs from 'fs';
import path from 'path';

console.log("🚀 Iniciando o script de build v3 (com diretório de saída)...");

// Define o diretório de saída que a Vercel espera
const outputDir = './public';
const sourcePath = './index.html';
const targetPath = path.join(outputDir, 'index.html');

try {
    // 1. Cria o diretório 'public' se ele não existir
    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir);
    }

    // 2. Lê o conteúdo do index.html original
    let content = fs.readFileSync(sourcePath, 'utf8');

    // 3. Pega as variáveis de ambiente
    const apiKey = process.env.FIREBASE_API_KEY || '';
    const authDomain = process.env.FIREBASE_AUTH_DOMAIN || '';
    const projectId = process.env.FIREBASE_PROJECT_ID || '';
    const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || '';
    const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '';
    const appId = process.env.FIREBASE_APP_ID || '';

    // 4. Substitui os placeholders
    content = content.replace(/__FIREBASE_API_KEY__/g, apiKey);
    content = content.replace(/__FIREBASE_AUTH_DOMAIN__/g, authDomain);
    content = content.replace(/__FIREBASE_PROJECT_ID__/g, projectId);
    content = content.replace(/__FIREBASE_STORAGE_BUCKET__/g, storageBucket);
    content = content.replace(/__FIREBASE_MESSAGING_SENDER_ID__/g, messagingSenderId);
    content = content.replace(/__FIREBASE_APP_ID__/g, appId);

    // 5. Salva o arquivo modificado DENTRO da pasta 'public'
    fs.writeFileSync(targetPath, content);

    console.log(`✅ Chaves do Firebase injetadas com sucesso em ${targetPath}!`);

} catch (error) {
    console.error("❌ Erro durante o script de build:", error);
    process.exit(1);
}
