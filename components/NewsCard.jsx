import { Image, View,Text, StyleSheet } from "react-native"
export const NewsCard=(news)=>{
    return(
         <View>
            <Image style={styles.img} source={{uri:news.news.urlToImage}}/>
            <Text>
                {news.news.title}
            </Text>
            <Text>
             {news.news.description}
            </Text>

         </View>
    )



}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height:300,
    width:"100%",
    borderRadius:3
  }
});