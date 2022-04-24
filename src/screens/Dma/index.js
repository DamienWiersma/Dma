import React, {useState} from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from "react-native";
import theme from "../../../theme"
import Login from "../Login";

function Dma(props) {
    const [authorized, setAuthorized] = useState(false);
    const list = [
        {
            title: "Zang",
            url: require("./../../../assets/2.png"),
            route: "Kaas"
        },
        {
            title: "Bass",
            url: require("./../../../assets/1.png"),
            route: "Kaas"
        },
        {
            title: "Drum",
            url: require("./../../../assets/4.png"),
            route: "Kaas"
        },
        {
            title: "Gittar",
            url: require("./../../../assets/3.png"),
            route: "Kaas"
        },

        {
            title: "Production",
            url: require("./../../../assets/7.png"),
            route: "Kaas"
        },
        {
            title: "Toetsen",
            url: require("./../../../assets/5.png"),
            route: "Kaas"
        },
        {
            title: "Writing/Theorie",
            url: require("./../../../assets/6.png"),
            route: "Writing"
        },
    ];
    return authorized ? (
        <View style={styles._layer}>
            <ScrollView>
                <View style={styles._container}>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "space-evenly",
                            flex: 1,
                            alignContent: "center",
                        }}
                    >
                        {list.map((val, i) => {
                            return (
                                <TouchableOpacity
                                    style={styles._list}
                                    key={i}
                                    activeOpacity={0.9}
                                    onPress={val.clickFn}>
                                    <Image source={val.url} style={styles._logo}/>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    ) : <Login setAuthorized={() => setAuthorized(true)} {...props}/>
}


export default Dma;

let styles = StyleSheet.create({
    _container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingTop: 40,
    },
    _logo: {
        height: 170,
        width: 100,
        // aspectRatio: 1 / 1,
        resizeMode: "cover",
    },
    _list: {
        elevation: 4,
        margin: 10,
        backgroundColor: theme.white,
        alignItems: "center",
        borderRadius: 10,
        padding: 10,
        width: 150,
        borderWidth: 1
    },
    _layer: {
        flex: 1,
    },

    _btn: {
        backgroundColor: theme.primary,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 100,
        height: 40,
        marginBottom: 40,
        //left:30,
        //right: 40,
    },

    _btn_text: {
        fontFamily: theme.medium,
    },
});
