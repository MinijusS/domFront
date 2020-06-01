import updateComponent from './updateComponent';

export class Component {
    constructor(props) {
        this.$node = null;
        this.props = props;
        this.state = {};
    }

    //method that combines two objects and updates the state
    setState(state) {
        this.state = {
            ...this.state,
            ...state
        }
        updateComponent(this);
    }
}