  import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
  import { DataProviderService } from './../services/data-provider.service';
import { MatDrawer } from '@angular/material/sidenav';

  @Component({
    selector: 'app-main-screen',
    templateUrl: './main-screen.component.html',
    styleUrls: ['./main-screen.component.scss']
  })
  export class MainScreenComponent implements OnInit {

    public countryList ;

    public sideNavMode ;

    public drawerOpened;

    public mainElement: ElementRef;

    @ViewChild('drawer') public drawer: MatDrawer;

    constructor(private dataProvider : DataProviderService, private elementRef : ElementRef) { }

    ngOnInit() {
      this.countryList = this.dataProvider.countryDataWithIcon;
      this.sideNavMode = 'side';
      this.drawerOpened = true;
      this.mainElement =  this.elementRef.nativeElement.querySelector('.mat-sidenav-container');
      this.checkWidth();
      console.log(this.mainElement)
    }

    
    @HostListener('window:resize')  onresize(){
      // console.log(`Resize event fired ${JSON.stringify(event)}`);
      console.log(this.elementRef)
      console.log(this.elementRef.nativeElement.clientWidth);
      let width = this.elementRef.nativeElement.clientWidth;
      this.checkWidth();
    }

    checkWidth(){
      let width = this.elementRef.nativeElement.clientWidth;
      if(width < 800){
        this.sideNavMode = 'over';
      }else{
        this.sideNavMode = 'side';
        console.log(this.drawer);
        if(!this.drawer.opened){
          this.drawer.toggle();
        }
       
      }
    }

    openDrawer(){
      return this.drawerOpened;
    }


  }
