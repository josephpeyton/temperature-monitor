#CODING EXERCISE - JavaScript/SPA

## Table of Contents
1. Evaluation guidelines
1. Task
    1. User Stories
    1. Success criteria and definition of done
1. Detailed instructions
1. Thought Process
1. Resources

# 1. Evaluation Guidelines 

We want you to demonstrate your ability to write [clean code][js best practices] which is well [covered][code coverage] by unit tests using AngularJS 1.5 and Jasmine. In other words, as much as the correctness of the solution (e.g. providing validation), we are looking for proper usage of AngularJS 1.5 concepts (e.g. directive, controller, component,...) or whatever you deem pertinent to make your code easy to read and to maintain.  

Thanks to the working experience that you have gained since we met, we want you to demonstrate your ability to write cleaner code, covered by greater unit tests. 

In the next section, you will certainly recognize the first 5 user stories ; these are covering the exact same requirements of the median calculation exercise that we asked you 4 months ago.
 
We have simply added 4 additional stories aiming to push the challenge a little bit further. The last story is a free-style inviting you to express yourself at your best!

Twitter Bootstrap CSS is present in the Plunk, use it or change it to your favorite UI library. Additionally there are some example components to help you get started. 

This exercise can be done in a few hours, but please don’t rush and take the time you need. Just remember that we are looking for quality of code over quantity. Refactor and clean your code. The final deadline for the exercise is **11:59PM on Sunday the 11th of December**.

Don’t forget to have a last look at the Readme before submitting your code. If you have any questions, please send us an email at [AppsDevInterviewProcess@teksystems.com][AppsDev].

Using this plunker project as a seed, Build a Temperature Monitor Single Page Application (SPA) using AngularJS.

Please read carefully the section on Success criteria and definition of done, that information is critical to submit a code responding to the evaluation requirements.
 
Thank you for your time, we look forward reviewing your code and good luck!

# 2. Task
## 2.1 User Stories 

### User Story #1
As an anonymous end user, I want to be able to enter a number of temperature records by entering a value and then clicking on the "Add" button.

### User Story #2
As an anonymous end user,  When I click on the "Get Median Temperature" button, I want to be able to see the median of the entered temperature records that I have entered.

### User Story #3
As an anonymous end user, I want to be prevented from entering and invalid value such as strings in the "Temperature" field.

### User Story #4
As an anonymous end user, I want the UI to inform me when an invalid action occurred.

### User Story #5
As an anonymous end user, I want a progress bar to see how full my collection of temperatures is. The collection can contain only 8 elements.

### User Story #6
As an anonymous end user, I want an icon beside the median that gives me an overview of the temperature. Four images have been placed in img/.
- sun would be for median >= 25  
- sunwithcloud for median between 10 and 25 
- cloud for median between 0 and 10  
- and snow for median below 0  

### User Story #7
As an anonymous end user, I want to view in a different page the history of all my inputs with the median at each step, the output should look as follow:  

```
entry # | values       | median   
--------|--------------|--------
1       | 5            | 5    
2       | 5,1          | 3    
3       | 5,1,-7       | 1    
4       | 5,1,-7,7     | 3    
5       | 5,1,-7,7,8   | 5    
6       | 5,1,-7,7,8,3 | 4    
```

### User Story #8
As an anonymous end user, I want to navigate between pages with a menu or with buttons.

### User Story #9
Add user functionality to impress us with anything that you've learnt and you are proud of. It is your free-style user story, it can be css, html, javascript, bootstrap or any other techniques/technologies that you will integrate as part as your solution to this exercise. If this is not possible create a different page. Explain your choice.

## 2.2 Success criteria and definition of done
- The code MUST be written using angularJS 1.5
- For user story #1 and #2. Create a javascript object (factory or service) named "TemperatureMonitor". 
- This object MUST have a method named "recordTemperature" that will accept a number value.
- This object MUST have a method called "getCurrentMedian" that will return the median of the recorded values. You can find a definition of what a Median is on [wikipedia][Median]
- This object MUST be easily reusable and have no coupling with the UI
- The Code that calculates the median MUST be your own (no libraries allowed)
- Enforce a MAXIMIUM of 8 temperatures with appropriate user feedback.
- For user story #6 and #7, refactor the current exercise with javascript object (component or directive)
- For user story #8, make use of routing to navigate between the pages
- You MUST unit test all the behaviors that you implemented in your application. For example your median calculation should match the behavior of the data sample provided below;
```
[5, 1, -7, 7, 8, 3] --> [-7, 1, 3, 5, 7, 8] = (3+5)/2 = 4
[5, 1, -7, 7, 8, 3, 9] --> [-7, 1, 3, 5, 7, 8, 9] = 5
```
- Please note that when you run your unit test, it indicates now the amount of your code being covered. We expect you to cover at least 60% of the code. Follow the instructions in jasmine-test-runner.html as you add unit test files to activate code coverage.
- Twitter Bootstrap CSS is already included in the index file, use it at will

## 3. Detailed instructions

- **Fork** this Plunker Project
- Put your name in the "--your name here--" placeholder in the index.html file
- Code
    - Run the tests using the "Run Unit Tests" link. Please run your tests as often as you like
    - Create as many JavaScript, HTML, and CSS files as you feel is appropriate
    - The example components are there to help you get started and can be deleted if you think it appropriate
- Make sure you unit test your code
- Document your thought processes in this readme under the heading "Thought Process" i.e. 
    - Why you chose Object vs. service vs. factory? 
    - Why you chose a directive vs a component?
    - Why did you test something or why did you NOT test something?
- Note any resources that you needed to search for during the exercise 
- **Save** + **Freeze** and Send us the link to your forked Plunker

## 4. Thought Process

## 5. Resources

- [Apps Dev Email][AppsDev]
- [Jasmin Documentation][Jasmine]
- [Median][Median]
- [clean code][js best practices]
- [Code Coverage][code coverage]

[AppsDev]: mailto:AppsDevInterviewProcess@teksystems.com
[Jasmine]: http://jasmine.github.io/2.4/introduction.html
[Median]: http://en.wikipedia.org/wiki/Median
[js best practices]: https://github.com/stevekwan/best-practices/blob/master/javascript/best-practices.md
[code coverage]: https://en.wikipedia.org/wiki/Code_coverage
