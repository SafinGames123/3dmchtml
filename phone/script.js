window.addEventListener('load', removeLoader);
window.addEventListener('contentmenu', ()=> {return false;});
loadTxt();
function removeLoader() {
  var loader = document.querySelector('.loader');
  loader.classList.add('hidden');
    // var txt = document.querySelector('.loader_txt').textContent="Let's Go";
}
function loadTxt() {
  var loading_txt = document.querySelector('.loader_inner_txt');
  setTimeout(()=> {
    loading_txt.textContent="Background";
  },2000);
  setTimeout(()=> {
    loading_txt.textContent="Buttons";
  },4000);
  setTimeout(()=> {
    loading_txt.textContent="Blocks";
  },6000);
  setTimeout(()=> {
    loading_txt.textContent="Characters";
  },8000);
  setTimeout(()=> {
    loadTxt();
  },10000);
}
window.onload = 'getthecookie()'
function getthecookie() {
	text
}
function play() {
  addhtml("<iframe src='https://safingames123.github.io/reimagined-system/classic.minecraft.net/index.html' id='game'></iframe><div id='X' style='color: red; position:absolute; right:0; top:0; font-weight: bold; font-size: 70px;z-index: 2;cursor: pointer;' onclick='stop();'>x</div><div onclick='stop();' style='position:fixed; top:0; left:0; text-align:center; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1.5; color:white; background-color:black; font-size:165%;' id='loading'>LOADING...</div>");
}

function stophow() {
  remove("instructions");
  remove("stophow");
  
}
function stop() {
  remove("game");
  remove("X");
  remove("loading");
  
}
function stopmulti() {
  remove("game");
  remove("X");
  remove("blahblah");
  remove("loading");
  
}
function nomulti() {
  remove("nomulti");
  remove("blahblah");
  
}
function playmulti() {
  addhtml("<div id='blahblah' style='position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0;'><input style='width: 90%; outline: none;' type='text' placeholder='multyplayer game url add https' id='multyurl' autocomplete='off' /><input type='button' onclick='startmultigame()' value='summit' /></div><div id='nomulti' style='color: red; position:absolute; left:0; bottom:0; font-weight: bold; font-size: 70px;z-index: 2;cursor: pointer;' onclick='nomulti();'>x</div>");
}
function startmultigame() {
  remove("nomulti")
  var multi = document.getElementById("multyurl").value;
  addhtml("<iframe src="+ multi +" id='game'></iframe><div id='X' style='color: red; position:absolute; right:0; top:0; font-weight: bold; font-size: 70px;z-index: 2;cursor: pointer;' onclick='stopmulti();'>x</div><div onclick='stop();' style='position:fixed; top:0; left:0; text-align:center; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1.5; color:white; background-color:black; font-size:165%;' id='loading'>LOADING...</div> ")
  }
function remove(elementId) {
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
function addhtml(html) {
  document.body.innerHTML = document.body.innerHTML + html;}
  function updateidea() {
    /*  if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
      var notification = new Notification("updates? chat--duck132912.repl.co I am duck1321912");
    }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("updates? chat--duck132912.repl.co I am duck1321912");
        }
      });
    }
    }
    Notification.requestPermission().then(function(result) {
    console.log(result);
    });function spawnNotification(body, icon, title) {
    var options = {
        body: body,
        icon: icon
    };
    } */
    }
    var button = document.getElementById("button");
    var audio = document.getElementById("audio");
    button.addEventListener("click", function(){
    if(audio.paused){
      audio.play();
      button.innerHTML = "Pause audio";
    } else {
      audio.pause();
      button.innerHTML = "Play audio";
    }
    });
    function options() {
      addhtml("<div style='position:fixed; top:0; left:0; text-align:center; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1.5; color:white; background-color:black; font-size:125%;' id='options'>Do you want to <button class='button'onclick='change()'>Change the flashing text</button><button onclick='openwindowform()' class='button'>Open window form</button><button onclick='closeoptions()' class='button'>Close options</button></div>");
    }
    function enablenarrations() {
    alert("thing")
      } 
    function change() {
      text = prompt("what should the flashing text be?");
      document.getElementById("flashingtext").innerText = text;
      document.cookie = "text=" + text 
      if(text == "" || text == null) {
        change();
      }
      remove("options")
    }
    function openwindowform() {
        remove("options")
        window.open("https://minecraft--duck132912.repl.co", "", "width=10000,height=10000");
    }
    function closeoptions() {
      remove("options")
    }
    function quit() {
      close();
      window.location = "";
    }
    function how() {
      addhtml("<div id='stophow' style='color: red; position:absolute; left:0; bottom:0; font-weight: bold; font-size: 60px;z-index: 2;cursor: pointer;' onclick='stophow();'>x</div><div style='position:fixed; top:0; left:0; text-align:center; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:1; color:white; background-color:black; font-size:125%;' id='instructions'>Use WASD to move around, T to talk, 1 to 9 to change blocks, B to get new blocks, mouse to look around, R to respawn, ESC to pause and G to teleport a random player into your world. To go back to the starting screen when you are in-game press ESC and CLICK THE RED X IN THE CORNER OF THE SCREEN TO CLOSE IN THE REAL GAME THE RED X IS ON THE TOP RIGHT</div>")
    }