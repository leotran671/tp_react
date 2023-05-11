import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

function App() {

  //On utilise useState('') pour créer une variable 'expression' et une fonction 'setExpression'
  const [expression, setExpression] = useState('');

  //Prendre la valeur de l'un des boutons et l'ajoute à l'expression
  function ButtonClick(value) {
    setExpression(prevExpression => prevExpression + value);
  }

  //Quand on appuie sur 'AC' on reset la calculatrice
  function ClearClick() {
    setExpression('');
  }

  //Si l'utilisateur clique sur le bouton '=' alors on fait l'évaluation demandée
  //Si l'évaluation réussit, le résultat est stocké dans l'état de la calculatrice. 
  //Sinon, l'état de la calculatrice est mis à jour avec le message d'erreur "Error".
  function CalculateClick() {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      console.error(error);
      setExpression('Error');
    }
  }

  return (
    <div className="calculator">
      <Display value={expression} />
      <Button onClick={ClearClick}>AC</Button>
      <Button onClick={() => ButtonClick('+/-')}>±</Button>
      <Button onClick={() => ButtonClick('%')}>%</Button>
      <Button onClick={() => ButtonClick('/')}>÷</Button>
      <Button onClick={() => ButtonClick('7')}>7</Button>
      <Button onClick={() => ButtonClick('8')}>8</Button>
      <Button onClick={() => ButtonClick('9')}>9</Button>
      <Button onClick={() => ButtonClick('*')}>×</Button>
      <Button onClick={() => ButtonClick('4')}>4</Button>
      <Button onClick={() => ButtonClick('5')}>5</Button>
      <Button onClick={() => ButtonClick('6')}>6</Button>
      <Button onClick={() => ButtonClick('-')}>−</Button>
      <Button onClick={() => ButtonClick('1')}>1</Button>
      <Button onClick={() => ButtonClick('2')}>2</Button>
      <Button onClick={() => ButtonClick('3')}>3</Button>
      <Button onClick={() => ButtonClick('+')}>+</Button>
      <Button onClick={() => ButtonClick('0')}>0</Button>
      <Button onClick={() => ButtonClick('.')}>.</Button>
      <Button onClick={CalculateClick}>=</Button>
    </div>
  );
}

export default App;
