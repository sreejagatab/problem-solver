// Contact.js
import React from 'react';
import { Heading, Text, Button, Card, Flex } from '../components/UI';
import { Fade } from '../components/Animations';

const Contact = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <Fade>
            <Heading level={1}>Contact Us</Heading>
            <Text variant="lead" className="mt-4">
              Get in touch with our team for any inquiries or support.
            </Text>
          </Fade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8">
            <Flex>
              <div className="flex-1">
                <Heading level={3}>General Inquiries</Heading>
                <Text className="mt-4">
                  For any general questions or feedback, please don't hesitate to reach out to us.
                </Text>
                <Button variant="primary" className="mt-4">
                  Send Message
                </Button>
              </div>
              <div className="flex-1">
                <Heading level={3}>Technical Support</Heading>
                <Text className="mt-4">
                  If you're experiencing any technical issues or need assistance, our support team is here
                  to help.
                </Text>
                <Button variant="primary" className="mt-4">
                  Submit Ticket
                </Button>
              </div>
            </Flex>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;