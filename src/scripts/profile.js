// Select navigation items and sections
const navItems = document.querySelectorAll('#general, #settings, #member, #reciepts');
const sections = document.querySelectorAll('#general-section, #settings-section, #member-section, #reciepts-section');
// Select profile information elements
const profileName = document.querySelectorAll('.profileName');
const profileEmail = document.querySelectorAll('.profileEmail');
const profileNumber = document.querySelectorAll('.profileNumber');

// Function to fetch and display user information
export const fetchUserInformation = () => {
     // Fetch existing user data and logged-in user data from local storage
    let existingData = JSON.parse(localStorage.getItem("formData")) || [];
    let loginData = JSON.parse(localStorage.getItem('loginData')) || {};
     // Find the logged-in user in the existing data
    let user = existingData.find((user) => {
        return user.email === loginData.email && user.password === loginData.password;
    });

    // If a user was found, display their information
    if (user !== undefined) {
        const fullName = user.fornamn + ' ' + user.efternamn;
        profileName.forEach(name => {
            name.textContent = fullName;
        });
        profileEmail.forEach(email => {
            email.textContent = user.email;
        });
        profileNumber.forEach(number => {
            number.textContent = user.telefonnummer;
        });
    } else {
         // If no user was found, log a message
        console.log('User not found')
    }
}

navItems.forEach((item, index) => {
    item.addEventListener('click', event => {
        navItems.forEach(item => {
            //remove the background color from all the items
            item.classList.remove('bg-black/25');
        });

        sections.forEach(section => {
            //hide all the sections
            section.classList.add('hidden');
        });

        //display the section that corresponds to the clicked item
        sections[index].classList.remove('hidden')
        //add background color to the clicked item
        event.currentTarget.classList.add('bg-black/25');
    });
});