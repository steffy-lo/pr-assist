import { intro, step1, step2, step3, step4, step5 } from './steps.js';
import Shepherd from 'shepherd.js';

const _getCheckboxValue = (id) => {
    const cb = document.getElementById(id);
    if (cb) return cb.checked;
    return false;
}

// ====================================== Tour Step Handlers ============================================
const step1NextHandler = () => {
    const prTitle = document.getElementById('pull_request_title');
    const issueNumEl = document.getElementById('issue-number');
    if (issueNumEl) {
        const issueNum = issueNumEl.value;
        // Modify PR title if issue number is provided, else skip
        if (issueNum) {
            const updatedPrTitle = `Resolve #${issueNum}: ${prTitle.value}`
            prTitle.value = updatedPrTitle;
        }
    }
    tour.next();
    // inject a good description template
    const description = document.getElementById('pull_request_body');
    description.value = step2.template;
}

const step2NextHandler = () => {
    // update description template with checklist values
    const description = document.getElementById('pull_request_body');
    if (description) {
        description.value += step2.checklist({
            isFeature: _getCheckboxValue('pr-feature'),
            isBugfix: _getCheckboxValue('pr-bugfix'),
            isTechnical: _getCheckboxValue('pr-technical'),
            isTest: _getCheckboxValue('pr-test'),
            isChore: _getCheckboxValue('pr-chore'),
            isDocumentation: _getCheckboxValue('pr-documentation'),
            isLocalization: _getCheckboxValue('pr-localization'),
            addedTest: _getCheckboxValue('add-test'),
            addedAnalytics: _getCheckboxValue('add-analytics'),
            addedAccessibility: _getCheckboxValue('add-accessibility'),
            addedLocalization: _getCheckboxValue('add-localization'),
            addedDocumentation: _getCheckboxValue('add-documentation')
        });
    }

    // open up labels filter
    const labelsEl = document.querySelector('summary[data-menu-trigger="labels-select-menu"]');
    if (labelsEl) labelsEl.click();

    tour.next();
}

const step3NextHandler = () => {
    // open up reviewers selection
    const reviewersEl = document.querySelector('summary[data-menu-trigger="reviewers-select-menu"]');
    if (reviewersEl) reviewersEl.click();

    tour.next();
}

const step5Handler = () => {
    // update description template with final check
    const description = document.getElementById('pull_request_body');
    if (description) {
        description.value += step5.checklist({
            rebased: _getCheckboxValue('is-rebased'),
            tested: _getCheckboxValue('is-tested'),
            noErrors: _getCheckboxValue('no-errors'),
            commented: _getCheckboxValue('give-comments'),
            followedSemantic: _getCheckboxValue('followed-semantic')
        });
    }
    tour.next();
}
// =====================================================================================================

const tour = new Shepherd.Tour({
    exitOnEsc: true
});

chrome.storage.sync.get('intro', function (storage) {
    if (!storage?.intro) {
        // Add intro step
        tour.addStep({
            id: 'intro',
            title: intro.title,
            text: intro.content,
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });
        chrome.storage.sync.set({ 'intro': true });
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
                action: step2NextHandler
            }
        ]
    });

    tour.addStep({
        id: 'pr-labels',
        text: step3.content,
        attachTo: {
            element: '#labels-select-menu',
            on: 'left'
        },
        buttons: [
            {
                text: 'Next',
                action: step3NextHandler
            }
        ],
        classes: 'step3',
        when: {
            show: step3.addPillListener
        }
    });

    tour.addStep({
        id: 'pr-reviewers',
        text: step4.content,
        attachTo: {
            element: '#reviewers-select-menu',
            on: 'left'
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'pr-submit',
        text: step5.content,
        buttons: [
            {
                text: 'Finish',
                action: step5Handler
            }
        ]
    });
});



export default tour;