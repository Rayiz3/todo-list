import type { Component } from 'solid-js';
import { style } from '@macaron-css/core';
import SidePanel from './SidePanel';
import SectionList from './SectionList';
import Colors from './Theme';
import Sizes from './Size';

const AppStyle = style({
  backgroundColor: `${Colors.background}`,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  textAlign: 'center',
  fontWeight: 'lighter',
  letterSpacing: '3px',
  color: `${Colors.textMain}`,
})

const HeaderStyle = style({
  fontSize: '25px',
  minHeight: `${Sizes.headerH}`,
  lineHeight: `${Sizes.headerH}`,
})

const BodyStyle = style({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  alignItems: 'stretch',
})

const App: Component = () => {
  return (
    <div class={AppStyle}>
			<div class={HeaderStyle}>
        Doun's To-do List
      </div>
      <div class={BodyStyle}>
        <SidePanel></SidePanel>
        <SectionList></SectionList>
      </div>
    </div>
  );
};

export default App;