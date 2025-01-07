import { FlatList } from "react-native";

import RowTable from "@/components/RowTable";
import { MUSIC_LIST } from "@/constants";
import { IMusic } from "@/interfaces/interfaces";
import styles from "./style";

interface ITableMusicProps {
  trackId: string;
  handleOnClickTrack: (musicData: IMusic) => void;
}

const TableMusic: React.FC<ITableMusicProps> = ({
  trackId,
  handleOnClickTrack,
}) => (
  <FlatList
    data={MUSIC_LIST}
    renderItem={({ item }) => (
      <RowTable
        key={item.id}
        musicData={item}
        handleOnClickTrack={handleOnClickTrack}
        trackId={trackId}
      />
    )}
    keyExtractor={(item) => item.id}
    style={styles.flat_list}
  />
);

export default TableMusic;
