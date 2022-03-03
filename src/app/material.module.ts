import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MarerialModules = [MatButtonModule];

@NgModule({
  imports: [MarerialModules],
  exports: [MarerialModules],
})
export class MaterialModule {}
