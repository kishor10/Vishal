/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbRouteTabsetComponent } from './route-tabset.component';
import { NbIconModule } from '../icon/icon.module';
export class NbRouteTabsetModule {
}
NbRouteTabsetModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NbSharedModule,
                    NbIconModule,
                ],
                declarations: [
                    NbRouteTabsetComponent,
                ],
                exports: [
                    NbRouteTabsetComponent,
                ],
            },] }
];
//# sourceMappingURL=route-tabset.module.js.map