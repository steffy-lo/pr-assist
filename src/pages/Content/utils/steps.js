export const step1 = {
    content: `
    <div>
        Let's create the title, I'll help with it! <br/>
        What's the <strong>issue number</strong> we're solving in this PR? <br/>
        <br/>
        <input id="issue-number" type="number"></input>
    </div>
    `
}

const step2Description = `
## Describe your changes

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

## Checklist
- [ ] Rebased or merged latest changes
- [ ] Tested my changes on the latest changes
- [ ] No lint warnings, build errors or test failures
- [ ] Follow the [semantic commit messages](https://www.conventionalcommits.org/)

If it is a core feature, I have...
- [ ] Added new test cases
- [ ] Added analytics
- [ ] Set up accessibility and localization
- [ ] Update documentation
`

export const step2 = {
    content: `
    <div>
        Next, we need to create a good description. <br/>
        Don't worry, I've got you covered with a great template! <br/>
        <br/>
        Also use the checkbox below to ensure a great PR worthy of a merge. <br/>
        <br/>
    </div>
    `,
    template: step2Description
}