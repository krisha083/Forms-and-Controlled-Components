import React, { useState } from 'react';

function App() {
  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && feedback) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Feedback:</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      ) : (
        <div>
          <h2>Thank you for your feedback!</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Feedback: {feedback}</p>
        </div>
      )}
    </div>
  );
}

export default App;
