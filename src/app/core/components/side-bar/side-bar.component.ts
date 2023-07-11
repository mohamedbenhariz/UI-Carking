import { Component } from '@angular/core';

Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

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
    icon: 'agents',
    label: 'Propriétaires',
    link: '/admin/proprietaires',
    sub_content: []
  },
  {
    icon: 'equipments',
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
    icon: 'formations',
    label: 'Formations',
    link: '/admin/formations',
    sub_content: []
  },
]

const PROPRIETAIRE_ROUTES: Array<SideMenu> = []

export class SideBarComponent {

}
