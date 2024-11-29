import { lazy } from 'react';
import Layout from './layout';
const BalanceSheetReport = lazy(() => import('../containers/balance-sheet-table'));

const App = () => {
  return (
    <Layout title="Balance Sheet Report">
      <BalanceSheetReport/>
    </Layout>
  );
};

export default App;
