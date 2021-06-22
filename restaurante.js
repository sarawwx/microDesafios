function Restaurante(nome, cardapio){
    this.nome = nome;
    this.cardapio = cardapio
    this.entrada = () => console.log(`Bem vindo(a) ao ${nome}, confira nosso cardápio:${cardapio.join(", ")}`)
  }
  
  let restaurante = new Restaurante("Sr. Oregano",[" Pizza Pepperoni", "Pizza Moda da Casa", "Pizza Queijo Velho"])
  
  restaurante.entrada()