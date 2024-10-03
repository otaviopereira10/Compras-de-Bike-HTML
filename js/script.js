function comprar(){
    Swal.fire({
        title: "Item adicionado ao carrinho!",
        text: "Item no carrinho!",
        icon: "success"
      });
}

function confirmar(){
Swal.fire({
  title: "Deseja finalizar a compra?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Sim"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Compra finalizada!",
      text: "Obrigado pela compra, volte sempre!",
      icon: "success"
    });
  }
});
}