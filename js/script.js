know = {
              "Hello" : "- Hi",
              "Hi" : "-Hello :D",
              "What's your name?" : "- My name is Starbot",
              "How old are you?" : "- infinity",
              "Any advice?" : "- Nah, Good Speed through"              
              
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
