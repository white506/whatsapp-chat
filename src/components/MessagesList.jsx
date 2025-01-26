import "./MessagesList.css";

const MessagesList = ({ messages }) => {
  return (
    <div className="messages-list">
      {messages.map((msg, index) => (
        <p className="messages-list__item" key={index}>
          <strong className="messages-list__sender">{msg.sender}:</strong>{" "}
          {msg.text}
        </p>
      ))}
    </div>
  );
};

export default MessagesList;
