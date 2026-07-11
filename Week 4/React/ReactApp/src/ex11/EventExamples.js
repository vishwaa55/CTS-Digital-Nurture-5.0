import React, { Component } from 'react';
import './events.css';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const amt = parseFloat(this.state.amount) || 0;
    const curr = this.state.currency.trim().toLowerCase();

    if (curr === 'euro' || curr === 'euros') {
      const converted = amt * 80; // Conversion rate: 1 Euro = 80 Rupees
      const msg = `Converting to Euro Amount is ${converted}`;
      this.props.showAlert(msg);
      try {
        alert(msg);
      } catch (err) {
        console.warn("Native alert blocked:", err);
      }
    } else {
      const msg = `Unsupported currency or conversion. Try typing "Euro" as currency.`;
      this.props.showAlert(msg);
      try {
        alert(msg);
      } catch (err) {
        console.warn("Native alert blocked:", err);
      }
    }
  };

  render() {
    return (
      <div className="convertor-card">
        <h2 className="convertor-title">Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Amount:</label>
            <input 
              type="number" 
              value={this.state.amount} 
              onChange={(e) => this.setState({ amount: e.target.value })} 
              placeholder="Enter amount"
            />
          </div>
          <div className="form-group">
            <label>Currency:</label>
            <input 
              type="text" 
              value={this.state.currency} 
              onChange={(e) => this.setState({ currency: e.target.value })} 
              placeholder="e.g. Euro"
            />
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    );
  }
}

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5, // Counter starts at 5 in the screenshots
      alertMessage: null
    };
  }

  showAlert = (msg) => {
    this.setState({ alertMessage: msg });
  };

  closeAlert = () => {
    this.setState({ alertMessage: null });
  };

  incrementValue = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  sayHello = () => {
    const msg = "Hello! Member1";
    this.showAlert(msg);
    try {
      alert(msg);
    } catch (err) {
      console.warn("Native alert blocked:", err);
    }
  };

  // Multiple methods handler triggered by Increment button
  handleIncrement = () => {
    this.incrementValue();
    this.sayHello();
  };

  handleDecrement = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  sayWelcome = (msg) => {
    this.showAlert(msg);
    try {
      alert(msg);
    } catch (err) {
      console.warn("Native alert blocked:", err);
    }
  };

  handleSyntheticEvent = (e) => {
    const msg = "I was clicked";
    this.showAlert(msg);
    try {
      alert(msg);
    } catch (err) {
      console.warn("Native alert blocked:", err);
    }
  };

  render() {
    return (
      <div className="event-examples-container">
        <div className="counter-section">
          <h2>React Event Handling</h2>
          <div className="counter-display">{this.state.counter}</div>
          <div className="btn-group">
            <button className="btn-examples" onClick={this.handleIncrement}>Increment</button>
            <button className="btn-examples" onClick={this.handleDecrement}>Decrement</button>
            <button className="btn-examples" onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
            <button className="btn-examples" onClick={this.handleSyntheticEvent}>Click on me</button>
          </div>
        </div>
        
        <hr className="divider" />
        
        <CurrencyConvertor showAlert={this.showAlert} />

        {/* Custom Modal Notification Box */}
        {this.state.alertMessage && (
          <div className="custom-modal-overlay">
            <div className="custom-modal-card">
              <div className="custom-modal-header">
                <h3>Notification</h3>
              </div>
              <div className="custom-modal-body">
                <p>{this.state.alertMessage}</p>
              </div>
              <div className="custom-modal-footer">
                <button className="btn-examples" onClick={this.closeAlert}>OK</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EventExamples;
