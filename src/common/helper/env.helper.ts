import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(val: string): string {
  const env: string | undefined = process.env.NODE_ENV;
  const fallback: string = resolve(`${val}/.env`);
  const filename: string = env ? `${env}.env` : 'development.env';
  let filePath: string = resolve(`${val}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
}
