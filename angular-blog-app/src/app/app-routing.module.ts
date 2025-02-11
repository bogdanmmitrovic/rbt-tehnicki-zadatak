import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FirstTaskComponent } from './components/first-task/first-task.component';
import { SecondTaskComponent } from './components/second-task/second-task.component';
import { ThirdTaskComponent } from './components/third-task/third-task.component';
import { BlogPostsComponent } from './components/third-task/blog-posts/blog-posts.component';
import { SinglePostComponent } from './components/third-task/single-post/single-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full',
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'first-task',
    component: FirstTaskComponent,
  },
  {
    path: 'second-task',
    component: SecondTaskComponent,
  },
  {
    path: 'third-task',
    component: ThirdTaskComponent,
    children: [
      { path: '', redirectTo: 'blog-posts', pathMatch: 'full' },
      { path: 'blog-posts', component: BlogPostsComponent },
      { path: 'blog-posts/:id', component: SinglePostComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
