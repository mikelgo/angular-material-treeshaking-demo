import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCompComponent } from './my-comp.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [CommonModule, MatButtonModule],
  declarations: [MyCompComponent],
  exports: [MyCompComponent],
})
export class ScamModulesModule {}
