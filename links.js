//using the switch/case method


function ShowMe(Destination){ //learnt from c++
    switch(Destination){
        case 'Home':
            window.location.href = "#";
            break;
        case 'men':
            window.location.href = "https://hmusaab.github.io/projectforfirstproj/";
            break; 
        case 'Accessories':
            window.location.href = "";
            break; 
        case 'Women':
            window.location.href = "";
            break; 
        case 'Kids':
            window.location.href = "";
            break;
          // Default action (if no valid destination is provided)
        default:
            break;

    }

}