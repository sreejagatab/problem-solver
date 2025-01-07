// ChatWindow/AdminChatWindow.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, TextArea, Button, Tooltip, Emoji } from '../components/UI';
import { Fade } from '../components/Animations';
import { sendAdminMessage, getAdminMessages } from '../utils/chatWindow';

const AdminChatWindow = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchAdminMessages = async () => {
      const adminMessages = await getAdminMessages();
      setMessages(adminMessages);
    };
    fetchAdminMessages();
  }, []);

  const handleSendAdminMessage = async () => {
    const newMessage = await sendAdminMessage(message);
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <Fade>
      <Card className="p-8 h-full flex flex-col">
        <Heading level={2}>Admin Chat Window</Heading>
        <div className="flex-1 overflow-y-auto mt-4 mb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start mb-4 ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`px-4 py-2 rounded-lg shadow-md ${
                  msg.sender === 'admin'
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                }`}
              >
                <Text>{msg.content}</Text>
                {msg.attachments.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {msg.attachments.map((attachment, i) => (
                      <div key={i} className="flex items-center">
                        <Tooltip content={attachment.name}>
                          <a href={attachment.url} className="text-blue-500 hover:underline">
                            {attachment.name}
                          </a>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                )}
                {msg.emoji && (
                  <div className="mt-2">
                    <Emoji symbol={msg.emoji} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-auto">
          <TextArea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 mr-2"
          />
          <Button variant="primary" onClick={handleSendAdminMessage}>
            Send
          </Button>
        </div>
      </Card>
    </Fade>
  );
};

export default AdminChatWindow;