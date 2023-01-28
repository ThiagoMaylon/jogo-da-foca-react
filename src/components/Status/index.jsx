import './style.css'

export const Status = ({status, verificaFim}) => {
    return(
        <div className='container'>
            <h1>jogo da forca</h1>
            {verificaFim === true && (
                <div>
                    <p>vc {status}!!</p>
                    <p>atualize a pagina para jogar novamente...</p>
                </div>   
            )}
        </div>
   
    )
}