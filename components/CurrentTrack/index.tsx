import { Text, View, Image, Dimensions } from "react-native";
import { useState, FC, useEffect } from "react";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

import CustomButton from "@/components/ui/CustomButton";
import { DEFAULT_MUSIC_PICTURE, PLAY_ICON, PAUSE_ICON } from "@/constants";
import { IMusic } from "@/interfaces/interfaces";
import audioSource from "@/assets/music/Korol_i_SHut.mp3";
import styles from "./style";

interface ICurrentTrackProps {
  musicData: IMusic;
}

const CurrentTrack: FC<ICurrentTrackProps> = ({ musicData }) => {
  const screenHeight = Dimensions.get("window").height - 120;

  const [isPlay, setIsPlay] = useState(true);

  const player = useAudioPlayer(audioSource);
  const statusMusic = useAudioPlayerStatus(player);

  const iconButton = isPlay ? PAUSE_ICON : PLAY_ICON;

  useEffect(() => {
    isPlay ? player.play() : player.pause();

    console.log(statusMusic);
  }, [isPlay]);

  const handlePlayMusic = () => {
    setIsPlay(!isPlay);
  };

  return (
    <View style={[styles.current_track, { top: screenHeight }]}>
      <View style={styles.container}>
        <Image source={DEFAULT_MUSIC_PICTURE} style={styles.picture} />
        <View style={styles.content}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.music_name}
          >
            {musicData.musicName}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.author_name}
          >
            {musicData.authorName}
          </Text>
        </View>
        <CustomButton
          handleButton={handlePlayMusic}
          imageSource={iconButton}
          styleButton={styles.play_button}
        />
      </View>
    </View>
  );
};

export default CurrentTrack;
