// EthicalAIGovernance/ExplainableAITools.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ExplainableAITools from '../../../src/components/EthicalAIGovernance/ExplainableAITools';

test('renders explainable AI tools information', () => {
  render(<ExplainableAITools />);

  expect(screen.getByText('Feature Importance Visualization')).toBeInTheDocument();
  expect(screen.getByText('Model Interpretability Dashboards')).toBeInTheDocument();
  expect(screen.getByText('Counterfactual Explanation Generators')).toBeInTheDocument();
  expect(screen.getByText('Bias and Fairness Analysis Utilities')).toBeInTheDocument();
});

test('calls viewExplainableAITools handler when explore button is clicked', () => {
  const mockViewExplainableAITools = jest.fn();
  render(<ExplainableAITools viewExplainableAITools={mockViewExplainableAITools} />);
  screen.getByText('Explore Explainable AI Tools').click();
  expect(mockViewExplainableAITools).toHaveBeenCalledTimes(1);
});
