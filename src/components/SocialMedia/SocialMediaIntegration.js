// SocialMediaIntegration.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Slide } from '../Animations';

const SocialMediaIntegration = () => {
  const handleConnectSocialMedia = () => {
    // Implement logic to connect the user's social media accounts
    console.log('Connecting social media accounts');
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Social Media Integration</Heading>
        <Text variant="lead" className="mt-2">
          Integrate your favorite social media platforms to enhance your problem-solving experience.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Connect Your Accounts</Heading>
            <Text>
              Link your social media accounts to share your work, connect with others, and stay up-to-date on
              industry trends.
            </Text>
            <Button variant="primary" onClick={handleConnectSocialMedia} className="mt-2">
              Connect Social Media
            </Button>
          </div>
          <div>
            <Heading level={4}>Engage with Your Network</Heading>
            <Text>
              Utilize your social media presence to collaborate, discover new opportunities, and showcase your
              problem-solving expertise.
            </Text>
          </div>
        </div>
      </Card>
    </Slide>
  );
};

export default SocialMediaIntegration;
