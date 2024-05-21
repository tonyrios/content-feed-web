Project to show content feeds using [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Before running

Please create a .env file following the example in .env.example to set the URL to get content-feeds

## Commands

To install dependencies

```bash
npm install
```

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run on production

```bash
npm run build
npm run start
```

## Folder structure

I followed the next folder structure

```bash
.
├── public          # Images that are public
├── src             # Source files
    ├── app         # routes of the web and layouts,loading, error and not-found components
    ├── components  # components to be used across the application.
    ├── config      # To define configurations that we need in the project.
    ├── sass        # Global styles and configuration of sass.
    ├── services    # Define third party services that the project need to request.
├── .env            # to put environment variables
```

## Brief Report

I selected nextjs in order to use the optimization that exist already in the framework for web applications, this is how we configured, how we use some libraries and the way of how we code.

1. SSR - Server Side Rendering - I built the components with the idea to be rendered in server side, and only to have a few components to be rendered in the client side, for example for the parts where I need to change dinamically when clicking a button I prefered to use states in react to do that.
2. Image component - This help a lot to improve performance of the web. because this help us to automatically serve correctly sized images for each device, so this improve the charge of the application in the client side, I added sizes property to set different sizes to download according to the size of screen because in desktop I'm showing 3 columns, in mdeium size screens 2 columns and in small screens only 1 column.
3. Sass - In this application also I prefered to use sass, in order to write easily the css modules and also using BEM semantic CSS.
4. Mixins was added in sass file in order to built a responsive web application, I choosed these breakpoints: 600px, 1024px, 1440px, for small, medium and large screens respectively.
5. I added prettier in order to have a same format of the code.
6. I choose to force-dynamic the page in order to built the content feed page each time is requested.
7. Use of Loading UI from nextjs to show a component while the content of a route loads.
8. Added an Error Page to show in case of any error.
9. Added a not-found page to show in case of a route doesn't exist.

## Running lighthouse performance

- I addded metadata title and description to increase check points of SEO.
- Running in production it shows performance-97 Accessibility-98 Best practices-100 SEO-100
