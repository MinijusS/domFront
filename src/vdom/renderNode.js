import {mount} from './mount';
//exporting renderNode function
export function renderNode(vNode) {
    if (typeof vNode === 'string') {
        //if node's type was string we skip all attribute and children shit and create TextNode
        const $textNode = document.createTextNode(vNode);
        //returning TextNode
        return $textNode;
    }
    //deconstructing Node for easier usage
    const { nodeName, attributes, children } = vNode;

    let $node;
    //checking if node that we got is class
    typeof nodeName === 'function' ? $node = renderComponent(nodeName, attributes) : $node = renderElement(nodeName, attributes);

    //looking for children and foreaching them, ant then mounting them again RECURSIVE
    children.forEach(child => mount(child, $node));
    //returing node

    return $node;
}

function renderElement(nodeName, attributes) {
    //creating node element
    let $node = document.createElement(nodeName);

    //setting attributes for created element by cycling every item
    for (let key in attributes) {
        if(typeof attributes[key] === 'function') {
            $node.addEventListener(key, attributes[key]);
        } else {
            $node.setAttribute(key, attributes[key]);
        }
    }

    return $node;
}

function renderComponent(Component, attributes) {
    const object = new Component(attributes);
    const vNode = object.render();

    const $node = renderNode(vNode);

    object.$node = $node;


    return $node;
}



