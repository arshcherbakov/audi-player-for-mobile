import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Header from "@/components/Header";
import TableMusic from "@/components/TableMusic";
import CurrentTrack from "@/components/CurrentTrack";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IMusic } from "@/interfaces/interfaces";

const initStateCurrentTrack = {
  id: "",
  musicName: "",
  authorName: "",
};

export default function HomeScreen() {
  const [currentTrack, setCurrentTrack] = useState<IMusic>(
    initStateCurrentTrack
  );

  const handleOnClickTrack = (musicData: IMusic) => {
    setCurrentTrack(musicData);
  };

  return (
    <ParallaxScrollView>
      <View style={styles.container}>
        <Header />
        <TableMusic
          trackId={currentTrack.id}
          handleOnClickTrack={handleOnClickTrack}
        />
      </View>
      {currentTrack.id && <CurrentTrack musicData={currentTrack} />}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
});
