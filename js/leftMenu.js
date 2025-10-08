// leftMenu.js
function createSidebar(containerId) {
  const menuItems = [
    { link: "dashboard.html", icon: "fal fa-th-large", text: "หน้าแรก" },
    { link: "project.html", icon: "fal fa-suitcase", text: "การบริการโครงการ" },  
    {
      icon: "fal fa-flag",
      text: "อนุมัติโครงการ",
      sub: [ 
        { link: "project-approval.html", text: "อนุมัติโครงการ" }, 
      ],
    }, 
    {
      icon: "fal fa-archive",
      text: "บริหารด้านกฏหมาย",
      sub: [ 
        { link: "legal-management.html", text: "บริหารด้านกฏหมาย" }, 
      ],
    },  
    {
      icon: "fal fa-list",
      text: "รายงาน",
      sub: [ 
        { link: "reports.html", text: "รายงาน" }, 
      ],
    }, 
    {
      icon: "fal fa-cog",
      text: "ตั้งค่าการใช้งาน",
      sub: [ 
        { link: "usage-settings.html", text: "ตั้งค่าการใช้งาน" }, 
      ],
    }, 
  ];

  const currentPage = window.location.pathname.split("/").pop();

  let menuHTML = "";
  menuItems.forEach(item => {
    if (item.sub) {
      const isSubActive = item.sub.some(sub => sub.link === currentPage);
      const showClass = isSubActive ? "show" : "";
      let subMenuHTML = "";

      item.sub.forEach(sub => {
        const isActive = sub.link === currentPage ? "active" : "";
        subMenuHTML += `
          <a class="sidebar-link ${isActive}" href="${sub.link}">
            <span class="align-middle">${sub.text}</span>
          </a>
        `;
      });

      menuHTML += `
        <li class="sidebar-item item-sup ${showClass}">
          <a class="sidebar-link toggle-sub" href="#">
            <i class="${item.icon}"></i>
            <span class="align-middle">${item.text}</span>
            <i class="fas fa-angle-down arrow"></i>
          </a>
          <div class="sup-menu">
            ${subMenuHTML}
          </div>
        </li>
      `;
    } else {
      const isActive = item.link === currentPage ? "active" : "";
      menuHTML += `
        <li class="sidebar-item ${isActive}">
          <a class="sidebar-link" href="${item.link}">
            <i class="${item.icon}"></i>
            <span class="align-middle">${item.text}</span>
          </a>
        </li>
      `;
    }
  });

  const sidebarHTML = `
    <nav id="sidebar" class="sidebar js-sidebar">
      <div class="sidebar-content js-simplebar">
        <img src="img/mmg2.png" class="logo" alt="Muang Mai Guthrie PCL.">
        <br>
        <ul class="sidebar-nav"> 
          ${menuHTML}
        </ul>  
      </div>
    </nav>
  `;

  document.getElementById(containerId).innerHTML = sidebarHTML;

  // toggle submenu เมื่อกด
  document.querySelectorAll(".toggle-sub").forEach(el => {
    el.addEventListener("click", e => {
      e.preventDefault();
      const parent = el.closest(".item-sup");
      parent.classList.toggle("show");
    });
  });
}

window.createSidebar = createSidebar;
