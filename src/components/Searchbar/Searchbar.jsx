import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, ButtonLabel, Form, Input, Searchbar } from './Searchbar.styled';

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
            <Searchbar>
                <Form onSubmit={this.handlerSubmit}>
                    <Button type="submit">
                        <ButtonLabel>Search</ButtonLabel>
                    </Button>

                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.onChange}
                        value={value}
                    />
                </Form>
            </Searchbar>
        );
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
