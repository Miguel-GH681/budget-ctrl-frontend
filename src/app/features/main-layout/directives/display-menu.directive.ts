import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[displayMenuDirective]'
})
export class DisplayMenuDirective{

    constructor(){
    }

    @HostListener('click') onClick(){
        if (document.querySelector('.sidebar')?.classList.contains('active')) {
            document.querySelector('.sidebar')?.classList.remove('active');
          }else{
            document.querySelector('.sidebar')?.classList.add('active');
          }
    }
}