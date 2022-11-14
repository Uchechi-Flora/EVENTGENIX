//FOR HOMEPAGE
//CLEARING MESSAGE BUTTON
function clearText(){
    $(".message").val("")
    $(".name").val("")
}
$("#clearbtn").click(clearText)

//SENDING MESSAGE
    $("#sendbtn").click(function() {
        $(".name").val("")
        $(".message").val("SENT SUCCESSFULLY")
        $(this).html('&#10004').text()
    })


//FOR WEDDING PAGE

//ZOOM IN AND OUT BUTTON
let imageW = $(".img-view").width();
let imageH = $(".img-view").height();

$("#zoom-in").on('click', function() {
    imageH = imageH + 100;
    imageW = imageW + 100;
    $(".img-view").width(imageW)
    $(".img-view").height(imageH)
})

$("#zoom-out").on('click', function() {
    imageH = imageH - 100;
    imageW = imageW - 100;
    $(".img-view").width(imageW)
    $(".img-view").height(imageH)
})

//WEDDING FORM VALIDATOR; CANCEL BUTTON, EMPTY DETAILS, WRONG DATE AND ELSE STATEMENT TO LINK TO NEXT PAGE WHEN PAYMENT BUTTON IS CLICKED

//FUNCTION FOR EMPTY DETAILS AND PAGE LINKING
$("#paymentbtn").click(function() {
    if($(".range").val() == "" && $('input[name="invite"]').prop('checked', false)){
        $(".empty-details").show()
    }
    else {
        $('a[href^="#"]').each(function(){
            let oldU = $(".payment-page").attr("href")
            let newU = oldU.replace("#","./EG_payment.html")
            $(this).attr("href", newU)
        })
        
    }
}) 

//FUNCTION FOR WRONG DATE
$("#date").datepicker({
    dateFormat: 'dd-mm-yy',
    minDate: '+2'
}) 

//FUNCTION TO CLEAR FORM(IF CANCEL BUTTON IS CLICKED)
function clearForm(){
    $(".range").val("")
    $('input[name="invite"]').prop('checked', false)
}
$("#cancelbtn").click(clearForm)

