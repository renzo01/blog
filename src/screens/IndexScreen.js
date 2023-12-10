import React, { useContext } from "react";
import { View,Text,StyleSheet, FlatList } from "react-native";
import BlogContext from '../Context/BlogContext';

const IndexScreen = () => {

    const blogPosts = useContext(BlogContext);

    return (
        <View>
            <FlatList 
                data={blogPosts} 
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => <Text>{item.title}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    
});

export default IndexScreen;