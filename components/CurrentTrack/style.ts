import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  current_track: {
    position: "absolute",
    left: 0,
    width: "100%",

    backgroundColor: "#1E1E1E",
  },
  container: {
    height: 120,
    paddingLeft: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  picture: {
    width: 85,
    height: 85,
    borderRadius: 25,
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    paddingRight: 52,
    flex: 1,
  },
  music_name: {
    fontSize: 24,
    fontWeight: 500,
    color: "#E5E5E5",
  },
  author_name: {
    fontSize: 16,
    color: "#BCBCBC",
  },
  play_button: {
    width: 50,
    height: 50,
    marginRight: 32,
    borderRadius: 100,
    backgroundColor: "#ffffff",
  },
});

export default styles;
