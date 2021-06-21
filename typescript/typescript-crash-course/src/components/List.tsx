import React from "react";

interface IProps {
    people: {
        name: string,
        age: number,
        img: string,
        note?: string
    }[]
}

// can also do like JSX.Element
const List: React.FC <IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person, key) => {
            return (
                <li key={key} className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.img} alt=""/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    );
}

export default List;
