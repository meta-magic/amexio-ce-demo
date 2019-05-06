/**
 * Created by vrushabh on 13/1/18.
 */
import {Component, OnInit} from '@angular/core';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AmexioDataModule, AmexioFormsModule, AmexioLayoutModule, AmexioWidgetModule} from "amexio-ng-extensions";

@Component({
  selector: 'action-component',
  template : `

    <amexio-card [header]="true">

      <amexio-header>
        Amexio Button Variation.
      </amexio-header>
      <amexio-body>

        <amexio-row>
          <amexio-column [size]="12">
            <h2>Button - Small / Default / Large</h2>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="3">
            <amexio-button [size]="'small'" [label]="'Background Color'" [type]="'theme-backgroundcolor'" [tooltip]="'Secondary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'small'" [label]="'Theme Color'" [type]="'theme-color'" [tooltip]="'Primary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'small'" [label]="'Green'" [type]="'green'" [tooltip]="'Success Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'small'" [label]="'Red'" [type]="'red'" [tooltip]="'Danger Button'"></amexio-button>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="3">
            <amexio-button [label]="'Background Color'" [type]="'theme-backgroundcolor'" [tooltip]="'Secondary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [label]="'Theme Color'" [type]="'theme-color'" [tooltip]="'Primary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button   [label]="'Green'" [type]="'green'" [tooltip]="'Success Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [label]="'Red'" [type]="'red'" [tooltip]="'Danger Button'"></amexio-button>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="3">
            <amexio-button [size]="'large'" [label]="'Background Color'" [type]="'theme-backgroundcolor'" [tooltip]="'Secondary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'large'" [label]="'Theme Color'" [type]="'theme-color'" [tooltip]="'Primary Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button   [size]="'large'" [label]="'Green'" [type]="'green'" [tooltip]="'Success Button'"></amexio-button>
          </amexio-column>
          <amexio-column [size]="3">
            <amexio-button  [size]="'large'" [label]="'Red'" [type]="'red'" [tooltip]="'Danger Button'"></amexio-button>
          </amexio-column>
        </amexio-row>



        <amexio-row>
          <amexio-column [size]="12">
            <h2>Button Group</h2>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="4">
            <amexio-btn-group [size]="'small'">
              <amexio-button [label]="'Save'" [type]="'theme-backgroundcolor'" [tooltip]="'Secondary Button'"></amexio-button>
              <amexio-button  [label]="'Cancel'" [type]="'theme-backgroundcolor'" [tooltip]="'Secondary Button'"></amexio-button>
            </amexio-btn-group>
          </amexio-column>
          <amexio-column [size]="4">
            <amexio-btn-group [size]="'default'">
              <amexio-button [label]="'Save'" [type]="'green'" [tooltip]="'Secondary Button'"></amexio-button>
              <amexio-button  [label]="'Cancel'" [type]="'green'" [tooltip]="'Secondary Button'"></amexio-button>
            </amexio-btn-group>
          </amexio-column>
          <amexio-column [size]="4">
            <amexio-btn-group [size]="'large'">
              <amexio-button [label]="'Save'" [type]="'red'" [tooltip]="'Secondary Button'"></amexio-button>
              <amexio-button  [label]="'Cancel'" [type]="'red'" [tooltip]="'Secondary Button'"></amexio-button>
            </amexio-btn-group>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="6">
            <h2>Button Drop Down</h2>
          </amexio-column>
        </amexio-row>
        <amexio-row>
          <amexio-column [size]="4">
            <amexio-btn-dropdown [label]="'Button'" [type]="'theme-color'" [size]="'default'">
              <amexio-btn-dropdown-item [label]="'Expand'" [icon]="'fa fa-arrows-alt'" ></amexio-btn-dropdown-item>
              <amexio-btn-dropdown-item [label]="'Delete'"  [icon]="'fa fa-trash'" ></amexio-btn-dropdown-item>
            </amexio-btn-dropdown>
          </amexio-column>
          <amexio-column [size]="4">
            <amexio-btn-dropdown [label]="'Button'" [type]="'green'" [size]="'default'">
              <amexio-btn-dropdown-item [label]="'Expand'" [icon]="'fa fa-arrows-alt'"></amexio-btn-dropdown-item>
              <amexio-btn-dropdown-item [label]="'Delete'"  [icon]="'fa fa-trash'" ></amexio-btn-dropdown-item>
            </amexio-btn-dropdown>
          </amexio-column>
          <amexio-column [size]="4">
            <amexio-btn-dropdown [label]="'Button'" [type]="'red'" [size]="'default'">
              <amexio-btn-dropdown-item [label]="'Expand'" [icon]="'fa fa-arrows-alt'"></amexio-btn-dropdown-item>
              <amexio-btn-dropdown-item [label]="'Delete'"  [icon]="'fa fa-trash'" ></amexio-btn-dropdown-item>
            </amexio-btn-dropdown>
          </amexio-column>
        </amexio-row>
        <h2>Transparent Button</h2>
        <amexio-floating-button [type]="'theme-color'" [vertical-position]="'bottom'" [horizontal-position]="'right'" [icon]="'fa fa-commenting'"></amexio-floating-button>
        <amexio-button [label]="'Transparent'" [type]="'transparent'" [tooltip]="'I m transparent'"></amexio-button>
      
<!-- -->

     <amexio-row>
     <amexio-column [size]="12">
       <h2>Button With Badge - Small / Default / Large </h2>
     </amexio-column>
   </amexio-row>
   <amexio-row>
   <amexio-column [size]="3">
     <amexio-button [label]="'Background Color'" [badge] = "10" [type]="'theme-backgroundcolor'" [tooltip]="'Secondary Button'"></amexio-button>
   </amexio-column>
   <amexio-column [size]="3">
     <amexio-button  [label]="'Theme Color'" [badge] = "11" [type]="'theme-color'" [tooltip]="'Primary Button'"></amexio-button>
   </amexio-column>
   <amexio-column [size]="3">
     <amexio-button   [label]="'Green'" [badge] = "12" [type]="'green'" [tooltip]="'Success Button'"></amexio-button>
   </amexio-column>
   <amexio-column [size]="3">
     <amexio-button  [label]="'Red'" [badge] = "13" [type]="'red'" [tooltip]="'Danger Button'"></amexio-button>
   </amexio-column>
 </amexio-row>

<!-- -->
        <amexio-row>
          <amexio-column [size]="12">
            <h2>Button Group With Badge</h2>
          </amexio-column>
        </amexio-row>

        <amexio-row>
          <amexio-column [size]="4">
            <amexio-btn-group [size]="'small'" >
              <amexio-button [label]="'Save'" [badge] = "15" [type]="'theme-backgroundcolor'" [tooltip]="'Secondary Button'"></amexio-button>
              <amexio-button  [label]="'Cancel'" [badge] = "16"  [type]="'theme-backgroundcolor'" [tooltip]="'Secondary Button'"></amexio-button>
            </amexio-btn-group>
          </amexio-column>
          <amexio-column [size]="4" >
            <amexio-btn-group [size]="'default'" >
              <amexio-button [label]="'Save'"  [badge] = "17" [type]="'green'" [tooltip]="'Secondary Button'"></amexio-button>
              <amexio-button  [label]="'Cancel'" [badge] = "18" [type]="'green'" [tooltip]="'Secondary Button'"></amexio-button>
            </amexio-btn-group>
          </amexio-column>
          <amexio-column [size]="4" >
            <amexio-btn-group [size]="'large'" >
              <amexio-button [label]="'Save'"  [badge] = "19" [type]="'red'" [tooltip]="'Secondary Button'"></amexio-button>
              <amexio-button  [label]="'Cancel'"  [badge] = "20" [type]="'red'" [tooltip]="'Secondary Button'"></amexio-button>
            </amexio-btn-group>
          </amexio-column>
        </amexio-row>

<!-- -->
                
        <amexio-row>
        <amexio-column [size]="6">
          <h2>Button Drop Down With Badge</h2>
        </amexio-column>
        </amexio-row>
        <amexio-row>
        <amexio-column [size]="4">
          <amexio-btn-dropdown [label]="'Button'"   [type]="'theme-color'" [size]="'default'">
            <amexio-btn-dropdown-item [label]="'Expand'" [badge] = "32" [icon]="'fa fa-arrows-alt'" ></amexio-btn-dropdown-item>
            <amexio-btn-dropdown-item [label]="'Delete'" [badge] = "31" [icon]="'fa fa-trash'" ></amexio-btn-dropdown-item>
          </amexio-btn-dropdown>
        </amexio-column>
        <amexio-column [size]="4">
          <amexio-btn-dropdown [label]="'Button'" [type]="'green'" [size]="'default'">
            <amexio-btn-dropdown-item [label]="'Expand'" [badge] = "32" [icon]="'fa fa-arrows-alt'"></amexio-btn-dropdown-item>
            <amexio-btn-dropdown-item [label]="'Delete'" [badge] = "32" [icon]="'fa fa-trash'" ></amexio-btn-dropdown-item>
          </amexio-btn-dropdown>
        </amexio-column>
        <amexio-column [size]="4">
          <amexio-btn-dropdown [label]="'Button'" [type]="'red'" [size]="'default'">
            <amexio-btn-dropdown-item [label]="'Expand'" [badge] = "40" [icon]="'fa fa-arrows-alt'"></amexio-btn-dropdown-item>
            <amexio-btn-dropdown-item [label]="'Delete'" [badge] = "41" [icon]="'fa fa-trash'" ></amexio-btn-dropdown-item>
          </amexio-btn-dropdown>
        </amexio-column>
        </amexio-row>
<!-- -->
<h2>Transparent Button With Badge</h2>
<amexio-floating-button [type]="'theme-color'" [vertical-position]="'bottom'" [horizontal-position]="'right'" [icon]="'fa fa-commenting'"></amexio-floating-button>
<amexio-button [label]="'Transparent'"  [badge] = "50" [type]="'transparent'" [tooltip]="'I m transparent'"></amexio-button>






</amexio-body>
      
    </amexio-card>
    
  `
})

export class ActionComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}

const routes: Routes = [
  {path: '', component: ActionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),AmexioWidgetModule,
  AmexioLayoutModule,AmexioFormsModule,AmexioDataModule],
  exports: [RouterModule],
  declarations : [ActionComponent]
})
export class ActionRoutingModule {
}

export const routedComponents = [ActionComponent];
