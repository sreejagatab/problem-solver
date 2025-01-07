// SelfLearningEngine/CompetitiveMonitoring.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Table, TableHead, TableBody, TableRow, TableCell } from '../components/UI';
import { Fade } from '../components/Animations';
import { monitorCompetitors, analyzeCompetitorData } from '../utils/selfLearning';

const CompetitiveMonitoring = () => {
  const [competitorData, setCompetitorData] = useState([]);
  const [analysisResults, setAnalysisResults] = useState({});

  useEffect(() => {
    const fetchCompetitorData = async () => {
      const data = await monitorCompetitors();
      setCompetitorData(data);
    };
    fetchCompetitorData();
  }, []);

  const handleAnalyzeCompetitors = async () => {
    const results = await analyzeCompetitorData(competitorData);
    setAnalysisResults(results);
  };

  return (
    <Fade>
      <Card className="p-6">
        <Heading level={3}>Competitive Monitoring</Heading>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>Competitor Data</Heading>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Company</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Features</TableCell>
                  <TableCell>Pricing</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {competitorData.map((competitor, index) => (
                  <TableRow key={index}>
                    <TableCell>{competitor.company}</TableCell>
                    <TableCell>{competitor.product}</TableCell>
                    <TableCell>{competitor.features.join(', ')}</TableCell>
                    <TableCell>{competitor.pricing}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Button variant="primary" onClick={handleAnalyzeCompetitors}>
            Analyze Competitors
          </Button>
          {Object.keys(analysisResults).length > 0 && (
            <div>
              <Heading level={4}>Analysis Results</Heading>
              <div className="space-y-2">
                <div>
                  <Heading level={5}>Advantages:</Heading>
                  <Text>{analysisResults.advantages.join(', ')}</Text>
                </div>
                <div>
                  <Heading level={5}>Disadvantages:</Heading>
                  <Text>{analysisResults.disadvantages.join(', ')}</Text>
                </div>
                <div>
                <Heading level={5}>Opportunities:</Heading>
                  <Text>{analysisResults.opportunities.join(', ')}</Text>
                </div>
                <div>
                  <Heading level={5}>Threats:</Heading>
                  <Text>{analysisResults.threats.join(', ')}</Text>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </Fade>
  );
};

export default CompetitiveMonitoring;
