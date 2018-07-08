// init UI

const ui = new UI;
const key = new Key;


// Add event listener to the username input 

document.getElementById('userName').addEventListener('keyup', (e) => {

    // Dismiss alert if there is one

    ui.dismissAlert();

    const userName = e.target.value;


    if (userName !== '') {

        const gitHub = new Github(key);

        gitHub.getUser(userName)
            .then((data) => {

                if (data.profile.message === 'Not Found') {

                    ui.showAlert('User Not Found');

                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                   

                }
            });

    } else {

        //clear profile

        ui.clearProfile();
    }

});