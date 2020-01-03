know = {
                "hey" : "-Hi",
                "Hey" : "-Hi",
                "hello" : "-hi",
                "hello" : "- Hi",
                "How do you feel" : "- Some type of way",
                "How do you feel?" : "- Some type of way",
                "how do you feel?" : "- Some type of way",
                "How do you feel?" : "- Some type of way",
                "Hello" : "- Hi, how's your day been?",
                "What sort of things do you enjoy doing?" : "-Don't really get up to much I'm kinda stuck in a server :D",
                "who is this": "- I'm Starbot",
                "who is this?": "- I'm Starbot",                
                "what is this": "- I'm a Starbot",               
                "Who is this?": "- I'm Starbot",
                "what is this": "- I'm a Starbot",
                "what's your name" : "- My name is Starbot",
                "What's your name?" : "- My name is Starbot",
                "any advice for life?" : "- Nah, Good Speed through",     
                "Any advice for life?" : "- Nah, Good Speed through",  
                "Any advice for life ?" : "- Nah, Good Speed through",       
                "Any advice?" : "- Nah, Good Speed through",
                "any advice?" : "- Nah, Good Speed through",
                "How old are you?" : "- infinity",        
                "How old are you" : "- infinity",
                "how old are you" : "- infinity",
                "Know any cool people" : "There's this girl called Orla who seems pretty chill :D",
                "What's your favourite song?" : "- Nights by Frank",
                "how are you?" : "- good",
                "it's been fun" : "- God Speed",
                "everything is good?" : "- nope, but i am use to it.",
                "ok" : ":)"
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
