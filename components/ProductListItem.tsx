import products from '@/assets/data/product';
import { StyleSheet,Image,View,Text } from 'react-native';
const ProductListItem=({product})=>{
  
   return (
   <View>
  <Image style={styles.img} source={{uri:product.image}}/>
  <Text style={styles.title}>{product.name}</Text>
  <Text style={styles.price}>${product.price}</Text>

   </View>
  );
}
export default ProductListItem;
const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    borderRadius:"10"
  },
img:{
  width:'100%',
  aspectRatio:1
},
title:{
  fontWeight:'bold',
  fontSize:20,
  // marginVertical:10
},
price:{
  color:'blue',
  marginBottom:10,
  fontWeight:'bold'
}
});
