import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import theme from "../../../theme";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("window").height;
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", // Network image
      ],
    };
  }
  render() {
    return (
      <View style={styles._container}>
        <ScrollView>
          <View
            style={{
              //borderWidth: 3,
              //borderColor: theme.grey,
              //borderRadius: 20,
              overflow: "hidden",
              //margin: 5,
            }}
          >
          
          
          </View>

        
          <View style={styles._inner_view}>
            <Text style={styles._title}>Welkom bij muziekschool DMA</Text>
            <Text style={styles._title2}>Dutch Music Academy is dé muziekschool voor Purmerend en omstreken. Zodra je de deur van het prachtige monumentale pand opendoet,
                                        sta je in de nieuwe muzikale hotspot to be.
                                        DMA is een muziekschool waar je niet alleen lessen kunt volgen,
                                         maar ook een plek waar je een podium vindt en medemuzikanten ontmoet in onze gezellige lounge. Heb je nog nooit een instrument bespeeld? Of ben je 
                                        juist meer gevorderd en bijvoorbeeld op zoek naar een voortraject voor een vakopleiding?
                                         Bij DMA kan het allemaal.</Text>
            <View
              style={{
                borderWidth: 0,
                borderColor: theme.grey,
                borderRadius: 10,
                overflow: "hidden",
                margin: 5,
              }}
            >

            <TouchableOpacity
            style={styles._btn}
            onPress={() => this.props.navigation.navigate("Dma")}
          >
            <Text style={styles._btn_text}>Ga hier naar Mijn Dma!</Text>
          </TouchableOpacity>

              <SliderBox
                images={this.state.images}
                style={{ aspectRatio: 2 / 1.2, borderRadius: 10 }}
                parentWidth={windowWidth - 20}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  _container: {
    flex: 1,
    // padding:5
  },
  _banner: {
    // height: 140,
    aspectRatio: 2 / 1.2,
    overflow: "hidden",
    // borderRadius:10
  },
  _title: {
    fontFamily: theme.bold,
    marginVertical: 60,
    fontSize: 22,
    textAlign: "center",
    
  },

  _title2: {
    fontFamily: theme.italic,
    marginVertical: -50,
    fontSize: 14,
    textAlign: "center",
    padding: 20,
    paddingBottom: 100,
  },

  _inner_view: {
    padding: 10,
    // flex: 1,
    // padding: 30,
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
