import React, { useState } from 'react';
import {View, StyleSheet,Image, ScrollView,Text, Modal, Button, TouchableHighlight} from 'react-native';
const App = () =>{
  const [modalVisibleplaya, setModalVisibleplaya, ]=useState(false);
  const [modalVisibleroom2, setModalVisibleroom2, ]=useState(false);
return(
<>

<ScrollView>
<Modal transparent={true} animationType ="slide" visible ={modalVisibleplaya} onRequestClose={()=> {
  alert('Modal has been closed.');
}}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style ={styles.subtitulo}> Habitacion Deluxe</Text>
      <Text >Esta habitacion esta hubicada en la quinta planta de nuestro hotel y cuenta con la mas alta comododidad</Text>
      <Button title="Cerrar" onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}></Button>

    </View>
  </View>
  </Modal>
  <Modal transparent={true} animationType ="slide" visible ={modalVisibleroom2} onRequestClose={()=> {
  alert('Modal has been closed.');
}}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style ={styles.subtitulo}> Habitacion VIP</Text>
      <Text >Esta habitacion cuenta con vista a la playa y cuenta con la mas alta comododidad</Text>
      <Button title="Cerrar" onPress={()=>{setModalVisibleroom2(!modalVisibleroom2)}}></Button>

    </View>
  </View>
  </Modal>
<View style={{flexDirection:'row'}} >
<Image
style={styles.banner}
source={require('../viaje/src/bg.jpg')} />
</View>
<View style={styles.contenedor}>
<Text style={styles.titulo}>Hotel El salvador</Text>
<Text style={styles.titulo}>Tipos de Habitaciones</Text>
<ScrollView horizontal>
  <View>
    <TouchableHighlight
    onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}
    >
    <Image
    style={styles.ciudad}
    source={require('../viaje/src/room1.jpg')}/>
    </TouchableHighlight>
  </View>
  <View>
  <TouchableHighlight
    onPress={()=>{setModalVisibleroom2(!modalVisibleroom2)}}
    >
    <Image
    style={styles.ciudad}
    source={require('../viaje/src/room2.jpg')}/>
     </TouchableHighlight>
  </View>
  <View>
    <Image
    style={styles.ciudad}
    source={require('../viaje/src/room3.jpg')}/>
  </View>
  <View>
    <Image
    style={styles.ciudad}
    source={require('../viaje/src/room4.jpg')}/>
  </View>
  <View>
    <Image
    style={styles.ciudad}
    source={require('../viaje/src/room5.jpg')}/>
  </View>

</ScrollView>

</View>
<Text style={styles.titulo}>Nuestros Servicios</Text>
<View>
<View>
    <Image
    style={styles.mejores}
    source={require('../viaje/src/servicio1.jpg')}/>
  </View>
  <View>
    <Image
    style={styles.mejores}
    source={require('../viaje/src/servicio2.jpg')}/>
  </View>
  <View>
    <Image
    style={styles.mejores}
    source={require('../viaje/src/servicio3.jpg')}/>
  </View>
</View>
<Text style={styles.titulo}>Lugares de Interes en nuestro hotel</Text>
<View style ={styles.listado}>
<View style ={styles.listaItem}>
    <Image
    style={styles.mejores}
    source={require('../viaje/src/actividad1.jpg')}/>
  </View>
  <View style ={styles.listaItem}>
    <Image
    style={styles.mejores}
    source={require('../viaje/src/actividad2.jpg')}/>
  </View>
  <View style ={styles.listaItem}>
    <Image
    style={styles.mejores}
    source={require('../viaje/src/ruta3.jpg')}/>
  </View>
  <View style ={styles.listaItem}>
    <Image
    style={styles.mejores}
    source={require('../viaje/src/ruta1.jpg')}/>
  </View>
</View>

</ScrollView>

</>
);
};
const styles = StyleSheet.create({
banner:{
height:250,
flex:1
},
titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10
},
contenedor:{
  marginHorizontal:10,
},
ciudad:{
 width:250,
 height:300,
 marginRight:10
},
mejores:{
  width:'100%',
  height:250,
  marginVertical:5
 },
 listaItem:{
 flexBasis:'49%'
 },
 listado:{
 flexDirection:'row',
 flexWrap:'wrap',
 justifyContent:'space-between'
  },
  vistaModal:{
    backgroundColor:'#000000aa',flex:1
    },
    Modal:{
    backgroundColor:'#fff',margin:50,padding:40,borderRadius:10,flex
    :1
    },
    subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center'
    },
});
export default App;