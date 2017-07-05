$(document).ready(function(){
    $('ul.tabs').tabs({ 'swipeable': true });

    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $(".button-collapse").sideNav();
    $('select').material_select();
  });
