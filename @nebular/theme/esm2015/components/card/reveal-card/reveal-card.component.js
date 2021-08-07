import { Component, Input, HostBinding } from '@angular/core';
/**
 *
 * Reveal card example:
 * @stacked-example(My example, reveal-card/reveal-card-showcase.component)
 *
 * As a content Reveal card accepts two instances of `nb-card` - for front and back sides.
 *
 * Basic reveal card configuration:
 *
 * ```html
 * <nb-reveal-card>
 *   <nb-card-front>
 *     <nb-card>
 *       <nb-card-body>
 *         Front
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-front>
 *   <nb-card-back>
 *     <nb-card>
 *       <nb-card-body>
 *         Back
 *       </nb-card-body>
 *     </nb-card>
 *   </nb-card-back>
 * </nb-reveal-card>
 * ```
 *
 * ### Installation
 *
 * Import `NbCardModule` to your feature module.
 * ```ts
 * @NgModule({
 *   imports: [
 *     // ...
 *     NbCardModule,
 *   ],
 * })
 * export class PageModule { }
 * ```
 * ### Usage
 *
 * Reveal Card with header and footer:
 * @stacked-example(With Header & Footer, reveal-card/reveal-card-full.component)
 *
 * Colored reveal-cards could be simply configured by providing a `status` property:
 * @stacked-example(Colored Card, reveal-card/reveal-card-colors.component)
 *
 * It is also possible to assign an `accent` property for a slight card highlight
 * as well as combine it with `status`:
 * @stacked-example(Accent Card, reveal-card/reveal-card-accents.component)
 *
 * @additional-example(Multiple Sizes, reveal-card/reveal-card-sizes.component)
 */
export class NbRevealCardComponent {
    constructor() {
        /**
         * Reveal state
         * @type boolean
         */
        this.revealed = false;
        /**
         * Show/hide toggle button to be able to control toggle from your code
         * @type {boolean}
         */
        this.showToggleButton = true;
    }
    toggle() {
        this.revealed = !this.revealed;
    }
}
NbRevealCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'nb-reveal-card',
                template: `
    <ng-content select="nb-card-front"></ng-content>
    <div class="second-card-container">
      <ng-content select="nb-card-back"></ng-content>
    </div>
    <a *ngIf="showToggleButton" class="reveal-button" (click)="toggle()">
      <nb-icon icon="chevron-down-outline" pack="nebular-essentials" aria-hidden="true"></nb-icon>
    </a>
  `,
                styles: [":host{display:block;position:relative;overflow:hidden}:host .second-card-container{position:absolute;top:100%;right:0;left:0;overflow:hidden;transition:top 0s 0.5s}:host ::ng-deep nb-card-front nb-card,:host ::ng-deep nb-card-back nb-card{box-shadow:none;margin:0}:host ::ng-deep nb-card-front{display:block;height:100%}:host ::ng-deep nb-card-back{position:absolute;left:0;top:100%;width:100%;transition:top 0.5s}:host .reveal-button{cursor:pointer;position:absolute;right:0;bottom:0;transform:rotate(180deg);transition:transform 0.3s}:host(.revealed) .second-card-container{top:0;transition:none}:host(.revealed) .second-card-container ::ng-deep nb-card-back{top:0}:host(.revealed) .reveal-button{transform:none}\n"]
            },] }
];
NbRevealCardComponent.propDecorators = {
    revealed: [{ type: Input }, { type: HostBinding, args: ['class.revealed',] }],
    showToggleButton: [{ type: Input }]
};
//# sourceMappingURL=reveal-card.component.js.map