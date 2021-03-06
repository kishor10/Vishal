/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbOverlayModule } from '../cdk/overlay/overlay.module';
import { NbListModule } from '../list/list.module';
import { NbCardModule } from '../card/card.module';
import { NbTimePickerDirective } from './timepicker.directive';
import { NbTimePickerComponent } from './timepicker.component';
import { NbTimePickerCellComponent } from './timepicker-cell.component';
import { NbCalendarTimeModelService } from '../calendar-kit/services/calendar-time-model.service';
import { NB_TIME_PICKER_CONFIG } from './model';
import { NbCalendarKitModule } from '../calendar-kit/calendar-kit.module';
export class NbTimepickerModule {
    static forRoot(config = {}) {
        return {
            ngModule: NbTimepickerModule,
            providers: [{ provide: NB_TIME_PICKER_CONFIG, useValue: config }],
        };
    }
    static forChild(config = {}) {
        return {
            ngModule: NbTimepickerModule,
            providers: [{ provide: NB_TIME_PICKER_CONFIG, useValue: config }],
        };
    }
}
NbTimepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    NbOverlayModule,
                    NbListModule,
                    NbCardModule,
                    NbCalendarKitModule,
                ],
                providers: [NbCalendarTimeModelService],
                exports: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective],
                declarations: [NbTimePickerComponent, NbTimePickerCellComponent, NbTimePickerDirective],
            },] }
];
//# sourceMappingURL=timepicker.module.js.map