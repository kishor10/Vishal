/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { EventEmitter, Type } from '@angular/core';
import { NbCalendarCell, NbCalendarSize, NbCalendarSizeValues } from '../../model';
import * as ɵngcc0 from '@angular/core';
export declare class NbCalendarPickerComponent<D, T> {
    data: D[][];
    visibleDate: D;
    selectedValue: T;
    cellComponent: Type<NbCalendarCell<D, T>>;
    min: D;
    max: D;
    filter: (D: any) => boolean;
    size: NbCalendarSize;
    static ngAcceptInputType_size: NbCalendarSizeValues;
    select: EventEmitter<D>;
    get isLarge(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbCalendarPickerComponent<any, any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbCalendarPickerComponent<any, any>, "nb-calendar-picker", never, { "size": "size"; "data": "data"; "visibleDate": "visibleDate"; "selectedValue": "selectedValue"; "cellComponent": "cellComponent"; "min": "min"; "max": "max"; "filter": "filter"; }, { "select": "select"; }, never, never>;
}

//# sourceMappingURL=calendar-picker.component.d.ts.map