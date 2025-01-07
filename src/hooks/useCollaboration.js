// useCollaboration.js
import { useState } from 'react';
import { joinCollaborativeSession, leaveCollaborativeSession } from '../utils/collaboration';

const useCollaboration = () => {
  const [collaborativeSessions, setCollaborativeSessions] = useState([]);

  const joinSession = async (projectId) => {
    const session = await joinCollaborativeSession(projectId);
    setCollaborativeSessions([...collaborativeSessions, session]);
  };

  const leaveSession = async (sessionId) => {
    await leaveCollaborativeSession(sessionId);
    setCollaborativeSessions(collaborativeSessions.filter((s) => s.id !== sessionId));
  };

  return { collaborativeSessions, joinSession, leaveSession };
};

export default useCollaboration;