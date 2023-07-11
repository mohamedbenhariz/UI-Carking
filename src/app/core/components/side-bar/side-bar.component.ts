import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SideMenu, SubSideMenu} from "./side-menu-item/side-menu-item.component";
import {NavigationEnd, Router} from "@angular/router";

const ADMIN_ROUTES: Array<SideMenu> = [
  {
    icon: 'dashboard',
    label: 'Accueil',
    link: '/admin',
    sub_content: []
  },
  {
    icon: 'dashboard',
    label: 'Propriétaires',
    link: '/admin/proprietaires',
    sub_content: []
  },
  {
    icon: 'dashboard',
    label: 'Véhicules',
    link: '/admin/vehicules',
    sub_content: []
  },
  {
    icon: 'dashboard',
    label: 'Documents',
    link: '/admin/documents',
    sub_content: []
  },
  {
    icon: 'dashboard',
    label: 'Roles',
    link: '/admin/roles',
    sub_content: []
  },
]
const PROPRIETAIRE_ROUTES: Array<SideMenu> = []

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})


export class SideBarComponent implements OnInit, AfterViewInit{

  @Input() isAdmin: boolean = true;
  content: Array<SubSideMenu> = []
  current: string = ''

  constructor(private router: Router){}


  ngOnInit(): void {
    this.current = this.router.url;
    this.content = !this.isAdmin ? PROPRIETAIRE_ROUTES : ADMIN_ROUTES
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((value: any) => {
      if(value instanceof NavigationEnd){
        this.current = value.url
      }
    })
  }

}
