import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

// Page Components
import { WelcomeHeader } from './shared/pageComponents/welcomeComponents/welcomeHeader/welcomeHeader.component';
import { Gallery } from './shared/pageComponents/welcomeComponents/Gallery/gallery.component';
import { Footer } from './shared/pageComponents/global/footer/footer.component';
import { Navigation } from './shared/pageComponents/global/navigation/navigation.component';
import { SubNavigation } from './shared/pageComponents/global/subNavigation/subNavigation.component';
import { NewsletterCallout } from './shared/pageComponents/global/newsletterCallout/newsletterCallout.component';
import { Events } from './shared/pageComponents/welcomeComponents/events/events.component';


// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from './shared/services/auth.service';

// Toaster for Alert Messages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    WelcomeComponent,
    AddProductComponent,
    EditProductComponent,
    ProductsListComponent,
    WelcomeHeader,
    Footer,
    Gallery,
    Navigation,
    SubNavigation,
    NewsletterCallout,
    Events
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    AngularFireDatabaseModule,  // Firebase database module
    ToastrModule.forRoot(), // ToastrModule added
    NgxPaginationModule,  // Include it in imports array
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
