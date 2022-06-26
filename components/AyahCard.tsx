import { View, Text, StyleSheet, Button } from "react-native";
import { Ayah } from "../shared/models";
import { useFonts } from "expo-font";
import { useState } from "react";
import TranslationCard from "./TranslationCard";

const AyahCard: React.FC<{ ayah: Ayah }> = (props) => {
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

  if (!fontsLoaded) {
    return <Text></Text>;
  }

  return (
    <View style={styles.ayahCard}>
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
    </View>
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
