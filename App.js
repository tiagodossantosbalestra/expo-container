import react from 'react';
import{scrollview} from 'react-native';
import Titulo from
import Saudacao from './componentes/fotoPerfil';


export default function App(){
  return(
    <scrollview style={{padding:20}}>
  <titulo />
  <saudacao nome="Tiago"/>

    </scrollview>

  )
}