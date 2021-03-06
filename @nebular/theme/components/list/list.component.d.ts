/**
 * List is a container component that wraps `nb-list-item` component.
 *
 * Basic example:
 * @stacked-example(Simple list, list/simple-list-showcase.component)
 *
 * `nb-list-item` accepts arbitrary content, so you can create a list of any components.
 *
 * ### Installation
 *
 * Import `NbListModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbListModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * List of users:
 * @stacked-example(Users list, list/users-list-showcase.component)
 *
 * @styles
 *
 * list-item-divider-color:
 * list-item-divider-style:
 * list-item-divider-width:
 * list-item-padding:
 * list-item-text-color:
 * list-item-font-family:
 * list-item-font-size:
 * list-item-font-weight:
 * list-item-line-height:
 */
import * as ɵngcc0 from '@angular/core';
export declare class NbListComponent {
    /**
     * Role attribute value
     *
     * @type {string}
     */
    role: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbListComponent, "nb-list", never, { "role": "role"; }, {}, never, ["nb-list-item"]>;
}
/**
 * List item component is a grouping component that accepts arbitrary content.
 * It should be direct child of `nb-list` componet.
 */
export declare class NbListItemComponent {
    /**
     * Role attribute value
     *
     * @type {string}
     */
    role: string;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NbListItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NbListItemComponent, "nb-list-item", never, { "role": "role"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=list.component.d.ts.map