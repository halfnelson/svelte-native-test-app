export function cleanProps(props) {
    let newProps = {}
    for(let key of Object.keys(props)) {
        if (!key.startsWith('$')) {
            newProps[key] = props[key];
        }
    }
    return newProps;
}