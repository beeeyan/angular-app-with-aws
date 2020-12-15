import {NgModule} from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    exports: [
        MatRadioModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule
    ]
})
export class AppMaterialModule {}