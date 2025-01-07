// DynamicVisualizations.js
import React from 'react';
import { Card, Heading, Text } from '../UI';
import { Fade } from '../Animations';
import { LineChart, BarChart, PieChart, ScatterChart } from 'recharts';

const DynamicVisualizations = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 450 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 550 },
  ];

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Dynamic Visualizations</Heading>
        <Text variant="lead" className="mt-2">
          Explore your data through a variety of interactive visualizations.
        </Text>
        <div className="mt-4 grid grid-cols-2 gap-6">
          <div>
            <LineChart width={300} height={200} data={data}>
              <text x="50%" y="10%" textAnchor="middle" dominantBaseline="hanging">
                Line Chart
              </text>
            </LineChart>
          </div>
          <div>
            <BarChart width={300} height={200} data={data}>
              <text x="50%" y="10%" textAnchor="middle" dominantBaseline="hanging">
                Bar Chart
              </text>
            </BarChart>
          </div>
          <div>
            <PieChart width={300} height={200}>
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                Pie Chart
              </text>
            </PieChart>
          </div>
          <div>
            <ScatterChart width={300} height={200} data={data}>
              <text x="50%" y="10%" textAnchor="middle" dominantBaseline="hanging">
                Scatter Chart
              </text>
            </ScatterChart>
          </div>
        </div>
      </Card>
    </Fade>
  );
};

export default DynamicVisualizations;
