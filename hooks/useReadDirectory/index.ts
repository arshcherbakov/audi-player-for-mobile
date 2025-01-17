import { readDirectory } from '@/service/directory';
import { useEffect, useState } from 'react';

const useReadDirectory = (path: string) => {
  const [listsAudioFiles, setListsAudioFiles] = useState<string[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    readDirectory(path)
      .then(filesAudio => setListsAudioFiles(filesAudio))
      .catch(error => setError(error));
  }, []);

  return [error, listsAudioFiles, setListsAudioFiles];
};

export default useReadDirectory;
