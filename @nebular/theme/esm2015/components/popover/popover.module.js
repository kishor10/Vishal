/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbPopoverDirective } from './popover.directive';
import { NbPopoverComponent } from './popover.component';
export class NbPopoverModule {
}
NbPopoverModule.decorators = [
    { type: NgModule, args: [{
                imports: [NbOverlayModule],
                declarations: [NbPopoverDirective, NbPopoverComponent],
                exports: [NbPopoverDirective],
                entryComponents: [NbPopoverComponent],
            },] }
];
//# sourceMappingURL=popover.module.js.map