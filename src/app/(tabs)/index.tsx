import { StyleSheet,Image,FlatList} from 'react-native';
import ProductListItem from '@/components/ProductListItem';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View} from '@/components/Themed';
import products from '@assets/data/product';

export default function MenuScreen() {
 return(

    <FlatList
    data={products}
    renderItem={({item})=><ProductListItem product={item}/>}
    key={2}
    numColumns={2}
    contentContainerStyle={{gap:10,padding:10}}
    columnWrapperStyle={{gap:10}}
    />

 )
}

