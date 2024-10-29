import { useState } from 'react';

export default function Header({ onEnter, gretting }) {
  const [userName, setUserName] = useState('');

  function handleChange(e) {
    console.log(e.target.value);
    setUserName(e.target.value);
  }

  return (
    <div style={styles.header} className="caveat">
      {!gretting && (
        <input
          className="placeholder-white"
          style={styles.input}
          type="text"
          placeholder="Digite o seu nome e pressione ENTER"
          onChange={handleChange}
          onKeyDown={onEnter}
        />
      )}
      {gretting && <h1>Olá, {userName} !</h1>}
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '20vh',
    color: '#f5f5f5',
    fontSize: '30px',
  },
  input: {
    textAlign: 'center',
    padding: '15px',
    fontSize: '15px',
    borderRadius: '5px',
    border: '1px solid #f5f5f5',
    backgroundColor: 'transparent',
    outline: 'none',
    color: '#f5f5f5',
    width: '350px',
  },
};
