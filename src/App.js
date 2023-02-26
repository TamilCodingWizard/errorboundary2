import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Message from './Message';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ color: "red" }}>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Reset!</button>
    </div>
  );
}

function App() {
  const [message, setMessage] = useState("");

  function handleSubmit(payload) {
    setMessage(payload);
  }

  return (
    <div className="App">
      <h1>Do not type 'Crash'</h1>
      <h3>{message}</h3>
      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setMessage("")}
          resetKeys={[message]}
        >
          <Message message={message} onSubmit={handleSubmit} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
