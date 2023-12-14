import { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; //BrowserRouter
import { ApolloProvider } from '@apollo/client';
import client from "./apollo";
import pMinDelay from "p-min-delay";
import ReposSearchPage from "./components/ReposSearchPage";
//import IssuesPage from "./components/IssuesPage"; 
import Loading from './components/Loading';
//import AuthorProfilePage from './components/AuthorProfilePage';
import "../src/style/App.scss"

const IssuesPage = lazy(() => pMinDelay(import("./components/IssuesPage"), 500));
const AuthorProfilePage = lazy(()=> pMinDelay(import("./components/AuthorProfilePage"), 500));

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<ReposSearchPage />} />
            <Route path="/issues/:owner/:repo" element={<IssuesPage />} />
            <Route path="/user/:owner" element={<AuthorProfilePage />} />
          </Routes>
        </Suspense>
      </Router>
      </ApolloProvider>
  );
};

export default App;
