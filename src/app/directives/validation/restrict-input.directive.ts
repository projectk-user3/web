import { ElementRef, Input, Directive } from '@angular/core';

declare var require: any;
const Inputmask = require('inputmask');

@Directive({
    selector: '[appRestrictInput]',
})
export class RestrictInputDirective {

    private regexMap = {
        integer: '^[0-9]*$',
        words: '([A-z]*\\s)*'
    };

    constructor(private _elementRef: ElementRef) { }

    @Input('appRestrictInput')
    public set defineInputType(type: string) {
        Inputmask({ regex: this.regexMap[type], placeholder: '' })
            .mask(this._elementRef.nativeElement);
    }
}
