import {
  createStackNavigator,
  createAppContainer,
  HeaderStyleInterpolator
} from "react-navigation";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        headerTintColor: "white",
        headPressColorAndroid: "#ffffff",
        gesturesEnabled: true,
        gestureDirection: "up-to-down",
        ...headerStyles
      }
    }
  },
  {
    headerMode: "screen",
    headerLayoutPreset: "center",
    headerBackTitleVisible: false
  }
);

export default createAppContainer(MainNavigation);
