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
  /**/
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('div[id="topo"]').fadeIn();
            $('span.nk-t-1').css("color","#000000");
            $('span.nk-t-2').css("color","#000000");
            $('span.nk-t-3').css("color","#000000");

        } else {
            $('div[id="topo"]').fadeOut();

            $('span.nk-t-1').css("color","#ffffff");
            $('span.nk-t-2').css("color","#ffffff");
            $('span.nk-t-3').css("color","#ffffff");
        }
        var tamanhoEcra = window.screen.availWidth;
        var tamanhoBrowser = $(window).width();
        console.log("Tamanho do ecrã: "+tamanhoEcra);
        console.log("Tamanho do browser: "+tamanhoBrowser);

    });

    window.onresize=function() {
        getDimensions()
    }

    function getDimensions() {
        var largura, altura;

        largura = window.innerWidth;
        altura = window.innerHeight;
        console.log("Largura browser: "+largura);
        if( largura < 992 ){
            $('a#sobre').empty().html("<em>Sobre</em>");
            $('a#tocar').empty().html("<em>Play</em>");
            $('a#contato').empty().html("<em>Contato</em>");
            $('a#social').empty().html("<em>Social</em>");
            $('a#clipe').empty().html("<em>Clipe</em>");
        }else{
            $('a#sobre').empty().html("Sobre");
            $('a#tocar').empty().html("Play");
            $('a#contato').empty().html("Contato");
            $('a#social').empty().html("Social");
            $('a#clipe').empty().html("Clipe");
        }
    }

    getDimensions();





    $('div[id="topo"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});

