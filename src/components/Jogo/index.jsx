import {Forca} from '../Forca';
import {Status} from '../Status';
import { useEffect, useState } from 'react';
import './style.css';

const arrayPalavras = ['Basquete', 'Peixe', 'Tesoura', 'Galinha', 'Pinguim', 'Escova', 'Javascript', 'React', 'Celular', 'Cachorro'];

export const Jogo = () => {
    const arrayLetras = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J','K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    // eslint-disable-next-line
    const [word, setWord] = useState(arrayPalavras[Math.floor(Math.random() * arrayPalavras.length)]);
    const wordUpper = word.toUpperCase(); 
    const [display, setDisplay] = useState(Array(wordUpper.length).fill("_"));
    const [chutes, setChutes] = useState([]);
    const [erros, setErros] = useState(0);
    const [verificaFim, setVerificaFim] = useState(false)
    const [status, setStatus] = useState('')


    useEffect(() => {
        if(erros >= 6){
            setVerificaFim(true);
            setStatus('Perdeu')
        }
        
    }, [erros])

    useEffect(() => {
        if(display.includes("_") === false){
            setVerificaFim(true);
            setStatus("Ganhou");
        }
    },[ display ])
    
    function handleClick(event){
       
        const letter = event.target.innerText;
        setChutes([...chutes, letter]);

        let updateDisplay = [...display];
        for(let i = 0; i < wordUpper.length; i++){
            if(wordUpper[i] === letter){
                updateDisplay[i] = letter;
            }
            if(wordUpper.includes(letter) === false){
                setErros(erros + 1);
            }
        }
        setDisplay(updateDisplay);

    }
  
    return(
        <>
            <Status status={status} verificaFim={verificaFim} />
            <Forca erros={erros}/>
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