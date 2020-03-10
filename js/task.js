// Retrieve "Active" list.
var newList = document.querySelector('#new_task');

// Retrieve "Suspended" list.
//var suspendedList = document.querySelector( 'ul:last-of-type' );

// Retrieve "Completed" list.
//var completedList = document.querySelector( 'ul:last-of-type' );

// Retrieve the to-do input.
var newTask = document.querySelector('[id="to-do"]');
console.log(newTask.value);

// Select our form.
var form = document.querySelector('form');
// We listen to our form for a submission.
form.addEventListener('submit', function (event) {
    // Prevent a page-refresh from a REAL form submission.
    event.preventDefault();

    // New date object instance of class: Date.
    var startDateString = formatDateString();

    // Let's add the list item into our UL.
    newList.innerHTML += `
        <li>
            <input type="checkbox">
            ` + newTask.value + `
            <time><strong>Logged:</strong> `
        + startDateString + `</time>
            <button>Remove</button>
            <button>Edit</button>
            <button>Done</button>

        </li>
    `;

    document.querySelector('[id="to-do"]').value='';
});

var taskLength = document.getElementById("new_task").childNodes.length;
console.log(taskLength);

// Function to handle date function in the scripts
function formatDateString() {
    var date = new Date();
    var dateString =
        date.getDate() +
        '-' +
        (Number(date.getMonth()) + 1) +
        '-' +
        date.getFullYear();
    return dateString;
}

// Grab our brand new checkbox! (The last LI will always be the newest one!)
var newCheckboxes = document.querySelectorAll('ul [type="checkbox"]');

for (var i = 0; i < newCheckboxes.length; i++) {
    var newCheckbox = newCheckboxes[i];
    
    var li = newCheckbox.parentNode;
    
    // Listen for clicks on our delete button.
    button.addEventListener('click', function (event) {
        // Check if the current list item is in ACTIVE or if it is in the COMPLETED list.
        var isInActiveList = false;
        for (var i = 0; i < activeList.children.length; i++) {
            if (li === activeList.children[i]) {
                isInActiveList = true; // It is in the active list!
            }
        }

        // Remove the child based on list.
        if (isInActiveList) {
            activeList.removeChild(li);
        } else {
            completedList.removeChild(li);
        }
    });

    // Listen for a click on this checkbox!
    newCheckbox.addEventListener('click', function (event) {
       
        li.removeChild(newCheckbox);

        // Add in our end time string!
        var endTime = document.createElement('TIME');
        endTime.innerHTML += '<strong>End:</strong> ' + formatDateString();

        // Add time to the li.
        li.appendChild(endTime);

        // Move the LI to our completed UL.
        completedList.appendChild(li);
    });
}
    

