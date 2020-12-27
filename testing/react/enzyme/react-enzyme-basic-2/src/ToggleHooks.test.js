import React from "react";
import {shallow} from "./enzyme";
import ToggleHooks from "./ToggleHooks";

describe('Toggle', () => {
    const wrapper = shallow(<ToggleHooks />);
    it('renders a button with "Toggle" as children', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
    it('renders "Toggled" as button children if button is clicked', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button').text()).toEqual('Toggled');
    });
    it('renders "Toggle" as button children if button is clicked again', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('button').text()).toEqual('Toggle');
    });
});
