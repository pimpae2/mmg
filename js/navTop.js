function createNavTop(containerId, user = {}) { 

  const navHTML = `
    <nav class="navbar navbar-expand navbar-light navbar-bg">
      <a class="sidebar-toggle js-sidebar-toggle">
        <i class="fal fa-bars"></i>
      </a> 
      <div class="navbar-collapse collapse">
        <ul class="navbar-nav navbar-align w-100 justify-content-between">
          <li class="nav-item nav-date text-center"> 
            <img src="img/mmg2.png" alt="mmg2" class="pc-x">
          </li>
          <li class="nav-item dropdown">
            <!-- สำหรับ mobile -->
            <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
              <img src="img/avatar.jpg" alt="avatar" class="avatarx">
            </a>
            <!-- สำหรับ desktop -->
            <a class="nav-link   d-none d-sm-inline-block" href="#"  >
              <img src="img/avatar.jpg" class="avatar img-fluid rounded me-1" alt="Super Admin" />
              <span class="text-dark">Super Admin</span>
            </a> 
            <a class="nav-link d-sm-inline-block" href="login.html">
              <i class="fas fa-sign-out-alt me-1"></i>
              <span class="text-dark">Logout</span>
            </a> 
          </li>
        </ul>
      </div>
    </nav>
  `;

  document.getElementById(containerId).innerHTML = navHTML;
}

window.createNavTop = createNavTop;
