import {Component, OnInit, inject} from '@angular/core';
import { SwPush } from '@angular/service-worker';
@Component({
    templateUrl: 'notification.component.html',
})
export class NotificationComponent implements OnInit{
    // private readonly publicKey ='BF_cZPVjvQyMHBNcnwOGw10RSEOlvUAWkUCUw6NxOkj0uRxfRSB0jggUZG7JytvLdDgrGCaLOTLMN0l5h8p9UbY'
    
    constructor(private swPush: SwPush){

    }

    ngOnInit(): void {
        // this.pushSubscription();
        // this.handleNotificationClick();
    }

    // pushSubscription(){
    //     if(!this.swPush.isEnabled){
    //         console.log('Notification is not enabled');
    //     }

    //     this.swPush.requestSubscription({
    //         serverPublicKey: this.publicKey,
    //     }).then(sub => console.log(JSON.stringify(sub))).catch(err => console.log(err))
    // }

    // handleNotificationClick() {
    //     this.swPush.notificationClicks.subscribe(({action, notification}) => {
    //         alert('ok');
             
    //     });
    // }
}