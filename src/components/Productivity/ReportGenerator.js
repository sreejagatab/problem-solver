// ReportGenerator.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { Slide } from '../Animations';

const ReportGenerator = () => {
  const [reportTitle, setReportTitle] = useState('');
  const [reportContent, setReportContent] = useState('');

  const handleGenerateReport = () => {
    // Implement logic to generate the report
    console.log('Generating report:', {
      title: reportTitle,
      content: reportContent,
    });
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Report Generator</Heading>
        <Text variant="lead" className="mt-2">
          Create professional-looking reports with ease.
        </Text>
        <Expandable title="Report Details" className="mt-4">
          <div className="space-y-4">
            <div>
              <Heading level={4}>Report Title</Heading>
              <input
                type="text"
                value={reportTitle}
                onChange={(e) => setReportTitle(e.target.value)}
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <Heading level={4}>Report Content</Heading>
              <textarea
                value={reportContent}
                onChange={(e) => setReportContent(e.target.value)}
                className="border rounded-md p-3 w-full h-32 font-mono"
              />
            </div>
          </div>
        </Expandable>
        <Button variant="primary" onClick={handleGenerateReport} className="mt-4">
          Generate Report
        </Button>
      </Card>
    </Slide>
  );
};

export default ReportGenerator;