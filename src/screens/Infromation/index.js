import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Clipboard,
  Share,
  Dimensions,
  ScrollView,
} from "react-native";
import theme from "../../../theme";
import { FontAwesome } from "@expo/vector-icons";
import { List } from "react-native-paper";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage, hideMessage } from "react-native-flash-message";
import { Video, AVPlaybackStatus } from "expo-av";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
class Infromation extends React.Component {
  render() {
    const questions = [
      {
        qestion: "What is Lorem Ipsum?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://images.unsplash.com/photo-1616158010479-e18030dffc1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=458&q=80",
      },
      {
        qestion: "What is Lorem Ipsum?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "What is Lorem Ipsum?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://images.unsplash.com/photo-1611310424006-42cf1e064288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    ];
    return (
      <View style={styles._container}>
        <View
          style={{
            borderWidth: 0,
            borderColor: theme.grey,
            borderRadius: 0,
            overflow: "hidden",
            //margin: 5,
          }}
        >
          <Video
            // ref={video}
            style={styles.video}
            source={{
              uri: "https://download.samplelib.com/mp4/sample-5s.mp4",
            }}
            useNativeControls
            resizeMode="cover"
            isLooping
            shouldPlay
            // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
        <View style={styles._inner_layer}>
          <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
            {questions.map((val, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles._question_view}
                  activeOpacity={0.7}
                >
                  <Image source={{ uri: val.url }} style={styles._avatar} />
                  <View style={styles._desc_view}>
                    <Text style={styles._q}>{val.qestion}</Text>
                    <Text style={styles._desc} numberOfLines={3}>
                      {val.desc}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* recently scanned data */}
      </View>
    );
  }
}

export default Infromation;

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    backgroundColor: "white",
    elevation: 4,
  },
  video: {
    alignSelf: "center",
    width: windowWidth,
    height: 200,
  },
  _question_view: {
    flex: 1,
    // borderWidth: 1,
    margin: 10,
    height: 150,
    borderRadius: 10,
    borderColor: theme.black,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 5,
    backgroundColor: theme.white,
   // borderWidth: 2,
    borderColor: theme.grey,
    borderRadius: 20,
  },
  _inner_layer: {
    flex: 1,
  },
  _avatar: {
    height: 80,
    width: 80,
    resizeMode: "cover",
    borderRadius: 100,
  },
  _desc_view: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
    flex: 1,
  },
  _q: {
    fontFamily: theme.bold,
  },
  _desc: {
    fontFamily: theme.medium,
    flex: 1,
  },
});