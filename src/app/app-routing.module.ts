import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-two/home-two.module').then(m => m.HomeTwoModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v3', loadChildren: () => import('./components/pages/home-three/home-three.module').then(m => m.HomeThreeModule), data: { breadcrumb: "Homepage" } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: "About Us" } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-grid', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: "Blog Details" } },
  // Pages
  { path: 'broadcast', loadChildren: () => import('./components/pages/broadcast/broadcast.module').then(m => m.BroadcastModule), data: { breadcrumb: "Broadcast" } },
  // Volunteers
  { path: 'volunteers', loadChildren: () => import('./components/pages/volunteers/volunteers.module').then(m => m.VolunteersModule), data: { breadcrumb: "Volunteers" } },
  { path: 'volunteer-details/:id', loadChildren: () => import('./components/pages/volunteer-details/volunteer-details.module').then(m => m.VolunteerDetailsModule), data: { breadcrumb: "Volunteer Details" } },
  // FAQ's
  { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  // Events
  { path: 'event/tag/:tagId', loadChildren: () => import('./components/pages/events/events.module').then(m => m.EventsModule), data: { breadcrumb: "Events" } },
  { path: 'event/speaker/:speakerId', loadChildren: () => import('./components/pages/events/events.module').then(m => m.EventsModule), data: { breadcrumb: "Events" } },
  { path: 'events', loadChildren: () => import('./components/pages/events/events.module').then(m => m.EventsModule), data: { breadcrumb: "Events" } },
  { path: 'event-details/:id', loadChildren: () => import('./components/pages/event-details/event-details.module').then(m => m.EventDetailsModule), data: { breadcrumb: "Event Details" } },
  // Sermons
  { path: 'sermon/author/:authorId', loadChildren: () => import('./components/pages/sermons/sermons.module').then(m => m.SermonsModule), data: { breadcrumb: "Sermons" } },
  { path: 'sermons', loadChildren: () => import('./components/pages/sermons/sermons.module').then(m => m.SermonsModule), data: { breadcrumb: "Sermons" } },
  { path: 'sermon-details/:id', loadChildren: () => import('./components/pages/sermon-details/sermon-details.module').then(m => m.SermonDetailsModule), data: { breadcrumb: "Sermon Details" } },
  // Ministry
  { path: 'ministry/cat/:catId', loadChildren: () => import('./components/pages/ministries/ministries.module').then(m => m.MinistriesModule), data: { breadcrumb: "Ministries" } },
  { path: 'ministry/client/:clientId', loadChildren: () => import('./components/pages/ministries/ministries.module').then(m => m.MinistriesModule), data: { breadcrumb: "Ministries" } },
  { path: 'ministries', loadChildren: () => import('./components/pages/ministries/ministries.module').then(m => m.MinistriesModule), data: { breadcrumb: "Ministries" } },
  { path: 'ministry-details/:id', loadChildren: () => import('./components/pages/ministry-details/ministry-details.module').then(m => m.MinistryDetailsModule), data: { breadcrumb: "Ministry Details" } },
  // Services
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: "Services" } },
  { path: 'services-v2', loadChildren: () => import('./components/pages/services-two/services-two.module').then(m => m.ServicesTwoModule), data: { breadcrumb: "Services" } },
  // Donation
  { path: 'donation', loadChildren: () => import('./components/pages/donation/donation.module').then(m => m.DonationModule), data: { breadcrumb: "Donation Form" } },
  { path: 'donation-grid', loadChildren: () => import('./components/pages/donation-grid/donation-grid.module').then(m => m.DonationGridModule), data: { breadcrumb: "Donation" } },
  // Shop
  { path: 'shop/cat/:catId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop/tag/:tagId', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop/search/:query', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'shop', loadChildren: () => import('./components/pages/shop/shop.module').then(m => m.ShopModule), data: { breadcrumb: "Shop Grid" } },
  { path: 'product-single/:id', loadChildren: () => import('./components/pages/shop-details/shop-details.module').then(m => m.ShopDetailsModule), data: { breadcrumb: "Shop Details" } },
  { path: 'wishlist', loadChildren: () => import('./components/pages/wishlist/wishlist.module').then(m => m.WishlistModule), data: { breadcrumb: "Wishlist" } },
  { path: 'cart', loadChildren: () => import('./components/pages/cart/cart.module').then(m => m.CartModule), data: { breadcrumb: "Cart" } },
  { path: 'checkout', loadChildren: () => import('./components/pages/checkout/checkout.module').then(m => m.CheckoutModule), data: { breadcrumb: "Checkout" } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: "Contact Us" } },
  // Error page
  { path: 'error-page', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } },
  { path: '**', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
