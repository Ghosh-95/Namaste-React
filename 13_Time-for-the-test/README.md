# Day 13 - Theory Assignments

### Q1. What are different types for testing?
1. `Unit tests`
Unit tests are very low level and close to the source of an application. They consist in testing individual methods and functions of the classes, components, or modules used by a software. Unit tests are generally quite cheap to automate and can run very quickly by a continuous integration server.

2. `Integration tests`
Integration tests verify that different modules or services used by an application work well together. For example, it can be testing the interaction with the database or making sure that microservices work together as expected. These types of tests are more expensive to run as they require multiple parts of the application to be up and running.

3. `Functional tests`
Functional tests focus on the business requirements of an application. They only verify the output of an action and do not check the intermediate states of the system when performing that action.

    There is sometimes a confusion between **integration tests** and **functional tests** as they both require multiple components to interact with each other. The difference is that an integration test may simply verify that you can query the database while a functional test would expect to get a specific value from the database as defined by the product requirements.

4. `End-to-end tests`
End-to-end testing replicates a user behavior with the software in a complete application environment. It verifies that various user flows work as expected and can be as simple as loading a web page or logging in or much more complex scenarios verifying email notifications, online payments, etc...

    End-to-end tests are very useful, but they're expensive to perform and can be hard to maintain when they're automated. It is recommended to have a few key end-to-end tests and rely more on lower level types of testing (unit and integration tests) to be able to quickly identify breaking changes.

5. `Acceptance testing`
Acceptance tests are formal tests that verify if a system satisfies business requirements. They require the entire application to be running while testing and focus on replicating user behaviors. But they can also go further and measure the performance of the system and reject changes if certain goals are not met.

6. `Performance testing`
Performance tests evaluate how a system performs under a particular workload. These tests help to measure the reliability, speed, scalability, and responsiveness of an application. For instance, a performance test can observe response times when executing a high number of requests, or determine how a system behaves with a significant amount of data. It can determine if an application meets performance requirements, locate bottlenecks, measure stability during peak traffic, and more. 

7. `Smoke testing`
Smoke tests are basic tests that check the basic functionality of an application. They are meant to be quick to execute, and their goal is to give you the assurance that the major features of your system are working as expected.

    Smoke tests can be useful right after a new build is made to decide whether or not you can run more expensive tests, or right after a deployment to make sure that they application is running properly in the newly deployed environment.

### Q2. What is Enzyme?

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

### Q3. What is the difference between Enzyme and React Testing Library?

- `Shallow or Deep Rendering`
    The DOM is used to test in the React Testing Library. As a result, there is no such thing as shallow or deep rendering. Enzyme, on the other hand, allows for shallow or deep rendering. 

    We can use shallow rendering to ensure that our tests aren't asserted based on the behaviour of any child component of the component we're testing.

    Enzyme also renders the DOM elements in their entirety. It's useful when we need to test components that are wrapped inside a higher-order component.

- `Different Design Approach`
    The state and props of the component are used to test the component in Enzyme. This usually denotes brittleness in the tests. Let's have a look at an example. Let's pretend we've already built tests for a component and they're working perfectly. But what if someone changes the variable name of a state or a property in the component? Our test will fail even if the component's functionality hasn't changed. This type of behaviour demonstrates the test's brittleness.

    React Testing Library, on the other hand, tests the component from the user's perspective. Let's imagine we want to test a drop down component, but we won't test it based on its state and properties.
- `Avoid Implementation Details`
    Instead of focusing on implementation details on your component, React-testing-library encourages you to focus on making your tests provide you with the assurance you need. In the long term, this will make your test a lot easier to maintain. 

    Enzyme, for example, allows you to update the component's state and properties, which isn't how most users would interact with your app.

### Q4. What is Jest and why do we use it?

Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

Jest is well-documented, requires little configuration and can be extended to match your requirements.