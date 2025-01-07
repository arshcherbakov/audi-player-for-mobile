import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
  ImageSourcePropType,
} from "react-native";

interface ICustomButtonProps {
  handleButton: () => void;
  styleButton?: StyleProp<ViewStyle>;
  imageSource?: ImageSourcePropType;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  handleButton,
  styleButton,
  imageSource,
}) => (
  <TouchableOpacity onPress={handleButton} style={[styles.button, styleButton]}>
    {imageSource && <Image source={imageSource} />}
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
