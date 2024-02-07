import { Component } from '@angular/core';
import { ButtonModule, CardModule, GridModule, ModalModule, PopoverModule, TableModule, TooltipModule } from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormServiceComponent } from '../form-service/form-service.component';
@Component({
  selector: 'app-list-service',
  standalone: true,
  imports: [
    CardModule,TableModule,
    GridModule,ButtonModule,
    ModalModule,PopoverModule,
    DocsComponentsModule,TooltipModule,MatDialogModule
  ],
  templateUrl: './list-service.component.html',
  styleUrl: './list-service.component.scss'
})
export class ListServiceComponent {

  constructor(public dialog: MatDialog){}

  openServiceForm(){
    const myDialogue = this.dialog.open(FormServiceComponent);
    myDialogue.afterClosed().subscribe(result=>{
      console.log(result);
    });
  }

}
