import React, {useState} from 'react';
import {IState as Props} from '../App';

// Using  square bracket on interface can get type
interface IProps {
    people: Props["people"],
    setPeople:  React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList = ({people, setPeople}: IProps): JSX.Element => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: ""
    });

    // HTMLTextAreaElement for the text area
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = (): void => {
        if(!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })
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
            <button
                className="AddToList-btn"
                onClick={handleClick}>
                    Add to List
            </button>
        </div>
    );
};

export default AddToList;
