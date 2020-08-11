

function check() {
    //lấy dữ liệu nhập từ bàn phím của người dùng và đưa vào mảng data
    var data = new Array();
    data[0] = document.getElementById("name").value
    data[1] = document.getElementById("mail").value
    data[2] = document.getElementById("password").value
    data[3] = document.getElementById("cpassword").value
    //thông báo lỗi 
    var error = new Array();
    error[0] = "<span style='color: red, font-weight: bold'>Ban chua nhap ten</span>"
    error[1] = "<span style='color: red, font-weight: bold'>Ban chua nhap mail</span>"
    error[2] = "<span style='color: red, font-weight: bold'>Ban chua nhap mat khau</span>"
    error[3] = "<span style='color: red, font-weight: bold'>Mat khau chua khop</span>"
    //thông báo tương ứng với mỗi vùng nhập thông tin
    var inform = new Array("z-name", "z-mail", "z-password", "z-cpassword");

    for (var i = 0; i < 4; i++) {
        var informError = error[i];
        var div = inform[i];

        if (data[i] === "") {
            document.getElementById(div).innerHTML = informError;
        } else {
            document.getElementById(div).innerHTML = "OK!";
        }
    }
}

function passwordCheck() {
    var fpw = document.getElementById("password").value
    var spw = document.getElementById("cpassword").value

    if (spw === fpw) {
        document.getElementById("z-cpassword").innerHTML = "OK!"
    } else {
        document.getElementById("z-cpassword").innerHTML = "<span style='color: red, font-weight: bold'>Mat khau chua khop</span>";
    }
}
