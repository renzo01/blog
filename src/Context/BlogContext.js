import CreateDataContext from "./CreateDataContext";

const ADDBLOGPOST = 'add_blogpost';
const DELETEBLOGPOST = 'delete_blogpost';
const blogReducer = (state,action) => {
    switch (action.type) {
        case ADDBLOGPOST:
            return [...state, {id: Math.floor(Math.random()*99999), title: `Blog Post #${state.length + 1}`}];
        case DELETEBLOGPOST : 
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state;
    }
}
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: ADDBLOGPOST})
    }
}

const deletePost = (dispatch) => {
    return (id) => {
        dispatch({type:DELETEBLOGPOST, payload : id})
    }
}

export const {Context, Provider} = CreateDataContext(blogReducer, {addBlogPost, deletePost},[]);