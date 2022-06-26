import { View, Text, StyleSheet } from "react-native";
import { Ayah } from "../models";
import { useFonts } from 'expo-font';

const AyahCard: React.FC<{ ayah: Ayah }> = (props) => {

  const [fontsLoaded] = useFonts({
    'quran': require('../assets/fonts/me_quran.ttf'),
  })

  if(!fontsLoaded) {
    return (
      <Text>Loading...</Text>
    )
  }

  return (
    <View style={styles.ayahCard}>
      <Text style={styles.ayaNumber}>{props.ayah.ayaNumber}.</Text>
      <Text style={styles.arabicText}>{props.ayah.aya}</Text>
      <Text style={styles.translationText}>{props.ayah.translation.bosnianKorkut}</Text>
      <Text style={styles.translationText}>{props.ayah.translation.bosnianMehanovic}</Text>
      <Text style={styles.translationText}>{props.ayah.translation.englishSaheeh}</Text>
      <Text style={styles.translationText}>{props.ayah.translation.englishHilaliKhan}</Text>
      <Text style={styles.translationText}>{props.ayah.translation.germanBubenheim}</Text>
      <Text style={styles.translationText}>{props.ayah.translation.spanishMontadaEu}</Text>
      <Text style={styles.translationText}>{props.ayah.translation.frenchMontada}</Text>
      <Text style={styles.translationText}>{props.ayah.translation.turkishRowwadTranslationCentar}</Text>
    </View>
  );
};

export default AyahCard;

const styles = StyleSheet.create({
  ayahCard: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderColor: "gray",
    borderBottomWidth: 0.2,
    paddingTop: 15,
    paddingBottom: 15,
  },
  arabicText: {
    color: "white",
    fontFamily: 'quran',
    fontSize: 22,
    marginBottom: 10,
    textAlign: "center",
  },
  translationText: {
    color: "white",
    textAlign: "center",
    fontSize: 16
  },
  ayaNumber: {
    color: "white",
    marginBottom: 10,
    fontSize: 16
  },
});
