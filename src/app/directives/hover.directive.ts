import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input()
  defaultColor!: string;
  @Input('appHover')
  highlight: string = 'grey';
  @HostBinding('style.backgroundColor')
  backgroundColor!: string;
  @HostBinding('style.color')
  color: string = this.defaultColor;

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'hsl(0, 86%, 58%)');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '100%'); //artist-hover 
    this.backgroundColor = this.highlight;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
