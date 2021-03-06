/**
 * Service to control the global page spinner.
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbSpinnerService {
    private document;
    private loaders;
    private selector;
    constructor(document: any);
    /**
     * Appends new loader to the list of loader to be completed before
     * spinner will be hidden
     * @param method Promise<any>
     */
    registerLoader(method: Promise<any>): void;
    /**
     * Clears the list of loader
     */
    clear(): void;
    /**
     * Start the loader process, show spinnder and execute loaders
     */
    load(): void;
    private executeAll;
    private showSpinner;
    private hideSpinner;
    private getSpinnerElement;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbSpinnerService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<NbSpinnerService>;
}

//# sourceMappingURL=spinner.service.d.ts.map