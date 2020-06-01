function hyperscript(nodeName, attributes = {}, ...children) {
    return { nodeName, attributes, children };
}

//exporting hyperscript function as h for easier usage
export {hyperscript as h};