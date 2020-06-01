import { Component, h } from "../vdom";
import Button from './Button';
import Input from './Input';

export default class ListItem extends Component {
    constructor(props) {
        super(props);   
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    handleDelete() {
        this.props.handler(this.props.key);
    }

    handleEdit(e) {
        if(e.keyCode === 13) {
            this.props.edit(this.props.key, e.target.value);
        }
    }

    handleDone() {
        this.props.done(this.props.key);

    }

    render() {
        return h('li',
            { class: 'list-item' },
            h(Input,
                {
                    keyup: this.handleEdit,
                    value: this.props.todo,
                    class: this.props.isDone ? 'done-text' : ''
                }), h(Button,
                    {
                        name: 'Delete',
                        className: 'btn delete',
                        onClick: this.handleDelete
                    }
                ), h(Button,
                    {
                        name: 'Done',
                        className: 'btn done',
                        onClick: this.handleDone
                    }));
    }
}