function customRender(reactElement, root){
    // const domElement =  document.createElement(reactElement.type);
    // domElement.textContent = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // root.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for(let prop in reactElement.props){
        if(!prop) continue;

        domElement.setAttribute(prop, reactElement.props[prop])
    }

    root.appendChild(domElement);
}

const root = document.getElementById('root');

const reactElement = {
    type:'a',
    props: {
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}


customRender(reactElement, root);



