import { Forca } from '../components/Forca';
import { Letras } from '../components/Letras';
import { Palavra } from '../components/Palavra';
import { Status } from '../components/Status/';
import './style.css'

export const App = () => {

  const verificaFim = true;
  const status = 'ganhou';



  return (
    <>
      <Status status={status} verificaFim={verificaFim} />
      <Forca />
      <Palavra />
      <Letras />
    </>
  );
}
