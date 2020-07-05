import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <section className="searchbox-wrap">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="searchbox"
                    onChange={this.props.handleInput}
                />
            </section>
        );
    }
}

export default Search;