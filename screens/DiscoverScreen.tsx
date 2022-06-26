import { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AyahCard from "../components/AyahCard";
import { COLORS } from "../shared/colors";
import { Ayah } from "../shared/models";

const quranTranslation = require("@kmaslesa/quran-translations");

const DiscoverScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ayahs, setAyahs] = useState<Ayah[]>([]);

  useEffect(() => {
    searchAyahs();
  }, [searchTerm]);

  const searchAyahs = () => {
    if(searchTerm === '') {
      setAyahs([]);
    }
    else {
      setAyahs(quranTranslation.searchAyahs(searchTerm));
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.backgroundImage}
      >
        <View>
          <TextInput
            style={styles.input}
            placeholder="Search Qur'an"
            placeholderTextColor={"white"}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          {ayahs.length !== 0 && <Text style={styles.text}>Found: {ayahs.length}</Text>}
          
          <FlatList
            data={ayahs}
            keyExtractor={(item) => `${item.index}`}
            initialNumToRender={7}
            renderItem={({ item }) => <AyahCard ayah={item} />}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainColor,
  },
  backgroundImage: {
    minHeight: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "gray",
    borderRadius: 5,
    color: "white",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default DiscoverScreen;
