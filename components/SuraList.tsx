import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Sura } from "../shared/models";
import Loader from "./Loader";
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
      {suraList?.length != 0 ? (
        <FlatList
          data={suraList}
          keyExtractor={(item) => `${item.index}`}
          renderItem={({ item }) => <SuraCard sura={item} />}
        />
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default SuraList;
