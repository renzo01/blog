import React, { useContext } from "react";
import { View,Text,StyleSheet, FlatList, Button } from "react-native";
import {Context as BlogContext} from '../Context/BlogContext';
import {Feather} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = () => {

    const {state, addBlogPost, deletePost} = useContext(BlogContext);



    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList 
                data={state} 
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => <View style={styles.row}>
                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deletePost(item.id)}>
                        <Feather style={styles.icon} name="trash"/>
                    </TouchableOpacity>
                </View> 
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 20,
        borderTopWidth : 1,
        borderBottomWidth :  1,
        borderColor : 'gray'
    },
    title : {
        fontSize : 18
    },
    icon : {
        fontSize : 24
    }
});

export default IndexScreen;