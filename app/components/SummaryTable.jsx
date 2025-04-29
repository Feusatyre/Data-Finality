import React from 'react';

function SummaryTable({ selectedPurposes, exportTable }) {
  return (
    <div>
      <h3>Tableau Récapitulatif:</h3>
      <table>
        <thead>
          <tr>
            <th>Finalité</th>
            <th>Sous-finalité</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {selectedPurposes.map((purpose) => (
            purpose.selectedSubPurposes.map((subPurpose) => (
              <tr key={`${purpose.id}-${subPurpose.id}`}>
                <td>{purpose.name}</td>
                <td>{subPurpose.name}</td>
                <td>{subPurpose.description}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
      <button onClick={exportTable}>Exporter</button>
    </div>
  );
}

export default SummaryTable;
