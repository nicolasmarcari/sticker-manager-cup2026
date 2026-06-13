import type { Request, Response } from "express";
import type StickerService from "./stickerService.js";
import logger from "../../lib/logger.js";

export default class StickerController {

  constructor(private stickerService: StickerService) {};

  async getAllStickers(req: Request, res: Response) {
    try {
      const allStickers = await this.stickerService.getAllStickers();
      if (allStickers) console.log(JSON.stringify(allStickers.rows));
    } catch(e) {
      logger.error(e);
    }
  }
}