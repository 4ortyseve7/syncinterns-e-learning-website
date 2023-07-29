const mainDiv = document.getElementById('mainDiv');
const certification = document.getElementById('certification');
const courses = document.getElementById('courses');
const aboutus = document.getElementById('aboutus');
const contact = document.getElementById('contact');
const loginsignup = document.getElementById('loginsignup');

function homeView(){
    mainDiv.style.display = 'block';
    certification.style.display = 'none';
    courses.style.display = 'none';
    aboutus.style.display = 'none';
    contact.style.display = 'none';
    loginsignup.style.display = 'none';

}
function certiView(){
    mainDiv.style.display = 'none';
    certification.style.display = 'block';
    courses.style.display = 'none';
    aboutus.style.display = 'none';
    contact.style.display = 'none';
    loginsignup.style.display = 'none';

}
function courseView(){
    mainDiv.style.display = 'none';
    certification.style.display = 'none';
    courses.style.display = 'block';
    aboutus.style.display = 'none';
    contact.style.display = 'none';
    loginsignup.style.display = 'none';

}
function aboutView(){
    mainDiv.style.display = 'none';
    certification.style.display = 'none';
    courses.style.display = 'none';
    aboutus.style.display = 'block';
    contact.style.display = 'none';
    loginsignup.style.display = 'none';

}
function contactView(){
    mainDiv.style.display = 'none';
    certification.style.display = 'none';
    courses.style.display = 'none';
    aboutus.style.display = 'none';
    contact.style.display = 'block';
    loginsignup.style.display = 'none';

}
function loginsignupView(){
    mainDiv.style.display = 'none';
    certification.style.display = 'none';
    courses.style.display = 'none';
    aboutus.style.display = 'none';
    contact.style.display = 'none';
    loginsignup.style.display = 'block';

}


// mainDiv.onclick = homeView();
// certification.onclick = certiView();
// courses.onclick = courseView();
// aboutus.onclick = aboutView();
// contact.onclick = contactView();
// loginsignup.onclick = loginsignupView();