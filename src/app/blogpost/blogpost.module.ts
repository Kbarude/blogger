import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';
import { FileUploadComponent } from '../FileUpload/FileUpload.component';


@NgModule({
  declarations: [BlogpostFeaturedComponent, BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, CategoriesComponent,FileUploadComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],

  exports:[
    BlogpostFeaturedComponent
  ]
})
export class BlogpostModule { }
