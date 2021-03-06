/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbChatOptions } from './chat.options';
/**
 * Chat message component.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbChatMessageMapComponent {
    /**
     * Message sender
     * @type {string}
     */
    message: string;
    /**
     * Message sender
     * @type {string}
     */
    sender: string;
    /**
     * Message send date
     * @type {Date}
     */
    date: Date;
    /**
     * Message send date format, default 'shortTime'
     * @type {string}
     */
    dateFormat: string;
    /**
     * Map latitude
     * @type {number}
     */
    latitude: number;
    /**
     * Map longitude
     * @type {number}
     */
    longitude: number;
    get file(): {
        url: string;
        type: string;
        icon: string;
    };
    mapKey: string;
    constructor(options: NbChatOptions);
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbChatMessageMapComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbChatMessageMapComponent, "nb-chat-message-map", never, { "dateFormat": "dateFormat"; "message": "message"; "sender": "sender"; "date": "date"; "latitude": "latitude"; "longitude": "longitude"; }, {}, never, never>;
}

//# sourceMappingURL=chat-message-map.component.d.ts.map