document.addEventListener('DOMContentLoaded',() => { 
    const contactForm=document.getElementById('contactForm');
    const output = document.getElementById('output');

    contactForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        const name=document.getElementById('name').value;
        const email=document.getAnimations('email').value;
        const message=document.getElementById('message').value;
        const subject=document.getElementById('subject').value;
        const contact=document.getElementById('contact').value;
        
        output.innerHTML=`
        <h2> Submitted Information:</h2>
        <p><strong><Name:</strong> ${name}</p>
        <p><strong><Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        `;

        contactForm.reset ();
   });
});