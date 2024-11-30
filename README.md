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

2. Install dependencies:

   ```sh
   npm i
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.


# Notes

The solution could be further improved to be more production-ready by:

1.  better configs for eslint and prettier and vite
2.  extracting all config files into a separate folder
3.  including unit and e2e tests
5.  using a library for data fetching, e.g. tanstack-query for query caching or fetch retry
6.  improving UX by displaying a fallback component (e.g. a skeleton question component) before the initial question is loaded.
7.  adding aria labels to buttons for better accessibility
8.  lazy loading non-essential components, in our case MatchPage would be a candidate for that
9.  using ErrorBoundary component for better error catching
10. expose the application as a micro-frontend using module federation to use it as part of a larger app
11. creating better UI components, e.g. the button in <MatchPage> and button in <AnswerOption> have the same styling, but aren't extracted to a separate component. Another alternative would be using a component-based UI library, such as MUI or Boostrap5 or daisyUI.
12. improving UX by displaying a progress bar- that's isn't possible with the provided API as we don't know total number of questions
13. storing user progress between page reloads, right now the progress resets of page reload





