import { printLine } from './modules/print';
import tour from './utils/tour';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

const url = window.location.href;
if (url.includes("github.com")) {
    const target = document.querySelector('.js-details-container');
    if (target) {
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(() => {
                const prTitle = document.getElementById('pull_request_title');
                if (prTitle) {
                    tour.start();
                }
            })
        })

        // Configuration of the observer
        var config = { attributes: true };

        // Pass in the target node, as well as the observer options
        observer.observe(target, config);
    }
}