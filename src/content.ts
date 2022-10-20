import { contentHandlers } from './messages/content';
import { map } from './map';

console.log('Event listeners added');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (sender.tab) {
        // allowing only processing messages from the extension
        return;
    }

    if (request.name in contentHandlers) {
        contentHandlers[request.name](sendResponse);
    }
});

const mapKeys = Array.from(map.keys());

function processTextNodes(root: Node) {
    let nextNode: Node | null;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while ((nextNode = walker.nextNode())) {
        let content = nextNode.textContent;

        let replaced = false;
        for (let i = 0; i < mapKeys.length; i++) {
            const key = mapKeys[i];
            const value = map.get(key)!;

            if (content?.match(key) && nextNode) {
                content = content.replace(key, value);
                replaced = true;
            }
        }

        if (replaced) {
            nextNode.textContent = content;
        }
    }
}

window.addEventListener('load', () => {
    console.log('LOADED!');
    const root = document.getElementsByTagName('body')[0];
    processTextNodes(root);

    const callback = () => {
        processTextNodes(root);
    };

    const observer = new MutationObserver(callback);

    observer.observe(root, { childList: true, subtree: true });
});
