// MetaTagsManager.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Fade } from '../Animations';

const MetaTagsManager = () => {
  const [pageUrl, setPageUrl] = useState('');
  const [metaTags, setMetaTags] = useState({
    title: 'Example Page Title',
    description: 'Example page description.',
    keywords: 'example, page, keywords',
    robots: 'index, follow',
  });

  const handleUpdateMetaTags = () => {
    // Implement logic to update the page's meta tags
    console.log('Updating meta tags:', metaTags);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Meta Tags Manager</Heading>
        <Text variant="lead" className="mt-2">
          Customize your website's meta tags for improved search visibility.
        </Text>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Page URL</Heading>
            <input
              type="text"
              value={pageUrl}
              onChange={(e) => setPageUrl(e.target.value)}
              className="border rounded-md px-3 py-2 w-full"
              placeholder="https://example.com/page"
            />
          </div>
          <Expandable title="Meta Tag Settings" className="mt-4">
            <div className="space-y-4">
              <div>
                <Heading level={4}>Title</Heading>
                <input
                  type="text"
                  value={metaTags.title}
                  onChange={(e) => setMetaTags({ ...metaTags, title: e.target.value })}
                  className="border rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <Heading level={4}>Description</Heading>
                <textarea
                  value={metaTags.description}
                  onChange={(e) => setMetaTags({ ...metaTags, description: e.target.value })}
                  className="border rounded-md p-3 w-full h-20 font-mono"
                />
              </div>
              <div>
                <Heading level={4}>Keywords</Heading>
                <input
                  type="text"
                  value={metaTags.keywords}
                  onChange={(e) => setMetaTags({ ...metaTags, keywords: e.target.value })}
                  className="border rounded-md px-3 py-2 w-full"
                />
              </div>
              <div>
                <Heading level={4}>Robots</Heading>
                <input
                  type="text"
                  value={metaTags.robots}
                  onChange={(e) => setMetaTags({ ...metaTags, robots: e.target.value })}
                  className="border rounded-md px-3 py-2 w-full"
                />
              </div>
            </div>
          </Expandable>
          <Button variant="primary" onClick={handleUpdateMetaTags}>
            Update Meta Tags
          </Button>
        </div>
      </Card>
    </Fade>
  );
};

export default MetaTagsManager;