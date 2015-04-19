/**
 * Created by Hernan Y.Ke on 4/19/15.
 */
$(document).ready(function(){
    $(function(){
        $("#showPhoneNav").click(function(){
            $("#myNav").sildeToggle("normal",function(){
            if($("#myNav").is(":visible")){
                $("#showPhoneNav").text("Hide Navigation");
            }else{
                $("#showPhoneNav").text("Show Navigation");
            }
            });
        });
    });
});