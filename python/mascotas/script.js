const boton = document.getElementById('butSolicitudes');
const botonPost = document.getElementById('butMandarSolicitud');
boton.addEventListener('click', fetchSolicitudes);
botonPost.addEventListener('click',postSolicitud);

async function fetchSolicitudes() {
        const res = await fetch('https://desarrollowebtareas.onrender.com/solicitudes');
        const solicitudes = await res.json();
        console.log(solicitudes);
        let htmlSolicitudes = ``;
        let i = 1;
        solicitudes.forEach(solicitud => 
        {
            console.log(solicitud);
            htmlSolicitudes += `<p>Persona ${i}</p>`;
            htmlSolicitudes += `<p>Nombre: ${solicitud.nombrePersona}</p>`;
            htmlSolicitudes += `<p>Mascota deseada: ${solicitud.mascotaDeseada}</p>`;
            htmlSolicitudes += `<p>Motivo: ${solicitud.motivo}</p>`;
            htmlSolicitudes += `<br>`;
            i++;
        });
        document.getElementById('infoFetchSolicitudes').innerHTML = htmlSolicitudes;
}

async function postSolicitud(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombrePersona').value;
    const mascota = document.getElementById('mascotaDeseada').value;
    const motivo = document.getElementById('motivo').value;

    const nuevaSolicitud={
        nombrePersona: nombre,
        mascotaDeseada : mascota,
        motivo: motivo
    };
    
    const res = await fetch('https://desarrollowebtareas.onrender.com/solicitudes', {
      method: "POST",                           // indica que es POST
      headers: {
        "Content-Type": "application/json"      // le dice al servidor que mandamos JSON
      },
      body: JSON.stringify(nuevaSolicitud)         // convierte el objeto a texto JSON
    });
    if(res){
        console.log(res);
        alert('Solicitud enviada');
    }
    else{
        alert('Hubo un error');
    }
}




