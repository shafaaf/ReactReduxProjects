import {shallow} from "../../enzyme";
import React from "react";
import { mount, render } from '../../enzyme';
import { wrap } from 'module';
import List from "./List";


describe('List tests', () => {

    it('print shallow wrapper', () => {
        const items = ['one', 'two', 'three'];
        const wrapper = shallow(<List items={items} />);
        console.log("wrapper is:\n" + wrapper.debug());
    });

    it('renders ListItems', () => {
        const items = ['one', 'two', 'three'];
        const wrapper = shallow(<List items={items} />);

        // Expect the wrapper object to be defined
        expect(wrapper.find('ListItem')).toBeDefined();
        expect(wrapper.find('ListItem')).toHaveLength(items.length);
    });

    it('print mount wrapper', () => {
        const items = ['one', 'two', 'three'];
        const wrapper = mount(<List items={items} />);
        console.log("wrapper is:\n" + wrapper.debug());
    });

    it('renders list-items', () => {
        const items = ['one', 'two', 'three'];

        // Replace shallow with mount
        const wrapper = mount(<List items={items} />);

        // Expect the wrapper object to be defined
        expect(wrapper.find('.list-items')).toBeDefined();
        expect(wrapper.find('.list-items')).toHaveLength(1);
        expect(wrapper.find('.item')).toHaveLength(items.length);
    });

    it('static rendering => renders list-items', () => {
        const items = ['one', 'two', 'three'];
        const wrapper = render(<List items={items} />);
        wrapper.addClass('foo');
        // Expect the wrapper object to be defined
        expect(wrapper.find('.list-items')).toBeDefined();
        expect(wrapper.find('.item')).toHaveLength(items.length);
    });


});
