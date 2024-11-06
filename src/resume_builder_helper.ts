interface ElementData {
    id?: string;
    className?: string;
    innerText?: string;
    tag: string;
}

const getElement = (data: ElementData) => {
    let element = document.createElement(data.tag);

    if (data.id)
        element.id = data.id;

    if (data.className)
        element.className = data.className;

    if (data.innerText)
        element.innerText = data.innerText;

    return element;
}

const getLabelledValueDiv = (id: string, label: string, value: string) => {
    let containerDiv = <HTMLDivElement>getElement({ tag: "div" });

    let labelDiv = <HTMLDivElement> getElement({tag: "div",innerText: label});
    let valueDiv = <HTMLDivElement> getElement({tag: "div",id : id, innerText: value});

    containerDiv.appendChild(labelDiv);
    containerDiv.appendChild(valueDiv);

    return containerDiv;
}

const getHeadingElement = (heading: string, bodyId: string) => {

    let containerElement = <HTMLDivElement>getElement({ className: "heading", tag: "div" });

    let headingElement = <HTMLHeadingElement>getElement({ tag: 'h2', innerText: heading });

    let showHideButton = <HTMLButtonElement>getElement({
        id: `${bodyId}-button`,
        className: 'circle',
        tag: 'button',
        innerText: "▲"
    });
    showHideButton.onclick = () => toggleDetailsVisibility(bodyId);

    containerElement.appendChild(headingElement);
    containerElement.appendChild(showHideButton);

    return containerElement;
}

interface SectionData {
    id: string;
    heading: string;
}

const getSection = (sectionData : SectionData) => {
    let containerElement : HTMLDivElement = <HTMLDivElement> getElement({id: sectionData.id,tag: 'div'});
    let bodyId : string = `${sectionData.id}-body`;
    let headingElement = getHeadingElement(sectionData.heading,bodyId);
    let bodyData : {id: string;tag:string;className?: string}= {
        id: bodyId,
        tag: 'div'
    };

    let bodyElement = getElement(bodyData);
    containerElement.appendChild(headingElement);
    containerElement.appendChild(bodyElement);
    return [containerElement,bodyElement];
}