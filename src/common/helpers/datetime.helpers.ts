import moment from 'moment';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const getCurrentDateTime = (): string =>
  moment.utc().format(DATE_TIME_FORMAT);
