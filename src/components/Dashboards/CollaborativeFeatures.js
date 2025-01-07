// CollaborativeFeatures.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';
import { useStateHook, useEffectHook } from 'react';

const CollaborativeFeatures = () => {
  const [collaborators, setCollaborators] = useState([
    { id: 1, name: 'John Doe', online: true },
    { id: 2, name: 'Jane Smith', online: false },
    { id: 3, name: 'Bob Johnson', online: true },
  ]);

  const [chatMessages, setChatMessages] = useState([
    { id: 1, author: 'John Doe', message: 'Hey, lets discuss the new project plan.' },
    { id: 2, author: 'Jane Smith', message: 'Sounds good, I will share my thoughts in a bit.' },
  ]);

  const [newChatMessage, setNewChatMessage] = useState('');

  const handleSendChatMessage = () => {
    if (newChatMessage.trim() !== '') {
      const newMessage = {
        id: chatMessages.length + 1,
        author: 'You',
        message: newChatMessage,
      };
      setChatMessages([...chatMessages, newMessage]);
      setNewChatMessage('');
    }
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Collaborative Features</Heading>
        <Text variant="lead" className="mt-2">
          Engage with your team and collaborators in real-time.
        </Text>
        <Expandable title="Collaborators" className="mt-4">
          <div className="space-y-2">
            {collaborators.map((collaborator) => (
              <div key={collaborator.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-2 ${
                      collaborator.online ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  />
                  <Text>{collaborator.name}</Text>
                </div>
                <Button variant="tertiary">Invite</Button>
              </div>
            ))}
          </div>
        </Expandable>
        <Expandable title="Chat" className="mt-4">
          <div className="space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`p-2 rounded-lg ${
                  message.author === 'You' ? 'bg-primary-100 self-end' : 'bg-gray-100 dark:bg-gray-700'
                }`}
              >
                <Text variant="small" className="font-medium">
                  {message.author}
                </Text>
                <Text>{message.message}</Text>
              </div>
            ))}
            <div className="flex items-center">
              <input
                type="text"
                value={newChatMessage}
                onChange={(e) => setNewChatMessage(e.target.value)}
                className="border rounded-md px-3 py-2 flex-1 mr-2"
                placeholder="Type your message..."
              />
              <Button variant="primary" onClick={handleSendChatMessage}>
                Send
              </Button>
            </div>
          </div>
        </Expandable>
      </Card>
    </Fade>
  );
};

export default CollaborativeFeatures;