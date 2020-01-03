know = {
              "Hello" : "- Hi",
              "Hi" : "-Hello :D",
              "What's your name?" : "- My name is Starbot",
              "How old are you?" : "- infinity",
              "Any advice?" : "- Nah, Good Speed through",              
              "What's your favourite song?" : "- Nights by Frank",  
              "What sort of things do you enjoy doing?" : "-Don't really get up to much I'm kinda stuck in a server :D",              
              "Know any cool people" : "-There's this girl called Orla who seems pretty chill :D"
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
