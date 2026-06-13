import type { Pool } from "pg";
import type StickerRepository from "./stickerRepository.js";

export default class StickerService {
  
  constructor(private repository: StickerRepository) {}

  async getAllStickers() {
    try {
      return await this.repository.getAllStickers();
    } catch(e) {

    }
  }
}