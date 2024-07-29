document.getElementById('ni_contact').innerHTML = '< Contact me />';
$('#ni_contact').css('color','#63ee9f')


document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); 

            const email = document.getElementById('email').value;
            const data = { 
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                msg: document.getElementById('msg').value
            };

            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                document.getElementById('email').value = '';
                if (result['msg'] == true){
                        alert("Form submit successfully!");
                        window.location.href="/";
                }
                else{
                    alert(result['msg'])
                }
                

            })
            .catch(error => {
                console.error('Error:', error);
            });
        });

