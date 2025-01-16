import { Audio } from 'expo-av';
import { useEffect, useRef } from 'react';

const useAudioPlayer = (pathAudio: string) => {
  const player = useRef<Audio.Sound | null>(null);

  useEffect(() => {
    const createConnection = async (): Promise<void> => {
      const { sound: playbackObject } = await Audio.Sound.createAsync({
        uri: pathAudio,
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
