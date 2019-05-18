import { createStackNavigator, HeaderBackButton } from "react-navigation";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";

export const headerStyles = {
  headerStyle: {
    backgroundColor: "blue",
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: TINT_COLOR
  }
};

export const createStack = (screen, title, headerLayoutPreset) =>
  createStackNavigator(
    {
      Screen: {
        screen,
        navigationOptions: {
          title,
          ...headerStyles
        }
      }
    },
    {
      headerLayoutPreset
    }
  );
