import React from "react";
import Para from "./Para";
import {shallow} from "./enzyme";

describe('Paragraph', () => {
    it('should render children inside a p tag', () => {
        const wrapper = shallow(<Para>This is my first test</Para>)
        const paragraph = wrapper.find('p');
        expect(paragraph).toHaveLength(1);
        expect(paragraph.text()).toEqual('This is my first test')
    })
});
