
let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"]
console.log(filmes[2]);


let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]

cartoons.pop();

function add()
{
    filmes.push(cartoons);
}
add();
console.log(filmes);
console.log(filmes.join());
