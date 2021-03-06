/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import { NbDateService } from '../../services/date.service';
import * as ɵngcc0 from '@angular/core';
export declare class NbCalendarDayCellComponent<D> implements NbCalendarCell<D, D> {
    protected dateService: NbDateService<D>;
    date: D;
    selectedValue: D;
    visibleDate: D;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    constructor(dateService: NbDateService<D>);
    get today(): boolean;
    get boundingMonth(): boolean;
    get selected(): boolean;
    get empty(): boolean;
    get disabled(): boolean;
    get isLarge(): boolean;
    dayCellClass: boolean;
    get day(): number;
    onClick(): void;
    private smallerThanMin;
    private greaterThanMax;
    private dontFitFilter;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarDayCellComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbCalendarDayCellComponent<any>, "nb-calendar-day-cell", never, { "size": "size"; "date": "date"; "selectedValue": "selectedValue"; "visibleDate": "visibleDate"; "min": "min"; "max": "max"; "filter": "filter"; }, { "select": "select"; }, never, never>;
}

//# sourceMappingURL=calendar-day-cell.component.d.ts.map