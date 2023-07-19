import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styles: [
  ]
})
export class PageHeaderComponent {

  @Input() page_title: string = "Tableau de board analytique"
  @Input() sub_title: string = ""

}
