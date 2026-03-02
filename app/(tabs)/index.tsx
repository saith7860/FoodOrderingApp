import { StyleSheet,Image } from 'react-native';
import ProductListItem from '@/components/ProductListItem';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View} from '@/components/Themed';
import products from '@/assets/data/product';

export default function MenuScreen() {
 return(
  <View>
    <ProductListItem product={products[1]}/>
    <ProductListItem product={products[2]}/>
  </View>
 )
}

