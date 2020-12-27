import {render, fireEvent, screen} from '@testing-library/react';
import App from "./App";
import Simulate from "@testing-library/user-event";
import {waitFor} from "@testing-library/react";
import React from "react";

test('entering a todo in form adds a todo', async () => {
    const { getByText, getByPlaceholderText, getByTestId, container } = render(<App />);

    // enter todo text in textbox
    getByPlaceholderText('Enter todo text').value = 'My new todo';

    // click Add
    Simulate.click(getByText('Add'));

    // wait for todo to show up
    await waitFor(() => getByText('My new todo'));

    // make sure form is cleared
    expect(getByTestId('TodoForm-input').value).toEqual('');

    // make sure todo was added
    expect(getByText('My new todo')).toBeDefined();
});
