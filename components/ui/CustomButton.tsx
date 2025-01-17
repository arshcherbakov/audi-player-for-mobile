import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";

interface ICustomButtonProps {
  handleButton: () => void;
  styleButton?: StyleProp<ViewStyle>;
  Icon?: React.ReactNode;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  handleButton,
  styleButton,
  Icon,
}) => (
  <TouchableOpacity onPress={handleButton} style={[styles.button, styleButton]}>
    {Icon && Icon}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#000000",
  },
});

export default CustomButton;
