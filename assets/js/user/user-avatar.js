$(function () {
    const layer = layui.layer
      // 1.1 获取裁剪区域的 DOM 元素
  var $image = $('#image')
  // 1.2 配置选项
  const options = {
    // 纵横比
    aspectRatio: 1,
    // 指定预览区域
    preview: '.img-preview'
  }

  // 1.3 创建裁剪区域
    $image.cropper(options)
    
    //为上传按钮绑定点击事件
    $("#btnChooseImage").on('click', function () {
        $('#file').click()
    });

    //为文件选择框绑定change事件
    $('#file').on('change', function (e) {
       console.log(e);
        //获取用户选择的文件
        //target 当前目标元素:属性,方法
        const filelist = e.target.files
        //Array.isArray(files) 判断是不是一个数组;返回一个布尔值
        //转化成真正的数组:取出运算符[...files]
        //[...files].forEach()
        //伪数组
        if (filelist.length === 0) {
            return layer.msg('请选择照片')
        }

        //1.拿到用户选择的文件 
        const file = filelist[0];
        //2将文件,转换为路径
        const newImgURL = URL.createObjectURL(file);
        //3.重新初始化裁剪区域
        $image
            .cropper('destroy')      // 销毁旧的裁剪区域
            .attr('src', newImgURL)  // 重新设置图片路径
            .cropper(options)        // 重新初始化裁剪区域
        
    })

    //为确定按钮绑定点击事件
    $('#btnUpload').on('click', function () {
        //1.拿到用户裁剪之后的头像
        var dataURL = $image.cropper('getCroppedCanvas', {
          // 创建一个 Canvas 画布
                width: 100,
                height: 100
        }).toDataURL('image/png')
              // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
        
        $.ajax({
            method: 'POST',
            url: '/my/update/avatar',
            data: {
                avatar: dataURL
            },
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg('更新头像失败')
                }
                layer.msg("更新头像成功");
                window.parent.getUserInfo()
            }
        })
    })
})