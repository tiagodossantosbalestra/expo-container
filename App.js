import react from 'react';
import{scrollview} from 'react-native';
import Titulo from './componentes/titulo';
import Saudacao from './componentes/fotoPerfil';


export default function App(){
  return(
    <scrollview style={{padding:20}}>
  <titulo />
  <saudacao nome='Tiago'/>
  <fotoPerfil />

  <cartaoUsuário
  nome='joao da silva'
  descricao='programador mobile'
  img='perfil00' 
  />

  <cartaoUsuário
  nome='maria souza'
  descricao='departamento de ti'
  img='perfil02' 
  />

    </scrollview>

  )
}