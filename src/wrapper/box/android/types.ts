import { BoxCreateAndroidParams, AndroidInstallParams } from '../../../resources/v1/boxes';
import { TimeString } from '../../types';
import { AndroidAppOperator } from './app-operator';
import { AndroidPkgOperator } from './pkg-operator';

export interface InstallAndroidAppByFile extends AndroidInstallParams.InstallAndroidPkgByFile {}

export interface InstallAndroidAppByURL extends AndroidInstallParams.InstallAndroidPkgByURL {}

export interface InstallAndroidAppByLocalFile {
  /**
   * Local file path to install
   * @example
   * const response = await myBox.app.install({ apk: "path/to/your/app.apk" });
   */
  apk: string;
}

export type AndroidInstall = InstallAndroidAppByFile | InstallAndroidAppByURL | InstallAndroidAppByLocalFile;

export interface CreateAndroid extends BoxCreateAndroidParams {
  /**
   * Box type is Android
   */
  type: 'android';
  config?: BoxCreateAndroidParams['config'] & {
    expiresIn?: TimeString;
  };
}

export interface ListAndroidApp {
  operators: AndroidAppOperator[];
}

export interface ListAndroidPkg {
  operators: AndroidPkgOperator[];
}
