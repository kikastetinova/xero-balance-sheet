import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/show-me-the-money-app.tsx';
import { ReportProvider } from './services/context.tsx';

import './index.css';

const appContainer = document.getElementById('root');

if (appContainer) {
  createRoot(appContainer).render(
    <StrictMode>
      <Suspense fallback={<div>Loading the Report...</div>}>
        <ReportProvider>
          <App />
        </ReportProvider>
      </Suspense>
    </StrictMode>,
  );
}
