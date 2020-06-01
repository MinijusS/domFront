import { h, Component } from '../vdom';
import Input from './Input';
import ListItem from './ListItem';

export default class App extends Component {
    constructor() {
        super();
        this.state.todos = [
            {
                name: 'Learn js',
                done: false
            },
            {
                name: 'Node',
                done: false
            }
        ];
        this.handleInput = this.handleInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleInput(e) {
        if (e.keyCode === 13) {
            this.state.todos.push({name: e.target.value, done: false});
            this.setState(this.state);
        }
    }

    handleDelete(id) {
        const updatedTodo = this.state.todos;
        updatedTodo.splice(id, 1);
        this.setState(this.state);
    }

    handleDone(id) {
        this.state.todos[id].done = true;
        this.setState(this.state);
    }

    handleEdit(id, value) {
        this.state.todos[id].name = value;
        this.setState(this.state);
    }

    render() {
        const list = this.state.todos.map((todo, index) => {
            return h(ListItem,
                {
                    todo: todo.name,
                    isDone: todo.done,
                    key: index,
                    handler: this.handleDelete,
                    done: this.handleDone,
                    edit: this.handleEdit
                });
        });

        return h(
            'main', {},
            h(Input, { keyup: this.handleInput, value: '', class: 'input' }),
            h('ul', {}, ...list)
        );
    }
}