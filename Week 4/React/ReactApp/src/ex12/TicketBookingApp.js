import React, { useState } from 'react';
import './booking.css';

// Subcomponents as defined in the Lab instructions
function LoginButton(props) {
  return (
    <button className="auth-btn login-btn" onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className="auth-btn logout-btn" onClick={props.onClick}>
      Logout
    </button>
  );
}

function UserGreeting() {
  return <h1 className="greeting-text">Welcome back</h1>;
}

function GuestGreeting() {
  return <h1 className="greeting-text">Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Sample flights array
const flightsData = [
  { id: '1', flightNo: 'AI-101', source: 'Delhi (DEL)', destination: 'Mumbai (BOM)', departure: '10:00 AM', price: '₹5,500' },
  { id: '2', flightNo: '6E-502', source: 'Bangalore (BLR)', destination: 'Chennai (MAA)', departure: '02:30 PM', price: '₹3,200' },
  { id: '3', flightNo: 'UK-904', source: 'Kolkata (CCU)', destination: 'Delhi (DEL)', departure: '06:15 PM', price: '₹6,800' },
  { id: '4', flightNo: 'I5-742', source: 'Pune (PNQ)', destination: 'Jaipur (JAI)', departure: '09:45 PM', price: '₹4,900' }
];

function TicketBookingApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookingSuccessMsg, setBookingSuccessMsg] = useState(null);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const handleBookTicket = (flightNo) => {
    const msg = `Ticket Booked Successfully for Flight ${flightNo}!`;
    setBookingSuccessMsg(msg);
    try {
      alert(msg);
    } catch (err) {
      console.warn("Alert blocked:", err);
    }
  };

  const closeBookingModal = () => {
    setBookingSuccessMsg(null);
  };

  // Conditional variable for auth button rendering
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="booking-app-container">
      {/* Header section displaying Greeting based on auth state, along with appropriate button */}
      <div className="booking-header">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>

      {/* Flights Listing section */}
      <div className="flights-section">
        <h2>Available Flights & Bookings</h2>
        <div className="flights-list">
          {flightsData.map((flight) => (
            <div key={flight.id} className="flight-card">
              <div className="flight-info">
                <div className="info-item">
                  <span className="info-label">Flight</span>
                  <span className="info-value">{flight.flightNo}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">From</span>
                  <span className="info-value">{flight.source}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">To</span>
                  <span className="info-value">{flight.destination}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Departure</span>
                  <span className="info-value">{flight.departure}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Fare</span>
                  <span className="info-value price">{flight.price}</span>
                </div>
              </div>

              {/* Conditional rendering for Booking actions */}
              <div className="booking-actions">
                {isLoggedIn ? (
                  <button 
                    className="book-btn" 
                    onClick={() => handleBookTicket(flight.flightNo)}
                  >
                    Book Ticket
                  </button>
                ) : (
                  <span className="disabled-action-text">Login to Book</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Booking notification fallback modal */}
      {bookingSuccessMsg && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-card" style={{ borderLeft: '5px solid #10b981' }}>
            <div className="custom-modal-header">
              <h3 style={{ color: '#10b981' }}>Booking Confirmed</h3>
            </div>
            <div className="custom-modal-body">
              <p>{bookingSuccessMsg}</p>
            </div>
            <div className="custom-modal-footer">
              <button 
                className="auth-btn login-btn" 
                onClick={closeBookingModal}
                style={{ backgroundColor: '#10b981', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)' }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketBookingApp;
