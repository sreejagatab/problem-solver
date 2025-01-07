// PerformanceOptimizer.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button } from './UI';
import { Fade } from './Animations';

const PerformanceOptimizer = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (isOptimizing) {
      interval = setInterval(() => {
        setOptimizationProgress((progress) => {
          if (progress === 100) {
            clearInterval(interval);
            setIsOptimizing(false);
            return 100;
          }
          return progress + 10;
        });
      }, 500);
    }

    return () => clearInterval(interval);
  }, [isOptimizing]);

  const handleOptimize = () => {
    setIsOptimizing(true);
  };

  return (
    <Fade>
      <Card className="p-8">
        <Heading level={2}>Performance Optimizer</Heading>
        <Text variant="lead" className="mt-2">
          Improve the website's performance with our intelligent optimization tool.
        </Text>
        {isOptimizing ? (
          <div className="mt-4">
            <Text>Optimizing website performance...</Text>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
              <div
                className="bg-primary-500 text-white text-xs font-medium p-1 leading-none rounded-full"
                style={{ width: `${optimizationProgress}%` }}
              >
                {optimizationProgress}%
              </div>
            </div>
          </div>
        ) : (
          <Button variant="primary" onClick={handleOptimize} className="mt-4">
            Optimize Now
          </Button>
        )}
      </Card>
    </Fade>
  );
};

export default PerformanceOptimizer;