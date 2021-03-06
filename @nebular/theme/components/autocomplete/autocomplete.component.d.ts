/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, QueryList, AfterContentInit, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
import { Subject } from 'rxjs';
import { NbComponentSize } from '../component-size';
import { NbPosition } from '../cdk/overlay/overlay-position';
import { NbOptionComponent } from '../option/option.component';
import { NbPortalDirective } from '../cdk/overlay/mapping';
/**
 * The `NbAutocompleteComponent` overlay component.
 * Provides an `NbOptionList` overlay component.
 * */
import * as ɵngcc0 from '@angular/core';
export declare class NbAutocompleteComponent<T> implements AfterContentInit, OnDestroy {
    protected cd: ChangeDetectorRef;
    protected destroy$: Subject<void>;
    /**
     * HTML input reference to which autocomplete connected.
     * */
    hostRef: ElementRef;
    /**
     * Component scoped id for aria attributes.
     * */
    id: string;
    /**
     * @docs-private
     * Current overlay position because of we have to toggle overlayPosition
     * in [ngClass] direction.
     */
    _overlayPosition: NbPosition;
    get overlayPosition(): NbPosition;
    set overlayPosition(value: NbPosition);
    /**
     * Returns width of the input.
     * */
    get hostWidth(): number;
    /**
     * Function passed as input to process each string option value before render.
     * */
    handleDisplayFn: ((value: any) => string);
    /**
     * Autocomplete size, available sizes:
     * `tiny`, `small`, `medium` (default), `large`, `giant`
     */
    size: NbComponentSize;
    /**
     * Flag passed as input to always make first option active.
     * */
    activeFirst: boolean;
    /**
     * Specifies class to be set on `nb-option`s container (`nb-option-list`)
     * */
    optionsListClass: NgClass['ngClass'];
    /**
     * Specifies class for the overlay panel with options
     * */
    optionsPanelClass: string | string[];
    /**
     * Will be emitted when selected value changes.
     * */
    selectedChange: EventEmitter<T>;
    /**
      * List of `NbOptionComponent`'s components passed as content.
    * */
    options: QueryList<NbOptionComponent<T>>;
    /**
     * NbOptionList with options content.
     * */
    portal: NbPortalDirective;
    constructor(cd: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * Autocomplete knows nothing about host html input element.
     * So, attach method set input hostRef for styling.
     * */
    setHost(hostRef: ElementRef): void;
    /**
     * Propagate selected value.
     * */
    emitSelected(selected: T): void;
    get tiny(): boolean;
    get small(): boolean;
    get medium(): boolean;
    get large(): boolean;
    get giant(): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbAutocompleteComponent<any>, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbAutocompleteComponent<any>, "nb-autocomplete", never, { "size": "size"; "activeFirst": "activeFirst"; "handleDisplayFn": "handleDisplayFn"; "optionsListClass": "optionsListClass"; "optionsPanelClass": "optionsPanelClass"; }, { "selectedChange": "selectedChange"; }, ["options"], ["nb-option, nb-option-group"]>;
}

//# sourceMappingURL=autocomplete.component.d.ts.map