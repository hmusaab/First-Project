const createNav = () =>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML= `
    <div class="nav">
    <img src="logo-PhotoRoom.png-PhotoRoom.png" class="brand" alt="">
            <div class="nav-items">
                <div class="search">
                
                    <input type="text" class="searchbox" placeholder="search brand,products, or other stuff">                       
                    <button class="button">Search</button>
                    </div>
                <a href="#"><img src= "users-removebg-preview.png" alt="" class = "login"></></a>
                



            </div>

        </div>
        <ul class="link-container">
                <li class="link-item"><a href="#" class="link" onclick = "ShowMe('home')">home</a></li>
                <li class="link-item"><a href="#" class="link" onclick = "ShowMe('men')">men</a></li>
                <li class="link-item"><a href="#" class="link" onclick = "ShowMe('accessories')">accessories</a></li>
                <li class="link-item"><a href="#" class="link" onclick = "ShowMe('women')">women</a></li>
                <li class="link-item"><a href="#" class="link" onclick = "ShowMe('kids')">kids</a></li>
                <li class="link-item"><a href="#" class="link" onclick = "ShowMe('ContactUs')">Contact Us</a></li>
                <li class="link-item"><a href="#" class="link" onclick = "ShowMe('TermsAndServices')">Terms and Services</a></li>
            </ul>
            
`;
   
// to create a multi line string, you have to use backticks(`` <-- these things not single quotes)

//place holder: to name the txt box in line 10          




    
    
    
    
}
//calling the function
createNav();