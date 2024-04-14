document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM content loaded');

    const datetimeDisplayElement = document.getElementById("datetime-display");
    console.log('datetimeDisplayElement:', datetimeDisplayElement);

    const currentDateTime = new Date();
    console.log('currentDateTime:', currentDateTime);

    const date = currentDateTime.toDateString();
    console.log('date:', date);

    datetimeDisplayElement.textContent = `${date}`;
    console.log('Date displayed:', datetimeDisplayElement.textContent);

    function loadEventsFromFile(filepath) {
        console.log('Loading events from file:', filepath);
        fetch(filepath)
            .then(response => response.json())
            .then(data => {
                console.log('Events data loaded:', data);
                const eventsList = document.getElementById('eventsList')
                eventsList.innerHTML = '';
                data.forEach(event => {
                    console.log('Creating element for event:', event);
                    const listItem = document.createElement('li');
                    listItem.textContent = event.name;
                    if (event.checked) {
                        listItem.classList.add('checked');
                    }
                    eventsList.appendChild(listItem);
                    console.log('Event element added:', listItem);
                });
            })
            .catch(error => console.error('Error Loading Events', error));
    }

    // Load events from the JSON file
    loadEventsFromFile('/events.json');

    var input = document.getElementById("myInput");
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            newElement();
        }
    });

    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
    var closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var listItem = this.parentElement;
            listItem.style.display = "none";
        });
    });


    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    });


    // Add event listener to addButton
    var addButton = document.querySelector('.addButton');
    console.log('addButton:', addButton);
    addButton.addEventListener('click', newElement);

    // Function to add new element
    function newElement() {
        console.log('Adding new element');
        var inputValue = document.getElementById("myInput").value;
        console.log('Input value:', inputValue);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            console.log('Creating new list item');
            const listItem = document.createElement('li');
            listItem.textContent = inputValue;
            document.getElementById("eventsList").appendChild(listItem);
            console.log('New list item added:', listItem);
        }
        document.getElementById("myInput").value = "";
    }
});
