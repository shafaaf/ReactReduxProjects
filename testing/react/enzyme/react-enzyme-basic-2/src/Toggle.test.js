import React from "react";
import {shallow} from "./enzyme";
import Toggle from "./Toggle";

describe('Toggle', () => {
    describe('Behavioural (Integration) tests', () => {
        const wrapper = shallow(<Toggle />);

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

    describe('Component (Unit) tests', () => {
        const wrapper = shallow(<Toggle />);
        describe('Toggle function', () => {
            it('toggles "toggled" variable in state', () => {
                expect(wrapper.state('toggled')).toBe(false);
                wrapper.instance().toggle();
                expect(wrapper.state('toggled')).toBe(true);
            });
        });
    });


    describe('Unit', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Toggle />);
            jest.clearAllMocks();
        });

        describe('Toggle function', () => {
            it('toggles "toggled" variable in state', () => {
                expect(wrapper.state('toggled')).toBe(false);
                wrapper.instance().toggle();
                expect(wrapper.state('toggled')).toBe(true);
            });
        });

        describe('Render function', () => {
            it('renders "Toggle" as button children if "toggled" in state is false', () => {
                expect(wrapper.state('toggled')).toBe(false);
                expect(wrapper.find('button').props().children).toEqual('Toggle');
            });
            it('renders "Toggled" as button children if "toggled" in state is true', () => {
                wrapper.setState({ toggled: true });
                expect(wrapper.state('toggled')).toBe(true);
                expect(wrapper.find('button').props().children).toEqual('Toggled');
            });
            test('when button is clicked it calls the "toggle" function', () => {
                const spy = jest.spyOn(wrapper.instance(), 'toggle');
                wrapper.instance().forceUpdate();
                wrapper.find('button').simulate('click');
                expect(spy).toHaveBeenLastCalledWith();
            });
        });
    });
});
