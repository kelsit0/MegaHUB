document.addEventListener('DOMContentLoaded',()=>{
    const card_container=document.querySelector('.card_container')
    let estadoContenido='peliculas';

    ///cargar lista
    let listContent=[];
    fetch('peliculas.json')
    .then(res=>res.json())  
    .then(salida=>{
        listContent=salida;
        showContent(listContent)
    })
    .catch(function(error){alert(error)})

    function showContent(lista){
        if (!listContent){
            return ;
        }
        lista.forEach(content => {
        let container=createCard(content);
        card_container.appendChild(container)
        });
    }

    function createCard(content){
        
        let newContainer = document.createElement('div')
        newContainer.classList.add('card');
        //creamos un data con tituloo
        newContainer.dataset.titulo = content.titulo

        let img=document.createElement('img')
        
        img.src=content.ruta_imagen;
        img.alt=content.titulo
        img.classList.add('card-img')

        let title=document.createElement('p')
        title.innerHTML=content.titulo
        let description=document.createElement('p')
        description.innerHTML=content.descripcion
        let detailsButton=document.createElement('button')
        detailsButton.textContent="detalles"
        let deleteButton=document.createElement('button')
        deleteButton.textContent="eliminar"
        newContainer.appendChild(img)
        newContainer.appendChild(title)
        newContainer.appendChild(description)
        newContainer.appendChild(detailsButton)
        newContainer.appendChild(deleteButton)
        return newContainer;
    }

    ///funcion botones
    card_container.addEventListener('click', (event)=>{
        if(event.target.textContent==='detalles'){
            ///usamos closest para encontrar el padre
            const card= event.target.closest('.card')

            const title= card.querySelector('p:nth-of-type(1)').textContent
            const img = card.querySelector('img').src;
            const description= card.querySelector('p:nth-of-type(2)').textContent

            const dataCard={
                titulo:title,
                imagen:img,
                descripcion: description,
            }

            localStorage.setItem('detalleContenido', JSON.stringify(dataCard))
        
            window.location.href = 'detalle.html';
        }

    })

})

