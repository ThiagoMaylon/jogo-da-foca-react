import {Corpo} from '../Corpo'
import './style.css';

export const Forca = ({erros}) => {
    return(
        <div className='container-forca'>
            <div className="forca forca-1">
                <div className="forca forca-2">
                    <div className="forca forca-3">
                        <Corpo erros={erros}/>
                    </div>
                </div>
            </div>
        </div>
    )
}