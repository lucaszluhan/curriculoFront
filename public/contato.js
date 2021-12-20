let api = axios.create({
   baseURL: `https://curriculo-lucaszluhan-back-db.herokuapp.com`,
});

createContato = () => {
   if (document.querySelector('#nomeInput').value && document.querySelector('#telefoneInput').value && document.querySelector('#emailInput').value && document.querySelector('#assuntoInput').value) {
      api.post('/contatos', {
         nome: document.querySelector('#nomeInput').value,
         telefone: document.querySelector('#telefoneInput').value,
         email: document.querySelector('#emailInput').value,
         assunto: document.querySelector('#assuntoInput').value,
      })
         .then((result) => {
            document.querySelector('#nomeInput').value = '';
            document.querySelector('#telefoneInput').value = '';
            document.querySelector('#emailInput').value = '';
            document.querySelector('#assuntoInput').value = '';
            alert(result.data.msg);
         })
         .catch((error) => {
            alert(error.data.msg);
         });
   } else {
      alert('Preencha todos os campos.');
   }
};

setCreateButton = () => {
   let btn = document.querySelector('#createContato');
   btn.setAttribute('onclick', 'createContato()');
};

setCreateButton();
