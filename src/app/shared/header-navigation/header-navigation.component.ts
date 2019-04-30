import { Component, AfterViewInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements AfterViewInit {
usertype:string
  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  constructor(private router: Router) { 

  }

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  ngAfterViewInit() { 
  
  }


    logout() {
      // this.SuperAdminAuthService.logout().subscribe(success => {
      //   // this.successMsg = success;
      //   localStorage.removeItem('adminuser');
      //   localStorage.removeItem('ProfilePicture');
      //   localStorage.removeItem('displayName');
      //   localStorage.removeItem('user Type');
      //   this.router.navigate(['/superadmin']);
      // }, err => {
      //   if (err.status == 401) {
      //     localStorage.removeItem('adminuser');
      //     localStorage.removeItem('ProfilePicture');
      //     localStorage.removeItem('displayName');
      //     localStorage.removeItem('user Type');
      //     this.router.navigate(['/superadmin']);
      //   }
      //   else {
      //     err => {
      //       console.log("error", err);
      //     }
      //   }
      // })
 

  }


}
