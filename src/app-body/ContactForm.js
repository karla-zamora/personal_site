import './ContactForm.css';
import Container from 'react-bootstrap/Container'

function ContactForm() {
    return (
        <div className="form-container">
            <Container id="contactInfo" className='m-3'>
                <h1 class="title">Nice to meet you!</h1>
                <hr></hr>
                <p>Submitting will take you to another page.</p>
                <form target="_blank" action="https://formsubmit.co/karla.zamora186@gmail.com" method="POST">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <input type="text" name="name" class="form-control mr-2 mt-2 p-2" placeholder="Full Name" required />
                            </div>
                            <div class="col">
                                <input type="email" name="email" class="form-control mr-2 mt-2 p-2" placeholder="Email Address" required />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" class="form-control mr-2 mt-2 p-2" name="message" rows="10" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-md btn-dark btn-block submit-btn">Send Email</button>
                </form>
            </Container>
        </div>
    );
}

export default ContactForm;
