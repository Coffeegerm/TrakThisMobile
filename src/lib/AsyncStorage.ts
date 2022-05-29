import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeItem = async (key: string, item: string | unknown) => {
  const parsedItem = typeof item !== 'string' ? JSON.stringify(item) : item;
  try {
    await AsyncStorage.setItem(key, parsedItem);
  } catch (err) {
    throw err;
  }
};

export const getItem = async <ReturnType extends unknown>(
  key: string
): Promise<ReturnType> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : undefined;
  } catch (e) {
    throw e;
  }
};
