import {Component} from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

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
export class DragAndDropComponent {

  todo = [
    {_id: "1", label:"rendez-vous 1"},
    {_id: "2", label:"rendez-vous 2"},
];

done = [
    {_id: "3", label:"rendez-vous 3"},
    {_id: "4", label:"rendez-vous 4"},
];


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

      console.log('Objet déplacé:', event.container.data[event.currentIndex]);
      console.log('Container actuel:', event.container.id);
    }
  }
}

interface IAppointment{
    _id: string,
    label: string
}

