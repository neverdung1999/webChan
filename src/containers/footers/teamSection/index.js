import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <div>
        <section id="team" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>Our Team</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic">
                    <img src="assets/img/team-1.jpg" alt />
                  </div>
                  <div className="details">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                      <a href>
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href>
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic">
                    <img src="assets/img/team-2.jpg" alt />
                  </div>
                  <div className="details">
                    <h4>Sarah Jhinson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                      <a href>
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href>
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic">
                    <img src="assets/img/team-3.jpg" alt />
                  </div>
                  <div className="details">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                      <a href>
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href>
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <div className="pic">
                    <img src="assets/img/team-4.jpg" alt />
                  </div>
                  <div className="details">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                      <a href>
                        <i className="fa fa-twitter" />
                      </a>
                      <a href>
                        <i className="fa fa-facebook" />
                      </a>
                      <a href>
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href>
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
