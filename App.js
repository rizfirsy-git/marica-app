import "react-native-gesture-handler";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Musik from "./screens/Musik";
import Aktifitas from "./screens/Aktifitas";
import Cerita from "./screens/Cerita";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import TermCondition from "./screens/TermCondition";
import BuatAkunAnak from "./screens/BuatAkunAnak";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigation from "./components/widgets/TabNavigation";
import HeaderProfile from "./components/widgets/HeaderProfile";
import Profile from "./screens/Profile";
import HeaderBack from "./components/widgets/HeaderBack";
import VideoDetails from "./screens/VideoDetails";
import Transaksi from "./screens/Transaksi";
import TentangKami from "./screens/TentangKami";
import Feedback from "./screens/Feedback";
import ResetPassword from "./screens/ResetPassword";
// const forFade = ({ current, next }) => {
//   const opacity = Animated.add(
//     current.progress,
//     next ? next.progress : 0
//   ).interpolate({
//     inputRange: [0, 1, 2],
//     outputRange: [0, 1, 0],
//   });

//   return {
//     leftButtonStyle: { opacity },
//     rightButtonStyle: { opacity },
//     titleStyle: { opacity },
//     backgroundStyle: { opacity },
//   };
// };

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function HomeScreen({ navigation }) {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={TabNavigation.bind(navigation)}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: HeaderProfile,
        }}
      />
      <Tab.Screen
        name="Cerita"
        component={Cerita}
        options={{
          headerTitle: () => null,
          headerRight: () => null,
        }}
      />
      <Tab.Screen
        name="Musik"
        component={Musik}
        options={{
          headerTitle: () => null,
          headerRight: () => null,
        }}
      />
      <Tab.Screen
        name="Aktifitas"
        component={Aktifitas}
        options={{
          headerTitle: () => null,
          headerRight: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-MediumItalic": require("./assets/fonts/Nunito-MediumItalic.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-SemiBoldItalic": require("./assets/fonts/Nunito-SemiBoldItalic.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-BoldItalic": require("./assets/fonts/Nunito-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* //TODO: do custom headers for each screen */}
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="TermCondition"
              component={TermCondition}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="Buat akun anak"
              component={BuatAkunAnak}
              options={{ header: () => null }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                header: () => null,
              }}
            />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen
              name="VideoDetails"
              component={VideoDetails}
              options={({ route, navigation }) => {
                return {
                  title: "kembali",
                };
              }}
            />
            <Stack.Screen
              name="Transaksi"
              component={Transaksi}
              options={({ route, navigation }) => {
                return {
                  title: "kembali",
                };
              }}
            />
            <Stack.Screen
              name="TentangKami"
              component={TentangKami}
              options={({ route, navigation }) => {
                return {
                  title: "kembali",
                };
              }}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
              options={({ route, navigation }) => {
                return {
                  title: "kembali",
                };
              }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{
                header: () => null,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
