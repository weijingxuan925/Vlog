$(document).ready(function () {
    const userName = localStorage.getItem("userName");
    const userPass = localStorage.getItem("userPass");
    if (userName != null) {
        $("#userName").val(userName);
    }
    if (userPass != null) {
        $("#userPass").val(userPass);
    }
});

$('#btn-login').click(function () {
    let prevLink = document.referrer;
    $('#btn-login').button('loading');
    const name = $("#userName").val();
    const pwd = $("#userPass").val();
    const rememberMe = $("#rememberMe").prop("checked");
    if (name === "" || pwd === "") {
        showMsg("请输入完整信息！", "error", 1000);
        $('#btn-login').button('reset');
    } else {
        $.ajax({
            type: 'POST',
            url: '/admin/login',
            async: false,
            data: {
                'userName': name,
                'userPass': pwd,
            },
            success: function (data) {
                if (rememberMe) {
                    localStorage.setItem('userName', $("#userName").val());
                    localStorage.setItem('userPass', $("#userPass").val());
                } else {
                    localStorage.setItem('userName', '');
                    localStorage.setItem('userPass', '');
                }
                if (data.code == 1) {
                    if ($.trim(prevLink) === '' || $.trim(prevLink).indexOf('/login') !== -1 || $.trim(prevLink).indexOf('/register') !== -1 || $.trim(prevLink).indexOf('/forget') !== -1) {
                        prevLink = '/';
                    }
                    showMsgAndRedirect(data.msg, "success", 1000, "/admin");
                } else {
                    // 刷新验证码
                    $('.changeCaptcha').click();
                    showMsg(data.msg, "error", 1000);
                    $('#btn-login').button('reset');
                }
            }
        });
    }
})
