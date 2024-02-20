import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../../services/notifications/notification.service';
import { navItems } from './_nav';
import { customNavItems } from './_nav';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit{
  
  public navItems = navItems;
  private readonly publicKey ='BF_cZPVjvQyMHBNcnwOGw10RSEOlvUAWkUCUw6NxOkj0uRxfRSB0jggUZG7JytvLdDgrGCaLOTLMN0l5h8p9UbY'
  notificationService: NotificationService = inject(NotificationService);

  constructor(private swPush: SwPush) {
    const user = JSON.parse(localStorage.getItem('user')||'');
    this.navItems = customNavItems(user.privilege.code);
    console.log(user);
  }

ngOnInit(): void {
  this.pushSubscription();
  this.handleNotificationClick();
}
  pushSubscription(){
    if(!this.swPush.isEnabled){
        console.log('Notification is not enabled');
    }

    this.swPush.requestSubscription({
        serverPublicKey: this.publicKey,
    }).then(sub =>{ 
      this.notificationService.acceptSubscription(sub)
      .subscribe(result => console.log(result));     
    })
    .catch(err => console.log(err))
}

handleNotificationClick() {
    this.swPush.notificationClicks.subscribe(({action, notification}) => {
        console.log('ok');
         
    });
}

}
