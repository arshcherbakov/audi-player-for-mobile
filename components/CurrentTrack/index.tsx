import { Text, View, Image, Dimensions } from "react-native";
import { useState, FC } from "react";

import CustomButton from "@/components/ui/CustomButton";
import { DEFAULT_MUSIC_PICTURE, PLAY_ICON, PAUSE_ICON } from "@/constants";
import { IMusic } from "@/interfaces/interfaces";
import styles from "./style";

interface ICurrentTrackProps {
  musicData: IMusic;
}

const CurrentTrack: FC<ICurrentTrackProps> = ({ musicData }) => {
  const screenHeight = Dimensions.get("window").height - 120;

  const [isPlay, setIsPlay] = useState(true);

  const iconButton = isPlay ? PAUSE_ICON : PLAY_ICON;

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
