import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TranslationCard from "./TranslationCard";
import { Ayah } from "../shared/models";
import { getData, storeData } from "../shared/storage";
import { convertNumberToAudioString } from "../shared/helpers";

const AyahCard: React.FC<{ ayah: Ayah }> = (props) => {
  const [playingAyah, setPlayingAyah] = useState<number>();

  const [showBosnianKorkutTranslation, setShowBosnianKorkutTranslation] =
    useState(true);
  const [showBosnianMehanovicTranslation, setShowBosnianMehanovicTranslation] =
    useState(false);
  const [showEnglishSaheehTranslation, setShowEnglishSaheehTranslation] =
    useState(true);
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

  const markAyahAsFavorite = (ayah: Ayah) => {
    storeData(ayah, "favoriteAyah");

    getData("favoriteAyah").then((data) => {
      debugger;
      console.log(data);
    });
  };

  async function playSound(
    suraNumber: number,
    ayahNumber: number,
    playArabicAyah: boolean = true,
    playEnglishTranslation: boolean = false,
    playBosnianTranslation: boolean = false
  ) {
    const suraNumberString = convertNumberToAudioString(suraNumber);
    const ayahNumberString = convertNumberToAudioString(ayahNumber);
    debugger;
    let urlTemplate = "";
    if (playArabicAyah) {
      urlTemplate = `https://www.everyayah.com/data/Alafasy_128kbps/${suraNumberString}${ayahNumberString}.mp3`;
    } else if (playEnglishTranslation) {
      urlTemplate = `https://www.everyayah.com/data/English/Sahih_Intnl_Ibrahim_Walk_192kbps/${suraNumberString}${ayahNumberString}.mp3`;
    } else if (playBosnianTranslation) {
      urlTemplate = `https://www.everyayah.com/data/translations/besim_korkut_ajet_po_ajet/${suraNumberString}${ayahNumberString}.mp3`;
    }

    const { sound } = await Audio.Sound.createAsync({ uri: urlTemplate });
    await sound.playAsync();
    const interval = setInterval(() => {
      sound.getStatusAsync().then((status) => {
        if (!status.isPlaying) {
          clearInterval(interval);
          // ayahIndex = ayahIndex + 1;
          // setPlayingAyah(ayahIndex);
          // playSound(ayahIndex);
        }
      });
    }, 1000);
  }

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  return (
    <Pressable style={styles.ayahCard}>
      <Text style={styles.ayaNumber}>{props.ayah.ayaNumber}.</Text>
      <Pressable
        onPress={() =>
          playSound(props.ayah.sura, props.ayah.ayaNumber, true, false, false)
        }
      >
        <Text style={styles.arabicText}>{props.ayah.aya}</Text>
      </Pressable>
      {/* <Button title="favorite" onPress={() => markAyahAsFavorite(props.ayah)} /> */}

      {showBosnianKorkutTranslation && (
        <Pressable
          onPress={() =>
            playSound(props.ayah.sura, props.ayah.ayaNumber, false, false, true)
          }
        >
          <TranslationCard
            translation={props.ayah.translation.bosnianKorkut}
            title="Bosnian - Korkut"
          />
        </Pressable>
      )}
      {showBosnianMehanovicTranslation && (
        <TranslationCard
          translation={props.ayah.translation.bosnianMehanovic}
          title="Bosnian - Mehanovic"
        />
      )}
      {showEnglishSaheehTranslation && (
        <Pressable
          onPress={() =>
            playSound(props.ayah.sura, props.ayah.ayaNumber, false, true, false)
          }
        >
          <TranslationCard
            translation={props.ayah.translation.englishSaheeh}
            title="English - Saheeh:"
          />
        </Pressable>
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
