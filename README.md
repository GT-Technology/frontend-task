# Frontend development task

Build the form illustrated below using [Bootstcrap 4](https://getbootstrap.com/) and add validation with a JavaScript framework ([React](https://reactjs.org/), [Vue.js](https://vuejs.org/) or [Alpine.js](https://github.com/alpinejs/alpine)). Please follow all the instructions.

## Guidelines and standards
Please ensure to follow W3C standards:
* [W3C](https://www.w3.org/TR/WCAG21/) guidelines (you can validate your code here http://validator.w3.org/)
* Make best use of HTML5 and ARIA semantics to ensure the form is accessible (https://webaim.org/techniques/forms/)

![Form](form.jpg)

### 1. Clone this repository
```bash
git clone https://github.com/GT-Technology/frontend-task.git
```

### 2. Create a feature branch
Create a feature branch and name it with your first name and last name
```bash
git branch feature/firstname-lastname
git checkout feature/firstname-lastname
```

### 3. Build your form
#### Development setup
Use [Bootstcrap 4](https://getbootstrap.com/), Cypress CI for end-to-end testing and a JavaScrip framework (React, VueJS or Alpine.js) for validation. Please install the chosen frameworks via [npm](https://www.npmjs.com/).
* If React -> Must use React Hooks Components
* If VueJS -> Must show an understanding of Vue v3 and use Vue Components
* Install and set up Cypress CI
#### Form build
Build your form with validation and error messages. Ensure the form is responsive, mobile first approach. Add validation to the following fields:
* Total number of bins -> required and as integer to the whole number
* Estimated load weight -> required and as integer to second decimal place
* Vehicle registration -> required with a max of 12 characters 

#### **NOTE: Please use [atomic commits](https://seesparkbox.com/foundry/atomic_commits_with_git)**

### 4. Dynamically add and remove Bin ID fields and test
Use JavaScript to dynamically add and remove Bin ID fields via a button. Write one end-to-end test for adding/removing fields.

### 5. Create a Pull Request
Once finished, add/commit your work and push your branch to Github, create a Pull Request and assign me ([https://github.com/domingobishop](domingobishop)) as the Reviewer.
