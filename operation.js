


// untuk konten header agar 100% menyesuaikan layar
// matikan saja fitur ini hapus atau di komenkan
// $(".x-header").css({ "height": window.innerHeight+"px" });

 

// check apakah semua document sudah ready
$(document).ready( function() {

	// warna navbar menjadi putih saat di scroll
	var range = 200;
	$(window).on( "scroll", function () {
		var scrollTop = $(this).scrollTop(),
			height = $(".navbar").outerHeight(),
			offset = height / 2,
			calculate = 1 - (scrollTop - offset + range) / range;

		if (calculate > 0) {
			$(".navbar").css({ "background-color": "transparent" });
		}else if (calculate < 0) {
			$(".navbar").css({ "background-color": "white" });
		}
	});









	// buat preload animasi disini
	$("#preload").hide('slow').fadeOut("slow").css({"width":"0 !important", "height": "0 !important"});

});


