class UI {

    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(profile) {
        console.log(profile);
        this.profile.innerHTML = `
        
        <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${profile.avatar_url}" alt="Avatar" class="img-fluid rounded  border  ">
                        <a href="${profile.html_url}" class="btn btn-primary btn-block my-3" target="_blank">Visit Profile</a>
                    </div>
                    <div class="col-md-9">
                   <div class=" d-flex justify-content-around">
                        <span class="badge badge-success ">Public Repos : ${profile.public_repos}</span>
                        <span class="badge badge-primary ">Following : ${profile.following}</span>
                        <span class="badge badge-warning ">Followers : ${profile.followers}</span>
                        <span class="badge badge-info ">Gists : ${profile.public_gists}</span>
                      

                   </div>
                   <br>
                   <br>
                    <ul class="list-group">
                       <li class="list-group-item"><span class="font-weight-bold">Name :</span> ${profile.name}</li>
                       <li class="list-group-item"><span class="font-weight-bold">Email :</span> ${profile.email}</li>
                       <li class="list-group-item"><span class="font-weight-bold">Company :</span> ${profile.company}</li>
                       <li class="list-group-item"><span class="font-weight-bold">Location :</span> ${profile.location}</li>
                       <li class="list-group-item"><span class="font-weight-bold">Blog :</span><a href=" ${profile.blog}" target="_blank"> ${profile.blog}</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <br><br>
            <h3 class="page-heading my-3">Latest Repos</h3>
            <div id="repos"></div>
        `;








    }

    showRepos(repos) {
        let output = '';
        repos.forEach((repo) => {

            output += `
             
        <div class="card card-body mb-3">
              <div class="row ">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                    </div>
                    <div class="col-md-6 ">
                       <div class="d-flex justify-content-around">
                            <span class="badge badge-success">Stars : ${repo.stargazers_count} </span>
                            <span class="badge badge-warning"> Forks : ${repo.forks_count}</span>
                            <span class="badge badge-info">Watchers : ${repo.watchers_count}</span>
                       </div>
                    </div>
                </div>
        </div>
          
          `

        });


        document.getElementById('repos').innerHTML = output;
    }






    showAlert(message) {
        this.dismissAlert();
        const searchDiv = document.querySelector('.searchContainer');
        const cardDiv = document.querySelector('.search');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.setAttribute('class', 'alert alert-danger');
        searchDiv.insertBefore(messageDiv, cardDiv);

    }

    dismissAlert() {

        const messageDiv = document.querySelector('.alert');
        if (messageDiv) {

            messageDiv.remove();
        }
    }

    clearProfile() {

        this.profile.innerHTML = '';

    }
}