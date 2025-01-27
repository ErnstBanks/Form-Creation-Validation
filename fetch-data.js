// Step 1: Initialize the Async Function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Step 3: Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch Data Using try-catch
        const response = await fetch(apiUrl);
        
        // Check if response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Convert response to JSON
        const users = await response.json();
        
        // Step 5: Clear the Loading Message
        dataContainer.innerHTML = '';

        // Step 6: Create and Append User List
        const userList = document.createElement('ul');

        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.textContent = user.name; // Set the text content to the user's name
            userList.appendChild(userItem); // Append the <li> to userList
        });

        // Append userList to dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 7: Error Handling
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
