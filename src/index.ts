import { env } from "./config/env.js";
import StickerController from "./modules/sticker/stickerController.js";
import StickerRepository from "./modules/sticker/stickerRepository.js";
import StickerRoute from "./modules/sticker/stickerRoute.js";
import StickerService from "./modules/sticker/stickerService.js";
import Postgres from "./postgres/connection.js";
import Server from "./server/server.js";

const postgres = new Postgres(env.DB_HOST, env.DB_USER, env.DB_PASSWORD, env.DB_NAME, env.DB_PORT);
await postgres.connect();

const stickerRepository = new StickerRepository(postgres.getPool());
const stickerService = new StickerService(stickerRepository);
const stickerController = new StickerController(stickerService);
const stickerRoute = new StickerRoute(stickerController)

const server = new Server([stickerRoute]);
server.start(env.PORT);
