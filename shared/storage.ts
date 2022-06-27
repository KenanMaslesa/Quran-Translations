import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: any, storageKey: string) => {
    try {
      await AsyncStorage.setItem(storageKey, JSON.stringify(value))
    } catch (e) {
      // saving error
    }
  }

  export const getData = async (storageKey: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
