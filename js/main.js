$(document).ready(function() {
    var MainEmail = $('#MainEmail').val();
    var dataOrder = $(".data-order").data("to");
    var dataBalance = $(".data-balance").data("to");
    // 客户基本信息
    $.ajax({
        type: post,
        url: "./user.php?method=userInfo",
        data: {
            email: MainEmail
        },
        success: function(data) {
            var userResult1 = data.restMoney;
            $(".data-order").val(userResult1);
            var userResult2 = data.ordexnumxxxx;
            $(".data-balance").val(userResult2);
        }
    });


    //注册
    $('.signUpSubmit').click(function() {

        var newEmail = $.trim($("#InputEmail1").val());
        var newpwd = $.trim($("#InputPassword1").val());
        var retypePwd = $.trim($("#InputRetypePassword1").val());
        var userName = $.trim($("#username").val());
        var checkbox = $("#signupcheckbox").is(":checked");

        var zzEmail = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/;

        if (checkbox == false) {
            layer.alert('Please agree to the Terms of Service and Privacy Policy', {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            });
            return;
        }

        if (!zzEmail.test(newEmail)) {
            layer.alert('Invail email format.', {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            });
            return;
        }

        if (newpwd != retypePwd) {
            layer.alert('These passwords don\'t match. Try again?.', {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            })
        }

        if (newpwd.length < 8 || newpwd.length > 18) {
            layer.alert('8 digits or more.', {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            });
            return;
        }

        var fd = layer.load(2, {
            time: 10 * 1000
        });
        $.ajax({
            type: post,
            url: "./user.php?method=register",
            data: {
                name: userName,
                email: newEmail,
                password: newpwd
            },
            success: function(data) {
                layer.close(fd);
                // layer.msg(data);
                if (data == 0) {
                    layer.msg('Input error.');
                } else if (data == 1) {
                    location.href = "./dashboard/index.php";
                } else if (data == -1) {
                    layer.msg('Registered users.');
                } else {
                    layer.msg('result: ' + data);
                }
            }
        });

    });

    //登录
    $(".signInSubmit").click(function() {
        var email = $.trim($("#loginEmail").val());
        var pass = $.trim($("#loginpass").val());
        var verifycode = $.trim($("#code_num").val());

        var zzEmail = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/;

        if (!zzEmail.test(email)) {
            $("#getcode_num").attr("src", 'codenum.php?' + Math.random());
            layer.alert('Invail email format.', {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            });
            return;
        }

        if (pass.length < 8 || pass.length > 18) {
            $("#getcode_num").attr("src", 'codenum.php?' + Math.random());
            layer.alert('8 digits or more ', {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            });
            return;
        }
        var fd = layer.load(2, {
            time: 10 * 1000
        });
        $.ajax({
            type: post,
            url: "./user.php?method=login",
            data: {
                email: email,
                password: pass,
                verifyCode: verifycode
            },
            success: function(data) {
                layer.close(fd);
                if (data == 1) {
                    location.href = "./dashboard/index.php";
                } else if (data == 0) {
                    layer.alert('wrong login email or password.', {
                        skin: 'layui-layer-molv',
                        title: 'Notice',
                        btn: ['OK']
                    });
                } else {
                    layer.msg('result: ' + data);
                }
                // else if (data == 4) {
                //     layer.msg('Wrong Verification Code.');
                // } 
                $("#getcode_num").attr("src", 'codenum.php?' + Math.random());
            }
        });

    });
    // $('.forgetpsw').click(function() {
    //     var regetEmail = $.trim($('#regetEmail').val());

    //     var zzEmail = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/;

    //     if (!zzEmail.test(regetEmail)) {
    //         layer.alert('Invail email format.', {
    //             skin: 'layui-layer-molv',
    //             title: 'Notice',
    //             btn: ['OK']
    //         });
    //         return;
    //     }

    //     $.ajax({
    //         type: post,
    //         url: "../user.php?method=regetPwd",
    //         data: {
    //             email: regetEmail
    //         },
    //         success: function(data) {
    //             if (data == 1) {
    //                 layer.msg('Success');
    //             } else {
    //                 layer.msg('Not register email');
    //             }
    //         }
    //     });

    // });


    // 修改密码
    $('.passwordChangeBtn').click(function() {

        var oldpwd = $.trim($('.pwdChangeOld').val());
        var newpwd = $.trim($('.pwdChangeNew').val());
        var name = $.trim($('.userName').val());
        var email = $.trim($('.userEmail').val());


        if (newpwd != reNewpwd) {
            layer.alert('These passwords don\'t match. Try again?.', {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            })
        }

        var fd = layer.load(2, { time: 10 * 1000 });
        $.ajax({
            type: post,
            url: "../user.php?method=changePWD",
            data: { email: email, lastPWD: oldpwd, newPWD: newpwd },
            success: function(data) {
                layer.close(fd);
                if (data == 1) {
                    layer.msg("Success");
                } else if (data == 0) {
                    layer.msg("Error");
                } else {
                    layer.msg('result: ' + data);
                }
            }
        })

    });


    //提交订单
    $('#orderSubmit').click(function() {
        var appType = 0; // 默认为0表示是ios  1表示google play
        // MainEmail
        appUrl = $.trim($('#orderApplink').val());
        country = $.trim($('#orderCountry').val());
        keyword = $.trim($('#orderKeyword').val());
        buy_mount = $.trim($('#ordersum').val());
        //  orderRace = $.trim($('#orderRace').val());
        orderCoupon = $.trim($('#orderCoupon').val());
        // totalPay = $.trim($('#orderPrice').val());
        orderPayment = $("input[name=demo-radio]:checked").val();
        // alert(paymentcheck);
        // return;
        $.ajax({
            type: post,
            url: "../user.php?method=addOrder",
            data: {
                email: appLink,
                lastPWD: geo,
                newPWD: email.
                email: keyword,
                lastPWD: taskType,
                newPWD: totalnum,
                newPWD: payType
            },
            success: function(data) {
                layer.close(fd);
                if (data == 1) {
                    layer.msg("Success");
                } else if (data == 0) {
                    layer.msg("Error");
                } else {
                    layer.msg('result: ' + data);
                }
            }
        })
        if (appUrl == '') {
            layer.alert('Please enter URL of your app', {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            });
            return;
        }

        // if (orderRace == '') {
        //     layer.alert('Please set daily race', {
        //         skin: 'layui-layer-molv',
        //         title: 'Notice',
        //         btn: ['OK']
        //     });
        //     return;
        // }

        // if (orderRace > buy_mount) {
        //     orderRace = buy_mount;
        // }

        if (keyword == '') {
            layer.alert('Please enter the keyword.', {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            });

            return;
        }

        if (!appUrl.match(/^http/)) {
            layer.alert("Invalid AppStore URL. Please check", {
                skin: 'layui-layer-molv',
                title: 'Notice',
                btn: ['OK']
            });

            return;
        }

        couponCount = getCountryCount(country); //默认为1
        if (orderCoupon.length > 0) {
            //取数据库里面的优惠码
            var fd = layer.load(2, { time: 30 * 1000 });
            $.ajax({
                type: netType,
                url: "../user.php?method=coupon",
                data: { orderCoupon: orderCoupon, country: country },
                success: function(data) {
                    layer.close(fd);

                    if (data == -1) {
                        layer.alert("Invalid Coupon. Please check", {
                            skin: 'layui-layer-molv',
                            title: 'Notice',
                            btn: ['OK']
                        });
                    } else {
                        couponCount = data; //多少折扣

                        if (!check_url(appUrl)) {
                            //google 应用
                            // appType = 1;
                            // alert("12312");

                            layer.alert("Invalid AppStore URL. Please check", {
                                skin: 'layui-layer-molv',
                                title: 'Notice',
                                btn: ['OK']
                            });

                        } else {
                            //ios 应用
                            // alert("44444");
                            appID = check_url(appUrl);
                            getappdetails(appID, appUrl);
                            getboundid(appID);

                        }


                    }

                }
            });

        } else {
            if (!check_url(appUrl)) {
                //google 应用
                // appType = 1;
                // alert("12312");

                layer.alert("Invalid AppStore URL. Please check", {
                    skin: 'layui-layer-molv',
                    title: 'Notice',
                    btn: ['OK']
                });

            } else {
                //ios 应用
                // alert("44444");
                appID = check_url(appUrl);
                getappdetails(appID, appUrl);
                getboundid(appID);

            }



        }


    });

    function getCountryCount(country) {
        //统一

        return 1;

        // count = 1;
        // if (country == 'USA') {
        //     count = 1;
        // }else if (country == 'China'){
        //     count = 0.8;
        // }else if (country == 'Russia'){
        //     count = 1.8;
        // }else if (country == 'Canada'){
        //     count = 1.8;
        // }else if (country == 'United Kingdom'){
        //     count = 1.8;
        // }else if (country == 'Australia'){
        //     count = 1.8;
        // }else {
        //     count = 1.8;
        // }
        // return count;




    }



    function getboundid(appid) {

        $.ajax({
            type: netType,
            url: "../user.php?method=getboundid",
            data: { appid: appid },
            success: function(data) {
                var app_info = eval('(' + data + ')');
                boundid = $.trim(app_info.boundid1);
                getArtname = $.trim(app_info.artName);
            }
        });
    }

});