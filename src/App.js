import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import List from "./components/List";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      There was an error:{" "}
      <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <List></List>
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
