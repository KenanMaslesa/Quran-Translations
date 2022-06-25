import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Sura } from "../models";
import SuraCard from "./SuraCard";

const quranMetaData = require("@kmaslesa/quran-metadata");

const SuraList = () => {
  const [suraList, setSuraList] = useState<Sura[]>();

  useEffect(() => {
    const response = quranMetaData.getSuraList();
    setSuraList(response);
  }, []);

  return (
    <View>
      <FlatList
        data={suraList}
        keyExtractor={(item) => `${item.index}`}
        renderItem={({ item }) => <SuraCard sura={item} />}
      />
    </View>
  );
};

export default SuraList;
