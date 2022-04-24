import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import theme from "../../../theme";
const windowWidth = Dimensions.get("screen").width;
// const windowHeight = Dimensions.get("window").height;
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      address: "",
      phone: "",
    };
  }
  render() {
    let { email, password, address, phone } = this.state;
    return (
      <View style={styles._container}>
        <ScrollView>
          <View style={styles._header}>
            <View style={styles._circle}>
              <Image
                source={require("./../../../assets/academylogo.png")}
                style={styles._logo}
              />
            </View>
          </View>

          <Text style={styles._title}>Welkom!</Text>
          <TextInput
            style={styles._text_field}
            placeholder="Email"
            value={email}
            onChangeText={(e) => this.setState({ email: e })}
          />

          <TextInput
            style={styles._text_field}
            placeholder="Address"
            value={address}
            onChangeText={(e) => this.setState({ address: e })}
          />
          <TextInput
            style={styles._text_field}
            placeholder="Phone numer"
            value={phone}
            onChangeText={(e) => this.setState({ phone: e })}
          />
          <TextInput
            style={styles._text_field}
            placeholder="Password"
            value={password}
            secureTextEntry
            onChangeText={(e) => this.setState({ password: e })}
          />
          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text style={styles._forgot_text}>Forgot password</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles._btn}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={styles._btn_text}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles._footer}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles._newuser}>Already have an account? Login!</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
  },
  _header: {
    height: 230,
    backgroundColor: theme.primary,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    width: windowWidth + 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  _logo: {
    resizeMode: "contain",
    aspectRatio: 1 / 2,
  },
  _title: {
    fontFamily: theme.bold,
    textAlign: "center",
    paddingVertical: 30,
    fontSize: 22,
  },
  _text_field: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.grey,
    margin: 10,
    padding: 15,
  },
  _circle: {
    height: 130,
    width: 130,
    borderRadius: 100,
    backgroundColor: theme.white,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  _forgot_text: {
    fontFamily: theme.medium,
    alignSelf: "flex-end",
    marginHorizontal: 20,
    fontSize: 13,
    color: theme.primary,
  },
  _btn: {
    backgroundColor: theme.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 20,
    marginHorizontal: 30,
  },

  _btn_text: {
    fontFamily: theme.medium,
  },
  _footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  _newuser: {
    fontFamily: theme.medium,
  },
});
