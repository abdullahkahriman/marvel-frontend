import { Directive, Input, HostBinding } from '@angular/core'
@Directive({
    selector: 'img[default]',
    host: {
        '(error)': 'updateUrl()',
        '[src]': 'src'
    }
})

export class ImagePreloadDirective {
    @Input() src: string = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg";
    @Input() default: string = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg";

    /**
     *
     */
    constructor() {
    }

    updateUrl() {
        this.src = this.default;
    }
}