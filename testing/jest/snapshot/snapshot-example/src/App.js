import React from 'react';
import Items from './components/Items';

class App extends React.Component {
    render() {
        const items = [
            'Shark',
            'Dolphin',
            'Octopus'
        ];
        return (
            <Items items={items} />
        );
    }
}

export default App;
