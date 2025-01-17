import { Audio } from 'expo-av';
import { useEffect, useRef } from 'react';
import { Asset } from 'expo-asset';

const useAudioPlayer = (pathAudio: string) => {
  const player = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const createConnection = async (): Promise<void> => {
      const audioAsset = Asset.fromModule(pathAudio);
      await audioAsset.downloadAsync();

      const { sound: playbackObject } = await Audio.Sound.createAsync({
        uri: audioAsset.uri,
      });

      player.current = playbackObject;
    };

    createConnection();

    return () => {
      player.current?.unloadAsync();
    };
  }, []);

  const play = async (): Promise<void> => {
    await player.current?.setStatusAsync({ shouldPlay: true });
  };

  const pause = async (): Promise<void> => {
    await player.current?.setStatusAsync({ shouldPlay: false });
  };

  const playerAudio = player.current;

  return {
    playerAudio,
    play,
    pause,
  };
};

export default useAudioPlayer;
