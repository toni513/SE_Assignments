/*Calculator Assignment cont.



Continue working on the calculator assignment from this morning.

add an avg button.
Hint: Look up arrays .split and .splice*/
<head>
  <title>JavaScript Calculator</title>
  <script>
    function insert(num) {
      document.form.textview.value = document.form.textview.value+num
    }

    function equal() {
      var exp = document.form.textview.value;
      if (exp) {
        document.form.textview.value = eval(exp);
      }
    }

    function empty() {
      document.form.textview.value = "";
    }

    function back() {
      var exp = document.form.textview.value;
      document.form.textview.value = exp.substring(0, exp.length - 1)
    }

    function avg(){
      document.form.textview.value = eval(num.sum/num.length)
    }
    }
  </script>
  <style>
  *{
      margin: 0;
      padding: 0;
    }
    .button {
      width: 60;
      height: 60;
      font-size: 25;
      margin: 2;
      cursor: pointer;
      background: gray;
      border: none;
      color: white;
    }
    .textview {
      width: 260;
      margin: 5;
      font-size: 25;
      padding: 5;
      border: solid;
      color: grey;
    }
    .main{
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translateX(50%) translateY(-50%);
    }
    .bg{
      background: linear-gradient(to right, cyan, coral);
      height: 100%;
    }
  </style>
</head>

<body>
  <div class="bg"></div>
  <div class="main">
    <form name="form">
      <input class="textview" name="textview">
    </form>
    <table>
      <tr>
        <td><input class="button" type="button" value="AC" onclick="empty()"></td>
        <td><input class="button" type="button" value="<" onclick="back()"></td>
        <td><input class="button" type="button" value="/" onclick="insert('/')"></td>
        <td><input class="button" type="button" value="x" onclick="insert('*')"></td>
      </tr>
      <tr>
        <td><input class="button" type="button" value="7" onclick="insert(7)"></td>
        <td><input class="button" type="button" value="8" onclick="insert(8)"></td>
        <td><input class="button" type="button" value="9" onclick="insert(9)"></td>
        <td><input class="button" type="button" value="-" onclick="insert('-')"></td>
      </tr>
      <tr>
        <td><input class="button" type="button" value="4" onclick="insert(4)"></td>
        <td><input class="button" type="button" value="5" onclick="insert(5)"></td>
        <td><input class="button" type="button" value="6" onclick="insert(6)"></td>
        <td><input class="button" type="button" value="+" onclick="insert('+')"></td>
      </tr>
      <tr>
        <td><input class="button" type="button" value="1" onclick="insert(1)"></td>
        <td><input class="button" type="button" value="2" onclick="insert(2)"></td>
        <td><input class="button" type="button" value="3" onclick="insert(3)"></td>
        <td rowspan=5><input class="button"style="height: 125" type="button" value="=" onclick="equal()"></td>
      </tr>
      <tr>
        <td><input class="button" type="button" value="AVG" onclick="avg()"></td>
        <td><input class="button" type="button" value="0" onclick="insert(0)"></td>
        <td><input class="button" type="button" value="." onclick="insert('.')"></td>
      </tr>
    </table>
  </div>
</body>
