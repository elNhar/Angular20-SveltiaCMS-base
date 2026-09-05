import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Feature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly features: Feature[] = [
    {
      title: 'Angular 20',
      description: 'Standalone components, signals and the latest application builder.'
    },
    {
      title: 'Vite dev server',
      description: 'Fast local development powered by esbuild and Vite under @angular/build.'
    },
    {
      title: 'SCSS',
      description: 'Component and global styles authored with Sass out of the box.'
    },
    {
      title: 'Server-side rendering',
      description: 'SSR configured with @angular/ssr and an Express request handler.'
    },
    {
      title: 'Unit testing',
      description: 'Jasmine and Karma preconfigured with .spec.ts files for every component.'
    },
    {
      title: 'Sveltia CMS',
      description: 'Git-based content management available at /admin, no server required.'
    },
    {
      title: 'Cloudflare Pages',
      description: 'Deploy-ready build output for Cloudflare Pages static + SSR hosting.'
    }
  ];
}
