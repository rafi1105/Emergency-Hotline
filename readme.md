# Emergency Service Directory

A responsive web application for emergency services in Bangladesh, built with HTML, Tailwind CSS, and vanilla JavaScript.

## 🌐 Live Demo
[Link to be added]

## 📋 Features

- ✅ **Navbar** with website name, logo, heart count, coin count, and copy count
- ✅ **Hero Section** with gradient background, logo, title, and slogan
- ✅ **Emergency Cards** showing 6 different emergency services with:
  - Service icons
  - English and Bangla names
  - Hotline numbers
  - Category badges
  - Heart icon for favorites
  - Copy and Call buttons
- ✅ **Call History Section** with timestamp tracking
- ✅ **Interactive Features**:
  - Heart count increases when clicking heart icons
  - Copy functionality with clipboard support
  - Call system with coin deduction (20 coins per call)
  - Real-time call history with timestamps
  - Clear history functionality
- ✅ **Responsive Design** for mobile and desktop

## 🚀 Technologies Used

- **HTML5** - Structure and content
- **Tailwind CSS** - Styling and responsive design
- **JavaScript (Vanilla)** - Interactive functionality
- **Font Awesome** - Icons

## 📱 Emergency Services Included

1. **National Emergency Number** (999) - All services
2. **Police Helpline** (999) - Police services
3. **Fire Service** (999) - Fire emergency
4. **Ambulance Service** (999) - Medical emergency
5. **Bangladesh Railway** (16263) - Transport
6. **BRAC Emergency** (16263) - NGO services

## 🎯 Functionality

### Heart System
- Click heart icons to add services to favorites
- Count displays in navbar

### Call System
- Each call costs 20 coins (starting with 100 coins)
- Alert shows service name and number
- Insufficient coin protection
- Call history with exact timestamps

### Copy System
- Copy emergency numbers to clipboard
- Alert confirmation
- Copy count tracking

## 🔧 Installation & Usage

1. Clone the repository
2. Open `index.html` in a web browser
3. Start using the emergency directory

## 📝 JavaScript DOM Questions & Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**getElementById:**
- Returns a single element with the specified ID
- Fast and direct access to elements
- Returns null if not found
- Example: `document.getElementById('heartCount')`

**getElementsByClassName:**
- Returns a live HTMLCollection of all elements with the specified class
- Updates automatically when DOM changes
- Returns empty collection if not found
- Example: `document.getElementsByClassName('copy-btn')`

**querySelector / querySelectorAll:**
- querySelector returns the first element matching the CSS selector
- querySelectorAll returns a static NodeList of all matching elements
- More flexible - can use any CSS selector
- querySelector returns null, querySelectorAll returns empty NodeList if not found
- Examples: `document.querySelector('.heart-icon')`, `document.querySelectorAll('article')`

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element:

1. **Create the element:**
   ```javascript
   const newDiv = document.createElement('div');
   ```

2. **Set properties:**
   ```javascript
   newDiv.textContent = 'Hello World';
   newDiv.className = 'my-class';
   newDiv.id = 'my-id';
   ```

3. **Insert into DOM:**
   - `appendChild()` - adds as last child
   - `insertBefore()` - inserts before specific element
   - `prepend()` - adds as first child
   - `append()` - adds as last child (newer method)

   Example: `parentElement.appendChild(newDiv);`

### 3. What is Event Bubbling and how does it work?

Event Bubbling is when an event triggered on a child element travels up through its parent elements in the DOM tree.

**How it works:**
1. Event starts at the target element
2. Travels up to each parent element
3. Continues until it reaches the document root

**Example:**
If you click a button inside a div, the click event will:
1. Fire on the button (target)
2. Bubble up to the div (parent)
3. Continue to body, html, and document

**Control bubbling:**
- `event.stopPropagation()` - stops the bubbling
- `event.stopImmediatePropagation()` - stops bubbling and other listeners

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is attaching a single event listener to a parent element to handle events for multiple child elements, using event bubbling.

**How it works:**
Instead of adding listeners to each child, add one listener to the parent and check which child triggered the event using `event.target`.

**Example:**
```javascript
document.getElementById('cardsContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('copy-btn')) {
        // Handle copy button click
    }
});
```

**Why it's useful:**
- **Performance** - Fewer event listeners in memory
- **Dynamic content** - Works with elements added later
- **Memory efficient** - Reduces memory usage
- **Easier maintenance** - One place to handle similar events

### 5. What is the difference between preventDefault() and stopPropagation() methods?

**preventDefault():**
- Prevents the default browser action for that event
- Does NOT stop event bubbling
- Example: Prevents form submission, link navigation
- Use case: `event.preventDefault()` in form validation

**stopPropagation():**
- Stops the event from bubbling up to parent elements
- Does NOT prevent the default browser action
- Example: Stops click event from reaching parent elements
- Use case: `event.stopPropagation()` to prevent parent click handlers

**Key Difference:**
- preventDefault() = "Don't do the default action"
- stopPropagation() = "Don't tell parent elements about this event"

You can use both together if needed:
```javascript
function handleClick(event) {
    event.preventDefault();    // Don't follow the link
    event.stopPropagation();  // Don't bubble to parent
}
```

## 🎯 Challenges Implemented

- ✅ Copy button shows alert and increases copy count
- ✅ Hotline numbers are copied to clipboard 
- ✅ Call history shows exact timestamp of calls

## � Project Structure

```
Emergency-Hotline/
├── index.html          # Main HTML file
├── readme.md           # Project documentation
├── assets/             # Images and icons
│   ├── logo.png
│   ├── emergency.png
│   ├── police.png
│   ├── fire-service.png
│   ├── ambulance.png
│   ├── Bangladesh-Railway.png
│   └── brac.png
└── temp.html           # Development template
```

## � Commits Made

1. Initial project setup with basic HTML structure
2. Added Tailwind CSS and responsive design
3. Implemented emergency service cards
4. Added JavaScript functionality for interactions
5. Completed call history and final features

---

**Government Emergency Services at Your Fingertip – A Project by Government of the People's Republic of Bangladesh**
