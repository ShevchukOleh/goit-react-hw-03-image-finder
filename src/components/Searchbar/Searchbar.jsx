import { Component } from 'react';

export class SearchBar extends Component {
    state = {
        value: '',
    };
  
    onReset = () => this.setState({ value: '' });
  
    handlerSubmit = e => {
        e.preventDefault();
        this.setState({ value: '' });
        const word = e.target.elements[1].value.trim();
        if (word) this.props.onSubmit(word);
    };
  
    onChange = e => this.setState({ value: e.target.value });
  
    render() {
        const { value } = this.state;
        return (
            <header class="searchbar">
                <form onSubmit={this.handlerSubmit}>
                    <button type="submit" class="button">
                        <span class="button-label">Search</span>
                    </button>

                    <input
                        class="input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        onChange={this.onChange}
                        value={value}
                    />
                </form>
            </header>
        );
    }
}