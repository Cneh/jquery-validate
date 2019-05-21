// first name includes only letters, -'
$("#submit").on("click", function(){
    var fName = $("#fname").val();
    var regEx = /^[a-z,.'-]+$/i;

    if (regEx.test(fName)){
        $(".errors p.fname-error").remove();  
    } else {
       $(".errors p.fname-error").remove();
       $(".errors p.fname-error").append("<p class=\"firstname-error\">Please enter a valid first name</p>");
    } 
    
// email is properly formatted
    var email = $("#email").val();
    var eregEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (eregEx.test(email)){
        $(".errors p.email-error").remove();  
    } else {
       $(".errors p.email-error").remove();  
       $(".errors").append("<p class=\"email-error\">Please enter a valid email</p>");
    } 
// password at least 1 capital, lower, number, 1 special character

    var password = $("#password").val();
    var pregEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (pregEx.test(password)){
        $(".errors p.password-error").remove();  
    } else {
        $(".errors p.password-error").remove(); 
       $(".errors p.password-error").append("<p class=\"password-error\">Please enter a valid password</p>");
    }
// enter password again === first enter  
    var password2 = $("#password2").val();

    if (password === password2) {
        $(".errors p.password2-error").remove();  
    } else {
       $(".errors p.password2-error").remove();
       $(".errors p.password2-error").append("<p class=\"password2-error\">Your passwords do not match</p>");
    } 
});

// function takes in human readable name, field id, 
// and regular expression to check if valid

//var fieldValidate = function(name, id, regex) {
//    var id = $("#fname").val();
//    var regEx = regex;
//   if (regEx.test(id)){
//        $(".errors p." + id +"-error").remove();
//    } else {
//        $(".errors p." + id +"-error").remove();
//        $(".errors").append("<p class=" + id + "-error\">You must enter a valid " +name+".</p>");
//   }
//} 

// function tests that passwords match

//var passwordMatch = function(){
//    var password2 = $("#password2").val();
//    if (password === password2){
//        $(".errors p.password2-error").remove();
//    } else {
//        $(".errors p.password2-error").remove();
//        $(".errors").append("<p class=\"password2-error\">Your passwords do not match.</p>");
//    }
//}

// on click, run tests

// $("#submit").on("click", function(){
//    fieldValidate("name", fname , /^[a-z ,.'-]+$/i);
//    fieldValidate("email", email , /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
//    fieldValidate("password", password , /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/);
//    passwordMatch();
//});

