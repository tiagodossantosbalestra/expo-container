import react from 'react';
import{scrollview} from 'react-native';
import Titulo from './componentes/titulo';
import CartaoUsuario from './componentes/fotoPerfil';
import fotoPerfil from './componentes/fotoPerfil';

export default function App(){
  return(
    <scrollview style={{padding:20}}>
  <titulo />
  <saudacao nome='Tiago'/>
  <fotoPerfil />

  <CartaoUsuario
  nome='joao da silva'
  descricao='programador mobile'
  img='perfil00' 
  />

  <CartaoUsuario
  nome='maria souza'
  descricao='departamento de ti'
  img='perfil02' 
  />

  </scrollview>

  )
}

