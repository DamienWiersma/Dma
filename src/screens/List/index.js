import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import theme from "../../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const list = [
      {
        title: "uploaded by teacher",
      },
      {
        title: "uploaded by teacher",
      },
      {
        title: "uploaded by teacher",
      },
      {
        title: "uploaded by teacher",
      },
      {
        title: "uploaded by teacher",
      },
      {
        title: "uploaded by teacher",
      },
      {
        title: "uploaded by teacher",
      },
    ];
    return (
      <View style={styles._container}>
        <View style={styles._inner_layer}>
          <ScrollView contentContainerStyle={{ paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
            {list.map((val, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles._question_view}
                  activeOpacity={0.7}
                >
                  <MaterialCommunityIcons
                    name="file-download"
                    size={24}
                    color={theme.primary}
                  />
                  <View style={styles._desc_view}>
                    <Text style={styles._q}>{val.title}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity style={styles._btn}>
              <Text style={styles._btn_text}>
              Upload hier een nieuw bestand!</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default List;

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
    elevation: 4,
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
    flexDirection: "row",
    justifyContent: "center",
  },
  _q: {
    fontFamily: theme.medium,
  },
  _desc: {
    fontFamily: theme.medium,
    flex: 1,
  },
  _question_view: {
    margin: 5,
    borderRadius: 5,
    borderColor: theme.black,
    flexDirection: "row",
    elevation: 5,
    backgroundColor: theme.white,
    height: 70,
    alignItems: "center",
    padding: 10,
  },
  _btn: {
    backgroundColor: theme.secondary,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 20,
  },

  _btn_text: {
    fontFamily: theme.medium,
  },
});
