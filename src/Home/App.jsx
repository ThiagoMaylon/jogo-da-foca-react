import { Forca } from '../components/Forca';
import { Letras } from '../components/Letras';
import { Status } from '../components/Status/';
import './style.css'

export const App = () => {

  const verificaFim = false;
  const status = 'ganhou';



  return (
    <>
      <Status status={status} verificaFim={verificaFim} />
      <Forca />
      <Letras />
    </>
  );
}
