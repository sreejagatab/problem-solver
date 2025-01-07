// SocialShareButtons.js
import React from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Fade } from '../Animations';
import { FacebookShareButton, TwitterShareButton, LinkedInShareButton } from 'react-share';

const SocialShareButtons = () => {
  const currentUrl = window.location.href;

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Social Share Buttons</Heading>
        <Text variant="lead" className="mt-2">
          Encourage your users to share your content across social media platforms.
        </Text>
        <div className="mt-4 flex justify-center space-x-4">
          <FacebookShareButton url={currentUrl}>
            <Button variant="primary">
              <i className="fab fa-facebook-f"></i> Share on Facebook
            </Button>
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl}>
            <Button variant="primary">
              <i className="fab fa-twitter"></i> Share on Twitter
            </Button>
          </TwitterShareButton>
          <LinkedInShareButton url={currentUrl}>
            <Button variant="primary">
              <i className="fab fa-linkedin-in"></i> Share on LinkedIn
            </Button>
          </LinkedInShareButton>
        </div>
      </Card>
    </Fade>
  );
};

export default SocialShareButtons;