1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
ans : 
getElementById() finds an element by its id. Since an id is used only once on a page, it always returns a single element. If that id does not exist, then nothing is returned.
getElementsByClassName() retrieves all elements with a specific class name. It can return multiple elements, and to work with them you need to use a loop.
querySelector() is a bit smarter because it uses a CSS selector to find an element. However, it only returns the first matching element.
querySelectorAll() also uses CSS selectors, but it returns all matching elements. This makes it possible to work with many elements at once.


2. How do you **create and insert a new element into the DOM**?
ans:
To add a new element to the DOM, three steps are needed. First, a new element is created using document.createElement(). Then, text or content is added inside that element using innerText or innerHTML. Finally, the element is inserted into the DOM using appendChild() or append(). For example, if we want to create a new paragraph, we use createElement("p") to make the paragraph, add text with innerText, and then use document.body.appendChild() to insert it into the body. In this way, a new element can be easily created and added to the DOM.


3. What is **Event Bubbling** and how does it work?
ans:
Event Bubbling is a process where when an event  occurs on a child element, it gradually spreads to its parent, grandparent, and finally to the document. In other words, the event starts from the child element and moves upwards. For example, if a button is inside a <div> and the button is clicked, first the button’s event will be triggered, and then the parent div’s event will also run. This upward spreading of the event from child to parent is called Event Bubbling.



4. What is **Event Delegation** in JavaScript? Why is it useful?
ans:
Event Delegation is when we put an event listener on a parent element instead of each child element. The parent then checks which child was clicked and handles the event.

Why it’s useful:

You don’t need separate listeners for every child element.

It works for new child elements added later.

Uses less memory because there are fewer listeners.

Example:

<ul id="parent">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById("parent").addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
      alert("You clicked on " + e.target.innerText);
    }
  });
</script>


Here, the parent <ul> handles clicks on all <li> elements.

If a new <li> is added later, it will work automatically.



5.What is the difference between **preventDefault() and stopPropagation()** methods?
ans:
preventDefault() stops the default action of an event. For example, when a link is clicked, it normally navigates to another page, but with preventDefault(), the page will not go.

stopPropagation() prevents the event from bubbling up from child to parent. That means if a child element is clicked, the parent element’s listener will not be triggered.