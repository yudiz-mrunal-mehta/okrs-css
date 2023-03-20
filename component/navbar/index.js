import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Blog from './Blog';
import Compare from './Compare';
import News from './News';

function index() {
  return (
    <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
      <Tab eventKey='blog' title='Blog'>
        <Blog />
      </Tab>
      <Tab eventKey='profile' title='News'>
        {/* <Sonnet /> */}
        <News />
      </Tab>
      <Tab eventKey='contact' title='Compare'>
        {/* <Sonnet /> */}
        <Compare />
      </Tab>
    </Tabs>
  );
}

export default index;
