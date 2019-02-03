import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ButtonModule, InputMaskModule, InputTextModule, DropdownModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {ClienteAddComponent} from './cliente-add.component';
import {ClienteService} from './cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    InputMaskModule,
    HttpClientModule,
    DropdownModule
  ],
  providers: [ClienteService],
  exports: [ClienteAddComponent],
  declarations: [ClienteAddComponent]
})
export class ClienteModule { }
