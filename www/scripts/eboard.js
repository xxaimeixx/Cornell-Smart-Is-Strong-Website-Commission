// When the document has loaded
$(document).ready(function() {

  function revealInfo(meminfo) {
    function f() {
      var showninfolist = document.getElementsByClassName("shown");
      // console.log("showninfolist: " + showninfolist);
      var showninfo = showninfolist.item(0);
      // console.log("showninfo: " + showninfo);
      if(showninfo != null) {
        $(showninfo).removeClass('shown');
        // console.log("showninfo_removed: " + document.getElementsByClassName("shown"));
      } else {
        // console.log("showninfo_removed: no element with class shown");
      }

      var focuslist = document.getElementsByClassName("focus");
      for (let x in focuslist) {
        $(focuslist[x]).removeClass('focus');
      }
      // console.log("reveal/hide info ---------------------");
      // console.log("meminfo: " + meminfo);
      var info = document.getElementById(meminfo);
      // console.log("info: " + info);
      if(info.classList.contains('hidden')) {
        $(this).addClass('focus');
        $(info).removeClass('hidden');
        $(info).addClass('shown');
        if(showninfo != null) {
          $(showninfo).addClass('hidden');
        }
      } else {
        $(this).removeClass('focus');
        console.log(this);
        $(info).addClass('hidden');
      }
      return;
    }
    return f;
  }


  $("#elena_gupta").click(new revealInfo("elena_gupta-info"));
  $("#gita_connolly").click(new revealInfo("gita_connolly-info"));
  $("#keya_gangadharan").click(new revealInfo("keya_gangadharan-info"));
  $("#grace_kaiser").click(new revealInfo("grace_kaiser-info"));
  $("#jessica_guarnizo").click(new revealInfo("jessica_guarnizo-info"));
  $("#diana_ceron").click(new revealInfo("diana_ceron-info"));
  $("#anekha_goyal").click(new revealInfo("anekha_goyal-info"));
  $("#masa_haddad").click(new revealInfo("masa_haddad-info"));
  $("#hannah_faulwell").click(new revealInfo("hannah_faulwell-info"));
  $("#selin_edebali").click(new revealInfo("selin_edebali-info"));
  $("#joy_li").click(new revealInfo("joy_li-info"));
  $("#sharon_yu").click(new revealInfo("sharon_yu-info"));
  $("#sneha_sharma").click(new revealInfo("sneha_sharma-info"));
  $("#emily_levin").click(new revealInfo("emily_levin-info"));
  $("#christopher_morales").click(new revealInfo("christopher_morales-info"));
  $("#sundas_wiqas").click(new revealInfo("sundas_wiqas-info"));
  $("#mia_seungeun_lee").click(new revealInfo("mia_seungeun_lee-info"));
  $("#estefany_dominguez").click(new revealInfo("estefany_dominguez-info"));
  $("#wanxing_lu").click(new revealInfo("wanxing_lu-info"));

  /*
  $("#elena_gupta").click(function() {
  var info = document.getElementById("elena_gupta-info");
  console.log(info);
  if(info.classList.contains('hidden')) {
  $(info).removeClass('hidden');
} else {
$(info).addClass('hidden');
}
});
*/
});
