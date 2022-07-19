import React from 'react';
import GlobalStyle from './theme/globalStyles';
import { CommentList } from './components/commentList';

const App = () => (
  <>
    <GlobalStyle />
    <CommentList />
  </>
);

export default App;
