# Frontend Mentor - Invoice app solution

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![Design preview for the Invoice app coding challenge](./preview.jpg)


### Expected Behaviour

- Creating an invoice
  - [x] When creating a new invoice, an ID needs to be created. Each ID should be 2 random uppercased letters followed by 4 random numbers.
  - [ ] Invoices can be created either as drafts or as pending. Clicking "Save as Draft" should allow the user to leave any form field blank, but should create an ID if one doesn't exist and set the status to "draft". Clicking "Save & Send" should require all forms fields to be filled in, and should set the status to "pending".
  - Changing the Payments Terms field should set the `paymentDue` property based on the `createdAt` date plus the numbers of days set for the payment terms.
  - The `total` should be the sum of all items on the invoice.
- Editing an invoice
  - When saving changes to an invoice, all fields are required when the "Save Changes" button is clicked. If the user clicks "Cancel", any unsaved changes should be reset.
  - If the invoice being edited is a "draft", the status needs to be updated to "pending" when the "Save Changes" button is clicked. All fields are required at this stage.
- Users should be able to mark invoices as paid by clicking the "Mark as Paid" button. This should change the invoice's status to "paid".
- Users should receive a confirmation modal when trying to delete invoices.
- Feel free not to add custom styling for the date and dropdown form fields. The designs for those fields are optional extras and are mostly for illustration purposes.


### Links

- Solution URL: [Github](https://github.com/yjcyun/frontend_mentor/tree/master/guru/invoice-app)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Vue3

### What I learned

This is my very first "big" project in VueJS.

Learned to start a Vue project with Vite. 

Typography of Spartan is no longer available on Google Fonts. Fonts were manually downloaded and used in the project

Table component on invoice summary: How can I reduce the amount of CSS? Should I have used CSS Grid / CSS flexbox instead of HTML table elements? Using CSS grid/flexbox might've been easier but what about semantic html? accessibility?

How to use string literals to type props? for example: `mode = 'create' | 'edit'` Is this possible on Vue3 without TypeScript?

How to get default props in custom input field?
1) inheritAttrs: false
2) `<input v-bind="$attrs"/>`


### Continued development

- [] Custom scrollbar
- [] Custom Date picker
- [] Fix delete invoice
- [] Implement backend
- [] Refactor
- [] Need a back button on mobile form dialog