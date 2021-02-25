import React, { Component } from 'react'

class index extends Component {
  render() {
    return (
      <div>
        <section id="contact" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>Contact Us</h2>
              <p>
                Sed tamen tempor magna labore dolore dolor sint tempor duis
                magna elit veniam aliqua esse amet veniam enim export quid quid
                veniam aliqua eram noster malis nulla duis fugiat culpa esse
                aute nulla ipsum velit export irure minim illum fore
              </p>
            </div>
            <div className="row contact-info">
              <div className="col-md-4">
                <div className="contact-address">
                  <i className="ion-ios-location-outline" />
                  <h3>Address</h3>
                  <address>A108 Adam Street, NY 535022, USA</address>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-phone">
                  <i className="ion-ios-telephone-outline" />
                  <h3>Phone Number</h3>
                  <p>
                    <a href="tel:+155895548855">+1 5589 55488 55</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-email">
                  <i className="ion-ios-email-outline" />
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452"
              width="100%"
              height={380}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
          <div className="container">
            <div className="form">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate" />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                    defaultValue={''}
                  />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default index
