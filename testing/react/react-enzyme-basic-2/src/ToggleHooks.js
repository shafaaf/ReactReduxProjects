import React, { useState } from 'react';

const ToggleHooks = () => {
    const [toggled, setToggled] = useState(false);
    const toggle = () => setToggled(!toggled);

    return (
        <button onClick={toggle}>
            {toggled ? 'Toggled' : 'Toggle'}
        </button>
    )
};

export default ToggleHooks;
