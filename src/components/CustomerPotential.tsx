import React, { useState } from 'react';
import { Users, TrendingUp, DollarSign, PieChart, Filter } from 'lucide-react';
import './CustomerPotential.css';

const CustomerPotential: React.FC = () => {
  const [sortBy, setSortBy] = useState('potential');
  const [filterBy, setFilterBy] = useState('all');

  const customers = [
    { name: 'Green Valley Farms', totalLand: 1200, usingProduct: 750, potential: 450, margin: 28, shareOfWallet: 62, region: 'North' },
    { name: 'Riverside Agriculture', totalLand: 980, usingProduct: 600, potential: 380, margin: 32, shareOfWallet: 61, region: 'South' },
    { name: 'Sunset Farms', totalLand: 850, usingProduct: 530, potential: 320, margin: 25, shareOfWallet: 62, region: 'East' },
    { name: 'Prairie View Co-op', totalLand: 1100, usingProduct: 810, potential: 290, margin: 30, shareOfWallet: 74, region: 'West' },
    { name: 'Heritage Growers', totalLand: 720, usingProduct: 455, potential: 265, margin: 27, shareOfWallet: 63, region: 'Midwest' },
    { name: 'Meadowbrook Farms', totalLand: 890, usingProduct: 650, potential: 240, margin: 29, shareOfWallet: 73, region: 'North' },
    { name: 'Golden Harvest Inc', totalLand: 1050, usingProduct: 820, potential: 230, margin: 31, shareOfWallet: 78, region: 'South' },
    { name: 'Oakwood Agriculture', totalLand: 670, usingProduct: 450, potential: 220, margin: 26, shareOfWallet: 67, region: 'East' },
    { name: 'Silver Creek Farms', totalLand: 780, usingProduct: 570, potential: 210, margin: 28, shareOfWallet: 73, region: 'West' },
    { name: 'Blue Ridge Co-op', totalLand: 920, usingProduct: 720, potential: 200, margin: 33, shareOfWallet: 78, region: 'Midwest' }
  ];

  const sortedCustomers = [...customers].sort((a, b) => {
    switch (sortBy) {
      case 'potential':
        return b.potential - a.potential;
      case 'margin':
        return b.margin - a.margin;
      case 'shareOfWallet':
        return b.shareOfWallet - a.shareOfWallet;
      default:
        return 0;
    }
  });

  const filteredCustomers = filterBy === 'all' 
    ? sortedCustomers 
    : sortedCustomers.filter(c => c.region === filterBy);

  return (
    <section className="customer-potential">
      <div className="section-header">
        <div className="header-left">
          <Users size={24} />
          <h2>Customer Potential Analysis</h2>
        </div>
        <div className="header-controls">
          <select 
            className="control-select"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="all">All Regions</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="Midwest">Midwest</option>
          </select>
          <select 
            className="control-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="potential">Sort by Potential</option>
            <option value="margin">Sort by Margin</option>
            <option value="shareOfWallet">Sort by Share of Wallet</option>
          </select>
        </div>
      </div>

      <div className="potential-grid">
        {filteredCustomers.map((customer, index) => (
          <div key={customer.name} className="customer-card">
            <div className="customer-rank">#{index + 1}</div>
            <div className="customer-info">
              <h3>{customer.name}</h3>
              <span className="customer-region">{customer.region} Region</span>
            </div>
            
            <div className="customer-metrics">
              <div className="metric">
                <div className="metric-icon-wrapper potential">
                  <TrendingUp size={16} />
                </div>
                <div className="metric-details">
                  <span className="metric-label">Growth Potential</span>
                  <span className="metric-value">{customer.potential} acres</span>
                  <div className="metric-bar">
                    <div 
                      className="metric-bar-fill potential"
                      style={{ width: `${(customer.potential / customer.totalLand) * 100}%` }}
                    />
                  </div>
                  <span className="metric-subtext">
                    {customer.usingProduct} / {customer.totalLand} acres utilized
                  </span>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon-wrapper margin">
                  <DollarSign size={16} />
                </div>
                <div className="metric-details">
                  <span className="metric-label">Profit Margin</span>
                  <span className="metric-value">{customer.margin}%</span>
                </div>
              </div>

              <div className="metric">
                <div className="metric-icon-wrapper wallet">
                  <PieChart size={16} />
                </div>
                <div className="metric-details">
                  <span className="metric-label">Share of Wallet</span>
                  <span className="metric-value">{customer.shareOfWallet}%</span>
                  <div className="metric-bar">
                    <div 
                      className="metric-bar-fill wallet"
                      style={{ width: `${customer.shareOfWallet}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerPotential;