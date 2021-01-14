// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // UPDATE
    const eatButtons = document.querySelectorAll('.devourButton');

    // Set up the event listener for the create button
    if (eatButtons) {
        eatButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                // Grabs the id of the element that goes by the name, "id"
                const id = e.target.getAttribute('data-id');

                const newBurgerState = {
                    devoured: true,
                };

                fetch(`/api/burgers/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    // make sure to serialize the JSON body
                    body: JSON.stringify(newBurgerState),
                }).then(() => {
                    // Check that the response is all good
                    // Reload the page so the user can see the new quote
                        location.reload('/');
                   
                });
            });
        });
    }

    // CREATE
    const createBtn = document.getElementById('create-form');

    if (createBtn) {
        createBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            // Grabs the value of the textarea 
            const newBurger = {
                name: document.getElementById('burgerName').value.trim(),
                devoured: false
            };

            // Send POST request to create a new burger
            fetch('/api/burgers', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                // make sure to serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                document.getElementById('burgerName').value = '';

                // Reload the page so the user can see the new quote
                console.log('Created a new burger!');
                location.reload();
            });
        });
    }

    // DELETE
    const deleteBtns = document.querySelectorAll('.removeButton');

    // Set up the event listeners for each delete button
    deleteBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');

            // Send the delete request
            fetch(`/api/burgers/${id}`, {
                method: 'DELETE',
            }).then((res) => {
                console.log(res);
                console.log(`Deleted burger: ${id}`);

                // Reload the page
                location.reload();
            });
        });
    });
});
