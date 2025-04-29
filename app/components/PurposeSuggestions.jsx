import React from 'react';

function PurposeSuggestions({ suggestions, onSelect }) {
  return (
    <div>
      <h3>Finalités suggérées:</h3>
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion.id}>
            <label>
              <input
                type="checkbox"
                value={suggestion.id}
                onChange={() => onSelect(suggestion)}
              />
              {suggestion.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PurposeSuggestions;
