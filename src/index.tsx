import * as React from "react";
import { render } from "react-dom";

import useTrie from "./hooks/useTrie";

import "./styles.css";

function App() {
  const initialWords = ["their", "there", "any", "answer", "bye"];
  const trie = useTrie(initialWords, false);

  const [term, setTerm] = React.useState("");

  const onSubmit = e => {
    e.preventDefault();
    console.log(`term="${term}"`);
  };

  return (
    <div className="App">
      <section>
        <h1>Search for a word</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="term">
            <input
              id="term"
              onChange={e => setTerm(e.target.value)}
              type="text"
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
