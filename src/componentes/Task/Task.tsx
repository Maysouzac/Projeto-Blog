import { useState, useEffect } from 'react';

function task() {
  const [completada, setCompletada] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completada) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completada]);

  function completo(){
    setCompletada(true)
  }

  return (
    <div>
      <h1>Tarefa</h1>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={completo}>Concluir Tarefa</button>
    </div>
  );
}

export default task;
