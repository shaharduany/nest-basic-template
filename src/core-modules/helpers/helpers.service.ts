import * as moment from 'moment';
import { compare, hash } from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HelpersService {
  private readonly DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
  private readonly SALT_ROUNDS = 9;

  public getCurrentDateTime(toFormat: boolean = false): string {
    const currentDateTime = moment().utc();
    return toFormat
      ? currentDateTime.format(this.DATE_TIME_FORMAT)
      : currentDateTime.format();
  }

  public isHashMatch(value: string, hash: string): Promise<boolean> {
    return compare(value, hash);
  }

  public async hashValue(value: string): Promise<string> {
    const val = await hash(value, this.SALT_ROUNDS);
    return val;
  }
}

