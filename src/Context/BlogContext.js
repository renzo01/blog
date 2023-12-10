import React, { useReducer } from "react";

const BlogContext = React.createContext();

const ADDBLOGPOST = 'add_blogpost';
const blogReducer = (state,action) => {
    switch (action.type) {
        case ADDBLOGPOST:
            return [...state, {title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
}

export const BlogProvider = ({children}) => {

    const [blogPosts, dispatch] = useReducer(blogReducer,[]);

    const addBlogPost = () => {
        dispatch({type: ADDBLOGPOST})
    }

    return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
}
export default BlogContext;