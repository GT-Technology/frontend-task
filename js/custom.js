$(function() {
		   
	$("form[name='registration']").validate({
		rules: {
			bins: {required: true, number: true},
			weight: {required: true, number: true},
			registration: {required: true, minlength: 12}
		},

		messages: {
			bins: {
				required: "Please enter total number of bins"
			},
			weight: {
				required: "Please enter estimated load weight"
			},
			registration: {
				required: "Please provide vehicle registration",
				minlength: "Your vehicle registration must be at least 12 characters long"
			}
		},

		submitHandler: function(form) {
			form.submit();
		}
	});
	
	$(".add").click(function(e){
		e.preventDefault();
		$(".element").append('<div class="form-group col-md-4"><input type="text" class="form-control"></div>');	  
	});
	
	$(".remove").click(function(e){
		e.preventDefault();
		$(".element").children().not(':first').last().remove();
	});
	
	$("#datepicker" ).datepicker();
	
	$('.timepicker').timepicker({
		timeFormat: 'h:mm p',
		interval: 60,
		minTime: '10',
		maxTime: '6:00pm',
		defaultTime: '11',
		startTime: '10:00',
		dynamic: false,
		dropdown: true,
		scrollbar: true
	});
});






	


