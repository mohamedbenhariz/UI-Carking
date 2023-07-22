import { Component, Input, AfterViewInit, OnInit, OnChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';



export type SubSideMenu = {
  label: string
  link: string
}

export type SideMenu = {
  icon: string
  label: string
  link: string
  sub_content: Array<SubSideMenu>
}

const ADMIN_ROUTES: Array<SideMenu> = [
  {
    icon: 'dashboard',
    label: 'Accueil',
    link: '/admin',
    sub_content: []
  },
  {
    icon: 'agent',
    label: 'Propriétaires',
    link: '/admin/proprietaires',
    sub_content: []
  },
  {
    icon: 'vehicule',
    label: 'Véhicules',
    link: '/admin/vehicules',
    sub_content: []
  },
  {
    icon: 'doc',
    label: 'Documents',
    link: '/admin/documents',
    sub_content: []
  },
  {
    icon: 'params',
    label: 'Roles',
    link: '/admin/roles',
    sub_content: []
  },
]

const PROPRIETAIRE_ROUTES: Array<SideMenu> = []


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit, AfterViewInit {
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
