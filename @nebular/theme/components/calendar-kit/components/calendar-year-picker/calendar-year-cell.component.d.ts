/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbDateService } from '../../services/date.service';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import * as ɵngcc0 from '@angular/core';
export declare class NbCalendarYearCellComponent<D> implements NbCalendarCell<D, D> {
    protected dateService: NbDateService<D>;
    date: D;
    min: D;
    max: D;
    selectedValue: D;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get selected(): boolean;
    get today(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    yearCellClass: boolean;
    get year(): number;
    onClick(): void;
    private smallerThanMin;
    private greaterThanMax;
    private yearStart;
    private yearEnd;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarYearCellComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbCalendarYearCellComponent<any>, "nb-calendar-year-cell", never, { "size": "size"; "date": "date"; "min": "min"; "max": "max"; "selectedValue": "selectedValue"; }, { "select": "select"; }, never, never>;
}

//# sourceMappingURL=calendar-year-cell.component.d.ts.map