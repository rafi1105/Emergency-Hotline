##  JavaScript DOM Questions & Answers

### 1. getElementById vs getElementsByClassName vs querySelector/querySelectorAll?
- **getElementById**: Returns one element by ID (fast, specific)
- **getElementsByClassName**: Returns live collection by class name
- **querySelector/querySelectorAll**: Uses CSS selectors, returns static collection

### 2. Create and insert DOM element?
```javascript
const element = document.createElement('div');
element.textContent = 'Hello';
parentElement.appendChild(element);
```

### 3. Event Bubbling?
Events travel from target element up through parent elements to document root.

### 4. Event Delegation?
Attach one event listener to parent element, use `event.target` to identify which child triggered the event. Efficient for dynamic content.

### 5. preventDefault() vs stopPropagation()?
- **preventDefault()**: Stops browser's default action (like link navigation)
- **stopPropagation()**: Stops event bubbling to parent elements


**Government Emergency Services at Your Fingertip – A Project by Government of the People's Republic of Bangladesh**
