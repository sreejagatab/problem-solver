// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, Footer, Sidebar } from './components/Layout';
import {
  Home,
  About,
  Contact,
  Dashboard,
  ModelManagement,
  Tutorial,
  ProblemDetail,
  IDE,
  ReportPage,
  EthicalAIPage,
  ModelMarketplace,
  Accessibility,
  ReinforcementRecommendations,
  QuantumOptimization,
  GenerativeSolutions,
  ProblemSolvingLifecycle,
  NeuromorphicModeling,
  IdeaExchange,
  VisualAnalytics,
  IntegrationHub,
  WorkflowAutomation,
  CollaborativeWorkspace,
  PersonalizedExperience,
  InfrastructureHealth,
  EcoSystemMarketplace,
  DeveloperPlayground,
  ContainerizedDeployment,
  EdgeComputing,
  AutomatedTroubleshooting,
  MultiTenantManagement,
  CollaborativeKnowledge,
  PredictiveMaintenance,
  HybridCloudManagement,
  EthicalAIGovernance,
  SustainabilityTracker,
  DigitalTwinMarketplace,
  EdgeComputingIntegration,
  AIIdeationWorkspace,
  DecentralizedProblemSolving,
  AnomalyDetectionDashboard
} from './pages';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/model-management" component={ModelManagement} />
              <Route path="/tutorial" component={Tutorial} />
              <Route path="/problem-detail" component={ProblemDetail} />
              <Route path="/ide" component={IDE} />
              <Route path="/report" component={ReportPage} />
              <Route path="/ethical-ai" component={EthicalAIPage} />
              <Route path="/model-marketplace" component={ModelMarketplace} />
              <Route path="/accessibility" component={Accessibility} />
              <Route path="/reinforcement-recommendations" component={ReinforcementRecommendations} />
              <Route path="/quantum-optimization" component={QuantumOptimization} />
              <Route path="/generative-solutions" component={GenerativeSolutions} />
              <Route path="/problem-solving-lifecycle" component={ProblemSolvingLifecycle} />
              <Route path="/neuromorphic-modeling" component={NeuromorphicModeling} />
              <Route path="/idea-exchange" component={IdeaExchange} />
              <Route path="/visual-analytics" component={VisualAnalytics} />
              <Route path="/integration-hub" component={IntegrationHub} />
              <Route path="/workflow-automation" component={WorkflowAutomation} />
              <Route path="/collaborative-workspace" component={CollaborativeWorkspace} />
              <Route path="/personalized-experience" component={PersonalizedExperience} />
              <Route path="/infrastructure-health" component={InfrastructureHealth} />
              <Route path="/ecosystem-marketplace" component={EcoSystemMarketplace} />
              <Route path="/developer-playground" component={DeveloperPlayground} />
              <Route path="/containerized-deployment" component={ContainerizedDeployment} />
              <Route path="/edge-computing" component={EdgeComputing} />
              <Route path="/automated-troubleshooting" component={AutomatedTroubleshooting} />
              <Route path="/multi-tenant-management" component={MultiTenantManagement} />
              <Route path="/collaborative-knowledge" component={CollaborativeKnowledge} />
              <Route path="/predictive-maintenance" component={PredictiveMaintenance} />
              <Route path="/hybrid-cloud-management" component={HybridCloudManagement} />
              <Route path="/ethical-ai-governance" component={EthicalAIGovernance} />
              <Route path="/sustainability-tracker" component={SustainabilityTracker} />
              <Route path="/digital-twin-marketplace" component={DigitalTwinMarketplace} />
              <Route path="/edge-computing-integration" component={EdgeComputingIntegration} />
              <Route path="/ai-ideation-workspace" component={AIIdeationWorkspace} />
              <Route path="/decentralized-problem-solving" component={DecentralizedProblemSolving} />
              <Route path="/anomaly-detection-dashboard" component={AnomalyDetectionDashboard} />
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;