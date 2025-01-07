// usePersonalization.js
import { useState, useEffect } from 'react';
import { updateUserProfile, getRecommendations } from '../utils/personalization';

const usePersonalization = () => {
  const [userProfile, setUserProfile] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchPersonalData = async () => {
      const profile = await updateUserProfile({ name: 'John Doe', email: 'john.doe@example.com' });
      const recommendationData = await getRecommendations();
      setUserProfile(profile);
      setRecommendations(recommendationData);
    };
    fetchPersonalData();
  }, []);

  const saveProfileUpdates = async (updates) => {
    const updatedProfile = await updateUserProfile(updates);
    setUserProfile(updatedProfile);
  };

  return { userProfile, recommendations, saveProfileUpdates };
};

export default usePersonalization;