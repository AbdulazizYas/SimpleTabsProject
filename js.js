

 $(function () {
//////////////////////////////////////////////////////////////////////////
 var myID = 'tab1';
   $('.top ul:first-child li').click(function () {
      myID = $(this).attr('id');
      console.log($('#'+myID+'-content').text());
     $(this).removeClass('inactive').siblings().addClass('inactive');
     $('div').hide();
     $('#'+myID+'-content').fadeIn(200);
   });

   $('.top ul:last-child li').click(function() {
     var childColor = $(this).css('background-color'),
         secWidthInPer   = Math.ceil($('body > section').width() / $('body > section').parent().width() * 100);
     if(childColor === "rgb(0, 128, 0)"){
       if($('body > section').css('min-height') == '600px'){

         $('body > section').animate({
           minHeight:"5px",
           height:"50px"
         },{duration:200,queue:false});
         $('.top').animate({
           borderWidth:'0'
         },200);
         $('div').animate({
           minHeight:"0",
           height:"0",
         },{duration:200,queue:false}).fadeOut(250,function () {
           $('.top ul:first-child').hide(200);
         });

       }else{
         $('div').css('min-height','520px');
         $('body > section').animate({
           width:'90%'
         },200,function () {
           $('.top ul:first-child').show(200,function () {
             $('.top').animate({
               borderWidth:'4px'
             },200);
             $('body > section').animate({
               minHeight:"600px"
             },200,function () {

               $('#'+myID+'-content').animate({
                 minHeight:'520px',
                 height:'show'
               },200);
             });
           });
         });
       }
     }else if(childColor === "rgb(255, 165, 0)"){
       $('body > section').animate({
         width:'30%'
       },200);
       $('.top ul:first-child li').animate({padding:'5px 10px',fontSize:'.7em'},200,function () {
         $('body > section').animate({
           minHeight:"450px"

         },200);
         $('div').animate({
           minHeight:"390px"
         },200)
       })
       //$('div').animate({width:'100%'})
     }else{
       if(secWidthInPer == '90'){

         $('body > section').animate({
           minHeight:"5px",
           height:"50px"
         },{duration:200,queue:false});
         $('.top').animate({
           borderWidth:'0'
         },200);
         $('div').animate({
           minHeight:"0",
           height:"0",
         },{duration:200,queue:false}).fadeOut(250,function () {
           $('.top ul:first-child').hide(200,function () {
             $('body > section').animate({
               width:'8%'
             });
           })
         });

       }else{
         $('div').css('min-height','520px');
         $('body > section').animate({
           width:'90%'
         },200,function () {
           $('.top ul:first-child').show(200,function () {
             $('.top').animate({
               borderWidth:'4px'
             },200);
             $('body > section').animate({
               minHeight:"600px"
             },200,function () {

               $('#'+myID+'-content').animate({
                 minHeight:'520px',
                 height:'show'
               },200);
             });
           });
         });
       }
     }
});
////////////////////////////////////////////////////////////////////////////////


 })
