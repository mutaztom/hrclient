import {Injectable} from '@angular/core';
import {ServerMessage} from './ServerMessage';

@Injectable()
export class MessageService {
    messages: string[] = [];
    serverMessages: ServerMessage[]=[]
    isDearty = false;

    add(message: string) {
        this.messages.push(message);
        this.isDearty = true;
    }

    addServerMessage(servmsg: ServerMessage) {
        this.serverMessages.push(servmsg)
        //this.add(servmsg.message)
        this.isDearty = true;
    }

    clear() {
        this.messages = [];
        this.serverMessages = []
        this.isDearty = false;
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
