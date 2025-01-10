import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { useAudioPlayer } from "expo-audio";

import Header from "@/components/Header";
import TableMusic from "@/components/TableMusic";
import CurrentTrack from "@/components/CurrentTrack";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IMusic } from "@/interfaces/interfaces";
import audioSource from "@/assets/music/Korol_i_SHut.mp3";

const initStateCurrentTrack = {
  id: "",
  musicName: "",
  authorName: "",
};

export default function HomeScreen() {
  const [currentTrack, setCurrentTrack] = useState<IMusic>(
    initStateCurrentTrack
  );
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const player = useAudioPlayer(audioSource);

  useEffect(() => {
    isPlay ? player.play() : player.pause();
  }, [isPlay]);

  const handlePlayMusic = () => {
    setIsPlay(!isPlay);
  };

  const handleOnClickTrack = (musicData: IMusic) => {
    handlePlayMusic();
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
      {currentTrack.id && <CurrentTrack musicData={currentTrack}  isPlay={isPlay} handlePlayMusic={handlePlayMusic} />}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
});
