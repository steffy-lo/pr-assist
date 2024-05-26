const isChecked = (value) => {
    return value ? 'x' : ' ';
}

export const intro = {
    title: 'Welcome to PR Assist!',
    content: `
    <div>
        PR Assist is here to help you with creating a great PR. Just follow through and you'll be fine! <br/>
        <br/>
        If you don't need any help, just press Esc anytime and we won't bother you until the next PR. Good luck!
    </div>
    `
}

export const step1 = {
    content: `
    <div>
        Let's create the title, I'll help with it! 😊<br/>
        What's the <strong>issue number</strong> we're solving in this PR? <br/>
        This helps to ensure we're linking the pull request to the right issue. <br/>
        <br/>
        <input id="issue-number" type="number"></input>
    </div>
    `
}

const step2Description = `## Describe your changes

## Issue ticket number and link
<!--- Only open issues will be accepted -->
<!--- Are there any related issue or follow-up issue to consider? -->

## Motivation and Context
<!--- Why is this change required? What problem does it solve? -->

## Screenshots (if appropriate):
### Before change
Screenshot Image / Animated GIF / Demo Link

### After change
Screenshot Image / Animated GIF / Demo Link

`

const step2Checklist = ({
    isFeature,
    isBugfix,
    isTechnical,
    isTest,
    isChore,
    isDocumentation,
    isLocalization,
    addedTest,
    addedAnalytics,
    addedAccessibility,
    addedLocalization,
    addedDocumentation
}) => `
## Type of PR
- [${isChecked(isFeature)}] Feature
- [${isChecked(isBugfix)}] Bugfix
- [${isChecked(isTechnical)}] Technical
- [${isChecked(isTest)}] Testing
- [${isChecked(isChore)}] Chore
- [${isChecked(isDocumentation)}] Documentation
- [${isChecked(isLocalization)}] Localization

If it is a core feature, I have...
- [${isChecked(addedTest)}] Added new test cases
- [${isChecked(addedAnalytics)}] Added analytics
- [${isChecked(addedAccessibility)}] Set up accessibility
- [${isChecked(addedLocalization)}] Added and/or updated localization
- [${isChecked(addedDocumentation)}] Update documentation
`

export const step2 = {
    content: `
    <div>
        Next, we need to create a good description. <br/>
        Don't worry, I've got you covered with a great template! 👀<br/>
        <br/>
        Feel free to modify it as you like. <br/>
        I'll add the following checklists in the description later too. <br/>
        <br/>
        <h4>Type of PR</h4>
        <form>
            <input type="checkbox" id="pr-feature" value="Feature">
            <span>Feature</span> <br/>
            <input type="checkbox" id="pr-bugfix" value="Bugfix">
            <span>Bugfix</span> <br/>
            <input type="checkbox" id="pr-technical" value="Technical">
            <span>Technical</span> <br/>
            <input type="checkbox" id="pr-test" value="Test">
            <span>Test</span> <br/>
            <input type="checkbox" id="pr-chore" value="Chore">
            <span>Chore</span> <br/>
            <input type="checkbox" id="pr-documentation" value="Documentation">
            <span>Documentation</span> <br/>
            <input type="checkbox" id="pr-localization" value="Localization">
            <span>Localization</span> <br/>
        </form>
        <br/>
        <h4>If this is a core feature, I have...</h4>
        <form>
            <input type="checkbox" id="add-test" value="Added new test cases">
            <span>Add new test cases</span> <br/>
            <input type="checkbox" id="add-analytics" value="Added analytics">
            <span>Added analytics</span> <br/>
            <input type="checkbox" id="add-accessibility" value="Setup accessibility">
            <span>Setup accessibility</span> <br/>
            <input type="checkbox" id="add-localization" value="Added and/or updated localization">
            <span>Added and/or updated localization</span> <br/>
            <input type="checkbox" id="add-documentation" value="Update documentation">
            <span>Update documentation</span> <br/>
        </form>
    </div>
    `,
    template: step2Description,
    checklist: (result) => step2Checklist(result)
}

const onClickLabelSuggestion = (event) => {
    const labelInput = document.getElementById('label-filter-field');
    if (labelInput) {
        const labelValue = event.target.innerText;
        labelInput.value = labelValue;
        labelInput.focus();
    }
}

const addPillListener = () => {
    Array.from(document.getElementsByClassName('pill')).map(el => {
        el.addEventListener("click", step3.onClickLabelSuggestion);
    });
}

export const step3 = {
    content: `
    <div>
        Let's continue by assigning some labels to this PR. <br/>
        I'll suggest some below, just click on them to add the label accordingly. <br/>
        <br/>
        <h4>Type of PR</h4>
        <button class="pill">feature</button>
        <button class="pill">bugfix</button>
        <button class="pill">technical</button>
        <button class="pill">test</button>
        <button class="pill">chore</button>
        <button class="pill">documentation</button>
        <button class="pill">localization</button>
        <br/>
        <br/>
        <h4>Other common labels</h4>
        <button class="pill">ui</button>
        <button class="pill">api</button>
        <button class="pill">frontend</button>
        <button class="pill">backend</button>
        <button class="pill">breaking</button>
        <button class="pill">high priority</button>
        <button class="pill">low priority</button>
        <button class="pill">needs review</button>
        <button class="pill">blocked</button>
        <button class="pill">on hold</button>
        <button class="pill">ready for QA</button>
    </div>
    `,
    onClickLabelSuggestion,
    addPillListener
}

export const step4 = {
    content: `
    <div>
        Now, let's request some folks to help review and merge our PR 👍 <br/>
        If there are reviewers assigned automatically, then we can add more reviewers or simply skip this step. <br/>
    </div>
    `
}

const step5Checklist = ({ rebased, tested, noErrors, commented, followedSemantic }) => `
## Checklist
- [${isChecked(rebased)}] Rebased or merged latest changes
- [${isChecked(tested)}] Tested my changes on the latest changes
- [${isChecked(noErrors)}] No lint warnings, build errors or test failures
- [${isChecked(commented)}] Give comments and/or context where necessary
- [${isChecked(followedSemantic)}] Follow the [semantic commit messages](https://www.conventionalcommits.org/)
`

export const step5 = {
    content: `
    <div>
        <h4>Ready to Submit?</h4>
        <br/>
        <h4>Before that, please confirm that you have...</h4>
        <form>
            <input type="checkbox" id="is-rebased">
            <span>Rebased or merged latest changes</span> <br/>
            <input type="checkbox" id="is-tested">
            <span>Tested my changes on the latest changes</span> <br/>
            <input type="checkbox" id="no-errors">
            <span>No lint warnings, build errors or test failures</span> <br/>
            <input type="checkbox" id="give-comments">
            <span>Give comments and/or context where necessary</span> <br/>
            <input type="checkbox" id="followed-semantic">
            <span>Follow the <a href="https://www.conventionalcommits.org/">semantic commit messages</a></span> <br/>
        </form>
    </div>
    `,
    checklist: (result) => step5Checklist(result)
}