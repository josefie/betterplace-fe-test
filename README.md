
# Frontend developer test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

***You can provide the answers to questions/code challenge either as zipped file containing the code, or as a link to a fork of this repository***

## Question 1

Toby is calling friends using friends’ scores as guidance, starting from the friend with the highest score.

After each call the score of the friend who was called is set to the minimum score in the friends’ list while all other scores are incremented by 1.

If two or more friends share the score, Toby will contact the first person that he hasn't spoken to yet, or if he has already spoken to all of them, the first one from the subset will be chosen.

Given an integer `n`, where `1 <= n <= 10^7` and a list of friends' scores of length `n` where `1 <= score <=10 ^ 7`, write a function that will return the number of calls he has to make before all of his friends are granted a chance to speak to him.

 Place your solution in the `src/challenge_1.js` file

 What are the function's time & space complexities?
 
 *Answer*:
 ```txt
    Time complexity: O(1)
    Space complexity: O(1)

    With the given preconditions the number of calls will always be the same as the number of friends in the list.

    I started implementing an algorithm by setting up some tests, but after writing a few tests I figured out that it doesn't make any sense to write an algorithm at all. If we start with the highest score and after each call the highest score is set to the lowest and all others are incremented constantly by one, then it will never happen that a person already called will be before anyone else in the list. So the simplest answer is to just return n.
 ```


## Question 2

Take a look at the component `PaypalButton`, located in `/src/PaypalButton.js`.


1. Take a look at the component PaypalButton, located in /src/PaypalButton.js.
2. What issues with it can you spot?
    *Answer*:
    ```txt
    - The sleepUntilSubmitted method seems suboptimal to me. I think a better way to achieve the same result would be returning a promise, which resolves as soon as the submission is completed.
    - There seems to be a problem with setting the formik values on submit, but unfortunately I couldn't figure out why. I worked around that problem by returning the values directly with the promise and then sending that to Paypal instead of using the Formik values.
    - Apart from that I noticed few readability issues, like missing curly braces or the use of && and || instead of the ternary operator.
    ```
3. Re-factor the class component into a functional component, while applying improvements regarding the problems you noted before and any other optimizations.
4. Bonus: Get rid of the HOC connect component (perhaps by utilising other available APIs).

Note: The component uses [PayPal SDK](https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-reference/). Keep in mind that due to the mock returning a fake value `onAccept` will never be executed in this demo and the expected result is the SDK failing with `500` while trying to call `https://www.sandbox.paypal.com/smart/api/payment/fake_paypal_token/ectoken`

The component also utilises [formik](https://formik.org/) as form/state management library.
