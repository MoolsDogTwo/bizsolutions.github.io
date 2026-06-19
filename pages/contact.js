// Run the code upon the page content loading
document.addEventListener("DOMContentLoaded", () => {
    // Get the contact.html form elements so we can modify them
    const counterText = document.getElementById("counterText");
    const onWayThere = document.getElementById("onWayThere");
    const contactSubmit = document.getElementById("contactSubmit");
    let essay = document.getElementById("essay");

    const onWayThereGoal = 1000
    
    // Boolean that determines whether the submit button to the contact.html form is usable
    let contactSubmitDisabled = true;

    essay.addEventListener("input", () => {
        console.log("Hello");
        counterText.innerHTML = `Character Count: ${essay.value.length}/${onWayThereGoal}`;

        // If the 'essay' length has reached the goal
        if (essay.value.length <= onWayThereGoal) {
            contactSubmitDisabled = true;

            // Get the percentage of the essay's length to the targeted goal.
            onWayThere.innerHTML = `You are ${Math.floor(essay.value.length / onWayThereGoal * 100)}% of the way there!`
        } else {
            contactSubmitDisabled = false;
            onWayThere.innerHTML = "You made it, but keep going just a bit more... (you dont have to)"
        }
        contactSubmit.disabled = contactSubmitDisabled;
    });
});