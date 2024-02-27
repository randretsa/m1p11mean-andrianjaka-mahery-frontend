import {Component, OnInit, inject} from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'drag-and-drop.component.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
})
export class DragAndDropComponent implements OnInit{

  private appointmentService = inject(AppointmentService);

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(){
    let id = localStorage.getItem('_id') || ''
    this.loadAppointmentTodo(id);
    this.loadAppointmentDone(id);
  }

  todo:any = [
  ];

  done:any = [
  ];

  loadAppointmentTodo(id:string){
    this.appointmentService.getAppointmentAchiement(id,{isdone: false}).subscribe({
      next: (appointments:any)=>{
        this.todo = appointments;
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  loadAppointmentDone(id:string){
    this.appointmentService.getAppointmentAchiement(id,{isdone: true}).subscribe({
      next: (appointments:any)=>{
        this.done = appointments;
      },
      error: (error) => console.log('Error fetching services',error)
    });
  }

  drop(event: CdkDragDrop<IAppointment[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      if(event.container.data[event.currentIndex].isdone==false){
        this.appointmentService.updateAppointmentEtat(event.container.data[event.currentIndex]._id,{isdone: true}).subscribe({
          next: (appointment:any)=>{
            //console.log(appointment)
          },
          error: (error) => console.log('Error updating service',error)
        });
      } else if(event.container.data[event.currentIndex].isdone==true){
        this.appointmentService.updateAppointmentEtat(event.container.data[event.currentIndex]._id,{isdone: false}).subscribe({
          next: (appointment:any)=>{
            //console.log(appointment)
          },
          error: (error) => console.log('Error updating service',error)
        });
      }
      this.loadPage();
      /*console.log('Objet déplacé:', event.container.data[event.currentIndex]._id);
      console.log('Container actuel:', event.container.id);*/
    }
  }
}

interface IAppointment{
  _id: string,
  label: string,
  isdone: boolean
}