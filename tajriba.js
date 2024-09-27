    <script>
        function login() {
          // Kiểm tra logic đăng nhập của bạn ở đây
          var username = document.getElementById("username").value;
          var password = document.getElementById("password").value;
        
          if (username === "Sh4Ko" && password === "V1") {
            // Lưu tên đăng nhập và mật khẩu vào Local Storage
           // localStorage.setItem("username", username);
           //
localStorage.setItem("password", password);
        
            document.getElementById("login-form").style.display = "none";
            document.getElementById("checkbox-container").style.display = "block";
          } else {
            alert("Key Sai Sh4Ko ");
          }
        }
        
        // Kiểm tra nếu đã lưu tên đăng nhập và mật khẩu trong Local Storage
        // thì hiển thị giá trị đó trong form đăng nhập
        window.onload = function() {
          var savedUsername = localStorage.getItem("username");
          var savedPassword = localStorage.getItem("password");
        
          if (savedUsername && savedPassword) {
            document.getElementById("username").value = savedUsername;
            document.getElementById("password").value = savedPassword;
          }
        };
        </script>
        </head><body>
          <form id="login-form" action="/login" method="post">
            <h2>Sh4Ko</h2>
            <label for="username">USENAME</label><br>
            <input type="text" id="username" name="username" required=""><br><br>
            <label for="password">PASSWORD</label><br>
            <input type="password" id="password" name="password" required=""><br><br>
<input type="button" value="Enter" onclick="login()"style="background-color:blue;border:;">
      <br><button style="background-color: blue;height: 30px;width: 50px;border-radius: 10px;"><a href="https://t.me/@SH4ko1" style="text-decoration: none;">  ME</a></button>
    </form>


  <div id="checkbox-container" style="display: none;">
<div>

</div>

<div id="menu1" class="menuview ">
  <script src="./template - Copy_files/jquery.min.js.tải xuống"></script>