import { StyleSheet, ViewStyle } from "react-native";

const touchableOpacity: ViewStyle = {
  paddingTop: 8,
  paddingBottom: 8,
  paddingLeft: 8,
  paddingRight: 12,
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "rgba(61, 61, 61, 0.5)",
};

const styles = StyleSheet.create({
  item: { ...touchableOpacity },
  item_current: {
    ...touchableOpacity,
    backgroundColor: "rgb(99 88 88)",
  },
  picture: {
    width: 85,
    height: 85,
    borderRadius: 25,
  },
  wrapper_content: { flexDirection: "row", gap: 10, flex: 1 },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: 52,
    flex: 1,
  },
  music_name: {
    fontFamily: "SFProDisplayBold",
    fontSize: 24,
    fontWeight: 500,
    color: "#E5E5E5",
  },
  author_name: {
    fontSize: 16,
    color: "#BCBCBC",
  },
  controll: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  buttons: {
    backgroundColor: "rgba(61, 61, 61, 0.5)",
  },
  current_buttons: {
    backgroundColor: "rgb(99 88 88)",
  },
});

export default styles;
