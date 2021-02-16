# Contactlist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

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

Create an application in either React or Angular(not angularjs). The application will manipulate a contact list. Persistence to a back end is not required.

The application will be evaluated on:

1. Usage of state

2. Routing in general

3. Forms

4. Overall architecture

5. Styling



Requirements for the application are as follows.

1. You may use a set of existing contacts for the list. Hard code a list to start with. The list may reside in memory and be manipulated by the add, edit, and delete functions.

2. Contact information should consist of:

    a. First name

    b. Last name

    c. Phone number

    d. Email address

3. Initially the user should be viewing a page with a list of existing contacts. In the contacts list, a contact should be shown with a card style layout. Each card should consist of:

    a. First name

    b. Last name

    c. Phone number

4. From the Contact Listing page, the user should be able to:

    a. Edit an existing contact

        i. All fields are editable

        ii. Create a separate page for editing

    b. View a contact

        i. Expand a contact to view all information

    c. Delete an existing user

        i. A simple delete with a confirmation popup. Are you sure you want to delete “Contact”?

    d. Create a new contact

        i. Create a separate page for creating
    After any contact actions have been performed, the list must update to reflect any changes
