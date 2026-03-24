import React from 'react';
import { Menu, Bell, User, ChevronDown } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  selectedTerritory: string;
  onTerritoryChange: (territory: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedTerritory, onTerritoryChange }) => {
  const territories = [
    'All Territories',
    'North Region',
    'South Region',
    'East Region',
    'West Region',
    'Midwest'
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="menu-button" aria-label="Menu">
            <Menu size={24} />
          </button>
          <div className="logo">
            <svg width="120" height="32" viewBox="0 0 120 32" fill="none">
              <rect width="32" height="32" rx="4" fill="#00A651"/>
              <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="white"/>
              <text x="40" y="22" fill="#1a1a1a" fontSize="18" fontWeight="700">Bayer CRM</text>
            </svg>
          </div>
        </div>

        <div className="header-center">
          <select 
            className="territory-select"
            value={selectedTerritory}
            onChange={(e) => onTerritoryChange(e.target.value)}
          >
            {territories.map(territory => (
              <option key={territory} value={territory}>{territory}</option>
            ))}
          </select>
        </div>

        <div className="header-right">
          <button className="icon-button" aria-label="Notifications">
            <Bell size={20} />
            <span className="notification-badge">3</span>
          </button>
          <button className="user-button">
            <User size={20} />
            <span>John Smith</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;