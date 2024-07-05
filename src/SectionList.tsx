import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { style } from '@macaron-css/core';
import { Section } from './Section';
import storeManager from './Store';
import Colors from './Theme';

const SectionListStyle = style({
	display: 'flex',
    flexDirection: 'row',
    overflow: 'auto',
    '::-webkit-scrollbar': {
        height: '10px',
    },
    '::-webkit-scrollbar-thumb': {
        background: `${Colors.main}`,
        borderRadius: '5px',
    },
});

const SectionList: Component = () => {
    return (
      <div class={SectionListStyle}>
        <For each={ storeManager.getSectionTodos() }>{(section, i) =>
					<Section sectionTodo={section}></Section>
        }</For>
        <Section></Section>
      </div>
    );
};

export default SectionList;