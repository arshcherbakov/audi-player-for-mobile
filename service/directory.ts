import * as FileSystem from 'expo-file-system';

export const createDirectory = async (directoryPath: string): Promise<void> => {
  try {
    await FileSystem.makeDirectoryAsync(directoryPath, {
      intermediates: true,
    });
  } catch (error) {
    console.error('Ошибка чтения папки:', error);
  }
};

export const readDirectory = async (path: string): Promise<string[]> => {
  try {
    // const directoryPath = FileSystem.documentDirectory + 'music/';
    const dirInfo = await FileSystem.getInfoAsync(path);

    if (!dirInfo.exists) {
      await createDirectory(path);
    }

    const files = await FileSystem.readDirectoryAsync(path);

    console.log('Файлы в директории:', files);
    console.log(path);

    files.forEach(file => {
      console.log(`Файл: ${file}`);
    });

    return files;
  } catch (error) {
    throw {
      message: 'Ошибка чтения папки:',
      error: error,
    };
  }
};

export const uploadFileInDirectory = async (
  directoryPath: string,
  filePath: string,
): Promise<void> => {
  try {
    await FileSystem.uploadAsync(directoryPath, filePath);
  } catch (error) {
    throw {
      message: 'Ошибка загрузки файла:',
      error: error,
    };
  }
};
