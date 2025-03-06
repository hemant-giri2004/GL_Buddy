const conversation = {
    "hi": "Helloo!",
    "hey": "Helloo!",
    "how are you?": "I'm good.<br><br>Go ahead and write the number of any query. 😃✨ <br>1.&emsp;Student's Section Enquiry.<br>2.&emsp;Faculty Section Enquiry.<br>3.&emsp;Parent's Section Enquiry.<br>4.&emsp;Visitor's Section Enquiry.",
    "great": "Go ahead and write the number of any query. 😃✨ <br>1.&emsp;Student's Section Enquiry.<br>2.&emsp;Faculty Section Enquiry.<br>3.&emsp;Parent's Section Enquiry.<br>4.&emsp;Visitor's Section Enquiry.",
    "good": "Go ahead and write the number of any query. 😃✨ <br>2.&emsp;Faculty Section Enquiry.<br>3.&emsp;Parent's Section Enquiry.<br>4.&emsp;Visitor's Section Enquiry.",
    "fine": "Go ahead and write the number of any query. 😃✨ <br>2.&emsp;Faculty Section Enquiry.<br>3.&emsp;Parent's Section Enquiry.<br>4.&emsp;Visitor's Section Enquiry.",
    "thank you": "Your Welcome 😄",
    "thanks": "Your Welcome 😄",
    "bye": "Thank You for visiting!..",
    "what do you do?": "I am made to give Information about GL Buddy college.",
    "what else can you do?": "I can help you know more about GL Buddy",
    "1": "<b>STUDENT</b><br>The following are frequently searched terms....<br>Please select one from the options below : <br> <br> 1.1 Curriculars <br>1.2  Extra-Curriculars<br>1.3  Administrative<br>1.4 Examination <br>1.5 Placements </b>",

    // Add ALL other conversation pairs here following same pattern
    "1.1":
    "<b>  CURRICULAR <br>  These are the top results: <br> 1.1.1 Academic Calendar <br> 1.1.2 Syllabus </b>",
    "1.1.1":
    "<b> 1.1.1 Academic Calender <br>The link to Academic Calender👉 <a href=\"https://www.glbitm.org/academic-calendar/\">Click Here</a> </b>",
    "1.1.2":
    "<b > 1.1.2 Syllabus <br>The link to Syllabus👉<a href=\"https://www.glbitm.org/courses-and-admission/\">Click Here</a> </b>",

    "1.2":
    "<b>EXTRA-CURRICULAR<br>These are the top results: <br> <br> 1.2.1 Events<br> 1.2.2 Student Chapters <br>",
    "1.2.1":
    "<b > 1.2.1 Events<br>The link to Events👉 <a href=\"https://www.glbitm.org/events/\">Click Here</a></b>",
    "1.2.2":
    "<b > 1.2.2 Student Chapters<br>The link to Student Chapters👉<a href=\"https://www.glbitm.org/student-chapter/\">Click Here</a> </b>",

    "1.3":
    "<b>1.3 ADMINISTRATIVE<br>These are the top results: <br> <br> 1.3.1 Students Portal<br> 1.3.2 Notices </b>",
    "1.3.1":
    "<b> 1.3.1 Students Portal<br>The link to Students Portal👉 <a href=\"https://glbg.servergi.com:8072/ISIMGLB/Login\">Click Here</a> </b>",
    "1.3.2":
    "<b> 1.3.2 Notices<br>The link to Notices👉 <a href=\"https://glbg.servergi.com:8072/ISIMGLB/Utilities/Circular\">Click Here</a> </b>",

    "1.4":
    "<b > EXAMINATION <br>These are the top results:<br> 1.4.1 Notices<br> 1.4.2 Examination Process <br> 1.4.3 Question Paper Archive </b>",
    "1.4.1":
    "<b > 1.4.1 Notices<br>The link to Notices👉 <a href=\"https://glbg.servergi.com:8072/ISIMGLB/Utilities/Circular\">Click Here</a> </b>",
    "1.4.2":
    "<b > 1.4.2 Examination Process<br>The link to Examination Process👉<a href=\"https://www.glbitm.org/uploads/2023/Examinaton-Process2023.pdf\">Click Here</a> </b>",
    "1.4.3":
    "<b > 1.4.3 Question Paper Archive<br>The link to Archives👉 <a href=\"https://aktu.ac.in/model-question-paper.html\">Click Here</a> </b>",

    "1.5":
    "<b > PLACEMENTS These are the top results:<br> 1.5.1 Placements<br> 1.5.2 Our Recruiters <br> 1.5.3 Placement Statistics </b>",
    "1.5.1":
    "<b> 1.5.1 Placements<br>The link to Placements👉 <a href=\"https://www.glbitm.org/placement-record/\">Click Here</a> </b>",
    "1.5.2":
    "<b> 1.5.2 Our Recruiters<br>The link to Recruiters👉<a href=\"https://www.glbitm.org/our-recruiters/\">Click Here</a> </b>",
    "1.5.3":
    "<b > 1.5.3 Placement Statistics<br>The link to Placement Statistics👉 <a href=\"https://www.glbitm.org/placement-record/\">Click Here</a> </b>",

    "2":
    "<b >FACULTY<br>The following are frequently searched terms related to faculty. Please select one from the options below :</br></br>2.1 Portals & Administration<br>2.2  Change Personal Details<br>2.3  Examination </b>",
    
    "2.1":
    "<b > PORTALS & ADMINISTRATION These are the top results:<br> 2.1.1 Biometric Attendance System <br>",
    "2.1.1":
    "<b> 2.1.1 Biometric Attendance<br>The link to Biometric Attendance👉Click Here </b>",

    "2.2":
    "<b > CHANGE PERSONAL DETAILS These are the top results:<br> <br> 2.2.1 Site Login <br> </b>",
    "2.2.1":
    "<b> 2.2.1 Site Login<br>The link to Site Login👉<a href=\"https://www.glbitm.org/login/\">Click Here</a> </b>",
   
    "2.3":
    "<b > EXAMINATION <br>These are the top results:<br> <br> 2.3.1 Notices<br> 2.3.2 Question Paper Archive </b>",
    "2.3.1":
    "<b> 2.3.1 Notices <br>The link to Notices 👉 <a href=\"https://www.glbitm.org/examination/\>Click Here</a> </b>",
    "2.3.2":
    "<b> 2.3.2 Question Paper Archive <br>The link to Archive👉<a href=\"https://aktu.ac.in/model-question-paper.html\">Click Here</a> </b>",
  
    "3":
    "<b> PARENTS <br>The following are frequently searched terms related to Parents. Please select one from the options below : <br> <br> 3.1 About Us <br>3.2 Notices <br>3.3 Fee Payment <br>3.4 Placements </b> " ,

    "3.1":
    "<b > ABOUT US<br>These are the top results:<br> <br> 3.1.1 About GL Bajaj<br> 3.1.2 Director's Address <br>",
    "3.1.1":
    "<b > 3.1.1 About GL Buddy<br>The link to About GL Buddy👉 <a href=\"https://www.glbitm.org/best-engineering-institute-in-greater-noida\">Click Here</a> </b>",
    "3.1.2":
    "<b > 3.1.2 Director's Address <br>The link to Director's Address👉<a href=\"https://www.glbitm.org/director-message/\">Click Here</a> </b>",

    "3.2":
    "<b > NOTICES<br>These are the top results:<br> <br> 3.2.1 All Notices  </b>",
    "3.2.1":
    "<b > 3.2.1 All Notices <br>The link to All Notices👉 <a href=\"https://glbg.servergi.com:8072/ISIMGLB/Login\">Click Here</a> </b>",

    "3.3":
    "<b > ABOUT US<br>These are the top results:<br> <br>3.3.1 Payment Details <br> 3.3.2 Online Payment Portal </b>",
    "3.3.1":
    "<b > 3.3.1 Payment Details<br>The link to Payment Details 👉 <a href=\"https://glbg.servergi.com:8072/ISIMGLB/Login\">Click Here</a> </b>",
    "3.3.2":
    "<b > 3.3.2 Payment Portal <br>The link to Payment Portal👉<a href=\"https://glbg.servergi.com:8072/ISIMGLB/Login\">Click Here</a> </b>",

    "3.4":
    "<b > PLACEMENTS These are the top results:<br> <br>3.4.1 Placements<br> 3.4.2 Our Recruiters <br> 3.4.3 Placement Statistics </b>",
    "3.4.1":
    "<b> 3.4.1 Placements<br>The link to Placements👉 <a href=\"https://www.glbitm.org/ placement-record/\">Click Here</a> </b>",
    "3.4.2":
    "<b> 3.4.2 Our Recruiters<br>The link to Recruiters👉<a href=\"https://www.glbitm.org/our-recruiters/\">Click Here</a> </b>",
    "3.4.3":
    "<b > 3.4.3 Placement Statistics<br>The link to Placement Statistics👉 <a href=\"https://www.glbitm.org/placement-record/\">Click Here</a> </b>",

    "4":
    "<b VISITORS <br>The following are frequently searched terms related to visitors. Please select one from the options below : <br> <br> 4.1 About Us<br>4.2 Programs We Offer <br>4.3 Student Bodies <br>4.4 Extra-Curricular </b>",
    
    "4.1":
    "<b > ABOUT US<br>These are the top results:<br> <br>4.1.1 About GL Buddy<br> 4.1.2 Director's Address <br>",
    "4.1.1":
    "<b > 4.1.1 About GL Buddy<br>The link to About CRCE👉 <a href=\"https://www.glbitm.org/best-engineering-institute-in-greater-noida\">Click Here</a> </b>",
    "4.1.2":
    "<b > 4.1.2 Director's Address <br>The link to Director's Address👉<a href=\"https://www.glbitm.org/director-message/\">Click Here</a> </b>",

    "4.2":
    "<b > PROGRAMS WE OFFER <br>These are the top results:<br> <br>4.2.1 Under-Graduate <br> 4.2.2 Post-Graduate<br>",
    "4.2.1":
    "<b > 4.2.1 Under-Graduate<br>The link to Under-Graduate👉 <a href=\"https://www.glbitm.org/courses-and-admission/\">Click Here</a> </b>",
    "4.2.2":
    "<b > 4.2.2 Post-Graduate <br>The link to Post-Graduate👉<a href=\"https://www.glbitm.org/courses-and-admission/\">Click Here</a> </b>",

    "4.3":
    "<b > STUDENT BODIES <br>These are the top results: <br> 4.3.1 Students Chapter <br> 4.3.2 Students Project Groups </b>",
    "4.3.1":
    "<b > 4.3.1 Students Chapter <br>The link to Students Chapter 👉<a href=\"https://www.glbitm.org/student-chapter/\">Click Here</a> </b>",
    "4.3.2":
    "<b > 4.3.2 Students Project Groups <br>The link to Students Project Groups👉 <a href=\"https://www.glbitm.org/student-projects/\">Click Here</a> </b>",

    "4.4":
    "<b > EXTRA-CURRICULAR <br>These are the top results:<br> <br>4.4.1 Events  <br> 4.4.2 Institute Innovation Cell </b>",
    "4.4.1":
    "<b > 4.4.1 Events    <br>The link to Events   👉 <a href=\"https://www.glbitm.org/events/\">Click Here</a> </b>",
    "4.4.2":
    "<b > 4.4.2 Institute Innovation Cell <br>The link to Institute Innovation Cell 👉<a href=\"https://www.glbitm.org/campus-facilities/about-the-centre/141/231/236/\">Click Here</a> </b>",

};

const chatArea = document.getElementById('chatArea');
const userInput = document.getElementById('userInput');

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.innerHTML = message;
    chatArea.appendChild(messageDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function getBotResponse(userMessage) {
    const normalizedMessage = userMessage.toLowerCase().trim();
    return conversation[normalizedMessage] || "I'm sorry, I didn't understand that. Please try again.";
}

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage('user', message);
    
    setTimeout(() => {
        const response = getBotResponse(message);
        appendMessage('bot', response);
    }, 500);

    userInput.value = '';
}

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});