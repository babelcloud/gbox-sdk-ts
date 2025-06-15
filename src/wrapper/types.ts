import { AndroidBoxOperator } from './box/android';
import { LinuxBoxOperator } from './box/linux';

export type BoxOperator = AndroidBoxOperator | LinuxBoxOperator;

export type BoxListOperatorResponse = {
  /**
   * A box operator that can be either Linux or Android type
   */
  operators: BoxOperator[];
  /**
   * Page number
   */
  page: number;
  /**
   * Page size
   */
  pageSize: number;
  /**
   * Total number of items
   */
  total: number;
};

type TimeUnit = 'ms' | 's' | 'm' | 'h';
type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type NumberString = `${Digit}${Digit | ''}`;

export type TimeString = `${NumberString}${TimeUnit}`;
