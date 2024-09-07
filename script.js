// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('resume-form') as HTMLFormElement;
//     const resumeOutput = document.getElementById('resume-output') as HTMLElement;
//     const skillsSection = document.getElementById('skills-section') as HTMLElement;
//     const toggleArrow = document.getElementById('toggle-arrow') as HTMLElement;
//     const skillsList = document.getElementById('skills') as HTMLUListElement;
//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); 
//         const profilePictureInput = document.getElementById("profilePicture");
//         const profilePicture = profilePictureInput!.files[0];
//         let profilePictureURL = "";
//         if (profilePicture) {
//           profilePictureURL = URL.createObjectURL(profilePicture);
//         }
//         const name = (document.getElementById('name') as HTMLInputElement).value;
//         const email = (document.getElementById('email') as HTMLInputElement).value;
//         const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//         const educationDuration = (document.getElementById('Educationduration') as HTMLTextAreaElement).value;
//         const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
//         const workDuration = (document.getElementById('workDuration') as HTMLTextAreaElement).value;
//         const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
//         const profile = (document.getElementById('profile') as HTMLTextAreaElement).value;
//         const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
//         const projectsDuration = (document.getElementById('projectsDuration') as HTMLTextAreaElement).value;
//         const interests = (document.getElementById('interests') as HTMLInputElement).value.split(',').map(interest => interest.trim());
//         const resumeHtml = `
//       <head>
//         <link rel="stylesheet" href="styles.css">
//     </head>
//                 <body>
//         <header>
//             <h1>${name}</h1>
//             ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" id="profile-pic" "/>` : ""}
//         </header>
//         <div class="profile">
//             <h2>Profile</h2>
//             <p class="profileDescription">${profile}</p>
//         </div>
//         <div class="two-sections">
//             <div>
//                 <section id="education">
//                     <h2>Education</h2>
//                     <h3>${education}</h3>
//                     <h3>Duration: ${educationDuration}</h3>
//                 </section>
//                 <section id="project">
//                     <h2>Projects</h2>
//                     <div class="project-section">
//                         <p>${projects}</p>
//                         <h5>Duration: ${projectsDuration}</h5>
//                     </div>
//                 </section>
//                 <section id="work-experience">
//                     <h2>Work Experience</h2>
//                     <div>
//                     <p><span class="spanMERN">${workExperience}</p>
//                     <p>Duration: ${workDuration}</p>
//                     </div>
//                 </section>
//             </div>
//             <div>
//                 <section id="skills-section">
//                     <h2 id="skills-heading">Skills</h2>
//                      <ul id="skills">
//                     ${skills.map(skill => `<li>${skill}</li>`).join('')}
//                     </ul>
//                 </section>
//                 <section id="work-experience">
//                     <h2>Interests</h2>
//                     <div class="interestButtons">
//             ${interests.map(interest => `<button >${interest}</button>`).join('')}
//                     </div>
//                 </section>
//             </div>
//         </div>
//         <script src="script.js"></script>
//     </body>
//         `;
//         resumeOutput.innerHTML = resumeHtml;
//     });
//     const toggleSkills = () => {
//         if (skillsSection.style.maxHeight) {
//             skillsSection.style.maxHeight = '';
//             toggleArrow.style.transform = 'rotate(0deg)';
//         } else {
//             skillsSection.style.maxHeight = skillsList.scrollHeight + 'px';
//             toggleArrow.style.transform = 'rotate(180deg)';
//         }
//     };
//     skillsSection.addEventListener('click', toggleSkills);
// });
// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.getElementById('resume-form') as HTMLFormElement;
//     var resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent page refresh
//         var profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
//         var profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;
//         var profilePictureURL = "";
//         if (profilePicture) {
//             profilePictureURL = URL.createObjectURL(profilePicture);
//         }
//         // Get form values
//         var name = (document.getElementById('name') as HTMLInputElement).value;
//         var email = (document.getElementById('email') as HTMLInputElement).value;
//         var education = (document.getElementById('education') as HTMLTextAreaElement).value;
//         var educationDuration = (document.getElementById('Educationduration') as HTMLInputElement).value;
//         var workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
//         var workDuration = (document.getElementById('workDuration') as HTMLTextAreaElement).value;
//         var skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
//         var profile = (document.getElementById('profile') as HTMLInputElement).value;
//         var projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
//         var projectsDuration = (document.getElementById('projectsDuration') as HTMLTextAreaElement).value;
//         var interests = (document.getElementById('interests') as HTMLInputElement).value.split(',').map(interest => interest.trim());
//         // Generate resume
//         var resumeHtml = `
//             <header>
//                 <h1 contenteditable="true">${name}</h1>
//                 ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" id="profile-pic" />` : ""}
//             </header>
//             <div class="profile">
//                 <h2>Profile</h2>
//                 <p class="profileDescription" contenteditable="true">${profile}</p>
//             </div>
//             <div class="two-sections">
//                 <div>
//                     <section id="education" contenteditable="true">
//                         <h2>Education</h2>
//                         <h3>${education}</h3>
//                         <h3>Duration: ${educationDuration}</h3>
//                     </section>
//                     <section id="project" contenteditable="true">
//                         <h2>Projects</h2>
//                         <div class="project-section">
//                             <p>${projects}</p>
//                             <h5>${projectsDuration}</h5>
//                         </div>
//                     </section>
//                     <section id="work-experience" contenteditable="true">
//                         <h2>Work Experience</h2>
//                         <div>
//                             <p><span class="spanMERN">${workExperience}</p>
//                             <p>Duration: ${workDuration}</p>
//                         </div>
//                     </section>
//                 </div>
//                 <div>
//                     <section id="skills-section">
//                         <h2 id="skills-heading">Skills</h2>
//                         <ul id="skills">
//                             ${skills.map(skill => `<li contenteditable="true">${skill}</li>`).join('')}
//                         </ul>
//                     </section>
//                     <section id="work-experience" contenteditable="true">
//                         <h2>Interests</h2>
//                         <div class="interestButtons">
//                             ${interests.map(interest => `<button contenteditable="true">${interest}</button>`).join('')}
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         `;
//         resumeOutput.innerHTML = resumeHtml;
//         // Add event listener for editing
//         resumeOutput.addEventListener('input', function (event) {
//             console.log('Content changed:', event.target);
//         });
//     });
//     // Skills section toggle functionality
//     var skillsSection = document.getElementById('skills-section') as HTMLDivElement;
//     var toggleArrow = document.getElementById('toggle-arrow') as HTMLDivElement;
//     var skillsList = document.getElementById('skills') as HTMLUListElement;
//     var toggleSkills = function () {
//         if (skillsSection.style.maxHeight) {
//             skillsSection.style.maxHeight = '';
//             toggleArrow.style.transform = 'rotate(0deg)';
//         } else {
//             skillsSection.style.maxHeight = skillsList.scrollHeight + 'px';
//             toggleArrow.style.transform = 'rotate(180deg)';
//         }
//     };
//     skillsSection.addEventListener('click', toggleSkills);
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('resume-form') as HTMLFormElement;
//     const resumeOutput = document.getElementById('resume-output') as HTMLElement;
//     const skillsSection = document.getElementById('skills-section') as HTMLElement;
//     const toggleArrow = document.getElementById('toggle-arrow') as HTMLElement;
//     const skillsList = document.getElementById('skills') as HTMLUListElement;
//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); 
//         const profilePictureInput = document.getElementById("profilePicture");
//         const profilePicture = profilePictureInput!.files[0];
//         let profilePictureURL = "";
//         if (profilePicture) {
//           profilePictureURL = URL.createObjectURL(profilePicture);
//         }
//         const name = (document.getElementById('name') as HTMLInputElement).value;
//         const email = (document.getElementById('email') as HTMLInputElement).value;
//         const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//         const educationDuration = (document.getElementById('Educationduration') as HTMLTextAreaElement).value;
//         const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
//         const workDuration = (document.getElementById('workDuration') as HTMLTextAreaElement).value;
//         const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
//         const profile = (document.getElementById('profile') as HTMLTextAreaElement).value;
//         const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
//         const projectsDuration = (document.getElementById('projectsDuration') as HTMLTextAreaElement).value;
//         const interests = (document.getElementById('interests') as HTMLInputElement).value.split(',').map(interest => interest.trim());
// let profilePic = document.getElementById("profile-pic");
// let inputFile = document.getElementById("input-file");
// inputFile?.onchange = function(){
//     profilePic.src = URL.createObjectURL(inputFile.files[0]);
// }
//         const resumeHtml = `
//       <head>
//         <link rel="stylesheet" href="styles.css">
//     </head>
//                 <body>
//         <header>
//             <h1>${name}</h1>
//             <h1>Contact: </h1>
//             <p>${email}</p>
//             ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" id="profile-pic" "/>` : ""}
//             <label for="input-file"> Update Image</label>
//             <input type="file" accept="image/jpeg,image/jpg,image/png " id="input-file">
//         </header>
//         <div class="profile">
//             <h2>Profile</h2>
//             <p class="profileDescription">${profile}</p>
//         </div>
//         <div class="two-sections">
//             <div>
//                 <section id="education">
//                     <h2>Education</h2>
//                     <h3>${education}</h3>
//                     <h3>Duration: ${educationDuration}</h3>
//                 </section>
//                 <section id="project">
//                     <h2>Projects</h2>
//                     <div class="project-section">
//                         <p>${projects}</p>
//                         <h5>Duration: ${projectsDuration}</h5>
//                     </div>
//                 </section>
//                 <section id="work-experience">
//                     <h2>Work Experience</h2>
//                     <div>
//                     <p><span class="spanMERN">${workExperience}</p>
//                     <p>Duration: ${workDuration}</p>
//                     </div>
//                 </section>
//             </div>
//             <div>
//                 <section id="skills-section">
//                     <h2 id="skills-heading">Skills</h2>
//                      <ul id="skills">
//                     ${skills.map(skill => `<li>${skill}</li>`).join('')}
//                     </ul>
//                 </section>
//                 <section id="work-experience">
//                     <h2>Interests</h2>
//                     <div class="interestButtons">
//             ${interests.map(interest => `<button >${interest}</button>`).join('')}
//                     </div>
//                 </section>
//             </div>
//         </div>
//         <script src="script.js"></script>
//     </body>
//         `;
//         resumeOutput.innerHTML = resumeHtml;
//     });
//     const toggleSkills = () => {
//         if (skillsSection.style.maxHeight) {
//             skillsSection.style.maxHeight = '';
//             toggleArrow.style.transform = 'rotate(0deg)';
//         } else {
//             skillsSection.style.maxHeight = skillsList.scrollHeight + 'px';
//             toggleArrow.style.transform = 'rotate(180deg)';
//         }
//     };
//     skillsSection.addEventListener('click', toggleSkills);
// });
// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.getElementById('resume-form') as HTMLFormElement;
//     var resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent page refresh
//         var profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
//         var profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;
//         var profilePictureURL = "";
//         if (profilePicture) {
//             profilePictureURL = URL.createObjectURL(profilePicture);
//         }
//         // Get form values
//         var name = (document.getElementById('name') as HTMLInputElement).value;
//         var email = (document.getElementById('email') as HTMLInputElement).value;
//         var education = (document.getElementById('education') as HTMLTextAreaElement).value;
//         var educationDuration = (document.getElementById('Educationduration') as HTMLInputElement).value;
//         var workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
//         var workDuration = (document.getElementById('workDuration') as HTMLTextAreaElement).value;
//         var skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
//         var profile = (document.getElementById('profile') as HTMLInputElement).value;
//         var projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
//         var projectsDuration = (document.getElementById('projectsDuration') as HTMLTextAreaElement).value;
//         var interests = (document.getElementById('interests') as HTMLInputElement).value.split(',').map(interest => interest.trim());
//         // Generate resume
//         var resumeHtml = `
//             <header>
//                 <h1 contenteditable="true">${name}</h1>
//                 ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" id="profile-pic" />` : ""}
//             </header>
//             <div class="profile">
//                 <h2>Profile</h2>
//                 <p class="profileDescription" contenteditable="true">${profile}</p>
//             </div>
//             <div class="two-sections">
//                 <div>
//                     <section id="education" contenteditable="true">
//                         <h2>Education</h2>
//                         <h3>${education}</h3>
//                         <h3>Duration: ${educationDuration}</h3>
//                     </section>
//                     <section id="project" contenteditable="true">
//                         <h2>Projects</h2>
//                         <div class="project-section">
//                             <p>${projects}</p>
//                             <h5>${projectsDuration}</h5>
//                         </div>
//                     </section>
//                     <section id="work-experience" contenteditable="true">
//                         <h2>Work Experience</h2>
//                         <div>
//                             <p><span class="spanMERN">${workExperience}</p>
//                             <p>Duration: ${workDuration}</p>
//                         </div>
//                     </section>
//                 </div>
//                 <div>
//                     <section id="skills-section">
//                         <h2 id="skills-heading">Skills</h2>
//                         <ul id="skills">
//                             ${skills.map(skill => `<li contenteditable="true">${skill}</li>`).join('')}
//                         </ul>
//                     </section>
//                     <section id="work-experience" contenteditable="true">
//                         <h2>Interests</h2>
//                         <div class="interestButtons">
//                             ${interests.map(interest => `<button contenteditable="true">${interest}</button>`).join('')}
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         `;
//         resumeOutput.innerHTML = resumeHtml;
//         // Add event listener for editing
//         resumeOutput.addEventListener('input', function (event) {
//             console.log('Content changed:', event.target);
//         });
//     });
//     // Skills section toggle functionality
//     var skillsSection = document.getElementById('skills-section') as HTMLDivElement;
//     var toggleArrow = document.getElementById('toggle-arrow') as HTMLDivElement;
//     var skillsList = document.getElementById('skills') as HTMLUListElement;
//     var toggleSkills = function () {
//         if (skillsSection.style.maxHeight) {
//             skillsSection.style.maxHeight = '';
//             toggleArrow.style.transform = 'rotate(0deg)';
//         } else {
//             skillsSection.style.maxHeight = skillsList.scrollHeight + 'px';
//             toggleArrow.style.transform = 'rotate(180deg)';
//         }
//     };
//     skillsSection.addEventListener('click', toggleSkills);
// });
// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.getElementById('resume-form') as HTMLFormElement;
//     var resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent page refresh
//         var profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
//         var profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;
//         var profilePictureURL = "";
//         if (profilePicture) {
//             profilePictureURL = URL.createObjectURL(profilePicture);
//         }
//         // Get form values
//         var name = (document.getElementById('name') as HTMLInputElement).value;
//         var email = (document.getElementById('email') as HTMLInputElement).value;
//         var education = (document.getElementById('education') as HTMLTextAreaElement).value;
//         var educationDuration = (document.getElementById('Educationduration') as HTMLInputElement).value;
//         var workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
//         var workDuration = (document.getElementById('workDuration') as HTMLTextAreaElement).value;
//         var skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
//         var profile = (document.getElementById('profile') as HTMLInputElement).value;
//         var projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
//         var projectsDuration = (document.getElementById('projectsDuration') as HTMLTextAreaElement).value;
//         var interests = (document.getElementById('interests') as HTMLInputElement).value.split(',').map(interest => interest.trim());
//         // Generate resume
//         var resumeHtml = `
//             <header>
//                 <h1 contenteditable="true">${name}</h1>
//                 ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" id="profile-pic" />` : ""}
//             </header>
//             <div class="profile">
//                 <h2>Profile</h2>
//                 <p class="profileDescription" contenteditable="true">${profile}</p>
//             </div>
//             <div class="two-sections">
//                 <div>
//                     <section id="education" contenteditable="true">
//                         <h2>Education</h2>
//                         <h3>${education}</h3>
//                         <h3>Duration: ${educationDuration}</h3>
//                     </section>
//                     <section id="project" contenteditable="true">
//                         <h2>Projects</h2>
//                         <div class="project-section">
//                             <p>${projects}</p>
//                             <h5>${projectsDuration}</h5>
//                         </div>
//                     </section>
//                     <section id="work-experience" contenteditable="true">
//                         <h2>Work Experience</h2>
//                         <div>
//                             <p><span class="spanMERN">${workExperience}</p>
//                             <p>Duration: ${workDuration}</p>
//                         </div>
//                     </section>
//                 </div>
//                 <div>
//                     <section id="skills-section">
//                         <h2 id="skills-heading">Skills</h2>
//                         <ul id="skills">
//                             ${skills.map(skill => `<li contenteditable="true">${skill}</li>`).join('')}
//                         </ul>
//                     </section>
//                     <section id="work-experience" contenteditable="true">
//                         <h2>Interests</h2>
//                         <div class="interestButtons">
//                             ${interests.map(interest => `<button contenteditable="true">${interest}</button>`).join('')}
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         `;
//         resumeOutput.innerHTML = resumeHtml;
//         // Add event listener for editing
//         resumeOutput.addEventListener('input', function (event) {
//             console.log('Content changed:', event.target);
//         });
//     });
//     // Skills section toggle functionality
//     var skillsSection = document.getElementById('skills-section') as HTMLDivElement;
//     var toggleArrow = document.getElementById('toggle-arrow') as HTMLDivElement;
//     var skillsList = document.getElementById('skills') as HTMLUListElement;
//     var toggleSkills = function () {
//         if (skillsSection.style.maxHeight) {
//             skillsSection.style.maxHeight = '';
//             toggleArrow.style.transform = 'rotate(0deg)';
//         } else {
//             skillsSection.style.maxHeight = skillsList.scrollHeight + 'px';
//             toggleArrow.style.transform = 'rotate(180deg)';
//         }
//     };
//     skillsSection.addEventListener('click', toggleSkills);
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('resume-form') as HTMLFormElement;
//     const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
//     const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
//     const profilePicElement = document.getElementById('profile-pic') as HTMLImageElement;
//     // Function to update the profile picture
//     const updateProfilePicture = () => {
//         if (profilePictureInput.files && profilePictureInput.files[0]) {
//             const newProfilePictureURL = URL.createObjectURL(profilePictureInput.files[0]);
//             if (profilePicElement) {
//                 profilePicElement.src = newProfilePictureURL;
//             }
//         }
//     };
//     // Event listener for profile picture changes
//     if (profilePictureInput) {
//         profilePictureInput.addEventListener('change', updateProfilePicture);
//     }
//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent page refresh
//         // Get form values
//         const name = (document.getElementById('name') as HTMLInputElement).value;
//         const email = (document.getElementById('email') as HTMLInputElement).value;
//         const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//         const educationDuration = (document.getElementById('Educationduration') as HTMLInputElement).value;
//         const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
//         const workDuration = (document.getElementById('workDuration') as HTMLInputElement).value;
//         const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
//         const profile = (document.getElementById('profile') as HTMLInputElement).value;
//         const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
//         const projectsDuration = (document.getElementById('projectsDuration') as HTMLInputElement).value;
//         const interests = (document.getElementById('interests') as HTMLInputElement).value.split(',').map(interest => interest.trim());
//         // Generate resume
//         const resumeHtml = `
//             <header>
//                 <h1 contenteditable="true">${name}</h1>
//                 ${profilePicElement ? `<img src="${profilePicElement.src}" alt="Profile Picture" id="profile-pic" />` : ""}
//             </header>
//             <div class="profile">
//                 <h2>Profile</h2>
//                 <p class="profileDescription" contenteditable="true">${profile}</p>
//             </div>
//             <div class="two-sections">
//                 <div>
//                     <section id="education" contenteditable="true">
//                         <h2>Education</h2>
//                         <h3>${education}</h3>
//                         <h3>Duration: ${educationDuration}</h3>
//                     </section>
//                     <section id="project" contenteditable="true">
//                         <h2>Projects</h2>
//                         <div class="project-section">
//                             <p>${projects}</p>
//                             <h5>Duration: ${projectsDuration}</h5>
//                         </div>
//                     </section>
//                     <section id="work-experience" contenteditable="true">
//                         <h2>Work Experience</h2>
//                         <div>
//                             <p><span class="spanMERN">${workExperience}</span></p>
//                             <p>Duration: ${workDuration}</p>
//                         </div>
//                     </section>
//                 </div>
//                 <div>
//                     <section id="skills-section">
//                         <h2 id="skills-heading">Skills</h2>
//                         <ul id="skills">
//                             ${skills.map(skill => `<li contenteditable="true">${skill}</li>`).join('')}
//                         </ul>
//                     </section>
//                     <section id="interests" contenteditable="true">
//                         <h2>Interests</h2>
//                         <div class="interestButtons">
//                             ${interests.map(interest => `<button contenteditable="true">${interest}</button>`).join('')}
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         `;
//         resumeOutput.innerHTML = resumeHtml;
//     });
//     // Skills section toggle functionality
//     const skillsSection = document.getElementById('skills-section') as HTMLDivElement;
//     const toggleArrow = document.getElementById('toggle-arrow') as HTMLDivElement;
//     const skillsList = document.getElementById('skills') as HTMLUListElement;
//     if (skillsSection && toggleArrow && skillsList) {
//         const toggleSkills = () => {
//             if (skillsSection.style.maxHeight) {
//                 skillsSection.style.maxHeight = '';
//                 toggleArrow.style.transform = 'rotate(0deg)';
//             } else {
//                 skillsSection.style.maxHeight = `${skillsList.scrollHeight}px`;
//                 toggleArrow.style.transform = 'rotate(180deg)';
//             }
//         };
//         skillsSection.addEventListener('click', toggleSkills);
//     }
// });
// document.addEventListener('DOMContentLoaded', () => {
//     // Ensure IDs match those in your HTML
//     const form = document.getElementById('resume-form') as HTMLFormElement;
//     const resumeOutput = document.getElementById('resume-output') as HTMLElement;
//     // Check if form and resumeOutput exist
//     if (!form || !resumeOutput) {
//         console.error('Form or resumeOutput element not found');
//         return;
//     }
//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         // Get form values
//         const name = (document.getElementById('name') as HTMLInputElement).value;
//         const email = (document.getElementById('email') as HTMLInputElement).value;
//         const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//         const educationDuration = (document.getElementById('Educationduration') as HTMLInputElement).value;
//         const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
//         const workDuration = (document.getElementById('workDuration') as HTMLInputElement).value;
//         const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
//         const profile = (document.getElementById('profile') as HTMLInputElement).value;
//         const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
//         const projectsDuration = (document.getElementById('projectsDuration') as HTMLInputElement).value;
//         const interests = (document.getElementById('interests') as HTMLInputElement).value.split(',').map(interest => interest.trim());
//         // Generate resume HTML
//         const resumeHtml = `
//             <header>
//                 <h1>${name}</h1>
//                 <p>Email: ${email}</p>
//             </header>
//             <div class="profile">
//                 <h2>Profile</h2>
//                 <p>${profile}</p>
//             </div>
//             <div class="two-sections">
//                 <div>
//                     <section id="education">
//                         <h2>Education</h2>
//                         <p>${education} <span>Duration: ${educationDuration}</span></p>
//                     </section>
//                     <section id="work-experience">
//                         <h2>Work Experience</h2>
//                         <p>${workExperience} <span>Duration: ${workDuration}</span></p>
//                     </section>
//                     <section id="projects">
//                         <h2>Projects</h2>
//                         <p>${projects} <span>Duration: ${projectsDuration}</span></p>
//                     </section>
//                 </div>
//                 <div>
//                     <section id="skills-section">
//                         <h2>Skills</h2>
//                         <ul>
//                             ${skills.map(skill => `<li>${skill}</li>`).join('')}
//                         </ul>
//                     </section>
//                     <section id="interests">
//                         <h2>Interests</h2>
//                         <ul>
//                             ${interests.map(interest => `<li>${interest}</li>`).join('')}
//                         </ul>
//                     </section>
//                 </div>
//             </div>
//         `;
//         resumeOutput.innerHTML = resumeHtml;
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page refresh
        var profilePictureInput = document.getElementById("profilePicture");
        var profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;
        var profilePictureURL = "";
        if (profilePicture) {
            profilePictureURL = URL.createObjectURL(profilePicture);
        }
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var educationDuration = document.getElementById('Educationduration').value;
        var workExperience = document.getElementById('work-experience').value;
        var workDuration = document.getElementById('workDuration').value;
        var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
        var profile = document.getElementById('profile').value;
        var projects = document.getElementById('projects').value;
        var projectsDuration = document.getElementById('projectsDuration').value;
        var interests = document.getElementById('interests').value.split(',').map(function (interest) { return interest.trim(); });
        // Generate resume
        var resumeHtml = "\n            <header>\n                <h1 contenteditable=\"true\">".concat(name, "</h1>\n                ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" id=\"profile-pic\" />") : "", "\n            </header>\n            <div class=\"profile\">\n                <h2>Profile</h2>\n                <p class=\"profileDescription\" contenteditable=\"true\">").concat(profile, "</p>\n            </div>\n            <div class=\"two-sections\">\n                <div>\n                    <section id=\"education\" \">\n                        <h2>Education</h2>\n                        <div contenteditable=\"true\">\n                        <h3>").concat(education, "</h3>\n                        <h3>Duration: ").concat(educationDuration, "</h3>\n                        </div>\n                    </section>\n                    <section id=\"project\" \">\n                        <h2>Projects</h2>\n                        <div class=\"project-section\" contenteditable=\"true\">\n                            <p>").concat(projects, "</p>\n                            <h5>").concat(projectsDuration, "</h5>\n                        </div>\n                    </section>\n                    <section id=\"work-experience\" \">\n                        <h2>Work Experience</h2>\n                        <div contenteditable=\"true\">\n                            <p><span class=\"spanMERN\">").concat(workExperience, "</p>\n                            <p>Duration: ").concat(workDuration, "</p>\n                        </div>\n                    </section>\n                </div>\n                <div>\n                    <section id=\"skills-section\">\n                        <h2 id=\"skills-heading\">Skills</h2>\n                        <ul id=\"skills\" contenteditable=\"true\">\n                            ").concat(skills.map(function (skill) { return "<li >".concat(skill, "</li>"); }).join(''), "\n                        </ul>\n                    </section>\n                    <section id=\"work-experience\">\n                        <h2>Interests</h2>\n                        <div class=\"interestButtons\" contenteditable=\"true\">\n                            ").concat(interests.map(function (interest) { return "<button >".concat(interest, "</button>"); }).join(''), "\n                        </div>\n                    </section>\n                </div>\n            </div>\n        ");
        resumeOutput.innerHTML = resumeHtml;
        // Add event listener for editing
        resumeOutput.addEventListener('input', function (event) {
            console.log('Content changed:', event.target);
        });
    });
    // Skills section toggle functionality
    var skillsSection = document.getElementById('skills-section');
    var toggleArrow = document.getElementById('toggle-arrow');
    var skillsList = document.getElementById('skills');
    var toggleSkills = function () {
        if (skillsSection.style.maxHeight) {
            skillsSection.style.maxHeight = '';
            toggleArrow.style.transform = 'rotate(0deg)';
        }
        else {
            skillsSection.style.maxHeight = skillsList.scrollHeight + 'px';
            toggleArrow.style.transform = 'rotate(180deg)';
        }
    };
    skillsSection.addEventListener('click', toggleSkills);
});
