import './style.css';

export const Palavra = ({texto}) => {
    return(
        <div className='palavra'>
            <input type="text" value={texto} maxLength='1' disabled/>
        </div>
    )
}