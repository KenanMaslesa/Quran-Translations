import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ImageBackground } from "react-native";

import AyahCard from "../components/AyahCard";
import Loader from "../components/Loader";
import { Ayah } from "../models";

const quranTranslation = require("@kmaslesa/quran-translations");
const quranMetaData = require("@kmaslesa/quran-metadata");

const SuraScreen: React.FC<{ route: any; navigation: any }> = (props) => {
  const [ayahs, setAyahs] = useState<Ayah[]>([]);

  useEffect(() => {
    const suraIndex = props.route.params.suraIndex;
    setAyahs(quranTranslation.getTranslationBySura(suraIndex));
    const suraInfo = quranMetaData.getSuraByIndex(suraIndex);

    props.navigation.setOptions({
      title: `${suraInfo?.name.englishTranscription}`,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.backgroundImage}
      >
        {ayahs.length != 0 ? (
          <FlatList
            style={styles.ayahList}
            refreshing={true}
            data={ayahs}
            keyExtractor={(item) => `${item.index}`}
            initialNumToRender={7}
            renderItem={({ item }) => <AyahCard ayah={item} />}
          />
        ) : (
          <Loader />
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    minHeight: "100%",
  },
  container: {
    flex: 1,
    width: "100%",
  },
  ayahList: {
    width: "100%",
  },
});

export default SuraScreen;
