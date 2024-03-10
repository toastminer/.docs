// Function to toggle sidebar visibility
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");
    sidebar.classList.toggle("expanded");
    content.classList.toggle("hidden");
  }

// function to switch between tabs
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  evt.currentTarget.classList.add("active");
}

// function to toggle sidebar visibility and arrow rotation
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var mainContent = document.getElementById('mainContent');
  var button = document.querySelector('.toggle-button');
  
  sidebar.classList.toggle('hidden');
  mainContent.style.marginLeft = sidebar.classList.contains('hidden') ? '0' : '200px';
  button.classList.toggle('hidden');
}

  