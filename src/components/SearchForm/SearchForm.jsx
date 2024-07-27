import css from "./SearchForm.module.css";
import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        placeholder="Enter your query..."
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
}
