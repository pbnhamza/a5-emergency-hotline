1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans:-getElementById:
1.javaScript DOM use and retune only one element.
2.Find and Element by its unique ID.

Ans:-getElementsByClassName:
1.javaScript DOM use all specific class.
2.Return a HTMLCollection of elements.

Ans:-querySelector :
1.First element that all elements that match a given CSS selector.

Ans:-querySelectorAll:
1.javaScript DOM use all elements that matches a specified CSS selector.
2.return NodeList

2. How do you **create and insert a new element into the DOM**?
   Ans:-
   1.create New Elements
   2.add Content
   3.append elements

3. What is **Event Bubbling** and how does it work?
   Ans:-
   Event Bubbling is a concept in the DOM event flow where an event starts at the deepest target element receives and event and that event bubbles up to its parent and ancestor elements in the DOM tree.

   1.click a child element
   2.The event then propagates to the parent div and up to the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Ans:-
   Event Delegation is a JavaScript technique ist attach a single event listener to a parent element instead of adding separate listeners to multiple child elements.
   1.Add an event listener to the parent element.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
   preventDefault():-Stops default browser action working
   stopPropagation():-Stops default browser action not working

---
