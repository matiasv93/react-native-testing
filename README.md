# RN Testing Lectures

This repository holds the examples that will be used in all 3 RN Testing Lectures as well as the practice exercises that will be presented at the end of each lecture as asynchronous material.

### Lecture #1: Testing with Jest

- Summary of the 3 lectures
- Brief explanation of what [Jest](https://jestjs.io/) is and what is used for
- How to approach a test
- Live practical testing examples on utils used in a real project
- How to view and interpret coverage
- Sharing & explaining asynchronous material

### Lecture #2: Testing Redux

- Q&A: Lecture #1 asynchronous material
- Introduction to [MSW](https://mswjs.io/) and asynchronous actions testing
- Brief explanation of the utils (getMockStore and getMockState) we use and what problems they solve
- Live practical examples of a reducer test
- Live practical examples of an action test
- Brief explanation of how to mock an API call with MSW
- Live practical examples of an asynchronous action test with a mocked API
- Sharing & explaining asynchronous material

### Lecture #3: Testing React Native Components

- Q&A: Lecture #2 asynchronous material
- Introduction to [RTL](https://testing-library.com/docs/react-native-testing-library/intro)
- Live practical examples of a simple component test
- Live practical examples of a component test with Redux
- Sharing & explaining asynchronous material

## Workflow

A branch is going to be created for each specific lecture in which the participants will have to create PRs (for their own branches) with the asynchronous material solutions. This PRs are meant to be a way to keep track of each student's work, they are not going to be merged, in order to keep the repo tidy and reusable for future lectures.

e.g
If the first lecture has a branch named 'first-lecture', then the students branch should be parted from it
first-lecture/firstName-lastName
In their personal branch 'firstName-lastName' they should solve the lecture's asynchronous material and create a PR for it.
