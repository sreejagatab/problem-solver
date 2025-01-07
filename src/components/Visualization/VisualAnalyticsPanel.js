// VisualAnalyticsPanel.js
import React, { useState } from 'react';
import { Card, Heading, Text, Button, Expandable } from '../UI';
import { LineChart, BarChart, PieChart } from 'recharts';
import { Slide } from '../Animations';

const VisualAnalyticsPanel = () => {
  const [activeChart, setActiveChart] = useState('line');

  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 450 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 550 },
  ];

  const handleChartChange = (chart) => {
    setActiveChart(chart);
  };

  return (
    <Slide>
      <Card className="p-8">
        <Heading level={2}>Visual Analytics Panel</Heading>
        <Text variant="lead" className="mt-2">
          Explore your data through interactive visualizations.
        </Text>
        <Expandable title="Chart Selection" className="mt-4">
          <div className="flex justify-center space-x-4">
            <Button
              variant={activeChart === 'line' ? 'primary' : 'tertiary'}
              onClick={() => handleChartChange('line')}
            >
              Line Chart
            </Button>
            <Button
              variant={activeChart === 'bar' ? 'primary' : 'tertiary'}
              onClick={() => handleChartChange('bar')}
            >
              Bar Chart
            </Button>
            <Button
              variant={activeChart === 'pie' ? 'primary' : 'tertiary'}
              onClick={() => handleChartChange('pie')}
            >
              Pie Chart
            </Button>
          </div>
        </Expandable>
        <div className="mt-4">
          {activeChart === 'line' && (
            <LineChart width={600} height={400} data={data}>
              <text x="50%" y="10%" textAnchor="middle" dominantBaseline="hanging">
                Monthly Revenue
              </text>
            </LineChart>
          )}
          {activeChart === 'bar' && (
            <BarChart width={600} height={400} data={data}>
              <text x="50%" y="10%" textAnchor="middle" dominantBaseline="hanging">
                Monthly Revenue
              </text>
            </BarChart>
          )}
          {activeChart === 'pie' && (
            <PieChart width={400} height={400}>
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                Monthly Revenue
              </text>
              <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle">
                (Simplified)
              </text>
            </PieChart>
          )}
        </div>
      </Card>
    </Slide>
  );
};

export default VisualAnalyticsPanel;