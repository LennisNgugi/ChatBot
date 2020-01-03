know = {
              "hello" : "- Hi",
              "What's your name" : "- My name is Starbot",
              "How old are you" : "- infinity",
              "Know any cool people" : "There's this girl called Orla who seems pretty chill :D"
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
