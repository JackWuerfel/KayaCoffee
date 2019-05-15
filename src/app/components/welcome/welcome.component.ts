import { Component, OnInit, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

//Welcome Page Imports
import { WelcomeHeader } from '../../shared/pageComponents/welcomeComponents/welcomeHeader/welcomeHeader.component';

//Global Imports
import { Navigation } from '../../shared/pageComponents/global/navigation/navigation.component';
import { Gallery } from '../../shared/pageComponents/welcomeComponents/Gallery/gallery.component';
import { NewsletterCallout } from '../../shared/pageComponents/global/newsletterCallout/newsletterCallout.component';
import { SubNavigation } from '../../shared/pageComponents/global/subNavigation/subNavigation.component';
import { Footer } from '../../shared/pageComponents/global/footer/footer.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  
  @ViewChild(WelcomeHeader) header: WelcomeHeader;
  @ViewChild(Navigation) navigation: Navigation;
  @ViewChild(Gallery) gallery: Gallery;
  @ViewChild(NewsletterCallout) newsletterCallout: NewsletterCallout;
  @ViewChild(SubNavigation) SubNavigation: SubNavigation;
  @ViewChild(Footer) footer: Footer;

  
  public emaillistForm: FormGroup;  // Define FormGroup to email's form
  public tabsToggle: boolean = false;
  public tab1: boolean = false;
  public tab2: boolean = false;
  public tab3: boolean = false;
  public tab4: boolean = false;
  public tab5: boolean = false;
  public Join: boolean = false;
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

  ngOnInit() {
    this.crudApi.GetEmailsList();
    this.emaillisForm();              // Call Emaillist form when component is ready
  }
  ngAfterViewInit() {
  }

  // Reactive Emaillist form
  emaillisForm() {
    this.emaillistForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]]
    });
  }

  // Accessing form control using getters
  get email() {
    return this.emaillistForm.get('email');
  }

  // Reset Emaillist form's values
  ResetForm() {
    this.emaillistForm.reset();
  }

  submitEmailData() {
    this.crudApi.AddEmail(this.emaillistForm.value); // Submit Emaillist data using CRUD API
    this.toastr.success(this.emaillistForm.controls['email'].value + ' successfully added!');
    this.ResetForm();  // Reset form when clicked on reset button
    this.Join = false;
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
  
  clickJoin() {
    this.Join = !this.Join;
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
