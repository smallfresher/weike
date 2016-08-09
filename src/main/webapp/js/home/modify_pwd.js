(function($) {
	var modify_pwd = function() {

		return {
			currentIndex : 0,	// 当前索引
			pageSize : 2,		// 每页记录数
			flag : 0,
			
			init : function() {
				student.init();
				modify_pwd.btn_click();
				modify_pwd.initValidate();
			},
			getQueryString : function(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				
				if (r != null)
					return (r[2]);
				return "";
			},
			show:function(){
				id=sessionStorage.getItem("student_id");
				commonAjax.ajaxPost("student/select.do", id, function(result){
					$("#student_id").html(id);
					$("#student_no").html(result.data.student_no);
					$("#student_name1").val(result.data.student_name);
					$("#student_sex").val(result.data.student_sex);
					$("#academy").val(result.data.academy);
					$("#major").val(result.data.major);
					$("#classroom").val(result.data.classroom);
					$("#phone").val(result.data.phone);
					$("#email").val(result.data.email);
				});
			},
			initValidate:function(){
				$('#form').validate({
					ignore:'',
		            rules: {
		            	orign_pwd: {
		                    required: true,
		                    minlength:6,
		                    isPwd:true,
		                    maxlength: 20
		                },
		                student_pass1: {
		                	required: true,
		                	minlength:6,
		                	isPwd:true,
		                	maxlength: 20
		                },
		                student_pass2: {
		                	required: true,
		                	equalTo: "#student_pass1"
		                },
		            },
		            messages: {
		            	orign_pwd: {
		                    required: "原密码不能为空",
		                    minlength:"长度大于6",
		                    isPwd:"只能包含字符、数字和下划线",
		                    maxlength: 20
		                },
		                student_pass1: {
		                	required: "新密码不能为空",
		                	minlength:"长度大于6",
		                	isPwd:"只能包含字符、数字和下划线",
		                	maxlength: 20
		                },
		                student_pass2: {
		                	required: "重复新密码不能为空",
		                	equalTo: "两次新密码不一样"
		                },
		            },
		            highlight: function (element) { 
		                //$(element).parent().addClass('has-error'); 
		            },
		            success: function (label) {
		                //label.prev().removeClass('has-error');
		            },
		            errorPlacement: function (error, element) {
		                error.addClass('validate_message').insertAfter(element.parent());
		            }
				});
			},
			save:function(){
				$(".validate_message").remove();
				if(!$("#form").valid()){
					return;
				}
				var id=sessionStorage.getItem("student_id");
				maskUtil.showMask("main");
				commonAjax.ajaxPost("student/select.do", id, function(result){
					if(!result.success){
						return;
					}
					if(result.data.student_pass==$.trim($("#orign_pwd").val())){
						var vo=new Object();
						vo.student_id=id;
						vo.student_pass=$.trim($("#student_pass1").val());
						commonAjax.ajaxPost("student/update.do", vo, function(result){
							if(result.success){
								swal({title:"提示!",text: "密码修改成功!", type: "success",showCancelButton: false},function(){
									window.location.href="index.html";
								});
							}else{
								wal({title:'系统错误请联系管理员！',type:'warning'});
							}
						});
					}else{
						swal({title:"提示!",text: "原密码不正确,请重新输入!", type: "error",showCancelButton: false},function(){
							$("#orign_pwd").val("");
							$("#orign_pwd").focus();
						});
					}
				})
				maskUtil.hideMask("main");
				
			},
			btn_click : function() {
			
				
			},

		}

	}();
	window.modify_pwd = modify_pwd;
}(jQuery));