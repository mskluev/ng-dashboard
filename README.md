# NgDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

The following steps were done to create this project:

```bash
ng new --createApplication=false --strict=true ng-dashboard
cd ng-dashboard
ng generate application ng-dashboard --routing=true --prefix=msk --style=scss --strict=true
ng serve
```

```bash
ng add @angular/material
ng generate @schematics/angular:module --name=layouts/default --module=app.module.ts
ng generate @schematics/angular:component --name=layouts/default --module=default --export=true
ng generate @schematics/angular:module --name=shared --module=app.module.ts
ng generate @angular/material:navigation --name=shared/components/sidebar --module=shared --export=true
```

1. Update app.component.html to be only a router-outlet
2. Add '' route to app to DefaultComponent
3. Import SharedModule in layouts module
4. Add sidebar component to default layout component

```bash
ng generate @schematics/angular:module --name=modules/default
(cd projects/ng-dashboard/src/app/modules/default && ng generate @angular/material:dashboard --name=dashboard --module=default.module.ts --export=true)
ng generate @schematics/angular:module --name=modules/lazy --module=app.module.ts --route=lazy
```

1. Update app-routing again with two children routes
2. Add RouterModule to layouts/default module
3. Add router-outlet to default layout component
4. Replace '<!-- Add Content Here -->' in sidebar-component with <ng-content>
5. Add routing to modules/default module
6. import routing in shared module
7. update sidebar links

Check out [the guide](https://skogul.com/?p=1161&preview=true).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
