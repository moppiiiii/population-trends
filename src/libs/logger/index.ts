/* eslint-disable no-console  */

/**
 * 一般的なログを出力する関数
 */
function log(message: unknown): void {
  console.log(message);
}

function warn(message: unknown): void {
  console.warn(message);
}

function error(message: unknown): void {
  console.error(message);
}

export const logger = {
  log,
  warn,
  error,
};
