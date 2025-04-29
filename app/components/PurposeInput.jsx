import React from 'react';

function PurposeInput({ entityName, treatmentName, setEntityName, setTreatmentName }) {
  return (
    <div>
      <div>
        <label htmlFor="entityName">Nom de l'entreprise (entité):</label>
        <input
          type="text"
          id="entityName"
          value={entityName}
          onChange={(e) => setEntityName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="treatmentName">Nom du traitement:</label>
        <input
          type="text"
          id="treatmentName"
          value={treatmentName}
          onChange={(e) => setTreatmentName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default PurposeInput;
