import React from "react";

const ContactForm = () => {
  return (
    <div style={{ background: "#d8d8d8" }}>
      <section class="mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact me
        </h2>

        <p class="text-center w-responsive mx-auto mb-5">
          Schedule your personal training and consultations!
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                    ></input>
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      class="form-control"
                    ></input>
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    ></input>
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <div
                      id="date-picker-example"
                      class="md-form md-outline input-with-post-icon datepicker"
                      inline="true"
                    >
                      <input
                        placeholder="Select date"
                        type="text"
                        id="example"
                        class="form-control"
                      ></input>
                      {/* <label for="example">Try me...</label> */}
                      <i className="fas fa-calendar input-prefix"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                  <select class="browser-default custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                    <label for="message">Select training type</label>
                  </div>
                </div>
              </div>
              
            </form>

            <div class="text-center text-md-left">
              <button class="btn btn-primary">Send</button>
              {/* onClick={`document.getElementById('contact-form').submit()`} */}
            </div>
            <div class="status"></div>
          </div>

          {/* <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Belgrade,Serbia</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+381640757265</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>miticgoran.pt@icloud.com</p>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
