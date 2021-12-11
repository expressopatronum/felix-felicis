import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ShopmoreComponent } from './components/shopmore/shopmore.component';
import { EmailSubscribeComponent } from './components/email-subscribe/email-subscribe.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, CarouselComponent, HeroComponent, FeaturedProductsComponent, ShopmoreComponent, EmailSubscribeComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
