document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var age = parseInt(document.getElementById('age').value);
    var language = document.getElementById('language').value;
    
    if (age <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Por favor, insira uma idade válida.'
      });
      return;
    }
    
    var message = "Olá " + name + ", você tem " + age + " anos e já está aprendendo " + language + "!";
    
    Swal.fire({
      icon: 'success',
      title: 'Mensagem',
      text: message,
      showCancelButton: true,
      cancelButtonText: 'Fechar',
      confirmButtonText: 'OK',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'question',
          title: 'Pergunta',
          text: 'Você gosta de estudar ' + language + '?',
          showCancelButton: true,
          cancelButtonText: 'Não',
          confirmButtonText: 'Sim',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: 'success',
              title: 'Muito bom!',
              text: 'Continue estudando e você terá muito sucesso.'
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
              icon: 'warning',
              title: 'Pena...',
              text: 'Já tentou aprender outras linguagens? Você não pode desistir'
            });
          }
          
          // Resetar o formulário para novas respostas
          document.getElementById('question-form').reset();
        });
      }
    });
  });
  