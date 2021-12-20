let api = axios.create({
   baseURL: `https://curriculo-lucaszluhan-back-db.herokuapp.com`,
});

createComentario = () => {
   if (document.querySelector('#nomeInput').value && document.querySelector('#comentarioInput').value) {
      api.post('/comentarios', {
         nome: document.querySelector('#nomeInput').value,
         comentario: document.querySelector('#comentarioInput').value,
      })
         .then((result) => {
            document.querySelector('#nomeInput').value = '';
            document.querySelector('#comentarioInput').value = '';
            document.querySelector('#divComentarios').innerHTML = '';
            alert(result.data.msg);
            getComentarios();
            setComentarios();
         })
         .catch((error) => {
            console.log(error);
         });
   } else {
      alert('Preencha todos os campos.');
   }
};

setCreateComentarioButton = () => {
   let btn = document.querySelector('#createComentario');
   btn.setAttribute('onclick', 'createComentario()');
};
setCreateComentarioButton();

let comentarios;

getComentarios = async () => {
   let comentariosAPI = await api.get('/comentarios');
   comentarios = comentariosAPI.data;
   console.log({ comentarios });
   console.log({ comentariosAPI });
};
getComentarios();

setComentarios = async () => {
   try {
      let comentariosSet = comentarios.data;
      comentariosSet.reverse();
      comentariosSet.splice(3);
      for (let comentario of comentariosSet) {
         let div = document.createElement('div');
         div.setAttribute('class', 'm-5 p-5 h-25 w-25 d-flex flex-column align-items-center text-wrap justify-content-evenly');
         let name = document.createElement('h3');
         name.setAttribute('class', 'fw-bold text-wrap w-100 mb-5');
         name.innerText = comentario.nome;
         div.appendChild(name);
         let comentarioTexto = document.createElement('p');
         comentarioTexto.setAttribute('class', 'fs-4 text-wrap w-100');
         comentarioTexto.innerText = comentario.comentario;
         div.appendChild(comentarioTexto);
         let divComentarios = document.querySelector('#divComentarios');
         divComentarios.appendChild(div);
      }
   } catch (error) {
      console.log(error);
   }
};

setComentarios();
