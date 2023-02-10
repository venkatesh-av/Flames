
let Name = document.getElementById("yourName");
let Pname = document.getElementById("yourPartnerName");
let check = document.getElementById("check");
let clr = document.getElementById("clr");
let result_spanEl = document.getElementById("result_span");
let resultsEl = document.getElementById("results");
let stickersIMgEl = document.getElementById("stickersIMg");
var Urname, a, b;
var Parname;
let A = ["F", "L", "A", "M", "E", "S"];
let A1 = [];

function falmes(a, b) {
    var n = 0;
    let l1 = a.length;
    let l2 = b.length;
    if (l1 >= l2) {
        for (let k in a) {
            for (let i in b) {
                if (b[i] === a[k]) {
                    n++;
                    b[i] = "$";
                }

            }
        }
    } else {
        for (let k in b) {
            for (let i in a) {
                if (a[i] === b[k]) {
                    n++;
                    a[i] = "$";
                }
            }
        }
    }
    console.log(l1);
    console.log(l2);
    console.log(n);
    let diff = l1 + l2 - 2 * n;
    console.log(diff);
    for (let i of [6, 5, 4, 3, 2]) {
        let index = diff % i;
        let j = 0;
        while (j < i - 1) {
            A1[j] = A[index];
            index = (index + 1) % i;
            j++;
        }
        A = A1;
        A1 = [];
    }
    let Flm = {
        "F": "Friends",
        "L": "Lovers",
        "A": "Attraction",
        "M": "Marriage",
        "E": "Enemies",
        "S": "Siblings"
    };
    let stickers = {
        "F": "https://media.tenor.com/7YYCbf52FrkAAAAd/fun-tele-tubbies.gif",
        "L": "https://media.tenor.com/ATd8fxgKxm4AAAAM/ayyo-rama-gifs.gif",
        "A": "https://thumbs.gfycat.com/CleanUnkemptDogfish-max-1mb.gif",
        "M": "https://thumbs.gfycat.com/SlimKaleidoscopicBagworm-max-1mb.gif",
        "E": "https://res.cloudinary.com/dgurkbuce/image/upload/v1675968652/WhatsApp_Image_2023-02-10_at_00.20.35_iq98ln.jpg",
        "S": "https://media.tenor.com/yxlQIVJwMB4AAAAM/karma-gif.gif"
    };
    result_spanEl.textContent = Flm[A[0]];
    let result = Urname + " and " + Parname + " got result as " + Flm[A[0]];
    console.log(Urname + " and " + Parname + " got result as " + Flm[A[0]]);
    var templateParams = {
        From: Urname,
        Mess: result
    };
     
    emailjs.send('service_k5t847r', 'template_tuedl18', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    
 


    stickersIMgEl.src = stickers[A[0]];
    resultsEl.classList.remove("d-none");
    A = ["F", "L", "A", "M", "E", "S"];
}



check.addEventListener('click', () => {

    if (Name.value === "") {
        result_spanEl.textContent = "Enter your name";
        resultsEl.classList.remove("d-none");
    } else if (Pname.value === "") {
        result_spanEl.textContent = "enter your partner name";
        resultsEl.classList.remove("d-none");
    } else {
        Urname = Name.value;
        Parname = Pname.value;
        Urname = Urname.replaceAll(" ", "");
        Parname = Parname.replaceAll(" ", "");
        console.log(Urname);
        console.log(Parname);
        a = Array.from(Urname);
        b = Array.from(Parname);
        falmes(a, b);
    }
});
clr.addEventListener('click', () => {
    Name.value = "";
    Pname.value = "";
    resultsEl.classList.add("d-none");
});

