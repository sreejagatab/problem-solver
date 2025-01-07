import React from 'react';
import { Heading, Text, Card } from '../components/UI';
import { Fade, Slide } from '../components/Animations';
import { SecurityControls } from '../components/Governance';

const MultiTenantManagement = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Multi-Tenant Management</Heading>
            <Text variant="lead" className="mt-4">
              Ensure secure and efficient management of multiple tenants on the platform.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Slide>
            <Card className="p-8">
              <SecurityControls />
            </Card>
          </Slide>
        </div>
      </section>
    </div>
  );
};

export default MultiTenantManagement;