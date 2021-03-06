/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { OnInit } from '@angular/core';
import { NbCalendarDay, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import { NbDateService } from '../../services/date.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbCalendarDaysNamesComponent<D> implements OnInit {
    private dateService;
    days: NbCalendarDay[];
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    get isLarge(): boolean;
    constructor(dateService: NbDateService<D>);
    ngOnInit(): void;
    private createDaysNames;
    private shiftStartOfWeek;
    private markIfHoliday;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarDaysNamesComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbCalendarDaysNamesComponent<any>, "nb-calendar-days-names", never, { "size": "size"; }, {}, never, never>;
}

//# sourceMappingURL=calendar-days-names.component.d.ts.map