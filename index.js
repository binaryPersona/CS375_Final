//sends a GET request to the server to obtain the login.html contents, populates the page with the response
function loadLogin() {
	titleDiv = document.getElementById('pageTitle');
	titleDiv.innerHTML = 'Login Page';
  titleDiv = document.getElementById('headerTitle');
  titleDiv.innerHTML = 'Welcome Back!';
	
  $.ajax({
    type: "GET",
    url: './loadLoginPage',
    dataType: "html",
 
    success: function(result) {
      document.getElementById('body').innerHTML = result;
    },
    error: function(jgXHR, textStatus, errorThrown) {
      alert("Error: " + textStatus + " " + errorThrown);
    }
  });
}

//sends a POST request to the server to authentificate the user
//calls loadTasks() if the function succeeds
function login() {
  userEmail = document.getElementById('loginEmail').value;
  userPassword = document.getElementById('loginPassword').value;
  
  params={
    email : userEmail,
    password : userPassword,
  };

  $.ajax({
    type: "POST",
    url: './login',
    dataType: "json",
    data: params,
 
    success: function(result) {
      console.log("login fnct success");
      loadTasks();
    },
    error: function(jgXHR, textStatus, errorThrown) {
      alert("Error: " + textStatus + " " + errorThrown);
    }
  });
}

//sends a GET request to the server to obtain the tasks.html contents, populates the page with the response
function loadTasks() {
  titleDiv = document.getElementById('pageTitle');
  titleDiv.innerHTML = 'Tasks';
  titleDiv = document.getElementById('headerTitle');
  titleDiv.innerHTML = 'Your Tasks';
  
  $.ajax({
    type: "GET",
    url: './loadTasksPage',
    dataType: "html",
 
    success: function(result) {
      document.getElementById('body').innerHTML = result;
    },
    error: function(jgXHR, textStatus, errorThrown) {
      alert("Error: " + textStatus + " " + errorThrown);
    }
  });
}

function loadTimer() {
  titleDiv = document.getElementById('pageTitle');
  titleDiv.innerHTML = 'Timer';
  titleDiv = document.getElementById('headerTitle');
  titleDiv.innerHTML = '<p>Task in Progress: task name</p>';
  
  $.ajax({
    type: "GET",
    url: './loadTimerPage',
    dataType: "html",
 
    success: function(result) {
      document.getElementById('body').innerHTML = result;
    },
    error: function(jgXHR, textStatus, errorThrown) {
      alert("Error: " + textStatus + " " + errorThrown);
    }
  });
}

function trackTime(){
  messageDiv = document.getElementById('message');
  startBtn = document.getElementById('startBtn');
  finishBtn = document.getElementById('finishBtn');
  startBtn.style.display = 'none';
  finishBtn.style.display = 'block';
  messageDiv.innerHTML = 'You are tracking your time now!';
  setTimeout(function(){
    messageDiv.innerHTML = '';
  }, 2000);

  minutesCell = document.getElementById('minutes');
  minutes = 0;
  setInterval(function(){
    minutes+=1;
    minutesCell.innerHTML = minutes;
  }, 1000*60);
}

function stopTrackingTime(){
  messageDiv = document.getElementById('message');
  hours = document.getElementById('hours').innerHTML;
  minutes = document.getElementById('minutes').innerHTML;
  messageDiv.innerHTML = 'You stopped tracking your time. You worked for '+ hours + ' hours and ' + minutes + ' minutes. Great job!';
  
}

