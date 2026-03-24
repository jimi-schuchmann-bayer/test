import React from 'react';
import { Package, TrendingUp, TrendingDown } from 'lucide-react';
import './ProductPerformance.css';

const ProductPerformance: React.FC = () => {
  const products = [
    { name: 'DeKalb DKC70-27RIB Corn Seed', sellOutValue: 1850000, delivered: 92, allocated: 88, targetOrdered: 95, trend: 'up' },
    { name: 'Acceleron Seed Treatment', sellOutValue: 1620000, delivered: 89, allocated: 91, targetOrdered: 88, trend: 'up' },
    { name: 'Asgrow AG28X9 Soybean', sellOutValue: 1480000, delivered: 95, allocated: 93, targetOrdered: 92, trend: 'up' },
    { name: 'Roundup PowerMAX 3', sellOutValue: 1340000, delivered: 87, allocated: 85, targetOrdered: 90, trend: 'down' },
    { name: 'DeKalb DKC64-65RIB Corn Seed', sellOutValue: 1290000, delivered: 91, allocated: 89, targetOrdered: 93, trend: 'up' },
    { name: 'Bayer CropScience Fungicide', sellOutValue: 1180000, delivered: 88, allocated: 92, targetOrdered: 87, trend: 'up' },
    { name: 'Asgrow AG35X7 Soybean', sellOutValue: 1120000, delivered: 93, allocated: 90, targetOrdered: 91, trend: 'up' },
    { name: 'Poncho/VOTiVO Seed Treatment', sellOutValue: 980000, delivered: 86, allocated: 88, targetOrdered: 89, trend: 'down' },
    { name: 'DeKalb DKC61-88RIB Corn Seed', sellOutValue: 920000, delivered: 90, allocated: 87, targetOrdered: 92, trend: 'up' },
    { name: 'Liberty Herbicide', sellOutValue: 850000, delivered: 85, allocated: 86, targetOrdered: 88, trend: 'down' }
  ];

  const formatCurrency = (value: number) => {
    return `$${(value / 1000000).toFixed(2)}M`;
  };

  const getStatusColor = (percentage: number) => {
    if (percentage >= 90) return 'high';
    if (percentage >= 80) return 'medium';
    return 'low';
  };

  return (
    <section className="product-performance">
      <div className="section-header">
        <div className="header-left">
          <Package size={24} />
          <h2>Product Performance</h2>
        </div>
        <div className="performance-summary">
          <span>Showing top 10 products by sell-out value</span>
        </div>
      </div>

      <div className="table-container">
        <table className="performance-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Sell-Out Value</th>
              <th>Delivered %</th>
              <th>Allocated / Ordered %</th>
              <th>Target / Ordered %</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="product-name">
                  <div className="product-rank">{index + 1}</div>
                  {product.name}
                </td>
                <td className="sell-out-value">{formatCurrency(product.sellOutValue)}</td>
                <td>
                  <div className="percentage-cell">
                    <span className={`percentage-badge ${getStatusColor(product.delivered)}`}>
                      {product.delivered}%
                    </span>
                    <div className="percentage-bar">
                      <div 
                        className={`percentage-bar-fill ${getStatusColor(product.delivered)}`}
                        style={{ width: `${product.delivered}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="percentage-cell">
                    <span className={`percentage-badge ${getStatusColor(product.allocated)}`}>
                      {product.allocated}%
                    </span>
                    <div className="percentage-bar">
                      <div 
                        className={`percentage-bar-fill ${getStatusColor(product.allocated)}`}
                        style={{ width: `${product.allocated}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="percentage-cell">
                    <span className={`percentage-badge ${getStatusColor(product.targetOrdered)}`}>
                      {product.targetOrdered}%
                    </span>
                    <div className="percentage-bar">
                      <div 
                        className={`percentage-bar-fill ${getStatusColor(product.targetOrdered)}`}
                        style={{ width: `${product.targetOrdered}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div className={`trend-indicator ${product.trend}`}>
                    {product.trend === 'up' ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductPerformance;