var username = ["Altaf", "Karim", "Saad", "Shaan", "hussain", "jhonny"];

for(i = 0; i < username.length; i++){
    if(username[i].charAt(0) == "J" || username[i].charAt(0) == "j"){
        console.log(" Good bye " + username[i]);
        break;
    }

   else {
    console.log("hello" + username[i]);
   }

    
        
   
}
