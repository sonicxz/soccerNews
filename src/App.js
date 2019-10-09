import React from 'react';
import Layout from './components/Layout/Layout';
import NewsFeed from './containers/NewsFeed/NewsFeed';

function App() {
  return (
   <Layout>
     <NewsFeed></NewsFeed>
   </Layout>
  );
}

export default App;
