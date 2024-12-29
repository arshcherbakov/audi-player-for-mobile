import { Button } from "react-native";

interface ICustomButton {
  textButton: string;
  handleButton: () => void;
}

const CustomButton = ({ textButton, handleButton }: ICustomButton) => (
  <Button title={textButton} onPress={handleButton} />
);

export default CustomButton;
