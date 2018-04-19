(function($) {
    $(".tab_content").hide();
    $(".tab_content:first").show();
    $("ul.tabs li").click(function () {
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");
      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
    });
    $(".tab_drawer_heading").click(function () {
        if ($(this).hasClass('d_active')) {
            $(this).removeClass('d_active');
            $(".tab_content").hide();
        } else {
          $(".tab_content").hide();
           var d_activeTab = $(this).attr("rel");
           $("#" + d_activeTab).fadeIn();
           $(".tab_drawer_heading").removeClass("d_active");
           $(this).addClass("d_active");
           $("ul.tabs li").removeClass("active");
           $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
        }
    });
    $('ul.tabs li').last().addClass("tab_last");

    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;
        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
        var $listItems = $list.children('li');
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            console.log($this.val());
        });
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

  });
var file, 
    render;

document.getElementById("image_upload").addEventListener("click", function(){
document.body.addEventListener("drop", function(ev){
  file = ev.dataTransfer.files[0];
  if(!file.type.match("image.*")) {
    alert("This file isn't image or it's unsupported format");
    return;
  }
  reader = new FileReader();
  reader.addEventListener("load", (function(theFile) {
    return function(e) {
      document.getElementById("preview").style.backgroundImage = "url('" + e.target.result + "')";
    };
  })(file), false);
  reader.readAsDataURL(file);
}, false);
});

})(jQuery);
