import { useState } from 'react';

export default function Notas({ onAddNote, onCleanAll }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const note = { id: Date.now(), text };
    onAddNote(note);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={styles.input}
        type="text"
        placeholder="Adicione uma anotação..."
        className="placeholder-white"
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <br />
      <button style={styles.button}>Adcionar</button>
      <button style={styles.button} onClick={onCleanAll}>
        Limpar
      </button>
    </form>
  );
}

const styles = {
  form: {
    diplay: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    diplay: 'flex',
    padding: '15px',
    fontSize: '15px',
    borderRadius: '5px',
    border: '1px solid #f5f5f5',
    backgroundColor: 'transparent',
    outline: 'none',
    color: '#f5f5f5',
    width: '300px',
  },
  button: {
    diplay: 'flex',
    margin: '30px',
    backgroundColor: 'transparent',
    color: '#f5f5f5',
    border: '1px solid #f5f5f5',
    borderRadius: '5px', // Bordas arredondadas
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
