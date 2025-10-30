import react from "react";
import {Image} from "react-native";

export default function fotoPerfil(){
    return(
        <Image
            source={require('../img/base.jpg')}
            style={{width:100,height:100, borderRadius:50, marginBottom:10}}
        />
    );
}