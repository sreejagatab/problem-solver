// useSocialMedia.js
import { useState } from 'react';
import { connectSocialAccounts, schedulePost } from '../utils/socialMedia';

const useSocialMedia = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([]);
  const [scheduledPosts, setScheduledPosts] = useState([]);

  const connectAccounts = async (accounts) => {
    const connectedData = await connectSocialAccounts(accounts);
    setConnectedAccounts(connectedData);
  };

  const scheduleNewPost = async (post) => {
    const scheduledPost = await schedulePost(post);
    setScheduledPosts([...scheduledPosts, scheduledPost]);
  };

  return { connectedAccounts, scheduledPosts, connectAccounts, scheduleNewPost };
};

export default useSocialMedia;