import type { Component } from 'solid-js';
import type { sectionTodo } from './Store';
import { Show, For } from 'solid-js';
import { style } from '@macaron-css/core';
import storeManager from './Store';
import Item from './Item';
import Colors from './Theme';
import Sizes from './Size';
import AddButton from './Addbutton';

const SectionStyle = style({
	display: 'flex',
    flexDirection: 'column',
    minWidth: `${Sizes.sectionW}`,
    background: `${Colors.main}`,
    borderRadius: `${Sizes.sectionBorderRad}`,
    margin: `${Sizes.sectionMargin}`,
});

const AddSectionStyle = style({
	display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: `${Sizes.sectionW}`,
    fontSize: '30px',
    color: `${Colors.textDark}`,
    background: `${Colors.mainDark}`,
    borderRadius: `${Sizes.sectionBorderRad}`,
    margin: `${Sizes.sectionMargin}`,
    ':hover': {
        background: `${Colors.mainDarkHover}`,
    },
});

const SectionHeadStyle = style({
	display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: `${Sizes.sectionTitleH}`,
    margin: `${Sizes.sectionBorderRad}`,
});

const SectionTitleStyle = style({
    background: `${Colors.main}`,
	border: 'none',
    fontSize: '30px',
    width: '300px',
    fontWeight: 'lighter',
    color: `${Colors.textMain}`,
    ':focus': {
        outline: 'none',
    }
})

const SectionCancelStyle = style({
    background: `${Colors.main}`,
	border: 'none',
    borderRadius: '5px',
    height: '30px',
    width: '30px',
    color: `${Colors.textMain}`,
    fontSize: '20px',
    ":hover": {
        background: `${Colors.mainDarkHover}`,
    }
});

const SectionTitle: Component<{id: number, title: string}> = (props) => {
    return (
		<div class={SectionHeadStyle}>
			<input value={props.title} class={SectionTitleStyle}>
            </input>
            <button onclick={() => storeManager.removeSection(props.id)} class={SectionCancelStyle}>
                x
            </button>
        </div>
    );
};

const Section: Component<{sectionTodo?: sectionTodo}> = ({sectionTodo}) => {
    return (
        <Show when={sectionTodo} fallback={
    		<div onclick={storeManager.addSection} class={AddSectionStyle}>
                New
    		</div>
        }>
        	<div class={SectionStyle}>
        	    <SectionTitle id={sectionTodo?.id as number} title={sectionTodo?.title as string}></SectionTitle>
                <For each={ sectionTodo?.taskList }>{(task, i) =>
                	<Item sectionId={sectionTodo?.id as number} task={task}></Item>
                }</For>
        	    <AddButton sectionId={sectionTodo?.id as number}></AddButton>
       		</div>
        </Show>
    );
};

export { Section };