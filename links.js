//using the switch/case method


function ShowMe(Destination){ //learnt from c++
    switch(Destination){
        case 'Home':
            window.location.href = "#";
            break;
        case 'men':
            window.location.href = "https://hmusaab.github.io/projectforfirstproj/";
            break; 
        case 'accessories':
            window.location.href = "https://hmusaab.github.io/FeedbackHub/";
            break; 
        case 'women':
            window.location.href = "https://hmusaab.github.io/Captures/";
            break; 
        case 'kids':
            window.location.href = "https://hmusaab.github.io/kidspart/";

            break;
        case "ContactUs":
            window.location.href = "http://127.0.0.1:3000/ContactUs/index.html";
            break;
        case "TermsAndServices":
            window.location.href = "http://127.0.0.1:3000/AnimatedPage/index.html"
          // Default action (if no valid destination is provided)
        default:
            break;

    }

}