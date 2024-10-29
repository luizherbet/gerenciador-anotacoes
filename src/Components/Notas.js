import { useMediaQuery } from 'react-responsive';

export default function Notas({ notas }) {
  // Detecta se a tela está em modo desktop ou mobile
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <ul style={styles.notasContainer}>
      {notas.map(note => (
        <li key={note.id} style={styles.nota}>
          <p>{note.text}</p>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  notasContainer: {
    maxWidth: '900px',
    display: 'flex',
    flexWrap: 'wrap', // Faz o wrap inverso das notas
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    gap: '30px', // Espaçamento entre as notas
  },
  nota: {
    maxWidth: '200px', // Largura fixa de cada nota
    padding: '25px',
    backgroundColor: 'transparent',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
};
