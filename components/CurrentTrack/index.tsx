import { Text, View, Image, Dimensions } from "react-native";

import CustomButton from "@/components/ui/CustomButton";
import { DEFAULT_MUSIC_PICTURE, PLAY_ICON, PAUSE_ICON } from "@/constants";
import { IMusic } from "@/interfaces/interfaces";
import styles from "./style";

interface ICurrentTrackProps {
  isPlay: boolean;
  musicData: IMusic;
  handlePlayMusic: () => void;
}

const CurrentTrack: React.FC<ICurrentTrackProps> = ({ isPlay, musicData, handlePlayMusic }) => {
  const currentTrackHeight = 120
  const screenHeight = Dimensions.get("window").height - currentTrackHeight;

  const iconButton = isPlay ? PAUSE_ICON : PLAY_ICON;

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
