# Show Me The Money App

This is Show Me The Money App built with React, TypeScript, and Vite. It renders a a Xero Ballance Summary Report.

Components don't hold any internal state and use props for receiving data. 
This is because they can be potentially shared, if we had multiple different Xero reports, that use the same layout and data structure.

Container folder contains balance-sheet-table.tsx file that renders the balance sheet report.

Components access data via a context provider, though in this case the context isn't necessary as there is only one component using it. If we wanted to extend the application and add e.g. a filter for the balance sheet table, we can leverage the context.

Data are fetched from backend with fetch() on context load (in useEffect), but this may be impractical, if we had multiple reports as it could trigger multiple api calls. Depending on the app architecture, it might be better to trigger the data fetching in another way (e.g. on a tab change).

Unit tests are 



## Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone kikastetinova/demyst
   cd demyst
   ```

2. Pull the docker image
  
  ```sh
  docker pull jaypeng2015/show-me-the-money
  ```

3. Install dependencies:

   ```sh
   cd frontend
   npm i

   cd ../backend
   npm i
   ```

4. Start the development server:

  You can either start the backend and frontend as a local dev server

   ```sh
   //start the xero api docker container
   docker network create backend-network
   docker run -d --name mock-xero --network backend-network -p 3000:3000 jaypeng2015/show-me-the-money

   cd frontend
   npm run dev

   cd backend
   npm run dev
   ```

  or you can start everything as docker containers:

  ```sh
   docker-compose build
   docker-compose up -d

4. Open your browser and navigate to `http://localhost:5173`.


# Notes

The solution could be further improved to be more production-ready by:

1.  adding configs for eslint and prettier for the backend app
2.  extracting all config files into a separate folder
5.  using a library for data fetching, e.g. tanstack-query for query caching or fetch retry
9.  using ErrorBoundary component for better error catching
10. expose the application as a micro-frontend using module federation to use it as part of a larger app
11. extending the UI by adding a form that would allow users to select optional parameters for the xero api query
13. the docker config is not production ready





