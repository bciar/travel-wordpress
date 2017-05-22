(function($){

	"use strict";
	
	$(document).ready(function () {
		transfers_search.init();
        
        $('.maxbutton-1').on('click', function() {
     /* your code here */
        //alert(home_site_url);
         window.location.href=home_site_url+'search-results/#booking';
        });
        
         if (window.location.hash != null && window.location.hash != ''){ 
        $('body').animate({
            scrollTop: $(window.location.hash).offset().top-80
        }, 1500);
        $('.search-results-top > h2').html('Please choose your pick up location and drop off location and complete rest of the form.');
        $('.search-results-top > p').html('');
        }
        $('#other_mandatory').on('click', function() {
          $('#row-no-7').toggle();
          $('#row-no-9').toggle();
          $('#row-no-11').toggle();
          $('#row-captcha').toggle();
        });
        
	});
	
	var transfers_search = {
	
		init: function () {

			if ($(".search-results-top").length > 0 && window.onSearchPage) {
				var $root = $('html,body');
				$root.animate({
					scrollTop: $(".search-results-top").offset().top
				}, 1000, function () {});
			}
	
			// SEARCH
			$('input[name=trip]#oneway').click(function() {
				$('.f-row:nth-child(2)').hide(500);
                $('.f-row:nth-child(3)').hide(500);
                 $('.f-row:nth-child(1)').show(500);
				$('#pickup2').prop("disabled", true);
                $('#pickup3').prop("disabled", true);
                $('#book_dur').prop("disabled", true);
				$('#dropoff2').prop("disabled", true);
				$('#return-date').prop("disabled", true);
				$('#ret').prop("disabled", true);
                $('.hr_dep_date').prop("disabled", true);
                $('.hr_dep').prop("disabled", true);
                $('#dep_hr3').prop("disabled", true);
                $('#dep_min3').prop("disabled", true);
                $('#pickup1').prop("disabled", false);
                $('#dropoff1').prop("disabled", false);
                $('#departure-date').prop("disabled", false);
                $('#dep').prop("disabled", false);
                $('#dep_hr1').prop("disabled", false);
                $('#dep_min1').prop("disabled", false);
			});
			$('input[name=trip]#return').click(function() {
			   // alert(222);
                $('.f-row:nth-child(3)').hide(500);
				$('.f-row:nth-child(1)').show(500);
				$('.f-row:nth-child(2)').show(500);
                $('#pickup3').prop("disabled", true);
                $('#book_dur').prop("disabled", true);
                $('.hr_dep_date').prop("disabled", true);
                $('.hr_dep').prop("disabled", true);
                $('#dep_hr3').prop("disabled", true);
                $('#dep_min3').prop("disabled", true);
				$('#pickup2').prop("disabled", false);
				$('#dropoff2').prop("disabled", false);
				$('#return-date').prop("disabled", false);
                $('#pickup1').prop("disabled", false);
                $('#dropoff1').prop("disabled", false);
				$('#ret').prop("disabled", false);
                $('#departure-date').prop("disabled", false);
                $('#dep').prop("disabled", false);
                $('#dep_hr1').prop("disabled", false);
                $('#dep_min1').prop("disabled", false);
                $('#ret_hr').prop("disabled", false);
                $('#ret_min').prop("disabled", false);
			});
            
            $('input[name=trip]#hourly').click(function() {
               // alert(111);
               $('.f-row:nth-child(1)').hide(500);
                $('.f-row:nth-child(2)').hide(500);
				$('.f-row:nth-child(3)').show(500);
                $('#pickup1').prop("disabled", true);
                $('#dropoff1').prop("disabled", true);
                $('#departure-date').prop("disabled", true);
                $('#dep').prop("disabled", true);
                $('#pickup2').prop("disabled", true);
				$('#dropoff2').prop("disabled", true);
                $('#dep_hr1').prop("disabled", true);
                $('#dep_min1').prop("disabled", true);
                $('#ret_hr').prop("disabled", true);
                $('#ret_min').prop("disabled", true);
				$('#pickup3').prop("disabled", false);
				$('#book_dur').prop("disabled", false);
				$('.hr_dep_date').prop("disabled", false);
                $('.hr_dep').prop("disabled", false);
				$('#dep_hr3').prop("disabled", false);
                $('#dep_min3').prop("disabled", false);
			});

			// DATE & TIME PICKER
			$('.departure-date').datetimepicker({
				minDate: 0,
				dateFormat: window.datepickerDateFormat,
				altFormat: window.datepickerAltFormat,
				altFieldTimeOnly: false,
				showMillisec: false,
                showTimepicker : false,
				showMicrosec: false,
				showTimezone: false,
				numberOfMonths: 1,
				altField: "#dep",
				addSliderAccess: false, 
				sliderAccessArgs: { touchonly: false }
			});
			
			if (typeof(window.datepickerDepartureDateValue) != 'undefined' && window.datepickerDepartureDateValue.length > 0) {
				$('.departure-date').datetimepicker("setDate", new Date(window.datepickerDepartureDateValue));
			}
            
            $('.hr_dep_date').datetimepicker({
				minDate: 0,
				dateFormat: window.datepickerDateFormat,
				altFormat: window.datepickerAltFormat,
				altFieldTimeOnly: false,
				showMillisec: false,
                showTimepicker : false,
				showMicrosec: false,
				showTimezone: false,
				numberOfMonths: 1,
				altField: "#dep_hrly",
				addSliderAccess: false, 
				sliderAccessArgs: { touchonly: false }
			});
			
			if (typeof(window.datepickerDepartureDateValue) != 'undefined' && window.datepickerDepartureDateValue.length > 0) {
				$('.hr_dep_date').datetimepicker("setDate", new Date(window.datepickerDepartureDateValue));
			}
			
			$('.return-date').datetimepicker({
				minDate: 0,
				dateFormat: window.datepickerDateFormat,
				altFormat: window.datepickerAltFormat,
				altFieldTimeOnly: false,
				showMillisec: false,
				showMicrosec: false,
				showTimezone: false,
				numberOfMonths: 1,
                showTimepicker : false,
				altField: "#ret",
				addSliderAccess: true, 
				sliderAccessArgs: { touchonly: true }				
			});
			
			if (typeof(window.datepickerReturnDateValue) != 'undefined' && window.datepickerReturnDateValue.length > 0) {
				$('.return-date').datetimepicker("setDate", new Date(window.datepickerReturnDateValue));
			}
			
			$('.select-avail-slot').on('click', function(e) {
				
				var $root = null;
				
				if ($(this).hasClass('selected')) {
				
					$(this).removeClass('selected');
					$(this).removeClass('color');
					$(this).addClass('grey');
					
					if ($(this).hasClass('select-avail-dep-slot')) {
						window.bookingRequest.departureAvailabilityId = 0;
						window.bookingRequest.departureIsPrivate = false;
						window.bookingRequest.departureSlotMinutesNumber = -1;
					} else {
						window.bookingRequest.returnAvailabilityId = 0;
						window.bookingRequest.returnIsPrivate = false;
						window.bookingRequest.returnSlotMinutesNumber = -1;
					}
				} else {
					var availId = $(this).attr('id').replace('select-avail-slot-', '');
					
					var slotMinutesNumber = $.grep($(this).attr('class').split(" "), function(v, i){
					   return v.indexOf('select-avail-slot-time-') === 0;
					}).join();
					
					slotMinutesNumber = slotMinutesNumber.replace('select-avail-slot-time-', '');
					
					if ($(this).hasClass('select-avail-dep-slot')) {
					
						if (availId > 0) {
							$('.proceed-to-booking').show();
						} else {
							$('.proceed-to-booking').hide();
						}

						if($("#returnHeading").length > 0) {
							$root = $('html,body');
							$root.animate({
								scrollTop: $("#returnHeading").offset().top
							}, 1000, function () {});
						} else {
							$root = $('html,body');
							$root.animate({
								scrollTop: $("#book-transfers").offset().top - $("#book-transfers").height()
							}, 1000, function () {});
						}						
					
						$('.select-avail-dep-slot').removeClass('selected');
						$('.select-avail-dep-slot').removeClass('color');
						$('.select-avail-dep-slot').addClass('grey');
						
						$(this).addClass('selected');
						$(this).addClass('color');
						$(this).removeClass('grey');
						
						window.bookingRequest.departureSlotMinutesNumber = slotMinutesNumber;
						window.bookingRequest.departureAvailabilityId = availId;
						if ($(this).hasClass('select-avail-slot-private')) {
							window.bookingRequest.departureIsPrivate = true;
						} else {
							window.bookingRequest.departureIsPrivate = false;
						}
					} else {
					
						if (availId > 0) {
							$('.proceed-to-booking').show();
						} else {
							$('.proceed-to-booking').hide();
						}
					
						$root = $('html, body');
						$root.animate({
							scrollTop: $("#book-transfers").offset().top - $("#book-transfers").height()
						}, 1000, function () {});

					
						$('.select-avail-ret-slot').removeClass('selected');
						$('.select-avail-ret-slot').removeClass('color');
						$('.select-avail-ret-slot').addClass('grey');
						
						$(this).addClass('selected');
						$(this).addClass('color');
						$(this).removeClass('grey');
						
						window.bookingRequest.returnSlotMinutesNumber = slotMinutesNumber;
						window.bookingRequest.returnAvailabilityId = availId;
						if ($(this).hasClass('select-avail-slot-private')) {
							window.bookingRequest.returnIsPrivate = true;
						} else {
							window.bookingRequest.returnIsPrivate = false;
						}
					}
				}
				
				e.preventDefault();
			});
			
			$('.proceed-to-booking').on('click', function(e) {

				if (window.bookingRequest.departureAvailabilityId) {
				
					var redirectUri = '';
				
					redirectUri = window.bookingFormPageUrl + '?' + 
					'depavid=' + window.bookingRequest.departureAvailabilityId + 
					'&depslot=' + window.bookingRequest.departureSlotMinutesNumber + 
					'&dep=' + window.bookingRequest.departureDateAlt + 
					'&depp=' + (window.bookingRequest.departureIsPrivate ? '1' : '0') + 
					'&p1=' + (window.bookingRequest.departureFromId) +
                    '&trip=' + (window.bookingRequest.trip) +
					'&d1=' + (window.bookingRequest.departureToId);
					
					if (window.bookingRequest.returnAvailabilityId > 0) {
						redirectUri += 
							'&retavid=' + window.bookingRequest.returnAvailabilityId + 
							'&retslot=' + window.bookingRequest.returnSlotMinutesNumber + 
							'&ret=' + window.bookingRequest.returnDateAlt + 
							'&retp=' + (window.bookingRequest.returnIsPrivate ? '1' : '0') +		
							'&p2=' + (window.bookingRequest.returnFromId) +
                            '&trip=' + (window.bookingRequest.trip) +
							'&d2=' + (window.bookingRequest.returnToId);							
					}
					
					redirectUri += '&ppl=' + window.bookingRequest.people;
					
					window.location.href = redirectUri;
				}
				
				e.preventDefault();
			});
		}
	};

})(jQuery);