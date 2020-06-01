//importing renderNode module
import {renderNode} from './renderNode';

//exporting mount function that appends node to given parent element
export function mount(vNode, parent) {
    parent.appendChild(renderNode(vNode));
}