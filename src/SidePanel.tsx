import type { Component } from 'solid-js';
import { Show, For } from 'solid-js';
import { style } from '@macaron-css/core';
import storeManager from './Store';
import Colors from './Theme';
import Sizes from './Size';

const SidePanelStyle = style({
	display: 'flex',
    flexDirection: 'column',
    minWidth: `${Sizes.sidePanelW}`,
    margin: `${Sizes.sectionMargin}`,
});

const TitleStyle = style({
    display: 'flex',
    flexDirection: 'column',
    height: '50%',
    fontSize: '25px',
    textAlign: 'center',
})

const ScrollStyle = style({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    '::-webkit-scrollbar': {
        width: '10px',
    },
    '::-webkit-scrollbar-thumb': {
        background: `${Colors.main}`,
        borderRadius: '5px',
    },
})

const ItemStyle = style({
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    fontSize: '20px',
    lineHeight: `${Sizes.sidePanelItemH}`,
    minHeight: `${Sizes.sidePanelItemH}`,
    background: `${Colors.mainDark}`,
    borderRadius: `${Sizes.sidePanelItemBorderRad}`,
    margin: `${Sizes.basicMargin}`,
    padding: '0px 20px',
    ':first-child': {
        margin: `20px ${Sizes.basicMargin} ${Sizes.basicMargin} ${Sizes.basicMargin}`,
    }
})

const SidePanel: Component = () => {
    return (
      <div class={SidePanelStyle}>
        <div class={TitleStyle}>
			Todo
            <div class={ScrollStyle}>
				<For each={storeManager.getSectionTodos()}>{(section, i) =>
                	<For each={section.taskList}>{(task, j) =>
                        <Show when={!task.isDone}>
                            <div class={ItemStyle}>{task.task}</div>
                        </Show>
                    }</For>
            	}</For>
            </div>
        </div>
        <div class={TitleStyle}>
			Done
            <div class={ScrollStyle}>
				<For each={storeManager.getSectionTodos()}>{(section, i) =>
                	<For each={section.taskList}>{(task, j) =>
                        <Show when={task.isDone}>
                            <div class={ItemStyle}>{task.task}</div>
                        </Show>
                    }</For>
            	}</For>
            </div>
        </div>
      </div>
    );
};

export default SidePanel;