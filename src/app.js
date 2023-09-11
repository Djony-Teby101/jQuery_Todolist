$("document").ready(()=>{
    $("#button").click(()=>{
        var toAdd=$("input[name=listItem]").val();
        $('ul').append('<li>'+toAdd+'</li>');
    })

   /* $(document).on('click','li',function(){
        $('this').toggleClass('strike').fadeOut('slow')
        
    })*/
   $(document).on('click','li',function(){
       $(this).toggleClass('strike').fadeOut('slow')
   })

    $('input').focus(function(){
        $(this).val(' ');
    })

    $('ul').sortable();
})