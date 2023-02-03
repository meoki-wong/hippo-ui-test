import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Paginations}  from 'ui-hippo-test';
import 'ui-hippo-test/dist/hippoUI.css'
const App = () => {
  return (
    <div>
      <Paginations total={30}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
