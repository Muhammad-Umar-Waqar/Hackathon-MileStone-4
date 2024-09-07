document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form') as HTMLFormElement;
    var resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page refresh

        var profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
        var profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;
        var profilePictureURL = "";
        if (profilePicture) {
            profilePictureURL = URL.createObjectURL(profilePicture);
        }

        // Get form values
        var name = (document.getElementById('name') as HTMLInputElement).value;
        var email = (document.getElementById('email') as HTMLInputElement).value;
        var education = (document.getElementById('education') as HTMLTextAreaElement).value;
        var educationDuration = (document.getElementById('Educationduration') as HTMLInputElement).value;
        var workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
        var workDuration = (document.getElementById('workDuration') as HTMLTextAreaElement).value;
        var skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
        var profile = (document.getElementById('profile') as HTMLInputElement).value;
        var projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
        var projectsDuration = (document.getElementById('projectsDuration') as HTMLTextAreaElement).value;
        var interests = (document.getElementById('interests') as HTMLInputElement).value.split(',').map(interest => interest.trim());

        // Generate resume
        var resumeHtml = `
            <header>
                <h1 contenteditable="true">${name}</h1>
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" id="profile-pic" />` : ""}
            </header>
            <div class="profile">
                <h2>Profile</h2>
                <p class="profileDescription" contenteditable="true">${profile}</p>
            </div>
            <div class="two-sections">
                <div>
                    <section id="education" ">
                        <h2>Education</h2>
                        <div contenteditable="true">
                        <h3>${education}</h3>
                        <h3>Duration: ${educationDuration}</h3>
                        </div>
                    </section>
                    <section id="project" ">
                        <h2>Projects</h2>
                        <div class="project-section" contenteditable="true">
                            <p>${projects}</p>
                            <h5>Duration: ${projectsDuration}</h5>
                        </div>
                    </section>
                    <section id="work-experience" ">
                        <h2>Work Experience</h2>
                        <div contenteditable="true">
                            <p><span class="spanMERN">${workExperience}</p>
                            <p>Duration: ${workDuration}</p>
                        </div>
                    </section>
                </div>
                <div>
                    <section id="skills-section">
                        <h2 id="skills-heading">Skills</h2>
                        <ul id="skills" contenteditable="true">
                            ${skills.map(skill => `<li >${skill}</li>`).join('')}
                        </ul>
                    </section>
                    <section id="work-experience">
                        <h2>Interests</h2>
                        <div class="interestButtons" contenteditable="true">
                            ${interests.map(interest => `<button >${interest}</button>`).join('')}
                        </div>
                    </section>
                </div>
            </div>
        `;

        resumeOutput.innerHTML = resumeHtml;

        // Add event listener for editing
        resumeOutput.addEventListener('input', function (event) {
            console.log('Content changed:', event.target);
        });
    });

    // Skills section toggle functionality
    var skillsSection = document.getElementById('skills-section') as HTMLDivElement;
    var toggleArrow = document.getElementById('toggle-arrow') as HTMLDivElement;
    var skillsList = document.getElementById('skills') as HTMLUListElement;

    var toggleSkills = function () {
        if (skillsSection.style.maxHeight) {
            skillsSection.style.maxHeight = '';
            toggleArrow.style.transform = 'rotate(0deg)';
        } else {
            skillsSection.style.maxHeight = skillsList.scrollHeight + 'px';
            toggleArrow.style.transform = 'rotate(180deg)';
        }
    };

    skillsSection.addEventListener('click', toggleSkills);
});
