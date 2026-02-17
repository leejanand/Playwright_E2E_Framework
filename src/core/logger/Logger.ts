export class Logger {
  static info(msg: string) {
    console.log(`[INFO] ${new Date().toISOString()} - ${msg}`);
  }

  static error(msg: string) {
    console.error(`[ERROR] ${msg}`);
  }
}
