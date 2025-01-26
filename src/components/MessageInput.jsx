import { useState } from "react";
import "./MessageInput.css";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="message-input">
      <input
        className="message-input__field"
        type="text"
        placeholder="Введите сообщение"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="message-input__button" onClick={handleSend}>
        Отправить
      </button>
    </div>
  );
};

export default MessageInput;
