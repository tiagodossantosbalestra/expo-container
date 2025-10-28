import react from "react";
import {Image} from "react-native";

export default function fotoPerfil({url}){
    return(
        <Image
            source={{uri:url}}
            style={{width:100,height:100, borderRadius:50, marginBottom:10}}
        />
    );
}