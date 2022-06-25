import { View, Text, StyleSheet } from "react-native";
import { Ayah } from "../models";

const AyahCard: React.FC<{ ayah: Ayah }> = (props) => {
  return (
    <View style={styles.ayahCard}>
      <Text style={styles.ayaNumber}>{props.ayah.ayaNumber}.</Text>
      <Text style={styles.arabicText}>{props.ayah.aya}</Text>
      <Text style={styles.translationText}>{props.ayah.translation}</Text>
    </View>
  );
};

export default AyahCard;

const styles = StyleSheet.create({
  ayahCard: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderColor: "lightgray",
    borderBottomWidth: 0.2,
    paddingTop: 15,
    paddingBottom: 15,
  },
  arabicText: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  translationText: {
    color: "white",
    textAlign: "center",
  },
  ayaNumber: {
    color: "white",
    marginBottom: 10,
  },
});
