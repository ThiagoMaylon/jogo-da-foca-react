import './style.css';

export const Palavra = () => {
    const arrayPalavras = ['Basquete', 'Peixe', 'Tesoura', 'Galinha', 'Pinguim', 'Escova', 'Javascript', 'Rect', 'Celular', 'Cachorro'];

    const sortearPalavra = Math.floor(Math.random() * arrayPalavras.length);
    const palavra = arrayPalavras[sortearPalavra];
    const palavraSplit = palavra.split('');
  
    return(
        <div className='palavra'>
            {palavraSplit.map((valor, index) => (
                <input type="text" key={index} value={valor} maxLength='1' disabled/>
            ))}
            
        </div>
    )
}