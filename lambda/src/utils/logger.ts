class Logger {
  info = (input: any) => {
    console.info(JSON.stringify(input));
  };

  log = (input: any) => {
    console.log(JSON.stringify(input));
  };

  error = (input: any) => {
    console.error(JSON.stringify(input));
  };
}

export const logger = new Logger();
