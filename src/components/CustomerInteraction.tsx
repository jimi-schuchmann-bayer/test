import React from 'react';
import { Calendar, FileText, UserPlus, MapPin, Clock, AlertCircle } from 'lucide-react';
import './CustomerInteraction.css';

const CustomerInteraction: React.FC = () => {
  const upcomingEvents = [
    { 
      title: 'Annual Seed Selection Meeting', 
      customer: 'Green Valley Farms', 
      date: '2024-01-15', 
      time: '10:00 AM',
      location: 'Farm Office',
      type: 'meeting'
    },
    { 
      title: 'Field Day - Corn Demonstration', 
      customer: 'Multiple Customers', 
      date: '2024-01-18', 
      time: '2:00 PM',
      location: 'Demo Plot 3',
      type: 'event'
    },
    { 
      title: 'Product Training Session', 
      customer: 'Prairie View Co-op', 
      date: '2024-01-22', 
      time: '9:00 AM',
      location: 'Co-op Conference Room',
      type: 'training'
    },
    { 
      title: 'Contract Review', 
      customer: 'Riverside Agriculture', 
      date: '2024-01-25', 
      time: '1:30 PM',
      location: 'Virtual Meeting',
      type: 'meeting'
    }
  ];

  const recentMeetings = [
    { 
      customer: 'Sunset Farms', 
      date: '2024-01-08', 
      subject: 'Q4 Order Review',
      outcome: 'Increased soybean order by 15%',
      notes: 'Customer satisfied with yield results. Interested in new varieties.'
    },
    { 
      customer: 'Heritage Growers', 
      date: '2024-01-06', 
      subject: 'Season Planning',
      outcome: 'Committed to corn seed program',
      notes: 'Discussed precision ag integration. Follow-up needed on equipment.'
    },
    { 
      customer: 'Meadowbrook Farms', 
      date: '2024-01-05', 
      subject: 'Payment Terms Discussion',
      outcome: 'Extended credit terms approved',
      notes: 'Strong relationship. Referred 2 neighboring farms.'
    }
  ];

  const suggestedVisits = [
    { 
      customer: 'Golden Harvest Inc', 
      priority: 'high',
      reason: 'High growth potential (230 acres untapped)',
      lastContact: '45 days ago',
      recommendedAction: 'Schedule field visit to discuss expansion opportunities'
    },
    { 
      customer: 'Blue Ridge Co-op', 
      priority: 'high',
      reason: 'Contract renewal approaching',
      lastContact: '30 days ago',
      recommendedAction: 'Present new product lineup and renewal incentives'
    },
    { 
      customer: 'Oakwood Agriculture', 
      priority: 'medium',
      reason: 'Declining order volume (-12% YoY)',
      lastContact: '60 days ago',
      recommendedAction: 'Investigate concerns and address competitive pressure'
    },
    { 
      customer: 'Silver Creek Farms', 
      priority: 'medium',
      reason: 'Positive feedback on recent purchases',
      lastContact: '20 days ago',
      recommendedAction: 'Capture testimonial and explore upsell opportunities'
    }
  ];

  return (
    <section className="customer-interaction">
      <div className="section-header">
        <div className="header-left">
          <Calendar size={24} />
          <h2>Customer Interactions</h2>
        </div>
      </div>

      <div className="interaction-grid">
        <div className="interaction-card">
          <div className="card-header">
            <Calendar size={20} />
            <h3>Upcoming Events</h3>
          </div>
          <div className="events-list">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-item">
                <div className={`event-type-badge ${event.type}`}>
                  {event.type}
                </div>
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <p className="event-customer">{event.customer}</p>
                  <div className="event-meta">
                    <span className="event-date">
                      <Clock size={14} />
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at {event.time}
                    </span>
                    <span className="event-location">
                      <MapPin size={14} />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="interaction-card">
          <div className="card-header">
            <FileText size={20} />
            <h3>Recent Meetings</h3>
          </div>
          <div className="meetings-list">
            {recentMeetings.map((meeting, index) => (
              <div key={index} className="meeting-item">
                <div className="meeting-header">
                  <h4>{meeting.customer}</h4>
                  <span className="meeting-date">
                    {new Date(meeting.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <p className="meeting-subject">{meeting.subject}</p>
                <div className="meeting-outcome">
                  <strong>Outcome:</strong> {meeting.outcome}
                </div>
                <p className="meeting-notes">{meeting.notes}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="interaction-card suggested-visits">
          <div className="card-header">
            <UserPlus size={20} />
            <h3>Suggested Customer Visits</h3>
          </div>
          <div className="suggestions-list">
            {suggestedVisits.map((suggestion, index) => (
              <div key={index} className="suggestion-item">
                <div className="suggestion-header">
                  <h4>{suggestion.customer}</h4>
                  <span className={`priority-badge ${suggestion.priority}`}>
                    <AlertCircle size={14} />
                    {suggestion.priority} priority
                  </span>
                </div>
                <div className="suggestion-reason">
                  <strong>Reason:</strong> {suggestion.reason}
                </div>
                <div className="suggestion-meta">
                  <span className="last-contact">Last contact: {suggestion.lastContact}</span>
                </div>
                <div className="suggestion-action">
                  <strong>Recommended Action:</strong>
                  <p>{suggestion.recommendedAction}</p>
                </div>
                <button className="schedule-button">Schedule Visit</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerInteraction;