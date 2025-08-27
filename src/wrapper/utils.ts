import { AndroidBox, Dir, File, LinuxBox } from '../resources/v1/boxes';
import { AndroidBoxOperator } from './box/android';
import { LinuxBoxOperator } from './box/linux';
import { DirectoryOperator, FileOperator } from './box/file-system';
import { BoxOperator } from './sdk';

export function isAndroidBox(box: AndroidBox | LinuxBox): box is AndroidBox {
  return box.type === 'android';
}

export function isLinuxBox(box: AndroidBox | LinuxBox): box is LinuxBox {
  return box.type === 'linux';
}

export function isAndroidOperator(operator: BoxOperator): operator is AndroidBoxOperator {
  return operator.data.type === 'android';
}

export function isLinuxOperator(operator: BoxOperator): operator is LinuxBoxOperator {
  return operator.data.type === 'linux';
}

export function isFile(item: File | Dir): item is File {
  return item.type === 'file';
}

export function isDirectory(item: File | Dir): item is Dir {
  return item.type === 'dir';
}

export function isFileOperator(item: FileOperator | DirectoryOperator): item is FileOperator {
  return item.data.type === 'file';
}

export function isDirectoryOperator(item: FileOperator | DirectoryOperator): item is DirectoryOperator {
  return item.data.type === 'dir';
}
