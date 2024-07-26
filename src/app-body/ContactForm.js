import './ContactForm.css';

function ContactForm() {
    return (
        <div className="form-container">
            <div id="contactInfo">
                <h1 class="title">Nice to meet you!</h1>
                <form target="_blank" action="https://formsubmit.co/karla.zamora186@gmail.com" method="POST">
                    <div class="form-group">
                        <div class="form-row">
                            <div class="col">
                                <input type="text" name="name" class="form-control m-2" placeholder="Full Name" required />
                            </div>
                            <div class="col">
                                <input type="email" name="email" class="form-control m-2" placeholder="Email Address" required />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Message" class="form-control m-2" name="message" rows="10" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-md btn-dark btn-block submit-btn">Send Email</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
