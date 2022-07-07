import React from 'react';
import ReactDOM from 'react-dom';
// load multiple things into JSX array
// load in multiple photocards
// load as you scroll?
// init on page load

class scroller extends React.Component 
{
    render() {
      return <h1>Hello from the render method!</h1>;
    }
}

ReactDOM.render(<scroller/>, document.getElementById('photoSec'));