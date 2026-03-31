// Telegram bot config (loaded from .env server-side or use proxy)
// For client-side, proxy endpoints recommended for security
const TELEGRAM_CONFIG = {
  token: 'proxy_token_here',  // Don't expose real token client-side
  chatId: '8652805995',
  apiProxy: '/api/telegram'  // Use server proxy to hide token
};
