import { View, Text } from "react-native";

import CustomButton from "@/components/ui/CustomButton";
import styles from "./style";

const Header: React.FC = () => (
  <View style={styles.container}>
    <CustomButton
      handleButton={() => {}}
      imageSource={require("@/assets/images/icons/arrow.svg")}
    />
    <Text style={styles.titleText}>Songs</Text>
    <CustomButton
      handleButton={() => {}}
      imageSource={require("@/assets/images/icons/settings.svg")}
    />
  </View>
);

export default Header;
