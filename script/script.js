        let mensaje;   
        const letraCambiar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        const btnCopiar = document.querySelector(".btn-copiar");
        const msjsNoEncontrado = document.querySelector(".msjAdvertencia");

        getFocus();//lo llamo aqui para que inicie con el focus al cargar

        btnCopiar.style.display = "none";
        
        //Funcion encargada a encriptar el mensaje (msj) que recibe
        //Metodo .includes() determina si una matriz incluye un determinado elemento, devuelve truo ó false

        function encriptar(msj){            
            
            for(let i = 0; i < letraCambiar.length; i++ ) {

                if(msj.includes(letraCambiar[i][0])) {
                    msj = msj.replaceAll(letraCambiar[i][0], letraCambiar[i][1])
                }
            }
            return msj;
        }
        
        //Funcion encargada a desencriptar el mensaje (msj) que recibe

        function desencriptar(msj){
            
            for(let i = 0; i < letraCambiar.length; i++ ) {
                if(msj.includes(letraCambiar[i][1])) {
                    msj = msj.replaceAll(letraCambiar[i][1], letraCambiar[i][0])
                }
            }
            return msj;
            
        }
        
        //Funcion que recibe los Parametros del boton
        //Metodo .toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.

        function btnEncriptar(){
            mensaje = document.querySelector(".msg").value.toLowerCase();
            comprobarCamposMensaje(mensaje);
            mensaje = quitarAcentos(mensaje);
            let encriptado = encriptar(mensaje);
            console.log("mensaje a encriptar: "+ encriptado); 
            document.querySelector(".imprimir").value = encriptado;
            document.querySelector(".msg").value = "";
        }

        //Funcion que recibe los parametros del boton

        function btnDesencriptar(){
            mensaje = document.querySelector(".msg").value.toLowerCase();
            comprobarCamposMensaje(mensaje);
            let desencriptado = desencriptar(mensaje);
            console.log("mensaje a encriptar: "+ desencriptado); 
            document.querySelector(".imprimir").value = desencriptado;
            document.querySelector(".msg").value = "";;
        }

        function copiarTexto(){
            mensaje = document.querySelector(".imprimir");
            navigator.clipboard.writeText(mensaje.value);
            console.log("Mensaje copiado: " + mensaje.value);
            mensaje.value = "";
            swal("Su Texto ha sido Copiado", {
                            icon: "success",
                        });
            getFocus();
            
        }

        //Funcion que elimina los acentos

        function quitarAcentos(cadena){
            const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u'};
            return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
        }

        //comprueba si el usuario escribio o no en el texarea para asi mostrar o no el boton copiar

        function comprobarCamposMensaje(msj){
            let imagenFondo = document.querySelector(".imprimir");
            if(msj !=""){
                btnCopiar.style.display = "block";
                msjsNoEncontrado.style.display ="none";
                imagenFondo.style.backgroundImage = "none";
            }else{
                btnCopiar.style.display = "none";
                msjsNoEncontrado.style.display ="flex";
                imagenFondo.style.backgroundImage =  "url(image/dibujo.png)";
                
            }
        }

        function getFocus() {
            let textArea = document.querySelector(".msg");
            textArea.focus();
        }
        
        

        