<script>
imagenes = new Array(2)

imagenes[0] = "<img border='0' src='https://raw.githubusercontent.com/cristianhcd/chw/master/empanada1.gif' style='position:fixed; bottom:0; right:0;'/>"
imagenes[1] = "<img border='0' src='https://raw.githubusercontent.com/cristianhcd/chw/master/empanada2.gif' style='position:fixed; bottom:0; right:0;'/>"

aleatorio = Math.random() * (imagenes.length)
aleatorio = Math.floor(aleatorio)
document.write(imagenes[aleatorio])

</script>
