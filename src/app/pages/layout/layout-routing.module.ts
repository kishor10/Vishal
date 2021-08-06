import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { ManageWhComponent } from './manage-wh/manage-wh.component';
import { CaptureRunningCostComponent } from './capture-running-cost/capture-running-cost.component';
import { CreateDimenstionDefinitionComponent } from './create-dimenstion-definition/create-dimenstion-definition.component';
import { CreateRestrictionComponent } from './create-restriction/create-restriction.component';
import { SearchRestrictionComponent } from './search-restriction/search-restriction.component';
import { SearchDimenstionDefinitionComponent } from './search-dimenstion-definition/search-dimenstion-definition.component';
import { CreateLocationHierarchyComponent } from './create-location-hierarchy/create-location-hierarchy.component';
import { CreateLocationStorageCategoryComponent } from './create-location-storage-category/create-location-storage-category.component';
import { CreatePackingGroupComponent } from './create-packing-group/create-packing-group.component';
import { CreateReasonComponent } from './create-reason/create-reason.component';
import { CreateCustomerTypeComponent } from './create-customer-type/create-customer-type.component';
import { CreatePrimaryCompanyComponent } from './create-primary-company/create-primary-company.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { GenerateLabelLocationRangeComponent } from './generate-label-location-range/generate-label-location-range.component';
import { CreateSupplierLeadTimeComponent } from './create-supplier-lead-time/create-supplier-lead-time.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateAdditionalBillAddressComponent } from './create-additional-bill-address/create-additional-bill-address.component';
import { CreateAdditionalShipAddressComponent } from './create-additional-ship-address/create-additional-ship-address.component';
import { CreateSkuCategoryComponent } from './create-sku-category/create-sku-category.component';
import { CreateStorageCategoryComponent } from './create-storage-category/create-storage-category.component';
import { CreateSkuComponent } from './create-sku/create-sku.component';




const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
  {
      path: 'create-sku',
      component: CreateSkuComponent,
  },{
      path: 'create-storage-category',
      component: CreateStorageCategoryComponent,
  },{
      path: 'create-sku-category',
      component: CreateSkuCategoryComponent,
  },{
      path: 'create-additional-ship-address',
      component: CreateAdditionalShipAddressComponent,
  },{
      path: 'create-additional-bill-address',
      component: CreateAdditionalBillAddressComponent,
  },{
      path: 'create-customer',
      component: CreateCustomerComponent,
  },{
      path: 'create-supplier-lead-time',
      component: CreateSupplierLeadTimeComponent,
  },{
      path: 'generate-label-location-range',
      component: GenerateLabelLocationRangeComponent,
  },{
      path: 'create-supplier',
      component: CreateSupplierComponent,
  },{
      path: 'create-primary-company',
      component: CreatePrimaryCompanyComponent,
  },
  {
      path: 'create-customer-type',
      component: CreateCustomerTypeComponent,
  },
  {
      path: 'create-reason',
      component: CreateReasonComponent,
  },
  {
      path: 'create-packing-group',
      component: CreatePackingGroupComponent,
  },
  {
      path: 'create-location-storage-category',
      component: CreateLocationStorageCategoryComponent,
    },
  {
      path: 'create-location-hierarchy',
      component: CreateLocationHierarchyComponent,
    },
  {
      path: 'search-dimenstion-definition',
      component: SearchDimenstionDefinitionComponent,
    },
  {
      path: 'search-restriction',
      component: SearchRestrictionComponent,
    },
  {
      path: 'create-restriction',
      component: CreateRestrictionComponent,
    },
  
    {
      path: 'create-dimenstion-definition',
      component: CreateDimenstionDefinitionComponent,
    },
    {
      path: 'capture-running-cost',
      component: CaptureRunningCostComponent,
    },
    {
      path: 'manage-wh',
      component: ManageWhComponent,
    },
    {
      path: 'stepper',
      component: StepperComponent,
    },
    {
      path: 'list',
      component: ListComponent,
    },
    {
      path: 'infinite-list',
      component: InfiniteListComponent,
    },
    {
      path: 'accordion',
      component: AccordionComponent,
    },
    {
      path: 'tabs',
      component: TabsComponent,
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full',
        },
        {
          path: 'tab1',
          component: Tab1Component,
        },
        {
          path: 'tab2',
          component: Tab2Component,
        },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
