import { View1 } from 'components/View1';
import { View2 } from 'components/View2';
import './App.css';
import React from 'react';

function App() {
  return (
    <div style={{backgroundColor : 'yellow'}}>
      <View1 displayText="Texto qualquer">
      <View2 /> 
      <View2 />
      <div>text</div>
      <View2 />
      <View2 />
      </View1>
      <View2 />

    </div>
  )
}

export default App;
