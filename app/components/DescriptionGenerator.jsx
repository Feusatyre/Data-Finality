import React from 'react';

function DescriptionGenerator({ selectedPurposes, descriptionType, setDescriptionType, generateDescription }) {
  return (
    <div>
      <div>
        <label>
          Type de description:
          <select value={descriptionType} onChange={(e) => setDescriptionType(e.target.value)}>
            <option value="synthetic">Synthétique</option>
            <option value="detailed">Détaillée</option>
          </select>
        </label>
      </div>
      <button onClick={generateDescription}>Générer la description</button>
      {selectedPurposes.map((purpose) => (
        <div key={purpose.id}>
          <h3>{purpose.name}</h3>
          <p>{purpose.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DescriptionGenerator;
