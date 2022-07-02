var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    strings:["Full-stack developer","Let's got to online"],
    autoStart:true,
    loop:true
});

// copy link
function copy1() {
    let btn=document.getElementById('')
    console.log(btn);
    let innercontent=document.getElementById('input').innerText;
 let txt= navigator.clipboard.writeText(innercontent);
  if ((txt)) {
    alert("Done!")
  } else {
   alert("error 404. or check your internet conection")
  }
}
