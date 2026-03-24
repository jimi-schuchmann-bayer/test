import React, { useState } from 'react';
import Header from './components/Header';
import KeyMetrics from './components/KeyMetrics';
import SalesAnalyticsChat from './components/SalesAnalyticsChat';
import CustomerPotential from './components/CustomerPotential';
import ProductPerformance from './components/ProductPerformance';
import CustomerInteraction from './components/CustomerInteraction';
import './App.css';

function App() {
  const [selectedTerritory, setSelectedTerritory] = useState('All Territories');

  return (
    <div className="app">
      <Header 
        selectedTerritory={selectedTerritory}
        onTerritoryChange={setSelectedTerritory}
      />
      
      <main className="main-content">
        <div className="dashboard-container">
          <KeyMetrics territory={selectedTerritory} />
          <SalesAnalyticsChat />
          <CustomerPotential />
          <ProductPerformance />
          <CustomerInteraction />
        </div>
      </main>
    </div>
  );
}

export default App;