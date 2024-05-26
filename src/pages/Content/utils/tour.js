import { step1, step2 } from './steps.js';
import Shepherd from 'shepherd.js';

const tour = new Shepherd.Tour();

const step1NextHandler = () => {
    const prTitle = document.getElementById('pull_request_title');
    const issueNumEl = document.getElementById('issue-number');
    if (issueNumEl) {
        const issueNum = issueNumEl.value;
        const updatedPrTitle = `Resolve #${issueNum}: ${prTitle.value}`
        prTitle.value = updatedPrTitle;
    }
    tour.next();
    // inject a good description template
    const description = document.getElementById('pull_request_body');
    description.value = step2.template.trim();
}

tour.addStep({
    id: 'pr-title',
    text: step1.content,
    attachTo: {
        element: '#pull_request_title',
        on: 'right'
    },
    buttons: [
        {
            text: 'Next',
            action: step1NextHandler
        }
    ]
});

tour.addStep({
    id: 'pr-desc',
    text: step2.content,
    attachTo: {
        element: '.js-previewable-comment-form',
        on: 'right'
    },
    buttons: [
        {
            text: 'Next',
            action: tour.next
        }
    ]
});


export default tour;