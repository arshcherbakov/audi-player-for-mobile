import { StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";


import Header from "@/components/Header";
import TableMusic from "@/components/TableMusic";
import CurrentTrack from "@/components/CurrentTrack";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { IMusic } from "@/interfaces/interfaces";
const audioSource = require("@/assets/music/Korol_i_SHut.mp3");

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

  const { play, pause } = useAudioPlayer(audioSource);

  useEffect(() => {
    isPlay ? play() : pause();
  }, [isPlay]);

  const handlePlayMusic = () => {
    setIsPlay(!isPlay);
  };

  const handleOnClickTrack = (musicData: IMusic) => {
    handlePlayMusic();
    setCurrentTrack(musicData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_content}>
        <Header />
        <TableMusic
          trackId={currentTrack.id}
          handleOnClickTrack={handleOnClickTrack}
        />
      </View>
      {currentTrack.id && <CurrentTrack musicData={currentTrack}  isPlay={isPlay} handlePlayMusic={handlePlayMusic} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container_content: {
    height: "100%",
    padding: 20,
  },
});
