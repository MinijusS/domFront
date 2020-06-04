import { Component, h } from "../vdom";
import Input from "./Input";
import Button from "./Button";

export default class Form extends Component {
    constructor(props) {
        super(props);        
        this.state.article = {
            title: '',
            body: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);

    }

    handleTitle(e) {        
        this.state.article.title = e.target.value;
    }

    handleBody(e) {
        this.state.article.body = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handler(this.state.article);
    }

    render() {
        return h('form',
            {
                class: 'form',
                submit: this.handleSubmit
            },
            h(Input, { class: 'form-input', placeholder: 'Title', handler: this.handleTitle }),
            h('textarea', { class: 'form-input', placeholder: 'Content', keyup: this.handleBody }),
            h(Button, { class: 'form-submit', name: 'Submit Form' }),
        )
    }
}