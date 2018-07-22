import { Component, OnInit } from '@angular/core';
// import { MenubarModule } from 'primeng/primeng';
// import { MenuItem } from 'primeng/components/common/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import { AccordionModule } from 'primeng/components/accordion/accordion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'app';
  items: MenuItem[];
  items1: MenuItem[];
  index = 0;
  ngOnInit() {
      this.items = [
          {label: 'New', icon: 'fa-plus'},
          {label: 'Open', icon: 'fa-download'},
          {label: 'Undo', icon: 'fa-refresh'},
      ];
      this.items1 = [
          {
            label: 'File',
            icon: 'fa-file-o',
            items: [{
              label: 'New',
              icon: 'fa-plus',
              items : [
                 { label: 'Project'},
                 { label: 'Other' },
              ]
            },
            { label: 'Open'},
            { separator: true},
            { label: 'Quit'}
          ]
        },
        {
          label: 'Edit',
          icon: 'fa-edit',
          items: [
            { label: 'Undo', icon: 'fa-mail-forward'},
            { label: 'Redo', icon: 'fa-mail-reply'},
          ]
        },
        {
          label: 'Help',
          icon: 'fa-question',
          items: [
            { label: 'Contents'},
            {
              label: 'Search',
              icon: 'fa-search',
              items: [
                  {
                    label: 'Text',
                    items: [
                      {
                        label: 'Workspace'
                      }
                    ]
                  },
                  {
                    label: 'File'
                  }
              ]
            }
          ]
        },
        {
          label: 'Actions',
          icon: 'fa-gear' ,
          items: [
            {
              label: 'Edit',
              icon: 'fa-refresh',
              items: [
                {label: 'Save', icon: 'fa-save'},
                {label: 'Update', icon: 'fa-save'}
              ]
            },
            {
              label: 'Other',
              icon: 'fa-phone',
              items: [
                { label: 'Delete', icon: 'fa-minus'}
              ]
            }
          ]
        },
        {
          label: 'Quit', icon: 'fa-minus'
        }
      ];
  }
  onLogOutButtonClick() {
    return  'User Logged Out' ;
    }

}
