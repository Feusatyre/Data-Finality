import React from 'react';

function SubPurposeSelection({ selectedPurposes, onSelectSubPurpose }) {
  return (
    <div>
      <h3>Sous-finalités:</h3>
      {selectedPurposes.map((purpose) => (
        <div key={purpose.id}>
          <h4>{purpose.name}</h4>
          <ul>
            {purpose.subPurposes.map((subPurpose) => (
              <li key={subPurpose.id}>
                <label>
                  <input
                    type="checkbox"
                    value={subPurpose.id}
                    onChange={() => onSelectSubPurpose(subPurpose, purpose)}
                  />
                  {subPurpose.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SubPurposeSelection;
