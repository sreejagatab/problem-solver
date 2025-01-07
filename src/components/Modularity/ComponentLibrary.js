// ComponentLibrary.js
import React from 'react';
import { Card, Button, Alert, Grid, Flex, Heading, Text, Scrollable, Expandable, Modal, Tooltip, Tabs } from './UI';
import { Header, Footer, UserMenu, Sidebar } from './Layout';
import { Fade, Slide, Rotate, Scale, Parallax } from './Animations';
import { HoverMenu, Breadcrumbs, AnchorLinks, ExpandableContent } from './Interactivity';

const ComponentLibrary = () => {
  return (
    <div className="p-8">
      <Heading level={2}>Component Library</Heading>
      <Grid className="mt-8">
        <Card>
          <Heading level={3}>UI Components</Heading>
          <Text variant="lead" className="mt-2">
            A collection of reusable UI elements.
          </Text>
          <div className="mt-4 space-y-4">
            <Card>
              <Heading level={4}>Card</Heading>
              <Text>Versatile container with enhanced styles.</Text>
              <Card className="mt-2">Sample Card Content</Card>
            </Card>
            {/* Add more UI component examples here */}
          </div>
        </Card>

        <Card>
          <Heading level={3}>Layout Components</Heading>
          <Text variant="lead" className="mt-2">
            Components for structuring the page layout.
          </Text>
          <div className="mt-4 space-y-4">
            <Card>
              <Heading level={4}>Header</Heading>
              <Text>Responsive and branded header with user menu.</Text>
              <Header />
            </Card>
            {/* Add more layout component examples here */}
          </div>
        </Card>

        {/* Add more component categories as needed */}
      </Grid>
    </div>
  );
};

export default ComponentLibrary;