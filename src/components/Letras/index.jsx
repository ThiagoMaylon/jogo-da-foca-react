import { useState } from 'react';
import './style.css';

const arrayPalavras = ['Basquete', 'Peixe', 'Tesoura', 'Galinha', 'Pinguim', 'Escova', 'Javascript', 'Rect', 'Celular', 'Cachorro'];

export const Letras = ({numErros, Pchutes}) => {
    const arrayLetras = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J','K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    // eslint-disable-next-line
    const [word, setWord] = useState(arrayPalavras[Math.floor(Math.random() * arrayPalavras.length)]);
    const wordUpper = word.toUpperCase(); 

    const [display, setDisplay] = useState(Array(wordUpper.length).fill("_"));
    const [chutes, setChutes] = useState([]);
    const [erros, setErros] = useState(0);

    function handleClick(event){
        const letter = event.target.innerText;
        setChutes([...chutes, letter]);
        setErros(erros + 1);
        Pchutes = chutes;
        numErros = erros;

        let updateDisplay = [...display];
        for(let i = 0; i < wordUpper.length; i++){
            if(wordUpper[i] === letter){
                updateDisplay[i] =letter;
            }
        }
        setDisplay(updateDisplay);
    }
  
    return(
        <>
            <div className='palavra'>
                {display.map((letter, index) => (
                    <span key={index}>
                        {letter === "_" ? <div className='underline'>.</div> : letter}
                    </span>
                ))}
            </div>
            <div className="container-letras">
                <div className="letras-grid">
                    {arrayLetras.map((valorLetra, index) => (
                        <button key={index} onClick={handleClick}>{valorLetra}</button>
                    ))}
                </div>
            </div>
        </>
    )
}