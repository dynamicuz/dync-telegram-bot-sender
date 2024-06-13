import axios from "axios";
type parametr = {
  key: string;
  value: string | number;
};

export async function SendMsgFromBot(
  bot_token: string,
  chat_id: string | number,
  parametrs: parametr[],
  title?: string
) {
  try {
    let text = ``;
    if (title) {
      text += title;
    }
    for (let item of parametrs) {
      text += `\n<b>${item.key}</b>: ${item.value}`;
    }
    const data = {
      chat_id: chat_id,
      text: text,
      parse_mode: "HTML",
    };

    const url = `https://api.telegram.org/bot${bot_token}/sendMessage`;
    const response = await axios.post(url, data);
    // return true;
  } catch (error) {
    throw error;
  }
}
