// SitemapGenerator.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from '../UI';
import { Slide } from '../Animations';

const SitemapGenerator = () => {
  const [sitemapUrl, setSitemapUrl] = useState('');

  const handleGenerateSitemap = async () => {
    // Implement logic to generate the website's sitemap
    const url = 'https://example.com/sitemap.xml';
    setSitemapUrl(url);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Sitemap Generator</Heading>
        <Text variant="lead" className="mt-2">
          Automatically generate and submit your website's sitemap.
        </Text>
        <div className="mt-4 space-y-4">
          {sitemapUrl ? (
            <div>
              <Text>Your sitemap is available at:</Text>
              <a href={sitemapUrl} target="_blank" rel="noopener noreferrer" className="text-primary-500">
                {sitemapUrl}
              </a>
            </div>
          ) : (
            <Button variant="primary" onClick={handleGenerateSitemap}>
              Generate Sitemap
            </Button>
          )}
        </div>
      </Card>
    </Slide>
  );
};

export default SitemapGenerator;
