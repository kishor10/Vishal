import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbSelectModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { NewsPostComponent } from './infinite-list/news-post/news-post.component';
import { NewsPostPlaceholderComponent } from './infinite-list/news-post-placeholder/news-post-placeholder.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NewsService } from './news.service';
import { ManageWhComponent } from './manage-wh/manage-wh.component';
import { CaptureRunningCostComponent } from './capture-running-cost/capture-running-cost.component';
import { CreateDimenstionDefinitionComponent } from './create-dimenstion-definition/create-dimenstion-definition.component';

import { CreateRestrictionComponent } from './create-restriction/create-restriction.component';
import { SearchRestrictionComponent } from './search-restriction/search-restriction.component';
import { SearchDimenstionDefinitionComponent } from './search-dimenstion-definition/search-dimenstion-definition.component';
import { CreateLocationHierarchyComponent } from './create-location-hierarchy/create-location-hierarchy.component';
import { CreateLocationStorageCategoryComponent } from './create-location-storage-category/create-location-storage-category.component';
import { CreatePrimaryCompanyComponent } from './create-primary-company/create-primary-company.component';
import { CreatePackingGroupComponent } from './create-packing-group/create-packing-group.component';
import { CreateReasonComponent } from './create-reason/create-reason.component';
import { CreateCustomerTypeComponent } from './create-customer-type/create-customer-type.component';
import { GenerateLabelLocationRangeComponent } from './generate-label-location-range/generate-label-location-range.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { CreateSupplierLeadTimeComponent } from './create-supplier-lead-time/create-supplier-lead-time.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateAdditionalBillAddressComponent } from './create-additional-bill-address/create-additional-bill-address.component';
import { CreateAdditionalShipAddressComponent } from './create-additional-ship-address/create-additional-ship-address.component';
import { CreateSkuComponent } from './create-sku/create-sku.component';
import { CreateSkuCategoryComponent } from './create-sku-category/create-sku-category.component';
import { CreateStorageCategoryComponent } from './create-storage-category/create-storage-category.component';
import { CreateSaleOrderComponent } from './create-sale-order/create-sale-order.component';
import { ReprintOutboundInstructionReportComponent } from './reprint-outbound-instruction-report/reprint-outbound-instruction-report.component';
import { ReportOutboundInstructionReportPackComponent } from './report-outbound-instruction-report-pack/report-outbound-instruction-report-pack.component';
import { GeneratePackComponent } from './generate-pack/generate-pack.component';
import { MergePackComponent } from './merge-pack/merge-pack.component';
import { PrintDispatchNoteComponent } from './print-dispatch-note/print-dispatch-note.component';
import { LoadingReportComponent } from './loading-report/loading-report.component';
import { CreateSaleReturnComponent } from './create-sale-return/create-sale-return.component';
import { CreateMiseIssueComponent } from './create-mise-issue/create-mise-issue.component';
import { PackReportComponent } from './pack-report/pack-report.component';
import { PackingListReportComponent } from './packing-list-report/packing-list-report.component';
import { SoUpdateHistoryReportComponent } from './so-update-history-report/so-update-history-report.component';
import { OutboundTurnAroundTimeReportComponent } from './outbound-turn-around-time-report/outbound-turn-around-time-report.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateBillingCategoryComponent } from './create-billing-category/create-billing-category.component';
import { CreateThreeplBillingTrafficComponent } from './create-threepl-billing-traffic/create-threepl-billing-traffic.component';
import { CreateReportGroupComponent } from './create-report-group/create-report-group.component';
import { FixChargeRuleConfigurationComponent } from './fix-charge-rule-configuration/fix-charge-rule-configuration.component';
import { DocumentChargeRuleConfigurationComponent } from './document-charge-rule-configuration/document-charge-rule-configuration.component';
import { OtherChargeRuleConfigurationComponent } from './other-charge-rule-configuration/other-charge-rule-configuration.component';
import { CreateActivityChargeRuleComponent } from './create-activity-charge-rule/create-activity-charge-rule.component';
import { CreateStorageVolumeChargeRuleComponent } from './create-storage-volume-charge-rule/create-storage-volume-charge-rule.component';
import { CreateLocationwiseStorageChargeRuleComponent } from './create-locationwise-storage-charge-rule/create-locationwise-storage-charge-rule.component';
import { CreateGateInwardwiseChargeRuleComponent } from './create-gate-inwardwise-charge-rule/create-gate-inwardwise-charge-rule.component';
import { CreateThreeplChargeLogComponent } from './create-threepl-charge-log/create-threepl-charge-log.component';
import { CustoerWiseRevenueReportComponent } from './custoer-wise-revenue-report/custoer-wise-revenue-report.component';
import { ThreeplInvoiceReportComponent } from './threepl-invoice-report/threepl-invoice-report.component';
import { ResourseUtilizationDetailReportComponent } from './resourse-utilization-detail-report/resourse-utilization-detail-report.component';
import { RevenueSummaryReportComponent } from './revenue-summary-report/revenue-summary-report.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbSelectModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    TabsComponent,
    Tab1Component,
    Tab2Component,
    StepperComponent,
    ListComponent,
    NewsPostPlaceholderComponent,
    InfiniteListComponent,
    NewsPostComponent,
    AccordionComponent,
    ManageWhComponent,
    CaptureRunningCostComponent,
    CreateDimenstionDefinitionComponent,
    CreateRestrictionComponent,
    SearchRestrictionComponent,
    SearchDimenstionDefinitionComponent,
    CreateLocationHierarchyComponent,
    CreateLocationStorageCategoryComponent,
    CreatePrimaryCompanyComponent,
    CreatePackingGroupComponent,
    CreateReasonComponent,
    CreateCustomerTypeComponent,
    GenerateLabelLocationRangeComponent,
    CreateSupplierComponent,
    CreateSupplierLeadTimeComponent,
    CreateCustomerComponent,
    CreateAdditionalBillAddressComponent,
    CreateAdditionalShipAddressComponent,
    CreateSkuComponent,
    CreateSkuCategoryComponent,
    CreateStorageCategoryComponent,
    CreateSaleOrderComponent,
    ReprintOutboundInstructionReportComponent,
    ReportOutboundInstructionReportPackComponent,
    GeneratePackComponent,
    MergePackComponent,
    PrintDispatchNoteComponent,
    LoadingReportComponent,
    CreateSaleReturnComponent,
    CreateMiseIssueComponent,
    PackReportComponent,
    PackingListReportComponent,
    SoUpdateHistoryReportComponent,
    OutboundTurnAroundTimeReportComponent,
    CreateRoleComponent,
    CreateUserComponent,
    CreateBillingCategoryComponent,
    CreateThreeplBillingTrafficComponent,
    CreateReportGroupComponent,
    FixChargeRuleConfigurationComponent,
    DocumentChargeRuleConfigurationComponent,
    OtherChargeRuleConfigurationComponent,
    CreateActivityChargeRuleComponent,
    CreateStorageVolumeChargeRuleComponent,
    CreateLocationwiseStorageChargeRuleComponent,
    CreateGateInwardwiseChargeRuleComponent,
    CreateThreeplChargeLogComponent,
    CustoerWiseRevenueReportComponent,
    ThreeplInvoiceReportComponent,
    ResourseUtilizationDetailReportComponent,
    RevenueSummaryReportComponent,
  ],
  providers: [
    NewsService,
  ],
})
export class LayoutModule { }
