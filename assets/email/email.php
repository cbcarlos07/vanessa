<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define('GUSER', 'vanessaoliveiramidia@gmail.com');	// <-- Insira aqui o seu GMail
define('GPWD', 'vanessa2d3d');		// <-- Insira aqui a senha do seu GMail
$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$comentario = $_POST['comentario'];



 /* Envio para o dono do site */
 $corpoContato = corpoEmailSite($nome, $email, $comentario);
 $titulo = "[SITE] ".$assunto;
 $testeEmail =  enviar_email($titulo, 'agendavanessaoliveira@gmail.com', $corpoContato);


 $corpo = corpoFeedBack( $nome );
 $titulo = "Obrigada!";
 $testeEmail1 =  enviar_email($titulo, $email, $corpo);


        if($testeEmail1){
            //json_encode(array('response' => 'Cadastrado com sucesso'));
            //echo 'Cardapio: '.$cdc.' Cracha: '.$cdf.' Nome: '.$nmf ;
            //echo 1; //1 indica que a operação foi realizada com sucesso
            echo json_encode(array('retorno' => 1, 'email' => $email));
            //echo json_encode(array('retorno' => "1"));
        }else{
            //echo 0; //0 indica que deu um erro na operação

            echo json_encode(array('retorno' => 0));
            //json_encode(array('response' => 'Nao foi cadastrado com sucesso'));
        }



function enviar_email($titulo, $email, $corpo){

    require_once("phpmailer/class.phpmailer.php");



    global $error;
    $mail = new PHPMailer();
    $mail->IsSMTP();		// Ativar SMTP
    $mail->SMTPDebug = 1;		// Debugar: 1 = erros e mensagens, 2 = mensagens apenas
    $mail->SMTPAuth = true;		// Autenticação ativada
    $mail->SMTPSecure = 'tls';	// SSL REQUERIDO pelo GMail
    $mail->Host = 'smtp.gmail.com';	// SMTP utilizado
    $mail->Port = 587;  		// A porta 587 deverá estar aberta em seu servidor
    $mail->Username = GUSER;
    $mail->Password = GPWD;
    $mail->SetFrom('vanessaoliveiramidia@gmail.com', 'Vanessa Oliveira');
    $mail->Subject = $titulo;
    $mail->IsHTML(true);
    $mail->Body = $corpo;
    $mail->AddAddress($email);
    if(!$mail->Send()) {
        $error = 'Mail error: '.$mail->ErrorInfo;
        return false;
    } else {
        $error = 'Mensagem enviada!';
        return true;
    }

}

function corpoEmailSite($nome, $email, $comentario){


    $corpo = "
        <div>
             <p>$comentario</p>
             
              <p ><span style='font-weight: bold'>$nome</span>
              <br>$email</p>
              <p style='font-size: 10px;'>Mensagem recebida do site <a href='http://vanessaoliveira.com.br/'>Vanessa Oliveira</a></p>
        </div>

       
    ";

    return $corpo;
}

function corpoFeedBack($nome){
    $nomeArray = explode(" ", $nome);


    $nome_ = ucfirst($nomeArray[0]);

    $corpo = "
       <div style='font-family: Arial; float: left; margin-top: 20px;'>
             <p >Ola, $nome_!</p>
              
              <p>Voc&ecirc; enviou uma mensagem para mim atrav&eacute;s do site.</p>
              
              <p>Agrade&ccedil;o seu contato e o mais breve poss&iacute;vel estarei dando retorno.</p>
            
               <p>Que Deus te aben&ccedil;oe grandemente</p>
            
               <p>Atenciosamente,</p>   
              
               <p> <a href='http://vanessaoliveira.com.br/'>Vanessa Oliveira</a></p>
       </div>
             
      <div style='margin-top: 20px; '>
               <a href='http://vanessaoliveira.com.br/'><img src='http://vanessaoliveira.com.br/assets/images/07.png' width='20%'></a>
      </div>

 
       
    ";

    return $corpo;
}




