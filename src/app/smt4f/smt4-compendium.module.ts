import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SharedCompendiumModule } from '../compendium/compendium.module';
import { CompendiumRoutingModule } from './compendium-routing.module';

import { CompendiumComponent } from './components/compendium.component';
import { DemonListContainerComponent } from './components/demon-list.component';
import { SkillListContainerComponent } from './components/skill-list.component';
import { DemonDlcSettingsContainerComponent } from './components/demon-dlc-settings.component';
import { DemonEntryComponent, DemonEntryContainerComponent } from './components/demon-entry.component';
import { FusionChartContainerComponent } from './components/fusion-chart.component';
import { RecipeGeneratorComponent, RecipeGeneratorContainerComponent } from './components/recipe-generator.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    SharedCompendiumModule,
    CompendiumRoutingModule
  ],
  declarations: [
    CompendiumComponent,
    DemonListContainerComponent,
    SkillListContainerComponent,
    DemonEntryComponent,
    DemonEntryContainerComponent,
    DemonDlcSettingsContainerComponent,
    FusionChartContainerComponent,
    RecipeGeneratorComponent,
    RecipeGeneratorContainerComponent
  ],
  exports: [
    CompendiumComponent,
    DemonListContainerComponent,
    SkillListContainerComponent,
    DemonEntryComponent,
    DemonEntryContainerComponent,
    DemonDlcSettingsContainerComponent,
    FusionChartContainerComponent,
    RecipeGeneratorComponent,
    RecipeGeneratorContainerComponent
  ],
})
export class Smt4CompendiumModule {
  static forRoot(): ModuleWithProviders<Smt4CompendiumModule> {
    return {
      ngModule: Smt4CompendiumModule
    };
  }
}
