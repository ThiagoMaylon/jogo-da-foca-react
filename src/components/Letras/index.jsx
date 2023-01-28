import './style.css';

export const Letras = () => {
    const arrayLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return(
        <div className="container-letras">

            <div className="letras-grid">
                {arrayLetras.map((valorLetra, index) => (
                    <button key={index} disabled>{valorLetra}</button>
                ))}
            </div>
            
        </div>
    )
}