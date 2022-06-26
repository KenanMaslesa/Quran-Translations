import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { Audio } from "expo-av";

import TranslationCard from "./TranslationCard";
import { Ayah } from "../shared/models";

const AyahCard: React.FC<{ ayah: Ayah }> = (props) => {
  const [playingAyah, setPlayingAyah] = useState<number>();

  const [showBosnianKorkutTranslation, setShowBosnianKorkutTranslation] =
    useState(true);
  const [showBosnianMehanovicTranslation, setShowBosnianMehanovicTranslation] =
    useState(false);
  const [showEnglishSaheehTranslation, setShowEnglishSaheehTranslation] =
    useState(false);
  const [
    showEnglishHilaliKhanTranslation,
    setShowEnglishHilaliKhanTranslation,
  ] = useState(false);
  const [showGermanTranslation, setShowGermanTranslation] = useState(false);
  const [showSpanishTranslation, setShowSpanishTranslation] = useState(false);
  const [showFrenchTranslation, setShowFrenchTranslation] = useState(false);
  const [showTurkishTranslation, setShowTurkishTranslation] = useState(false);

  const [fontsLoaded] = useFonts({
    quran: require("../assets/fonts/me_quran.ttf"),
  });

  async function playSound(ayahIndex: number) {
    const urlTemplate = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayahIndex}.mp3`;
    const { sound } = await Audio.Sound.createAsync({ uri: urlTemplate });
    await sound.playAsync();
    const interval = setInterval(() => {
      sound.getStatusAsync().then((status) => {
        if(!status.isPlaying) {
            clearInterval(interval);
            // ayahIndex = ayahIndex + 1;
            // setPlayingAyah(ayahIndex);
            // playSound(ayahIndex);
        }
      })
    }, 1000)

  }

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  return (
    <Pressable style={styles.ayahCard} onPress={() => playSound(props.ayah.index)}>
      <Text style={styles.ayaNumber}>{props.ayah.ayaNumber}.</Text>
      <Text style={styles.arabicText}>{props.ayah.aya}</Text>

      {showBosnianKorkutTranslation && (
        <TranslationCard
          translation={props.ayah.translation.bosnianKorkut}
          title="Bosnian - Korkut"
        />
      )}
      {showBosnianMehanovicTranslation && (
        <TranslationCard
          translation={props.ayah.translation.bosnianMehanovic}
          title="Bosnian - Mehanovic"
        />
      )}
      {showEnglishSaheehTranslation && (
        <TranslationCard
          translation={props.ayah.translation.englishSaheeh}
          title="English - Saheeh:"
        />
      )}
      {showEnglishHilaliKhanTranslation && (
        <TranslationCard
          translation={props.ayah.translation.englishHilaliKhan}
          title="English - Hilali Khan:"
        />
      )}
      {showGermanTranslation && (
        <TranslationCard
          translation={props.ayah.translation.germanBubenheim}
          title="German:"
        />
      )}
      {showSpanishTranslation && (
        <TranslationCard
          translation={props.ayah.translation.spanishMontadaEu}
          title="Spanish:"
        />
      )}
      {showFrenchTranslation && (
        <TranslationCard
          translation={props.ayah.translation.frenchMontada}
          title="French:"
        />
      )}
      {showTurkishTranslation && (
        <TranslationCard
          translation={props.ayah.translation.turkishRowwadTranslationCentar}
          title="Turkish:"
        />
      )}
    </Pressable>
  );
};

export default AyahCard;

const styles = StyleSheet.create({
  ayahCard: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderBottomWidth: 0.2,
    paddingTop: 15,
    paddingBottom: 15,
  },
  arabicText: {
    color: "white",
    fontFamily: "quran",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  ayaNumber: {
    color: "white",
    marginBottom: 10,
    fontSize: 16,
    textAlign: "center",
  },
});
