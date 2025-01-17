import { Audio } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import { Asset } from 'expo-asset';

const useAudioPlayer = (pathAudio: string) => {
  const player = useRef<Audio.Sound | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const createConnection = async (): Promise<void> => {
      try {
        const audioAsset = Asset.fromModule(pathAudio);
        await audioAsset.downloadAsync();

        const { sound: playbackObject } = await Audio.Sound.createAsync({
          uri: audioAsset.uri,
        });

        player.current = playbackObject;

        setIsLoaded(true);
      } catch (error: unknown) {
        console.error('Ошибка загрузки аудио', error);
      }
    };

    createConnection();

    return () => {
      player.current?.unloadAsync();
    };
  }, [pathAudio]);

  const play = async (): Promise<void> => {
    try {
      await player.current?.setStatusAsync({ shouldPlay: true });
    } catch (error: unknown) {
      console.error('Ошибка воспроизведения аудио', error);
    }
  };

  const pause = async (): Promise<void> => {
    try {
      await player.current?.setStatusAsync({ shouldPlay: false });
    } catch (error: unknown) {
      console.error('Ошибка остановки аудио', error);
    }
  };

  const playerAudio = player.current;

  return {
    playerAudio,
    play,
    pause,
    isLoaded,
  };
};

export default useAudioPlayer;
