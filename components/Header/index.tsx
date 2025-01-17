import { View, Text } from "react-native";

import CustomButton from "@/components/ui/CustomButton";
import ArrowIcon from "@/icons/ArrowIcon";
import ActionIcon from "@/icons/ActionIcon";
import styles from "./style";

const Header: React.FC = () => (
  <View style={styles.container}>
    <CustomButton
      handleButton={() => {}}
      Icon={<ArrowIcon />}
    />
    <Text style={styles.titleText}>Songs</Text>
    <CustomButton
      handleButton={() => {}}
      Icon={<ActionIcon />}
    />
  </View>
);

export default Header;
