import { createStackNavigator } from "@react-navigation/stack";
import DiscoverScreen from "../screens/DiscoverScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import HomeScreen from "../screens/HomeScreen";
import SuraScreen from "../screens/SuraScreen";
import { Colors } from "../shared/colors";

const Stack = createStackNavigator();

const headerOptions = {
  headerStyle: { backgroundColor: Colors.mainColor },
  headerTintColor: "white",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...headerOptions,
        }}
      />
      <Stack.Screen
        name="Sura"
        component={SuraScreen}
        options={{
          ...headerOptions,
        }}
      />
    </Stack.Navigator>
  );
};

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          ...headerOptions,
        }}
      />
    </Stack.Navigator>
  );
};

const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          ...headerOptions,
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, FavoriteStackNavigator, DiscoverStackNavigator };
