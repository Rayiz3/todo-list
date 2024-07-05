import type { Component } from 'solid-js';
import { style } from '@macaron-css/core';
import storeManager from './Store';
import Colors from './Theme';
import Sizes from './Size';

const AddButtonStyle = style({
    background: `${Colors.sub}`,
    color: `${Colors.textMain}`,
    alignSelf: 'center',
    fontSize: '30px',
    borderRadius: `${Sizes.sectionItemBorderRad}`,
    border: 'none',
    width: `${Sizes.sectionItemH}`,
    height: `${Sizes.sectionItemH}`,
    margin: '20px',
    ':hover': {
        background: `${Colors.subHover}`,
    }
});

const AddButton: Component<{sectionId: number}> = ({sectionId}) => {
    return (
      <button onclick={() => storeManager.addItem(sectionId)} class={AddButtonStyle}>
        +
      </button>
    );
};

export default AddButton;