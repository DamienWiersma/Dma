// In App.js in a new project

import * as React from "react";
import {View, Image} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
    Dma,
    List,
    Infromation,
    Home,
    News,
    Login,
    Signup,
    bas,
    drum,
    gitaar,
    production,
    songwriting,
    dmaApplication,
    

} from "./../screens";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import theme from "../../theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarStyle: {
                    backgroundColor: theme.primary,
                },
                tabBarLabelStyle: {
                    fontFamily: theme.medium,
                },
                headerTitleStyle: {
                    fontFamily: theme.medium,
                },
                headerStyle: {
                    backgroundColor: theme.primary,
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused, color, size}) => {
                    let icons;
                    if (route.name === "Home") {
                        icons = <AntDesign name="home" size={size} color={color}/>;
                    } else if (route.name === "Infromation") {
                        icons = <AntDesign name="infocirlce" size={size} color={color}/>;
                    } else if (route.name === "Dma") {
                        icons = (
                            <View
                                style={{
                                    marginTop: -50,
                                    height: 90,
                                    width: 90,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 100,
                                    backgroundColor: theme.primary,
                                }}
                            >
                                <Image
                                    source={require("./../../assets/8.png")}
                                    style={{
                                        resizeMode: "contain",
                                        borderRadius: 20,

                                        height: 85,
                                        width: 85,
                                    }}
                                />
                            </View>
                        );
                    } else if (route.name === "List") {
                        icons = (
                            <FontAwesome name="newspaper-o" size={size} color={color}/>
                        );
                    } else if (route.name === "News") {
                        icons = <AntDesign name="staro" size={24} color="black"/>;
                    }
                    return icons;
                },
                tabBarActiveTintColor: theme.grey,
                tabBarInactiveTintColor: theme.black,
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "DutchMusicAcademy",
                }}
            />
            <Tab.Screen
                name="Infromation"
                component={Infromation}
                options={{
                    title: "DutchMusicAcademy",
                }}
            />
            <Tab.Screen
                name="Dma"


                options={{
                    title: "DutchMusicAcademy",
                }}
            >
                {(addProps) => <Dma {...addProps}/>}
            </Tab.Screen>
            <Tab.Screen
                name="List"
                component={List}
                options={{
                    title: "DutchMusicAcademy",
                }}
            />
            <Tab.Screen
                name="News"
                component={News}
                options={{
                    title: "DutchMusicAcademy",
                }}
            />
        </Tab.Navigator>
    );
}

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Home" component={HomeTabs}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
