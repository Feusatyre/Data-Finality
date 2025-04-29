import React, { useState } from 'react';
import PurposeInput from '../components/PurposeInput';
import PurposeSuggestions from '../components/PurposeSuggestions';
import DescriptionGenerator from '../components/DescriptionGenerator';
import SubPurposeSelection from '../components/SubPurposeSelection';
import SummaryTable from '../components/SummaryTable';

const initialPurposes = [
  { id: 1, name: 'Marketing', description: 'Utilisation des données à des fins de marketing.', subPurposes: [{ id: 101, name: 'Email Marketing', description: 'Envoi de courriels promotionnels.' }] },
  { id: 2, name: 'Analyse', description: 'Utilisation des données à des fins d\'analyse.', subPurposes: [{ id: 201, name: 'Analyse des ventes', description: 'Analyse des données de ventes.' }] },
];

export default function App() {
  const [entityName, setEntityName] = useState('');
  const [treatmentName, setTreatmentName] = useState('');
  const [suggestions, setSuggestions] = useState(initialPurposes);
  const [selectedPurposes, setSelectedPurposes] = useState([]);
  const [descriptionType, setDescriptionType] = useState('synthetic');

  const handlePurposeSelect = (purpose) => {
    setSelectedPurposes((prevSelected) => {
      if (prevSelected.find((p) => p.id === purpose.id)) {
        return prevSelected.filter((p) => p.id !== purpose.id);
      } else {
        return [...prevSelected, { ...purpose, selectedSubPurposes: [] }];
      }
    });
  };

  const handleSubPurposeSelect = (subPurpose, purpose) => {
    setSelectedPurposes((prevSelected) => {
      return prevSelected.map((p) => {
        if (p.id === purpose.id) {
          const subPurposeExists = p.selectedSubPurposes?.find((sp) => sp.id === subPurpose.id);
          let updatedSubPurposes;
          if (subPurposeExists) {
            updatedSubPurposes = p.selectedSubPurposes.filter((sp) => sp.id !== subPurpose.id);
          } else {
            updatedSubPurposes = [...(p.selectedSubPurposes || []), subPurpose];
          }
          return { ...p, selectedSubPurposes: updatedSubPurposes };
        }
        return p;
      });
    });
  };

  const generateDescription = () => {
    setSelectedPurposes((prevSelected) => {
      return prevSelected.map((purpose) => ({
        ...purpose,
        description: `Description ${descriptionType} pour ${purpose.name}`,
      }));
    });
  };

  const exportTable = () => {
    console.log('Exporting table...');
  };

  return (
    <div>
      <h1>Application de gestion des finalités</h1>
      <PurposeInput
        entityName={entityName}
        treatmentName={treatmentName}
        setEntityName={setEntityName}
        setTreatmentName={setTreatmentName}
      />
      <PurposeSuggestions suggestions={suggestions} onSelect={handlePurposeSelect} />
      <DescriptionGenerator
        selectedPurposes={selectedPurposes}
        descriptionType={descriptionType}
        setDescriptionType={setDescriptionType}
        generateDescription={generateDescription}
      />
      <SubPurposeSelection selectedPurposes={selectedPurposes} onSelectSubPurpose={handleSubPurposeSelect} />
      <SummaryTable selectedPurposes={selectedPurposes} exportTable={exportTable} />
    </div>
  );
}
