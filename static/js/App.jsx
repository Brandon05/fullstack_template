import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
import HeaderBackgroundImage from '../images/header.jpg';

require('../css/fullstack.css');

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  addHeaderImg() {
    let headerBg = new Image();
    headerBg.src = HeaderBackgroundImage;
  }

  render () {
    return (
      <PageHeader>
      <div className='header-image'>
        {this.addHeaderImg()}
      </div>
      <div className='header-contents'>
        <Hello name='Karlita' />
      </div>
      </PageHeader>
    );
  }
}
