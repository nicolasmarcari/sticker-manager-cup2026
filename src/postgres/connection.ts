import { Pool } from 'pg';
import logger from '../lib/logger.js';

export default class Postgres {
  private pool!: Pool;

  constructor(
    private host: string,
    private user: string,
    private password: string,
    private database: string,
    private port: number
  ) {}

  async connect(): Promise<void> {
    try {
      this.pool = new Pool({
        host: this.host,
        user: this.user,
        password: this.password,
        database: this.database,
        port: this.port
      });
      logger.info('postgres up!');
    } catch (error: any) {
      logger.error(error);
    }
  }
}
