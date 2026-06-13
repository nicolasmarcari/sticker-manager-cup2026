import express, { type Request, type Response } from 'express';
import logger from '../lib/logger.js';

type Route = {
  path: string;
  getRouter: () => express.Router;
}

export default class Server {
  private app: express.Application;
  private routes: Route[];

  constructor(routes: Route[] = []) {
    this.app = express();
    this.routes = routes;
    this.setupMiddlewares();
    this.setupRoutes();
  }

  setupMiddlewares() {
    this.app.use(express.json());
  }

  setupRoutes() {
    this.routes.forEach(route => {
      this.app.use(route.path, route.getRouter())
    });
    
    this.app.get('/ping', (req: Request, res: Response) => {
      res.send('ok');
    })
  }

  start(port: number) {
    this.app.listen(port, () => {
      logger.info(`Server is running on port ${port}`);
    });
  }

}