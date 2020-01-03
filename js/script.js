know = {
                "How old are you?" : "- infinity",        
                "How old are you" : "- infinity",	             
                "How old are you" : "- infinity",
                "how old are you" : "- infinity",	               
                "how old are you" : "- infinity",
                "Know any cool people" : "There's this girl called Orla who seems pretty chill :D"	                
                "Know any cool people" : "There's this girl called Orla who seems pretty chill :D",
                "What's your favourite song?" : "- Nights by Frank",	                
                "What's your favourite song?" : "- Nights by Frank",
                "how are you?" : "- good",	                
                "how are you?" : "- good",
                "it's been fun" : "- God Speed",	                
                "it's been fun" : "- God Speed"       
};
            function talk() {
                var user = document.getElementById("userBox").value;
                document.getElementById("userBox").value = "";
                document.getElementById("chatLog").innerHTML += user+"<br>";
                if (user in know) {
                    document.getElementById("chatLog").innerHTML += know[user]+"<br>";
                } else {
                    document.getElementById("chatLog").innerHTML += "- I don't understand...<br>";
                }
            } 
