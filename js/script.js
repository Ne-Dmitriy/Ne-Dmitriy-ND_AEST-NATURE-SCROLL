/* Логика выполнения скриптов после загрузки всех элементов */

window.onload = function() {
	
	setTimeout(function() {
		
		document.body.classList.add("loaded") 
	
		Draggable.create(".gallery", {       /* Функйия перемещения из библиотеки gsap */
			bounds: "body",                  /* Ограничение области перемещения */
			inertia: true                    /* Добавление инерции */
		})  

	})
		
} 

