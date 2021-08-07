import { ElementRef, OnDestroy, OnInit, TemplateRef, Renderer2, ComponentFactoryResolver, AfterViewChecked } from '@angular/core';
import { NbFocusTrap, NbFocusTrapFactoryService } from '../cdk/a11y/focus-trap';
import { NbComponentType } from '../cdk/overlay/mapping';
import { NbOverlayContainerComponent } from '../cdk/overlay/overlay-container';
import { NbWindowConfig } from './window.options';
import { NbWindowRef } from './window-ref';
import * as ɵngcc0 from '@angular/core';
export declare class NbWindowComponent implements OnInit, AfterViewChecked, OnDestroy {
    content: TemplateRef<any> | NbComponentType;
    context: Object;
    windowRef: NbWindowRef;
    config: NbWindowConfig;
    protected focusTrapFactory: NbFocusTrapFactoryService;
    protected elementRef: ElementRef;
    protected renderer: Renderer2;
    cfr: ComponentFactoryResolver;
    get isFullScreen(): boolean;
    get maximized(): boolean;
    get minimized(): boolean;
    get showMinimize(): boolean;
    get showMaximize(): boolean;
    get showFullScreen(): boolean;
    overlayContainer: NbOverlayContainerComponent;
    protected focusTrap: NbFocusTrap;
    constructor(content: TemplateRef<any> | NbComponentType, context: Object, windowRef: NbWindowRef, config: NbWindowConfig, focusTrapFactory: NbFocusTrapFactoryService, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
    minimize(): void;
    maximize(): void;
    fullScreen(): void;
    maximizeOrFullScreen(): void;
    close(): void;
    protected attachTemplate(): void;
    protected attachComponent(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbWindowComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbWindowComponent, "nb-window", never, { "cfr": "cfr"; }, {}, never, never>;
}

//# sourceMappingURL=window.component.d.ts.map