import React from "react";
import { Text } from "react-native";

const Saludar = ({userInfo}) => {
  return (
    <>
      <Text>Hola {userInfo.nombre},</Text>
      <Text>tiene {userInfo.edad} años.</Text>
      <Text>Su color favorito es {userInfo.color}</Text>
    </>
  )
}

export default Saludar