import express, { Router } from 'express';
import type StickerController from './stickerController.js';

export default class StickerRoute {
  private router: Router;
  path: string;
  private controller: StickerController;

  constructor(controller: StickerController) {
    this.controller = controller;
    this.router = express.Router();
    this.path = '/sticker';
    this.registerRoute();
  }

  registerRoute() {
    this.router.get(
      '/',
      this.controller.getAllStickers.bind(this.controller)
    );
  }

  getRouter() {
    return this.router;
  }


}