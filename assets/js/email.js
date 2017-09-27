/**
 * Created by carlos.bruno on 24/09/2017.
 */
$('.btn-enviar').on('click', function () {


   console.log('Enviar email');
   if( verificarCampos() === true ){
       var nome       = $('#nome').val();
       var email      = $('#email').val();
       var assunto    = $('#assunto').val();
       var comentario = $('#comentario').val();

       $.ajax({
           url  :  'assets/email/email.php',
           type :  'post',
           dataType: 'json',
           beforeSend : aguardando,
           data : {
               nome : nome,
               email : email,
               assunto : assunto,
               comentario : comentario
           },
           success : function ( data ) {

               if( data.retorno == 1 ){

                   sucesso();
               }

           },
           error : erroSend
       });
   }



});


 function verificarCampos() {
     console.log("Verificar campos");
     var nome       = $('#nome').val();
     var email      = $('#email').val();
     var assunto    = $('#assunto').val();
     var comentario = $('#comentario').val();
     var alerta = $('#alerta');
     console.log("Nome: "+nome);
     if( (nome == "") || ( email == "") || (assunto == "") || ( comentario == "" ) ){

         console.log('falso');
         if( nome == "" ){
             var name = $('#alerta');
             $('input[id="nome"]').css('border-color', 'red');
             name.empty().html('<p class="alert alert-info"> Preencha o campo nome</p>');
             name.css({"right":"-750px"}).animate({"right":"10px"}, "slow");
             setTimeout(function () {
                 name.css({"right":"10px"}).animate({"right":"-750px"}, "slow");
             }, 2000)

         }
        else
         if( email == "" ){
             var mail = $('#alerta');
             $('input[id="email"]').css('border-color', 'red');
             mail.empty().html('<p class="alert alert-info"> Preencha o campo email</p>');
             mail.css({"right":"-750px"}).animate({"right":"10px"}, "slow");
             setTimeout(function () {
                 mail.css({"right":"10px"}).animate({"right":"-750px"}, "slow");
             }, 2000)

         }
        else
         if( assunto == "" ){
             var subject = $('#alerta');
             $('input[id="assunto"]').css('border-color', 'red');
             subject.empty().html('<p class="alert alert-info"> Preencha o campo assunto</p>');
             subject.css({"right":"-750px"}).animate({"right":"10px"}, "slow");
             setTimeout(function () {
                 subject.css({"right":"10px"}).animate({"right":"-750px"}, "slow");
             }, 2000)

         }
        else
         if( comentario == "" ){
             var coment = $('#alerta');
             $('textarea[id="comentario"]').css('border-color', 'red');
             coment.empty().html('<p class="alert alert-info"> Preencha o campo comentario</p>');
             coment.css({"right":"-750px"}).animate({"right":"5px"}, "slow");
             setTimeout(function () {
                 alerta.css({"right":"5px"}).animate({"right":"-750px"}, "slow");
             }, 2000)

         }
         return false;
     }
     else{
         $('#nome').css('border-color', '');
         $('#email').css('border-color', '');
         $('#assunto').css('border-color', '');
         $('#comentario').css('border-color', '');
         return true;
     }

 }

 function aguardando() {
     console.log("Aguardando..");
     var alerta = $('#alerta');
     alerta.empty().html('<p class="alert alert-warning"> <img src="assets/images/loading.gif" width="8%"> Aguarde enquanto enviamos sua mensagem</p>');
     alerta.css({"right":"-505px"}).animate({"right":"15px"}, "slow");
 }

function sucesso() {

    var alerta = $('#alerta');

    alerta.empty().html('<p class="alert alert-success"> <img src="assets/images/check.png" width="8%"> Sua mensagem foi enviada com sucesso!</p>');
    //alerta.css({"right":"-505px"}).animate({"right":"15px"}, "slow");
    setTimeout(function () {
        alerta.css({"right":"15px"}).animate({"right":"-720px"}, "slow");
        limparCampos();
    },3000  );
}

function erroSend() {

    var alerta = $('#alerta');

    alerta.empty().html('<p class="alert alert-danger"> <img src="assets/images/error.png" width="8%"> Verifique seu e-mail!</p>');
    //alerta.css({"right":"-505px"}).animate({"right":"15px"}, "slow");
    setTimeout(function () {
        alerta.css({"right":"15px"}).animate({"right":"-720px"}, "slow");
        limparCampos();
    },3000  );
}

function limparCampos(){
    $('#nome').val('');
    $('#email').val('');
    $('#assunto').val('');
    $('#comentario').val('');
}


$('.lnk-video').on('click', function () {
    var url = $(this).data('url') ;
    url = url.replace("watch?v=", "embed/");
    url = url + '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
    $('#iframe').attr( 'src', url );
    $('#myModal').modal('show');

    console.log('Modal');
});

