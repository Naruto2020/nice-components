import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlight]'
})

export class HighlightDirective implements AfterViewInit {
    /**
     * 
     * @param ElementRef  référence à l'élément du DOM, va permettre de récupérer la référence à l'élément car contient un native élément html sur lequel la directive est posé  
     * @param Renderer2 est le système permettant pour interagir avec le native élément ceci facilitera le test unitaire de l'élément 
     * @Hostlistener permet d'écouter l'hote et de réagir aux évènement 
     */

    @Input() color = 'orange'
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngAfterViewInit(): void {
        this.setBackgroundColor(this.color);
        
    }
    setBackgroundColor(color: string) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }
    
    @HostListener('mouseenter') onMouseEnter() {
        this.setBackgroundColor('lightgreen');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.setBackgroundColor(this.color);
    }
    @HostListener('click') onClick() {
        this.color = 'lightgreen';
    }
}