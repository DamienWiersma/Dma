import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import theme from "../../../theme";

const windowWidth = Dimensions.get("window").width;
class News extends React.Component {
  render() {
    const questions = [
      {
        qestion: "What is Lorem Ipsum?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "What is Lorem Ipsum?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "What is Lorem Ipsum?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "What is Lorem Ipsum?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        qestion: "What is Lorem Ipsum?",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
    ];
    return (
      <View style={styles._container}>
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
                    <Text style={styles._desc} numberOfLines={3}>
                      {val.desc}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity style={styles._btn}>
              <Text style={styles._btn_text}>
                Upload hier een nieuw bestand!
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* recently scanned data */}
      </View>
    );
  }
}

export default News;

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
    margin: 5,
    // height: 150,
    borderRadius: 10,
    borderColor: theme.black,
    paddingLeft: 12,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    elevation: 5,
    backgroundColor: theme.white,
  },
  _inner_layer: {
    flex: 1,
  },
  _avatar: {
    height: 82,
    width: 82,
    resizeMode: "cover",
    borderRadius: 100,
  },
  _desc_view: {
    flexDirection: "column",
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  _q: {
    fontFamily: theme.bold,
  },
  _desc: {
    fontFamily: theme.medium,
  },
  _btn: {
    backgroundColor: theme.secondary,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 30,
    marginHorizontal: 10,
  },

  _btn_text: {
    fontFamily: theme.medium,
  },
});