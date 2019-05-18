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
        headerTitle: "Hello",
        ...headerStyles
      }
    }
  },
  {
    headerMode: "screen"
  }
);

export default createAppContainer(MainNavigation);
