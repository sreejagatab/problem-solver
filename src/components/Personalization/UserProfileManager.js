// UserProfileManager.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';

const UserProfileManager = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    preferences: {
      theme: 'light',
      language: 'en',
      currency: 'USD',
    },
  });

  const handleSaveProfile = () => {
    // Save user profile to the backend
    console.log('Saving user profile:', userProfile);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>User Profile</Heading>
        <Text variant="lead" className="mt-2">
          Customize your personal settings and preferences.
        </Text>
        <Expandable title="General" className="mt-4">
          <div className="space-y-4">
            <div>
              <Heading level={4}>Name</Heading>
              <Text>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, name: e.target.value })
                  }
                  className="border rounded-md px-3 py-2 w-full"
                />
              </Text>
            </div>
            <div>
              <Heading level={4}>Email</Heading>
              <Text>{userProfile.email}</Text>
            </div>
          </div>
        </Expandable>
        <Expandable title="Preferences" className="mt-4">
          <div className="space-y-4">
            <div>
              <Heading level={4}>Theme</Heading>
              <Text>
                <select
                  value={userProfile.preferences.theme}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      preferences: {
                        ...userProfile.preferences,
                        theme: e.target.value,
                      },
                    })
                  }
                  className="border rounded-md px-3 py-2 w-full"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </Text>
            </div>
            <div>
              <Heading level={4}>Language</Heading>
              <Text>
                <select
                  value={userProfile.preferences.language}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      preferences: {
                        ...userProfile.preferences,
                        language: e.target.value,
                      },
                    })
                  }
                  className="border rounded-md px-3 py-2 w-full"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </Text>
            </div>
            <div>
              <Heading level={4}>Currency</Heading>
              <Text>
                <select
                  value={userProfile.preferences.currency}
                  onChange={(e) =>
                    setUserProfile({
                      ...userProfile,
                      preferences: {
                        ...userProfile.preferences,
                        currency: e.target.value,
                      },
                    })
                  }
                  className="border rounded-md px-3 py-2 w-full"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </Text>
            </div>
          </div>
        </Expandable>
        <Button variant="primary" onClick={handleSaveProfile} className="mt-4">
          Save Profile
        </Button>
      </Card>
    </Fade>
  );
};

export default UserProfileManager;