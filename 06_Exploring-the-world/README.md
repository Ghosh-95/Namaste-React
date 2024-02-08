# Day06 - Assignments

```
'Loose coupling' is an approach to interconnecting the components in a system, network or software application so that those components depend on each other to the least extent practicable. Coupling refers to the degree of direct knowledge that one element has of another.

Loose coupling reduces the risk that a change made in one component, such as a database or user interface, creates un-anticipated changes in other parts. Limiting interconnections can help isolate problems when an error occurs and simplify testing, maintenance and troubleshooting procedures.
```

### Q1. What is a microservice?

Microsevices - also known as microservice architecture - is an architectural approach that structures an application as a collection of small, independent and loosely coupled services. Services are typically organized by business capabilities. Each service is often maintained by a single team.

The microservice architecture enables a organization to deliver a large, complex applications rapidly, frequently, reliably and sustainably - a necessity for competing and winning in today’s world.

### Q2. What is monolithic architecture?

Monolithic application is designed to be self-contained, wherein the program's components or functions are tightly coupled rather than loosely coupled. In a monolithic architecture, each component and its associated components must all be present for code to be executed or compiled and for the application to run.

Monolithic applications tend to have larger codebase as multiple components are combined into one large application. As a result they can be troublesome to maintain and debug.

Furthermore, if one program component must be updated, other elements may also require rewriting, and the whole application has to be recompiled and tested. The process can be time-consuming and may limit the agility and speed of software development teams.

### Q3. What is the difference between monolith and microservice architecture?

With monolithic architectures, all processes are tightly coupled and run as a single service. This means if one process of the application experiences a change in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features become more complex as the code base grows large over time. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

![](./monolith-microservice.png)