// SelfLearningEngine/UserInteractionAnalysis.js
import React, { useState, useEffect } from 'react';
import { Card, Heading, Text, Button, Table, TableHead, TableBody, TableRow, TableCell } from '../components/UI';
import { Fade } from '../components/Animations';
import { analyzeUserInteractions, getRecommendedImprovements } from '../utils/selfLearning';

const UserInteractionAnalysis = () => {
  const [userInteractions, setUserInteractions] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchUserInteractions = async () => {
      const interactions = await analyzeUserInteractions();
      setUserInteractions(interactions);
    };
    fetchUserInteractions();
  }, []);

  const handleGetRecommendations = async () => {
    const recommendedImprovements = await getRecommendedImprovements(userInteractions);
    setRecommendations(recommendedImprovements);
  };

  return (
    <Fade>
      <Card className="p-6">
        <Heading level={3}>User Interaction Analysis</Heading>
        <div className="mt-4 space-y-4">
          <div>
            <Heading level={4}>User Interactions</Heading>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Action</TableCell>
                  <TableCell>Timestamp</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userInteractions.map((interaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{interaction.user}</TableCell>
                    <TableCell>{interaction.action}</TableCell>
                    <TableCell>{interaction.timestamp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Button variant="primary" onClick={handleGetRecommendations}>
            Get Recommendations
          </Button>
          {recommendations.length > 0 && (
            <div>
              <Heading level={4}>Recommended Improvements</Heading>
              <ul className="list-disc pl-6">
                {recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>
    </Fade>
  );
};

export default UserInteractionAnalysis;
