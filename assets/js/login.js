$(function() {
  // 点击“去注册账号”的链接
  $('#link_reg').on('click', function() {
    $('.login-box').hide()
    $('.reg-box').show()
  })

  // 点击“去登录”的链接
  $('#link_login').on('click', function() {
    $('.login-box').show()
    $('.reg-box').hide()
  })
    
    //自定义校验规则
//从layui 中获取form对象
    const form = layui.form
    const layer = layui.layer
   form.verify({
  //自定义了一个叫做pwd校验规则
    pwd: [/^[\S]{6,12}$/, "密码必须6到12位,且不能出现空格"],
    //校验两次密码是否一致
    repwd: function (value) {
        const pwd = $('.reg-box [name=password]').val()
        if (pwd !== value) {
            return'两次密码不一致'
        }
    }
   });
    
    
    //监听注册表单的提交事件
    $('#form_reg').on('submit', function (e) {
        //1.阻止默认的提交行为
        e.preventDefault()
        //发起ajax的post请求
        var data = {
          username: $("#form_reg [name=username]").val(),
          password: $("#form_reg [name=password]").val(),
        };
        $.post("/api/reguser", data, (res) => {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功,请登录')
            //模拟点击事件
            $('#link_login').click()
        });
    })

    //监听登录表单的提交事件
    $('#form_login').submit(function (e) {
        
        //1.阻止默认的提交行为
        e.preventDefault()
        $.ajax({
            url: "/api/login",
            method: "POST",
            //快速获取表单中数据
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败')
                }
                layer.msg("登录成功");

                //将登录成功的token字符串
                localStorage.setItem('token', res.token)
                //跳转到后台主页
                location.href= '/index.html'
            }
        });
    })
})

