import react from "react";
import { text } from "react-native";

export default function saudacao({nome}){
    return(
        <text style={{fontSize:18, marginBottom:5}}>
            olá {nome}
        </text>
    )
}