import type { Component } from 'solid-js';
import type { task } from './Store';
import { style } from '@macaron-css/core';
import storeManager from './Store';
import Colors from './Theme';
import Sizes from './Size';

const ItemStyle = style({
	display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    minHeight: `${Sizes.sectionItemH}`,
    lineHeight: `${Sizes.sectionItemH}`,
    textAlign: 'left',
    background: `${Colors.mainDim}`,
    borderRadius: `${Sizes.sectionItemBorderRad}`,
    margin: `${Sizes.basicMargin} ${Sizes.sectionBorderRad}`,
    padding: '5px',
});

const CheckboxStyle = style({
    borderRadius: '5px',
    minHeight: `${Sizes.sectionItemBoxWH}`,
    minWidth: `${Sizes.sectionItemBoxWH}`,
    margin: `${Sizes.sectionItemMargin}`
})

const ItemNameStyle = style({
    flexGrow: '1',
    background: `${Colors.mainDark}`,
	border: 'none',
    fontSize: `${Sizes.sectionItemFont}`,
    fontWeight: 'lighter',
    color: `${Colors.textMain}`,
    ':focus': {
        outline: 'none',
    }
})

const ItemCancelStyle = style({
    background: `${Colors.mainDark}`,
	border: 'none',
    borderRadius: `${Sizes.sectionItemBorderRad}`,
    width: `${Sizes.sectionItemBoxWH}`,
    height: `${Sizes.sectionItemBoxWH}`,
    color: `${Colors.textMain}`,
    fontSize: `${Sizes.sectionItemFont}`,
    ":hover": {
        background: `${Colors.mainDarkHover}`,
    },
    margin: `${Sizes.sectionItemMargin}`,
});

const Item: Component<{sectionId: number, task: task}> = ({sectionId, task}) => {
    return (
      <div class={ItemStyle}>
        <input type="checkbox"
        	   class={CheckboxStyle}
               checked={task.isDone}
               onchange={() => storeManager.changeIsDone(sectionId, task.id)}></input>
        <input value={task.task}
        	   onChange={(event) => storeManager.updateTaskName(sectionId, task.id, event)}
               class={ItemNameStyle}></input>
        <button onclick={() => storeManager.removeItem(sectionId, task.id)} class={ItemCancelStyle}>x</button>
      </div>
    );
};

export default Item;