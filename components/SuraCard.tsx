import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Sura } from "../models";

const SuraCard: React.FC<{ sura: Sura }> = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.suraContainer}
      onPress={() => {
        navigation.navigate("Sura", {
          suraIndex: props.sura.index,
          suraTitle: props.sura.name.english,
        });
      }}
    >
      <View style={styles.suraCard}>
        <Text style={styles.suraText}>
          {props.sura.index}. {props.sura.name.englishTranscription} -{" "}
          {props.sura.name.english}
        </Text>
        {/* <Text>
          {props.sura.type} - {props.sura.numberOfAyas} ayahs
        </Text> */}
      </View>
    </Pressable>
  );
};

export default SuraCard;

const styles = StyleSheet.create({
  suraContainer: {
    flex: 1,
    alignItems: "center",
  },
  suraCard: {
    padding: 10,
    borderColor: "gray",
    borderBottomWidth: 0.2,
    width: "95%",
    borderRadius: 5,
  },
  suraText: {
    color: "white",
    fontSize: 16,
  },
});
