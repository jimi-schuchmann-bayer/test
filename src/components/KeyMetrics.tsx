import React from 'react';
import { TrendingUp, TrendingDown, Package, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './KeyMetrics.css';

interface KeyMetricsProps {
  territory: string;
}

const KeyMetrics: React.FC<KeyMetricsProps> = ({ territory }) => {
  const salesComparisonData = [
    { category: 'Corn', previousYear: 2450000, currentYear: 2780000 },
    { category: 'Soy', previousYear: 1890000, currentYear: 2150000 },
    { category: 'Crop Protection', previousYear: 3200000, currentYear: 3650000 }
  ];

  const stockLevelData = [
    { category: 'Corn', sellIn: 850, sellOut: 720 },
    { category: 'Soy', sellIn: 640, sellOut: 590 },
    { category: 'Crop Protection', sellIn: 920, sellOut: 880 }
  ];

  const salesProgressData = [
    { category: 'Corn', current: 2780000, target: 3200000, progress: 87 },
    { category: 'Soy', current: 2150000, target: 2400000, progress: 90 },
    { category: 'Crop Protection', current: 3650000, target: 4000000, progress: 91 }
  ];

  const formatCurrency = (value: number) => {
    return `$${(value / 1000000).toFixed(1)}M`;
  };

  const totalGrowth = salesComparisonData.reduce((acc, item) => {
    const growth = ((item.currentYear - item.previousYear) / item.previousYear) * 100;
    return acc + growth;
  }, 0) / salesComparisonData.length;

  return (
    <section className="key-metrics">
      <div className="section-header">
        <h2>Key Performance Metrics</h2>
        <div className="metric-badge">
          {totalGrowth > 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{totalGrowth.toFixed(1)}% YoY Growth</span>
        </div>
      </div>

      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-card-header">
            <h3>Sales Comparison (YoY)</h3>
            <TrendingUp className="metric-icon" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesComparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="category" />
              <YAxis tickFormatter={formatCurrency} />
              <Tooltip formatter={(value) => formatCurrency(Number(value))} />
              <Legend />
              <Bar dataKey="previousYear" fill="#9ca3af" name="Previous Year" radius={[4, 4, 0, 0]} />
              <Bar dataKey="currentYear" fill="#00A651" name="Current Year" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="metric-card">
          <div className="metric-card-header">
            <h3>Stock Levels (Sell In vs Sell Out)</h3>
            <Package className="metric-icon" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stockLevelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sellIn" fill="#3b82f6" name="Sell In (Units)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="sellOut" fill="#10b981" name="Sell Out (Units)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="metric-card">
          <div className="metric-card-header">
            <h3>Territory Sales Progress</h3>
            <Target className="metric-icon" />
          </div>
          <div className="progress-list">
            {salesProgressData.map((item) => (
              <div key={item.category} className="progress-item">
                <div className="progress-header">
                  <span className="progress-category">{item.category}</span>
                  <span className="progress-percentage">{item.progress}%</span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
                <div className="progress-values">
                  <span>{formatCurrency(item.current)} / {formatCurrency(item.target)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;