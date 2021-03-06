import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';    // CRUD services API
import { FormBuilder } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

//Welcome Page Imports
import { WelcomeHeader } from '../../shared/pageComponents/welcomeComponents/welcomeHeader/welcomeHeader.component';

//Global Imports
import { Gallery } from '../../shared/pageComponents/welcomeComponents/Gallery/gallery.component';
import { NewsletterCallout } from '../../shared/pageComponents/global/newsletterCallout/newsletterCallout.component';
import { SubNavigation } from '../../shared/pageComponents/global/subNavigation/subNavigation.component';
import { Footer } from '../../shared/pageComponents/global/footer/footer.component';
import { Events } from '../../shared/pageComponents/welcomeComponents/events/events.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  
  @ViewChild(WelcomeHeader, { static: true }) header: WelcomeHeader;
  @ViewChild(Gallery, { static: true }) gallery: Gallery;
  @ViewChild(Events, { static: true }) events: Events;
  @ViewChild(NewsletterCallout, { static: true }) newsletterCallout: NewsletterCallout;
  @ViewChild(SubNavigation, { static: true }) SubNavigation: SubNavigation;
  @ViewChild(Footer, { static: true }) footer: Footer;

  public tabsToggle: boolean = false;
  public tab1: boolean = false;
  public tab2: boolean = false;
  public tab3: boolean = false;
  public tab4: boolean = false;
  public tab5: boolean = false;
  public aboutActive: boolean = true;
  public menuActive: boolean = false;
  public connectActive: boolean = false;
  public eventActive: boolean = false;
  public galleryActive: boolean = false;

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

  ngOnInit() {        // Call Emaillist form when component is ready
  }
  ngAfterViewInit() {
  }

  clickToogle() {
    this.tabsToggle = !this.tabsToggle; 
  }

  clickAbout() {
    this.tab1 = false;
    this.tab2 = false;
    this.tab3 = false;
    this.tab4 = false;
    this.tab5 = false;
    this.aboutActive = true;
    this.menuActive = false;
    this.connectActive = false;
    this.eventActive = false;
    this.galleryActive = false;
  }
  clickMenu() {
    this.tab2 = true;
    this.tab1 = true;
    this.tab3 = false;
    this.tab4 = false;
    this.tab5 = false;
    this.menuActive = true;
    this.aboutActive = false;
    this.connectActive = false;
    this.eventActive = false;
    this.galleryActive = false;
  }
  clickConnect() {
    this.tab3 = true;
    this.tab1 = true;
    this.tab2 = false;
    this.tab4 = false;
    this.tab5 = false;
    this.connectActive = true;
    this.aboutActive = false;
    this.menuActive = false;
    this.eventActive = false;
    this.galleryActive = false;
  }
  clickEvent() {
    this.tab4 = true;
    this.tab1 = true;
    this.tab2 = false;
    this.tab3 = false;
    this.tab5 = false;
    this.eventActive = true;
    this.aboutActive = false;
    this.menuActive = false;
    this.connectActive = false;
    this.galleryActive = false;
  }
  clickGallery() {
    this.tab5 = true;
    this.tab1 = true;
    this.tab2 = false;
    this.tab3 = false;
    this.tab4 = false;
    this.galleryActive = true;
    this.aboutActive = false;
    this.menuActive = false;
    this.connectActive = false;
    this.eventActive = false;
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 400) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }

}
