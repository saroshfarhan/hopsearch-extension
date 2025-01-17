console.log("HopSearch is alive on this page.");

// setInterval(() => {
//     //
// }, )

let enabled = true;
let pressedA = false;

// key-combo handlers
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(`Got message "${request}".`);
    switch (request) {
        case 'toggle-pause':
            if (enabled) {
                window.removeEventListener('keyup', keyUpHandler);
                window.removeEventListener('keydown', keyDownHandler);
                console.log('Paused on this page.');
            } else {
                window.addEventListener('keydown', keyDownHandler);
                window.addEventListener('keyup', keyUpHandler);
                console.log('Resumed on this page.');
            }
            enabled = !enabled;
            break;
        case 'locate-search':
            console.log('Waiting for your click on search element ...');
            window.addEventListener('click', clickHandlerForLocatingSearchBox);
            break;
        default: console.log('Content does not know how to handle this command. :/');
    }
});

function getDomain(href) {
    const s = href.substring(href.indexOf('//') + 2, href.indexOf('/', href.indexOf('//') + 2));
    return s;
}

function keyUpHandler(e) {
    console.log(`Released in content: ${e.code}`);
    if (e.code.startsWith('Alt')) pressedA = false;
    if (e.code === 'Slash' && pressedA) {
        console.log('Key-combo matched, getting config for this website ...');
        chrome.storage.local.get(getDomain(window.location.href), function (result) {
            if (result == null || Object.keys(result).length === 0) {
                console.log('Ah, no config yet. :/');
                return;
            }
            let elementSelector = result[getDomain(window.location.href)];
            console.log(`Got it all! Triggering focus on "${elementSelector}"`);
            let selectorType = elementSelector.charAt(0);
            let selectorName = elementSelector.substring(1);
            switch (selectorType) {
                case '.': document.getElementsByClassName(selectorName)[0].focus(); break;
                case '#': document.getElementById(selectorName).focus(); break;
                default: console.log(`Bad selector "${elementSelector}". :/`);
            }
        });
    }
}

function keyDownHandler(e) {
    console.log(`Pressed in content: ${e.code}`);
    if (e.code.startsWith('Alt')) pressedA = true;
}

function clickHandlerForLocatingSearchBox(e) {
    const mId = e.target.getAttribute('id');
    let mClass = e.target.getAttribute('class');
    mClass = mClass && mClass.indexOf(' ') != -1 ? mClass.substring(0, mClass.indexOf(' ')) : mClass;
    console.log(`Click detected on element id="${mId}" and class="${mClass}"`)
    let newConfig = {};
    newConfig[getDomain(window.location.href)] = mId ? `#${mId}` : `.${mClass}`;
    chrome.storage.local.set(newConfig);
    window.removeEventListener('click', clickHandlerForLocatingSearchBox);
    alert('Saved!');
}