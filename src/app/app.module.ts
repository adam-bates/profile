import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ScalabilityComponent } from './capabilities/scalability/scalability.component';
import { PerformanceComponent } from './capabilities/performance/performance.component';
import { SecurityComponent } from './capabilities/security/security.component';
import { EnterpriseComponent } from './experience/enterprise/enterprise.component';
import { DataComponent } from './experience/data/data.component';
import { ApisComponent } from './experience/apis/apis.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CapabilitiesComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    ScalabilityComponent,
    PerformanceComponent,
    SecurityComponent,
    EnterpriseComponent,
    DataComponent,
    ApisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
