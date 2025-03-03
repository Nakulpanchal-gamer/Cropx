import React from 'react'
import { Link } from 'react-router-dom'

export const UserNavbar = () => {
  return (
    <>
    <nav className="app-header navbar navbar-expand bg-body">
  {/*begin::Container*/}
  <div className="container-fluid">
    {/*begin::Start Navbar Links*/}
    <ul className="navbar-nav">
      <li className="nav-item">
      <a class="nav-link" data-lte-toggle="sidebar" href="#" role="button">
          <i className="bi bi-list" />
        </a>
      </li>
      <li className="nav-item d-none d-md-block">
        <Link to="/user" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-item d-none d-md-block">
        <Link to="/user" className="nav-link">
          Contact
        </Link>
      </li>
      <li className="nav-item d-none d-md-block">
        <Link to="/Signup" className="nav-link">
          Signup
        </Link>
      </li>
      <li className="nav-item d-none d-md-block">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
    {/*end::Start Navbar Links*/}
    {/*begin::End Navbar Links*/}
    <ul className="navbar-nav ms-auto">
      {/*begin::Navbar Search*/}
      {/* <li class="nav-item dropdown">
        <button
          class="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
          data-bs-display="static"
        >
          <span class="theme-icon-active">
            <i class="my-1"></i>
          </span>
          <span class="d-lg-none ms-2" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="bd-theme-text"
          style="--bs-dropdown-min-width: 8rem;"
        >
          <li>
            <button
              type="button"
              class="dropdown-item d-flex align-items-center active"
              data-bs-theme-value="light"
              aria-pressed="false"
            >
              <i class="bi bi-sun-fill me-2"></i>
              Light
              <i class="bi bi-check-lg ms-auto d-none"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="dropdown-item d-flex align-items-center"
              data-bs-theme-value="dark"
              aria-pressed="false"
            >
              <i class="bi bi-moon-fill me-2"></i>
              Dark
              <i class="bi bi-check-lg ms-auto d-none"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              class="dropdown-item d-flex align-items-center"
              data-bs-theme-value="auto"
              aria-pressed="true"
            >
              <i class="bi bi-circle-fill-half-stroke me-2"></i>
              Auto
              <i class="bi bi-check-lg ms-auto d-none"></i>
            </button>
          </li>
        </ul>
      </li> */}

      <li className="nav-item">
        <a
          className="nav-link"
          data-widget="navbar-search"
          href="#"
          role="button"
        >
          <i className="bi bi-search" />
        </a>
      </li>
      {/*end::Navbar Search*/}
      {/*begin::Messages Dropdown Menu*/}
      <li className="nav-item dropdown">
        <a className="nav-link" data-bs-toggle="dropdown" href="#">
          <i className="bi bi-chat-text" />
          <span className="navbar-badge badge text-bg-danger">3</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
          <a href="#" className="dropdown-item">
            {/*begin::Message*/}
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="../../assets/img/user1-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 rounded-circle me-3"
                />
              </div>
              <div className="flex-grow-1">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-end fs-7 text-danger">
                    <i className="bi bi-star-fill" />
                  </span>
                </h3>
                <p className="fs-7">Call me whenever you can...</p>
                <p className="fs-7 text-secondary">
                  <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
                </p>
              </div>
            </div>
            {/*end::Message*/}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            {/*begin::Message*/}
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="../../assets/img/user8-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 rounded-circle me-3"
                />
              </div>
              <div className="flex-grow-1">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-end fs-7 text-secondary">
                    <i className="bi bi-star-fill" />
                  </span>
                </h3>
                <p className="fs-7">I got your message bro</p>
                <p className="fs-7 text-secondary">
                  <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
                </p>
              </div>
            </div>
            {/*end::Message*/}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            {/*begin::Message*/}
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src="../../assets/img/user3-128x128.jpg"
                  alt="User Avatar"
                  className="img-size-50 rounded-circle me-3"
                />
              </div>
              <div className="flex-grow-1">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-end fs-7 text-warning">
                    <i className="bi bi-star-fill" />
                  </span>
                </h3>
                <p className="fs-7">The subject goes here</p>
                <p className="fs-7 text-secondary">
                  <i className="bi bi-clock-fill me-1" /> 4 Hours Ago
                </p>
              </div>
            </div>
            {/*end::Message*/}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">
            See All Messages
          </a>
        </div>
      </li>
      {/*end::Messages Dropdown Menu*/}
      {/*begin::Notifications Dropdown Menu*/}
      <li className="nav-item dropdown">
        <a className="nav-link" data-bs-toggle="dropdown" href="#">
          <i className="bi bi-bell-fill" />
          <span className="navbar-badge badge text-bg-warning">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
          <span className="dropdown-item dropdown-header">
            15 Notifications
          </span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="bi bi-envelope me-2" /> 4 new messages
            <span className="float-end text-secondary fs-7">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="bi bi-people-fill me-2" /> 8 friend requests
            <span className="float-end text-secondary fs-7">12 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="bi bi-file-earmark-fill me-2" /> 3 new reports
            <span className="float-end text-secondary fs-7">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">
            {" "}
            See All Notifications{" "}
          </a>
        </div>
      </li>
      {/*end::Notifications Dropdown Menu*/}
      {/*begin::Fullscreen Toggle*/}
      <li className="nav-item">
        <a className="nav-link" href="#" data-lte-toggle="fullscreen">
          <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen" />
          <i
            data-lte-icon="minimize"
            className="bi bi-fullscreen-exit"
            style={{ display: "none" }}
          />
        </a>
      </li>
      {/*end::Fullscreen Toggle*/}
      {/*begin::User Menu Dropdown*/}
      <li className="nav-item dropdown user-menu">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <img
            src="../assets/img/user2-160x160.jpg"
            className="user-image rounded-circle shadow"
            alt="User Image"
          />
          <span className="d-none d-md-inline">Alexander Pierce</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
          {/*begin::User Image*/}
          <li className="user-header text-bg-primary">
            <img
              src="../assets/img/user2-160x160.jpg"
              className="rounded-circle shadow"
              alt="User Image"
            />
            <p>
              Alexander Pierce - Web Developer
              <small>Member since Nov. 2023</small>
            </p>
          </li>
          {/*end::User Image*/}
          {/*begin::Menu Body*/}
          <li className="user-body">
            {/*begin::Row*/}
            <div className="row">
              <div className="col-4 text-center">
                <a href="#">Followers</a>
              </div>
              <div className="col-4 text-center">
                <a href="#">Sales</a>
              </div>
              <div className="col-4 text-center">
                <a href="#">Friends</a>
              </div>
            </div>
            {/*end::Row*/}
          </li>
          {/*end::Menu Body*/}
          {/*begin::Menu Footer*/}
          <li className="user-footer">
            <a href="#" className="btn btn-default btn-flat">
              Profile
            </a>
            <a href="#" className="btn btn-default btn-flat float-end">
              Sign out
            </a>
          </li>
          {/*end::Menu Footer*/}
        </ul>
      </li>
      {/*end::User Menu Dropdown*/}
    </ul>
    {/*end::End Navbar Links*/}
  </div>
  {/*end::Container*/}
</nav>
{/* <div class="tc wf ig pb no">
        <div class="pc h io pa ra" :class="navigationOpen ? '!-ud-visible' : 'd'">
          <label class="rc ab i">
            <input type="checkbox" :value="darkMode" @change="darkMode = !darkMode" class="pf vd yc uk h r za ab" />
            <!-- Icon Sun -->
            <svg :class="{ 'wn' : page === 'home', 'xh' : page === 'home' && stickyMenu }" class="th om" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0908 18.6363C10.3549 18.6363 8.69 17.9467 7.46249 16.7192C6.23497 15.4916 5.54537 13.8268 5.54537 12.0908C5.54537 10.3549 6.23497 8.69 7.46249 7.46249C8.69 6.23497 10.3549 5.54537 12.0908 5.54537C13.8268 5.54537 15.4916 6.23497 16.7192 7.46249C17.9467 8.69 18.6363 10.3549 18.6363 12.0908C18.6363 13.8268 17.9467 15.4916 16.7192 16.7192C15.4916 17.9467 13.8268 18.6363 12.0908 18.6363ZM12.0908 16.4545C13.2481 16.4545 14.358 15.9947 15.1764 15.1764C15.9947 14.358 16.4545 13.2481 16.4545 12.0908C16.4545 10.9335 15.9947 9.8236 15.1764 9.00526C14.358 8.18692 13.2481 7.72718 12.0908 7.72718C10.9335 7.72718 9.8236 8.18692 9.00526 9.00526C8.18692 9.8236 7.72718 10.9335 7.72718 12.0908C7.72718 13.2481 8.18692 14.358 9.00526 15.1764C9.8236 15.9947 10.9335 16.4545 12.0908 16.4545ZM10.9999 0.0908203H13.1817V3.36355H10.9999V0.0908203ZM10.9999 20.8181H13.1817V24.0908H10.9999V20.8181ZM2.83446 4.377L4.377 2.83446L6.69082 5.14828L5.14828 6.69082L2.83446 4.37809V4.377ZM17.4908 19.0334L19.0334 17.4908L21.3472 19.8046L19.8046 21.3472L17.4908 19.0334ZM19.8046 2.83337L21.3472 4.377L19.0334 6.69082L17.4908 5.14828L19.8046 2.83446V2.83337ZM5.14828 17.4908L6.69082 19.0334L4.377 21.3472L2.83446 19.8046L5.14828 17.4908ZM24.0908 10.9999V13.1817H20.8181V10.9999H24.0908ZM3.36355 10.9999V13.1817H0.0908203V10.9999H3.36355Z" fill=""/>
            </svg>
            <!-- Icon Sun -->
            <img class="xc nm" src="images/icon-moon.svg" alt="Moon" />
          </label>
        </div> */}
        </>
  )
}
