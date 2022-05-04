/* eslint-disable class-methods-use-this */

class Logger {
  info = (input: any): void => {
    console.info('ℹ️:' + JSON.stringify(input));
  };

  log = (input: any): void => {
    console.log('📰:' + JSON.stringify(input));
  };

  error = (input: any): void => {
    console.error('❌:' + JSON.stringify(input));
  };
}

export const logger = new Logger();
