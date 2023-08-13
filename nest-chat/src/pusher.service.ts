import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';

@Injectable()
export class PusherService {
    pusher: Pusher;
    constructor() {
        this.pusher = new Pusher({
            appId: "1650205",
            key: "840d8e3d35d5dee1957f",
            secret: "a4cad60ce4f5b8c017b1",
            cluster: "eu",
            useTLS: true
          });
    }

    async trigger(channel: string, event: string, data: any) {
         await this.pusher.trigger(channel, event, data);
    }
}
