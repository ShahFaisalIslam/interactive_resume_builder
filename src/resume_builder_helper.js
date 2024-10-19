"use strict";
const getElement = (data) => {
    let element = document.createElement(data.tag);
    if (data.id)
        element.id = data.id;
    if (data.className)
        element.className = data.className;
    if (data.innerText)
        element.innerText = data.innerText;
    return element;
};
const getLabelledValueDiv = (id, label, value) => {
    let containerDiv = getElement({ tag: "div" });
    let labelDiv = getElement({ tag: "div", innerText: label });
    let valueDiv = getElement({ tag: "div", id: id, innerText: value });
    containerDiv.appendChild(labelDiv);
    containerDiv.appendChild(valueDiv);
    return containerDiv;
};
const getHeadingElement = (heading, bodyId) => {
    let containerElement = getElement({ className: "heading", tag: "div" });
    let headingElement = getElement({ tag: 'h2', innerText: heading });
    let showHideButton = getElement({
        id: `${bodyId}-button`,
        tag: 'button',
        innerText: "▲"
    });
    showHideButton.onclick = () => toggleDetailsVisibility(bodyId);
    containerElement.appendChild(headingElement);
    containerElement.appendChild(showHideButton);
    return containerElement;
};
const getSection = (sectionData) => {
    let containerElement = getElement({ id: sectionData.id, tag: 'div' });
    let bodyId = `${sectionData.id}-body`;
    let headingElement = getHeadingElement(sectionData.heading, bodyId);
    let bodyData = {
        id: bodyId,
        tag: 'div'
    };
    let bodyElement = getElement(bodyData);
    containerElement.appendChild(headingElement);
    containerElement.appendChild(bodyElement);
    return [containerElement, bodyElement];
};
