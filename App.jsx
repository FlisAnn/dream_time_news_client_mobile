import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/components/HomeScreen";
import ShowArticleScreen from "./app/components/ShowArticleScreen";
import LoginScreen from './app/components/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  const { appTitle } = useSelector(state => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: appTitle,
            headerStyle: {
              backgroundColor: "teal",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 30,
              fontFamily: "AmericanTypewriter-Bold",
              fontWeight: "bold",
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen
          name="ShowArticleScreen"
          component={ShowArticleScreen}
          options={{
            title: appTitle,
            headerStyle: {
              backgroundColor: "teal",
            },
            headerTitleStyle: {
              color: "white",
              fontSize: 30,
              fontFamily: "AmericanTypewriter-Bold",
              fontWeight: "bold",
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
