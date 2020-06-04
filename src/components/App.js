import { h, Component, mount } from '../vdom';
import Form from './Form';
import Article from './Article';
import Spinner from './Spinner';
import Modal from './Modal';

export default class App extends Component {
    constructor() {
        super();

        this.state.articles = [];
        this.getData();
        this.state.isLoading = true;
        this.state.modal = { isOpen: false, title: '', content: '' };

        //Binds
        this.getData = this.getData.bind(this);
        this.editPost = this.editPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.newPost = this.newPost.bind(this);
        this.postData = this.postData.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    newPost(data) {
        this.state.articles.push(data);
        this.setState(this.state);
    }

    postData(data) {
        fetch('http://rest.stecenka.lt/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => this.newPost(result))
    }

    getData() {
        fetch('http://rest.stecenka.lt/api/posts')
            .then(response => response.json())
            .then(data => this.setData(data))
    }

    setData(data) {
        this.setState({ articles: data, isLoading: false });
    }

    deletePost(id) {
        fetch(`http://rest.stecenka.lt/api/posts/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(() => {
                const foundId = this.state.articles.findIndex(article => article.id === id);
                this.state.articles.splice(foundId, 1);
                this.setState(this.state);
            })
    }

    editPost(obj) {
        this.state.modal = { isOpen: true, title: obj.title, content: obj.body, id: obj.id};
        this.setState(this.state);
    }

    updatePost(obj, id) {
        fetch(`http://rest.stecenka.lt/api/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(() => {
                this.state.modal.isOpen = false;
                const foundId = this.state.articles.findIndex(article => article.id === id);
                this.state.articles[foundId].title = obj.title;
                this.state.articles[foundId].body = obj.body;                
                this.setState(this.state);
            })
    }

    render() {
        const articles = this.state.articles.map(article => {
            return h(Article,
                {
                    title: article.title,
                    body: article.body,
                    id: article.id,
                    deleteHandler: this.deletePost,
                    editHandler: this.editPost
                });
        });

        if (!this.state.isLoading) {
            if (this.state.modal.isOpen) {
                return h(Modal, { title: this.state.modal.title, content: this.state.modal.content, handler: this.updatePost, id: this.state.modal.id });
            } else {
                return h('div', {
                    class: 'wrapper'
                }, h('div', { class: 'top-section' }, h('h1', {}, 'News'), h('i', { class: 'material-icons', click: this.getData }, 'refresh')),

                    h('div', { class: 'articles' }, ...articles),
                    h(Form,
                        {
                            class: 'form-submit',
                            handler: this.postData
                        }));
            }
        } else {
            return h('div',
                {
                    class: 'wrapper center'
                },
                h(Spinner, { class: 'loader' }));
        }
    }
}