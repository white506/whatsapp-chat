import { useState, useEffect } from "react";
import {
  sendMessage,
  receiveMessages,
  deleteNotification,
} from "../services/api";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import "./Chat.css";

const Chat = ({ idInstance, apiToken }) => {
  const [chatId, setChatId] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    if (!chatId) {
      alert("Введите номер телефона!");
      return;
    }
    const fullChatId = `${chatId}@c.us`;
    await sendMessage(idInstance, apiToken, fullChatId, message);
    setMessages((prev) => [...prev, { sender: "Вы", text: message }]);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await receiveMessages(idInstance, apiToken);
      if (response.data) {
        const { receiptId, body } = response.data;
        if (body && body.messageData?.textMessageData?.textMessage) {
          setMessages((prev) => [
            ...prev,
            {
              sender: "Получатель",
              text: body.messageData.textMessageData.textMessage,
            },
          ]);
        }
        await deleteNotification(idInstance, apiToken, receiptId);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [idInstance, apiToken]);

  return (
    <div className="chat">
      <h2 className="chat__title">Чат</h2>
      <div className="chat__field">
        <input
          className="chat__input"
          type="text"
          placeholder="Введите номер телефона"
          value={chatId}
          onChange={(e) => setChatId(e.target.value)}
        />
      </div>
      <MessagesList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
