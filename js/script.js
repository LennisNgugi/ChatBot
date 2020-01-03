know = {
                "hello" : "hi",	                                                                                                      
                "hello" : "- Hi",
                "How do you feel" : "some type of way",	                
                "How do you feel" : "- Some type of way",
                "How do you feel?" : "some type of way",	                
                "How do you feel?" : "- Some type of way",
                "how do you feel?" : "Some type of way",	                "how do you feel?" : "- Some type of way",
                "How do you feel?" : "Some type of way",	                "How do you feel?" : "- Some type of way",
                "Hello" : "Hi, how's your day been?",	                "Hello" : "- Hi, how's your day been?",
                "who is this": "I'm Starbot",	                "who is this": "- I'm Starbot",
                "Who is this?": "I'm Starbot",	                "Who is this?": "- I'm Starbot",
                "what is this": "I'm a Starbot",	                "what is this": "- I'm a Starbot",
                "What's your name" : "My name is Starbot",	                "What's your name" : "- My name is Starbot",
                "how old are you" : "infinity",	                "Any advice?" : "- Nah, Good Speed through",
                "how are you?" : "good",	                "any advice?" : "- Nah, Good Speed through",
                "it's been fun" : "God Speed",	                "How old are you" : "- infinity",
                "everything is good?" : "nope, but i am use to it.",            };
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
