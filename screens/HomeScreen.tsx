import { Text, View } from "react-native";
import { ImageBackground } from "react-native";

import SuraList from "../components/SuraList";

const HomeScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={{ minHeight: "100%" }}
      >
        <SuraList />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
