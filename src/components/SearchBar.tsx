import React from "react";

interface Props {
  loading: boolean;
  onSearch: (username: string) => void;
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ loading, onSearch, value, onChange }) => {
  return (
    <div className="mb-6 relative">
      <input
        type="text"
        className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none pr-10"
        placeholder="Enter username"
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={loading}
      />
      {value && (
        <button
          type="button"
          className="absolute right-4 top-2.5 text-gray-400 hover:text-gray-700"
          onClick={() => onChange("")}
          tabIndex={-1}
          aria-label="Clear"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      <button
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        onClick={() => onSearch(value)}
        disabled={loading || !value}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;