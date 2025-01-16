import { Text, View, Image, TouchableOpacity } from "react-native";

import CustomButton from "@/components/ui/CustomButton";
import { IMusic } from "@/interfaces/interfaces";
import {
  DEFAULT_AUTHOR_NAME,
  DEFAULT_MUSIC_NAME,
  DEFAULT_MUSIC_PICTURE,
} from "@/constants";
import HeartIcon from "@/icons/HeartIcon";
import ActionIcon from "@/icons/ActionIcon";
import styles from "./style";

interface IRowTableProps {
  musicData: IMusic;
  trackId: string;
  handleOnClickTrack: (musicData: IMusic) => void;
}

const RowTable: React.FC<IRowTableProps> = ({
  musicData,
  trackId,
  handleOnClickTrack,
}) => {
  const musicName = musicData.musicName || DEFAULT_MUSIC_NAME;
  const authorName = musicData.authorName || DEFAULT_AUTHOR_NAME;

  const isCurrentTrack = musicData.id === trackId;

  const currentTrackStyle = isCurrentTrack ? styles.item_current : styles.item;
  const currentTrackButtonStyle = isCurrentTrack
    ? styles.current_buttons
    : styles.buttons;

  const handleAddFavorites = (): void => {};

  const handleOptionsMenu = (): void => {};

  return (
    <TouchableOpacity
      style={currentTrackStyle}
      onPress={() => handleOnClickTrack(musicData)}
    >
      <View style={styles.wrapper_content}>
        <Image source={DEFAULT_MUSIC_PICTURE} style={styles.picture} />
        <View style={styles.content}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.music_name}
          >
            {musicName}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.author_name}
          >
            {authorName}
          </Text>
        </View>
      </View>
      <View style={styles.controll}>
        <CustomButton
          handleButton={handleAddFavorites}
          Icon={<HeartIcon />}
          styleButton={currentTrackButtonStyle}
        />
        <CustomButton
          handleButton={handleOptionsMenu}
          Icon={<ActionIcon />}
          styleButton={currentTrackButtonStyle}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RowTable;
