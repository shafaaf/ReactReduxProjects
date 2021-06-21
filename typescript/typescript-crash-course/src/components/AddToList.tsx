import React, {useState} from 'react';

const AddToList = () => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: ""
    });

    // HTMLTextAreaElement for the text area
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="AddToList">
            <input
                className="AddToList-input"
                type="text"
                name = "name"
                placeholder="Name"
                value={input.name}
                onChange={handleChange}
            />
            <input
                className="AddToList-input"
                type="text"
                name = "age"
                placeholder="Age"
                value={input.age}
                onChange={handleChange}
            />
            <input
                className="AddToList-input"
                type="text"
                name = "img"
                placeholder="Image Url"
                value={input.img}
                onChange={handleChange}
            />
            <textarea
                className="AddToList-input"
                name="note"
                placeholder="Note"
                value={input.note}
                onChange={handleChange}
            />
        </div>
    );
};

export default AddToList;
