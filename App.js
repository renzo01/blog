import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import React from "react";
import { Provider as BlogProvider } from "./src/Context/BlogContext";

const navigator = createStackNavigator({
  Index : IndexScreen
}, {
  initialRouteName : 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App =  createAppContainer(navigator);

export default () => {
  return <BlogProvider>
      <App/>
  </BlogProvider>
}