<!DOCTYPE html >
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="keywords" content="Judgements, Orders, High courts of India, High Courts" />
	<meta name="description" content="Judgements and Orders,  High Courts of India" />
	<meta name="title" content="Home | Judgements and Orders, High Courts of India" />
    <meta name="author" content="">
    <title>Home | Judgements and Orders, Supreme Court and High courts of India</title>
	<script src="/pdfsearch/vendor/jquery/jquery.min.js"></script>
	<script src="/pdfsearch/vendor/jquery/jquery.validate.min.js"></script>

	<script src="/pdfsearch/vendor/jquery/chosen.jquery.min.js"></script>

	<link href="/pdfsearch/vendor/css/chosen.min.css" rel="stylesheet">

	<script src="/pdfsearch/js/ecourts.js"></script>
	<!--<script src="/pdfsearch/csrf-magic.js"></script>-->

	<script src="/pdfsearch/vendor/jquery-date/js/jquery-ui.js"></script>
   <link rel="stylesheet" href="/pdfsearch/vendor/jquery-date/jquery-ui.css">
	<script src="/pdfsearch/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<link href="/pdfsearch/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="/pdfsearch/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
	<link href="/pdfsearch/vendor/css/app.css" rel="stylesheet">


  <!-- Custom styles for this template -->



<script>
var labels_array;
var buttons_array;
var alerts_array;
$(document).ready(function(){
   $('.sidebar-nav').height($(window).height())-50;
});
</script>
</head>








    <script src="/pdfsearch/vendor/DataTables/js/jquery.dataTables.min.js" type="text/javascript"></script>
    <script src="/pdfsearch/vendor/DataTables/Buttons/js/dataTables.buttons.min.js" type="text/javascript"></script>
  <script src="/pdfsearch/vendor/DataTables/js/dataTables.rowGroup.min.js" type="text/javascript"></script>
    <script src="/pdfsearch/vendor/DataTables/Buttons/js/buttons.flash.min.js" type="text/javascript"></script>
    <script src="/pdfsearch/vendor/DataTables/JSZip/jszip.min.js" type="text/javascript"></script>
    <script src="/pdfsearch/vendor/DataTables/pdfmake/pdfmake.min.js" type="text/javascript"></script>
    <script src="/pdfsearch/vendor/DataTables/pdfmake/vfs_fonts.js" type="text/javascript"></script>
    <script src="/pdfsearch/vendor/DataTables/Buttons/js/buttons.html5.min.js" type="text/javascript"></script>
    <script src="/pdfsearch/vendor/DataTables/Buttons/js/buttons.print.min.js" type="text/javascript"></script>




    <script src="/pdfsearch/vendor/DataTables/Buttons/js/buttons.colVis.min.js" type="text/javascript"></script>


     <link rel="stylesheet" type="text/css" href="/pdfsearch/vendor/DataTables/css/rowGroup.dataTables.min.css">

     <script src="/pdfsearch/vendor/DataTables/js/jquery.dataTables.yadcf.js" type="text/javascript"></script>


   <!-- Responsive Datatable Bootstrap 4 -->
  <script src="/pdfsearch/vendor/DataTables/dataTables.responsive.min.js" type="text/javascript"></script>
  <script src="/pdfsearch/vendor/DataTables/responsive.bootstrap4.min.js" type="text/javascript"></script>
  <link href="/pdfsearch/vendor/DataTables/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css">
  <link href="/pdfsearch/vendor/DataTables/responsive.bootstrap4.min.css" rel="stylesheet" type="text/css">
  <link href="/pdfsearch/vendor/DataTables/datatables.css" rel="stylesheet" type="text/css">
  <link href="/pdfsearch/vendor/DataTables/dataTable.css" rel="stylesheet" type="text/css">
<!-------------------------->



    <script>

  $('select').addClass('form-control');
    /* Code for set the stype to column


    jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "date-uk-pre": function ( a ) {
        var ukDatea = a.split('-');
        return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
      },
      "date-uk-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
      },
      "date-uk-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
      }
    } );


      "aoColumns": [
      { "sSortDataType": "dom-text", "sType": "numeric" },
      { "sType": "date-uk"},
      {"sSortDataType": "dom-text"}]



*/
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
  "date-uk-pre": function ( a ) {
      var ukDatea = a.split('-');
      return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
    },
    "date-uk-asc": function ( a, b ) {
      if (a == b) { return 0; }
      if (isNaN(a) || a < b) { return -1; }
      if (isNaN(b) || a > b) { return 1; }
      //return ((a < b) ? -1 : (a == '')?-1 : ((a > b) ? 1 : 0));
    },
    "date-uk-desc": function ( a, b ) {
      if (a == b) { return 0; }
      if (isNaN(a) || a < b) { return 1; }
      if (isNaN(b) || a > b) { return -1; }
      //return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
  } );



    </script>


<div class="container-fluid topheader border-bottom">
<div class="row">
  <div class="col-sm-12">
  <ul>
	<li><a class="js-scroll-trigger" href="#navbar-sm">Skip to navigation</a></li>
	<li><a class="js-scroll-trigger" href="#main_content">Skip to main content</a></li>
	<li class="border-right"><a href="javascript:void(0)" id="decresefont" title="Decrese Font Size" aria-label="Decrese Font Size">A-</a></li>
	<li><a href="javascript:void(0)" id="normalfont" title="Normal Font Size" aria-label="Normal Font Size">A</a></li>
	<li><a href="javascript:void(0)" id="incresefont" title="Increse Font Size" aria-label="Increse Font Size">A+</a></li>
	<li><a href="#" class="whitelink" id="Defaultcontrast" title="Default contrast" aria-label="normal contrast theme" onclick="$('body').removeClass('highcontrast')">A</a></li>
	<li class="bg-dark"><a href="#" class="blacklink text-white" id="Highcontrast" title="High contrast" aria-label="high contrast theme" onclick="$('body').addClass('highcontrast')">A</a></li>
  </ul>
  </div>
</div>
</div>


 <nav class="navbar navbar-expand-md mb-0" id="navbar-sm">
  <div class="container-fluid">
  <div class=" text-start w-25">
    <a href="/pdfsearch/?p=pdf_search/index&escr_flag=&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">
     <img src="images/emblem.png" alt="Emblem of India" class='float-start me-2 headimg'></a>

	<a class="navbar-brand" href="/pdfsearch/?p=pdf_search/index&escr_flag=&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">
	    <span class='Maintitle'>eSCR,Judgements and Orders</span><span class="Subtitle">Indian Judiciary</span></a>

	</div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
<div class="input-group w-100 me-auto">
		 <select name="fcourt_type" id="fcourt_type" class="form-select form-select-sm chosen" required="" aria-describedby="Select_alert">
						  <!--<option value="1" Selected>Supreme Court</option>--><?php// }else {?>

			 <!-- <option value="1" >Supreme Court</option>-->                          <option value="3" >eSCR</option>
                          			  <option value="2" Selected>High Court</option>		</select>  <input type="search" class="form-control" placeholder="Enter free text search" aria-label="Free text search" id="search_text" value="the" style='width:30%;'>
<div class='pt-2 ms-3'>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="searchOptions" id="inlineRadio1" value="PHRASE" checked>
  <label class="form-check-label" for="inlineRadio1">Phrase(s)</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="searchOptions" id="inlineRadio2" value="ANY" >
  <label class="form-check-label" for="inlineRadio2">Any Words</label>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="searchOptions" id="inlineRadio3" value="ALL" >
  <label class="form-check-label" for="inlineRadio3">All Words</label>
</div>
</div>
<select name='sel_prox' id='sel_prox' class='form-select form-select-sm ms-2'style='width:60px !important;display:none;';  required='' aria-describedby='Select_alert'><option value=''>Proximity</option>
	  <option value='20' >20</option>
	  <option value='40'  >40</option>
	  <option value='60' >60</option>
	  <option value='80' >80</option>
	  <option value='100'   >100</option>

</select>
</div>
    </div>
  </div>
</nav>
<script>
$(document).ready(function() {
		$('#incresefont').click(function(){
        curSize= parseInt($('body').css('font-size')) + 2;
		if(curSize<=18)
        $('body').css('font-size', curSize);
        });

		$('#decresefont').click(function(){
        curSize= parseInt($('body').css('font-size')) - 2;
		if(curSize>=10)
        $('body').css('font-size', curSize);
        });

		$("#normalfont").click(function(){
			curSize= 14;
		$("body").css("font-size",curSize);
    });
/*
	$('.blacklink').click(function (){
		$('link[href="../css/my-style-SSS.css"]').attr('href','../css/contrast-style-SSS.css');
	});
	$('.whitelink').click(function (){
		$('link[href="../css/contrast-style-SSS.css"]').attr('href','../css/my-style-SSS.css');
	});
*/
	});
</script>

<div id='main_content'>

<style>
#captcha_image{
	width:100px;
}
</style>

<nav class="navbar navbar-expand border-bottom">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0 text-start" id="filters">
        <li class="nav-item dropdown me-3" id='court_details'>
          <a class="nav-link dropdown-toggle noToken" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <i class="fas fa-university"></i>&nbsp; Court
          </a>
          <div class="dropdown-menu p-2 bg-light">
            <div class="mb-1" id="div_state_sel">
              <label for="state_code" class="form-label fw-bold">Select Court</label>
              <select name="state_code" id="state_code" class="form-select form-select-sm chosen" required="" aria-describedby="Select_alert"  onchange="get_distData('pdf_search/get_district',this.value);">
              <option value="">Select Court</option>
			    <option value="3~22" >High Court of Punjab and Haryana</option><option value="11~24" >High Court of Sikkim</option><option value="14~25" >High Court of Manipur</option><option value="7~26" >High Court of Delhi</option><option value="36~29" >High Court  for State of Telangana</option><option value="2~5" >High Court of Himachal Pradesh</option><option value="10~8" >Patna High Court</option><option value="8~9" >High Court of Rajasthan</option><option value="33~10" >Madras High Court</option><option value="1~12" >High Court of Jammu and Kashmir</option><option value="17~21" >High Court of Meghalaya</option><option value="28~2" >High Court of Andhra Pradesh</option><option value="32~4" >High Court of Kerala</option><option value="18~6" >Gauhati High Court</option><option value="5~15" >High Court of Uttarakhand</option><option value="16~20" >High Court of Tripura</option><option value="27~1" >Bombay High Court</option><option value="20~7" >High Court of Jharkhand</option><option value="9~13" >Allahabad High Court</option><option value="19~16" >Calcutta High Court</option><option value="22~18" >High Court of Chhattisgarh</option><option value="29~3" >High Court of Karnataka</option><option value="21~11" >High Court of Orissa</option><option value="24~17" >High Court of Gujarat</option><option value="23~23" >High Court of Madhya Pradesh</option>
                </select>
            </div>

			<div class="mb-1" id="div_dist_sel">
              <label for="dist_code" class="form-label fw-bold">Select Bench</label>
              <select name="dist_code" id="dist_code" class="form-select form-select-sm chosen" required="" aria-describedby="Select_alert" onchange="get_casetype('pdf_search/getCaseType',this.value);">

			                 </select>
            </div>

			<div class="mb-0">
              <label for="fulltext_case_type" class="form-label fw-bold">Case Type</label>
              <select name="fulltext_case_type" id="fulltext_case_type" class="form-select form-select-sm chosen" required="" aria-describedby="Select_alert">
              <option value="">Select Case Type</option>

                </select>
            </div>
            <div class="row">
                <div class="col-md-6">
                  <label for="case_no" class="form-label fw-bold">Case Number</label>
                  <input class="form-control form-control-sm" type="text" name="case_no" id="case_no" autocomplete="off" placeholder="Enter Case Number" maxlength="7">
                </div>
                <div class="col-md-6">
                  <label for="case_year" class="form-label fw-bold">Year</label>
                  <input class="form-control form-control-sm" type="text" name="case_year" id="case_year" maxlength="4" autocomplete="off" placeholder="Enter Year">
                </div>
              </div>
            <div class="mb-0">
              <label for="pet_res" class="form-label fw-bold">Party</label>
              <input class="form-control form-control-sm" type="text" id="pet_res" maxlength="99" autocomplete="off" placeholder="Enter Petitioner / Respondent">
            </div>
			<div class="mb-0">
              <label for="disp_nature" class="form-label fw-bold">Disposal Nature</label>
              <select name="disp_nature" id="disp_nature" class="form-select form-select-sm chosen" aria-describedby="Select_alert"><option value="">Select Disposal Nature</option>
			   			  </select>
            </div>

        </div>
        </li>

        <li class="nav-item dropdown  me-3">
          <a class="nav-link dropdown-toggle noToken" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-user"></i>&nbsp; Judge
          </a>
          <div class="dropdown-menu p-2 bg-light">
            <label for="judge_txt" class="form-label fw-bold">Judge Name</label>
            <input class="form-control form-control-sm ui-autocomplete-input" type="text" id="judge_txt" maxlength="99" autocomplete="off" placeholder="Enter Judge Name">
        </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle noToken" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='other_filter'>
          <i class="fas fa-gavel"></i>&nbsp; Act/Section
          </a>
          <div class="dropdown-menu p-2 bg-light">

            <div class="mb-0">
              <label for="act_txt" class="form-label fw-bold">Act</label>
              <input class="form-control form-control-sm" type="text" id="act_txt" maxlength="99" autocomplete="off" placeholder="Enter Act">
            </div>
            <div class="mb-0">
              <label for="section_txt" class="form-label fw-bold">Section</label>
              <input class="form-control form-control-sm" type="text" id="section_txt" maxlength="99" autocomplete="off" placeholder="Enter Section">
            </div>


        </div>
        </li>


		<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle noToken" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='other_filter'>
          <i class="fas fa-calendar"></i>&nbsp; Decision Date
          </a>
          <div class="dropdown-menu p-2 bg-light">

            <div class="mb-0">
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="ALL" checked>
			  <label class="form-check-label" for="exampleRadios1">
				All
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="WEEK">
			  <label class="form-check-label" for="exampleRadios2">
				Past Week
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="MONTH">
			  <label class="form-check-label" for="exampleRadios3">
				Past Month
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="YEAR">
			  <label class="form-check-label" for="exampleRadios4">
				Past Year
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="CUSTOM" >
			  <label class="form-check-label" for="exampleRadios5">
				Custom range
			  </label>
			</div>
              <div class="row g-3 dec_date">
                <div class="col-sm">
                  <label class="visually-hidden" for="from_date">Decision from date</label>
                  <input class="form-control form-control-sm hasDatepicker" style="display:inline-block;width:85%;" type="date" name="from_date" id="from_date" autocomplete="off" placeholder="dd-mm-yyyy">
                </div>
                <div class="col-sm">
                  <label class="visually-hidden" for="to_date">Decision to date</label>
                  <input class="form-control form-control-sm hasDatepicker" style="display:inline-block;width:85%;" type="date" name="to_date" id="to_date" autocomplete="off" placeholder="Enter To Date dd-mm-yyyy">
                </div>
              </div>
            </div>

        </div>
        </li>


		 <li class="nav-item dropdown  me-3" id="escr_details">
          <a class="nav-link dropdown-toggle noToken" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-university"></i>&nbsp; eSCR
          </a>
          <div class="dropdown-menu p-2 bg-light">
		<label for="" class="form-label fw-bold">Citation Year/Vol OR Supl Vol/Page</label>
  <div class="input-group mb-3 input-group-sm">
    <input class="form-control" type="text" maxlength="4" id="citation_year" autocomplete="off" placeholder="Year">
    <input class="form-control" type="text" id="citation_vol" autocomplete="off" placeholder="Vol">
    <span class="input-group-text">OR</span>
    <input class="form-control" type="text" id="citation_supl" autocomplete="off" placeholder="Supl">
 <input class="form-control" type="text" id="citation_page" autocomplete="off" placeholder="Page">

  </div>

			 <div class="mb-0">
				<hr>
			</div>
			 <label for="" class="form-label fw-bold">Case Type/Case No/Year</label>
  <div class="input-group mb-3 input-group-sm">
    <select name="fulltext_case_type1" id="fulltext_case_type1" class="form-select chosen" required="" aria-describedby="Select_alert"><option value="">Select Case Type</option>>

                </select>
            	 <input class="form-control" type="text" name="case_no1" id="case_no1" autocomplete="off" placeholder="Enter Case Number" maxlength="7">
    <input class="form-control" type="text" name="case_year1" id="case_year1" maxlength="4" autocomplete="off" placeholder="Enter Year">
  </div>
		<div class="mb-0">
              <label for="pet_res1" class="form-label fw-bold">Party</label>
              <input class="form-control form-control-sm" type="text" id="pet_res1" maxlength="99" autocomplete="off" placeholder="Enter Petitioner / Respondent">
            </div>
		<div class="mb-0">
              <label for="citation_keywords" class="form-label fw-bold">Keywords</label>
              <input class="form-control form-control-sm" type="text" name="citation_keywords" id="citation_keywords"  placeholder="Enter Keywords">
            </div>
        </div>
        </li>
	<li class="nav-item dropdown  me-3" id="lang_details">

    <select name="sel_lang" id="sel_lang" class="form-select form-select-sm chosen" required="" aria-describedby="Select_alert"><option value="">Translation</option>

                                                  <option value="ASM">অসমীয়া - Assamese</option>
                                                                                                          <option value="BEN">বাংলা - Bengali</option>
                                                                                                          <option value="GAR">আ·চিক - Garo</option>
                                                                                                          <option value="GUJ">ગુજરાતી - Gujarati</option>
                                                                                                          <option value="HIN">हिन्दी - Hindi</option>
                                                                                                          <option value="KAN">ಕನ್ನಡ - Kannada</option>
                                                                                                          <option value="KAS">कॉशुर - Kashmiri</option>
                                                                                                          <option value="KHA">খসি - Khasi</option>
                                                                                                          <option value="KOK">कोंकणी - Konkani</option>
                                                                                                          <option value="MAL">മലയാളം - Malayalam</option>
                                                                                                          <option value="MAR">मराठी - Marathi</option>
                                                                                                          <option value="NEP"> नेपाली - Nepali</option>
                                                                                                          <option value="ORI">ଓଡ଼ିଆ - Odia</option>
                                                                                                          <option value="PUN">ਪੰਜਾਬੀ - Punjabi</option>
                                                                                                          <option value="TAM">தமிழ் - Tamil</option>
                                                                                                          <option value="TEL">తెలుగు - Telugu</option>
                                                                                                          <option value="URD">اُردُو - Urdu</option>

        </select>

        </li>




      </ul>

     <div class="row ms-3" id='captcha_div'>

      <div class="col-md-auto p-0"> <!--<img style="padding-right: 0px;border:1px solid #ccc;" id="captcha_image" src="" alt="CAPTCHA Image" tabindex="0" width="120"><div id="captcha_image_audio_div" style="display:inline">
		<audio id="captcha_image_audio" preload="none" style="display: none">
		<source id="captcha_image_source_wav" src="/judgementSearch/vendor/securimage/securimage_play.php?id=62fce01d9c8c2" type="audio/wav">
		</audio>
		</div>
		<div id="captcha_image_audio_controls" style="display:inline-block;">
		<a tabindex="0" class="captcha_play_button" href="/judgementSearch/vendor/securimage/securimage_play.php?id=62fce01d9c8ca&amp;app_token=1d6d3bf5cfc9995c8bec593db9784099b1b612faf64d3350d60d54c619c38472" onclick="return false">
		<img class="captcha_play_image" height="32" width="32" src="/judgementSearch/vendor/securimage/images/speaker-btn.png" alt="Play CAPTCHA Audio" style="border: 0px">
		<img class="captcha_loading_image rotating" height="32" width="32" src="/judgementSearch/vendor/securimage/images/loading.png" alt="Loading audio" style="display: none">
		</a>
		<noscript>Enable Javascript for audio controls</noscript>
		</div>
		<script src="/judgementSearch/vendor/securimage/securimage.js"></script>
		<script>captcha_image_audioObj = new SecurimageAudio({ audioElement: 'captcha_image_audio', controlsElement: 'captcha_image_audio_controls' });</script>
		<a tabindex="0" style="border: 0" href="#?app_token=1d6d3bf5cfc9995c8bec593db9784099b1b612faf64d3350d60d54c619c38472" title="Refresh Image" onclick="if (typeof window.captcha_image_audioObj !== 'undefined') captcha_image_audioObj.refresh(); document.getElementById('captcha_image').src = '/judgementSearch/vendor/securimage/securimage_show.php?' + Math.random(); this.blur(); return false"><img height="32" width="32" src="/judgementSearch/vendor/securimage/images/refresh-btn.png" alt="Refresh Image" onclick="clearCaptchaText();" style="border: 0px;"></a></div> <div class="col-md-3"><input maxlength="6" type="text" name="captcha" id="captcha" class="captchaClass form-control form-control-sm" placeholder="Enter captcha" tabindex="0" value='135354'></div>
-->
      <button class="btn btn-outline-secondary col-sm btn-sm me-1" type="button" id="" onclick="get_details_searchclick('','','','');"><i class='fas fa-search'></i>&nbsp;Search</button>
	   <button class="btn btn-outline-secondary col-sm btn-sm" type="reset" id="" onclick="reset_page()"><i class='fas fa-undo'></i>&nbsp;Reset</button>
    </div>

    </div>
  </div>
</nav>


<div class="container-fluid mt-2">
  <div class="row">
    <div class="col-md-9" >
		<div class="container p-0" id="div_container">
		<div class="row">
		<div class="col-auto text-start" id="search_timer" style="color: #555;font-size:.9rem;font-weight:bold">
		</div>
		<div class="col text-start" id="breadcrumb" style="color: #555;font-size:.9rem;font-weight:bold">
		<span class="badge rounded-pill text-bg-light border"  style="display:none "id="bcrum_search_txt1"></span> <span id='breadcrumb_sp_1' style="display:none">&rarr;</span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_search_txt2" style="display:none"></span><span id='breadcrumb_sp_2' style="display:none">&rarr;</span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_search_txt3" style="display:none"></span><span id='breadcrumb_sp_3' style="display:none">&rarr;</span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_search_txt4" style="display:none"></span><span id='breadcrumb_sp_4' style="display:none">&rarr;</span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_search_txt5" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border"  style="display:none "id="bcrum_state"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_dist" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_judge" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_case_type" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_party" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_act" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_section" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_disp_nature" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_date" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_judge_val" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_year" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_judge_arr" style="display:none"></span>

		<span class="badge rounded-pill text-bg-light border" id="bcrum_citation_year" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_citation_vol	" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_citation_supl" style="display:none"></span>
		<span class="badge rounded-pill text-bg-light border" id="bcrum_citation_page" style="display:none"></span>
		 <span class="badge rounded-pill text-bg-light border" id="bcrum_cit_keyword" style="display:none"></span>
		 <span class="badge rounded-pill text-bg-light border" id="bcrum_bench" style="display:none"></span>
		</div>
		</div></div>
		<div class="row m-2 border-bottom" id="disp_table" style="display: none;">

		<table id="example_pdf" class="table table-bordered  table-responsive w-100" role="presentation">
		<thead>
			<tr id="example_head">
			<th></th>
			<th></th>
			</tr>
		</thead>

		<tbody id="report_body">
		</tbody>
		</table>
		</div>




    </div>
    <div class="col-md-3 text-start">
      <h2 class="colHeading my-2"><i class="fas fa-link"></i>&nbsp; Related Topics</h2>
      <div class="border rounded mb-3" id="div_court_dtls">
        <div class="p-2 border-bottom filterHeadT"><i class="fas fa-university"></i><span id="li_court">&nbsp; Court</span></div>
        <div class="filterUL" id="fil_court_name">

          <div class="text-end border-top p-1">
            <button type="button" class="btn badge rounded-pill text-bg-light" data-bs-toggle="modal" data-bs-target="#MoreModal" aria-label="more courts">More</button>
          </div>
        </div>
      </div>

	  <div class="border rounded mb-3">
        <div class="p-2 border-bottom filterHeadT"><i class="fas fa-user"></i>&nbsp; Judges <button class="btn btn-sm btn-secondary float-end p-0 px-2 d-none" id='judges_btn'  onclick=get_details('','','','','','Y','') >Show</button></div>
        <div class="filterUL" id="fil_judge_name">

          <div class="text-end border-top p-1">
            <button type="button" class="btn badge rounded-pill text-bg-light" data-bs-toggle="modal" data-bs-target="#MoreModal" aria-label="more about Judges">More</button>
          </div>
        </div>
      </div>

      <div class="border rounded">
        <div class="p-2 border-bottom filterHeadT"><i class="fas fa-calendar-alt"></i>&nbsp; <span id='disp_year'>Disposal Year </span><button class="btn btn-sm btn-secondary float-end p-0 px-2 d-none" id='year_btn'  onclick=get_details('','','','','','','Y') >Show</button></div>
        <div class="filterUL" id="fil_year">

          <div class="text-end border-top p-1">
            <button type="button" class="btn badge rounded-pill text-bg-light"  data-bs-toggle="modal" data-bs-target="#MoreModal" aria-label="more about Disposal Year">More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  </body>


<!---   open pdf -->

        <div class="modal fade" id="viewFiles" tabindex="-1" role="dialog">
  <div class="modal-dialog mw-100 w-75" role="document">
    <div class="modal-content">
      <div class="modal-header border-0 p-0 pr-3">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="modal_close">
          <span aria-hidden="true">&nbsp;</span>
        </button>
      </div>

      <div class="modal-body row" id="viewFiles-body" style="overflow:auto">

        </div>
        </div>
        </div>
</div>


  <!-- More Content Modal -->
<div class="modal fade" id="MoreModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Judge Name</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">&nbsp;</button>
      </div>
      <div class="modal-body">
        <div class="filterUL filterUL1 text-start" id="fil_judge_name">

        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<input type='hidden' name='txt_base_url' id='txt_base_url' value="/pdfsearch">
<input type='hidden' name='judge_val' id='judge_val' value="">
<input type='hidden' name='judge_arr' id='judge_arr' value="">
<input type='hidden' name='year_val' id='year_val' value="">
<input type='hidden' name='act_val' id='act_val' value="">
<input type='hidden' name='state_val' id='state_val' value="High Court of Madhya Pradesh">
<input type='hidden' name='state_code_val' id='state_code_val' value="">

<input type='hidden' name='search_text_1' id='search_text_1' value="">
<input type='hidden' name='search_text_2' id='search_text_2' value="">
<input type='hidden' name='search_text_3' id='search_text_3' value="">
<input type='hidden' name='search_text_4' id='search_text_4' value="">
<input type='hidden' name='search_text_5' id='search_text_5' value="">
<input type='hidden' name='path' id='path' value="">

<!--<input type='hidden' name='fcourt_type' id='fcourt_type' value="2">  -->

<input type='hidden' name='escr_flag' id='escr_flag' value="">
<input type='hidden' name='flag' id='flag' value="">
<input type='hidden' name='nfs_rel_path' id='nfs_rel_path' value='/judgments_lib/' >

   <script src="js/jquery.session.js"></script>
  <script src="js/pdfsearch.js"></script>


</html>

</div>
</div>


    <div class='alert alert-danger alert-dismissible'  style='text-align:center;display: none;'><a href="#" class="close" data-dismiss="alert" aria-label="close" style='padding: 0px;'>&times;</a><div id='msg-danger'></div></div>
    <div class='alert alert-success alert-dismissible' style='text-align:center;display: none;'><a href="#" class="close" data-dismiss="alert" aria-label="close" style='padding: 0px;'>&times;</a><div id='msg-success'></div></div>
	<div class='alert alert-warning alert-dismissible' style='text-align:center;display: none;'><a href="#" class="close" data-dismiss="alert" aria-label="close" style='padding: 0px;'>&times;</a><div id='msg-warning'></div></div>
	<div class='alert alert-info alert-dismissible' style='text-align:center;display: none;'><a href="#" class="close" data-dismiss="alert" aria-label="close" style='padding: 0px;'>&times;</a><div id='msg-info'></div></div>


    <input type="hidden" name="base_url" id='base_url' value="/pdfsearch">


    <input type="hidden" name="app_token" id='app_token' value="9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">
	<input type="hidden" name="sessionlangid" id='sessionlangid' value="">
	<input type="hidden" name="level1" id='level1' value="">
	<input type="hidden" name="link_id" id='link_id' value="">



	<div class="modal fade" id="loadMe" tabindex="-1" role="dialog" aria-labelledby="loadMeLabel">
	  <div class="modal-dialog modal-sm" role="document">
		<div class="modal-content">
		  <div class="modal-body text-center">
			<img src="images/book.gif" class='loader-gif' class="loader image"/>
			<div class="loader-txt">
			  <p>Loading...</small></p>
			</div>
		  </div>
		</div>
	  </div>
	</div>


	<div class="modal fade" id="validateError" tabindex="-1" role="dialog" aria-labelledby="loadMeLabel" style="display:none;">
  <div class="modal-dialog modal-md" role="document">
	<div class="modal-content">
	<div class="modal-header text-center align-items-start">
        <i class="fas fa-3x fa-exclamation-triangle mb-3 text-secondary mx-auto w-100 d-none" id="errorIcon"></i>
		<i class="fas fa-3x fa-check-circle mb-3 text-success mx-auto w-100 " id="successIcon" aria-hidden="true"></i>
        <button type="button" class="btn-close" data-bs-dismiss="modal" >&nbsp;</button>
      </div>

	  <div class="modal-body p-1 text-center">

		<div clas="loader-txt">
		  <div class='alert alert-danger-cust'  style='align:center;text-align:center;word-wrap: break-word;'>
              </div>
		<div class='alert alert-success-cust' style='align:center;text-align:center;display: none;word-wrap: break-word;'></div>
		</div>
	  </div>
	</div>
  </div>
</div>

<div class="modal fade" id="captcha_modal" tabindex="-1" role="dialog" aria-labelledby="loadMeLabel" style="display:none;">
  <div class="modal-dialog modal-md" role="document">
	<div class="modal-content">
	<div class="modal-header text-center align-items-start">
        <i class="fas fa-3x fa-exclamation-triangle mb-3 text-secondary mx-auto w-100 d-none" id="errorIcon1"></i>

        <button type="button" class="btn-close" data-bs-dismiss="modal" >&nbsp;</button>
    </div>

	<div class="modal-body p-1 text-center">

		<div clas="loader-txt">
			<div class='alert alert-danger' id='error_message'  style='align:center;text-align:center;word-wrap: break-word;'>

			</div>
			<div class='row' id='captcha_modal_div' >

			</div>

		</div>
	</div>
  </div>
</div>
</div>


<!-- Help Modal -->
<div class="modal fade" id="HelpModal" tabindex="-1" aria-labelledby="HelpModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="HelpModalLabel">Help</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">&nbsp;</button>
      </div>
      <div class="modal-body">
        Help Text
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



<script>

	$('[type="submit"]').attr('type','button');



</script><footer class=" mt-auto bg-light">

  <div id="footer-container" class="container-fluid clearfix pt-2 mt-2" role="contentinfo">
  <div class="row topfooter p-0">
	  <div class="col-md-3 border-right">
		<nav class="row">
			  <ol class="col footerlinks">
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/ab&escr_flag=&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">About Us</a></li>
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/sm&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">Site map </a></li>
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/cu&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">Contact Us</a></li>
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/as&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">Accessibility Statement</a></li>
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/sr&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">Screen Reader Access</a></li>
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/tc&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">Terms and Conditions</a></li>
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/cp&escr_flag=&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">Copyright Policy</a></li>
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/hl&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">Hyper Linking Policy</a></li>
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/pp&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">Privacy Policy</a></li>
			  <li><a href="/pdfsearch/?p=pdf_search/footerlinks/di&app_token=9cd59b6355400ff0ab235fcb038a983f1146cb459390e2386c777cb1176c5623">Disclaimer</a></li>
			  </ol>
			</nav>
	  </div>
	  <div class="col-md-7 border-right">
	   <div class="row px-2">
		   <div class="col text-lg-left text-center p-0">
			 <ol class="footerlogolist" role="list">
				<li class="logos" role="listitem">
					 <a href="http://www.digitalindia.gov.in/" target="_blank"  title="Digital India External website that opens a new window" aria-label="Digital India opens a new window" rel="noopener noreferrer">
					 <img class="digital-india fooimg" src="images/di-logo.png" alt="Digital India External website that opens a new window">
					 </a>
				 </li>
				 <li class="logos" role="listitem">
					 <a href="http://www.india.gov.in/" target="_blank"  title="National Portal of India External website that opens a new window" aria-label="National Portal of India opens a new window" rel="noopener noreferrer">
					 <img class="india-gov-logo fooimg" src="images/india-gov-logo.png" alt="National Portal of India External website that opens a new window">
					 </a>
				 </li>
				 <li class="logos" role="listitem">
					 <a href="http://www.doj.gov.in/" target="_blank"  title="Department of Justice External website that opens a new window" aria-label="Department of Justice opens a new window" rel="noopener noreferrer">
					 <img class="doj-logo fooimg" src="images/DOJ-logo.png" alt="Department of Justice External website that opens a new window">
					 </a>
				 </li>
				 <li class="logos" role="listitem">
					<a href="https://ecommitteesci.gov.in/" target="_blank" title="e-Committee Supreme Court of India External website that opens a new window" aria-label="e-committee supreme court of india opens a new window" rel="noopener noreferrer">
					 <img class="fooimg" src="images/ecommittee-logo.png" alt="e-Committee Supreme Court of India External website that opens a new window">
					 </a>
				 </li>
				 <li class="logos" role="listitem">
					<a href="http://indiacode.nic.in/" target="_blank"  title="India Code External website that opens a new window" aria-label="India Code opens a new window" rel="noopener noreferrer">
					 <img class="fooimg" src="images/IC-logo.png" alt="India Code Centre External website that opens a new window">
					 </a>
				 </li>
				 <li class="logos" role="listitem">
					 <a href="https://www.nic.in/" target="_blank"  title="National Informatics Centre External website that opens a new window" aria-label="National Informatics Centre opens a new window" rel="noopener noreferrer">
					 <img class="fooimg" src="images/NIC-logo.png" alt="National Informatics Centre External website that opens a new window">
				 </a>
				 </li>
				</ol>
			 </div>
	   </div>
		<div class="row px-2">
			<p class="m-0">This site is designed, hosted and maintained by <a href="http://www.nic.in/" target="_blank" class="text-info1" title="National Informatics Centre (NIC) External website that opens a new window" aria-label="National Informatics Centre (NIC) opens a new window" rel="noopener noreferrer">National Informatics Centre (NIC)</a> Ministry of Electronics &amp; Information Technology, Government of India.</p>
	   </div>
	  </div>
	  <div class="col-md">
		<p>Last Reviewed and Updated on: 05-06-2023</p>
	  </div>

  </div>
    </div>

 <div class="py-0">
    <div class="container-fluid">
	<div class="row px-lg-2">

	<div class="col-2"><p class="p-0 py-2 m-0 text-lg-start text-dark">Version: 2.0</p></div>

	<div class="col">
	      <p class="p-2 m-0 text-center text-dark">&copy; 2020 eCommittee, Supreme Court of India. All Rights Reserved</p>
	  </div>

	  <div class="col-2"><p class="p-0 py-2 m-0 text-lg-end text-dark ">S3</p></div>
	 </div>
    </div>
	</div>


</footer>

<div id="Select_alert" class='d-none'>The best way to access combo boxes is by  pressing enter on the box, followed by alt+down arrow which will open the list of options to choose from.</div>
</div>
</html>
<script>

	var labels_array=null
	var buttons_array=null
	var alerts_array=null


	</script>