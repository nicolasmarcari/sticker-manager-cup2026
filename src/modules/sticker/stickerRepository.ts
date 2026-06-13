import type { Pool } from "pg";
import logger from "../../lib/logger.js";

export default class StickerRepository {
  constructor(private postgres: Pool) {}

  async getAllStickers() {
    try {
      const data = await this.postgres.query('SELECT * FROM album."originalStickersStorage"');
      return data;
    } catch (error: any) {
      logger.error(error.message)
    }
  }
}