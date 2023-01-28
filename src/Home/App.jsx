import { Letras } from '../components/Letras';
import { Status } from '../components/Status/';
import './style.css'

export const App = () => {
  const verificaFim = true;
  const status = 'ganhou';


  return (
    <>
      <Status status={status} verificaFim={verificaFim} />
      <Letras />
    </>
  );
}
