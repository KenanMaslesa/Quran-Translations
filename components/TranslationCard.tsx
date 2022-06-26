import { View, Text, StyleSheet } from "react-native";

interface TranslationCardProps {
  translation: string;
  title: string;
}

const TranslationCard: React.FC<TranslationCardProps> = (props) => {
  return (
    <View style={styles.translationCard}>
      <Text style={styles.translationTitle}>{props.title}</Text>
      <Text style={styles.translationText}>{props.translation}</Text>
    </View>
  );
};

export default TranslationCard;

const styles = StyleSheet.create({
  translationCard: {
    margin: 10,
  },
  translationTitle: {
    color: "aqua",
    marginBottom: 5,
    textAlign: "center",
  },
  translationText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
