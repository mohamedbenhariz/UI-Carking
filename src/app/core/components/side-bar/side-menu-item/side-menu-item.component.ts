import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {SideMenu} from "../side-bar.component";
import EventEmitter = require("events");
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styles: [
  ]
})
export class SideMenuItemComponent implements OnInit, OnChanges{

  @Input()
  item: SideMenu | null = null
  isShow: boolean = false
  active: boolean = false
  withSubContent: boolean = false

  @Input currentPath: string = ''

  @Output onItemClick = new EventEmitter()

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
