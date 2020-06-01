import { renderNode } from './renderNode';

export default function updateComponent(object) {
    const $node = object.$node;
    const vNode = object.render();
    const $newNode = renderNode(vNode);
    object.$node.replaceWith($newNode);
    object.$node = $newNode;
}