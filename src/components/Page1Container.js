import React from 'react';
import Header from './Header';
import Times from './Times';
import Videos from './Videos';
import 'bootstrap/dist/css/bootstrap.min.css';

function PageOneBody() {
  return (
    <div>
      <Header />
      <Times />
      <Videos />
    </div>
  );
}

export default PageOneBody;
