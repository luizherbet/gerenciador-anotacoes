import FormularioNota from './Components/FormularioNota';
import Header from './Components/Header';
import Notas from './Components/Notas';
import { useState } from 'react';

export default function App() {
  const [gretting, setGretting] = useState(false);
  const [notas, setNotas] = useState([]);

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setGretting(true);
    }
  }

  function handleAddNote(note) {
    setNotas(notas => [...notas, note]);
    console.log(notas);
  }

  function handleClearAll() {
    setNotas([]);
  }

  return (
    <div style={styles.app}>
      <Header onEnter={handleKeyDown} gretting={gretting} />
      {gretting && (
        <FormularioNota
          onAddNote={handleAddNote}
          onCleanAll={handleClearAll}
          notas={notas}
        />
      )}
      {gretting && <Notas notas={notas} />}
    </div>
  );
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
