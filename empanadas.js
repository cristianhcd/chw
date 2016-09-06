<script>
imagenes = new Array(2)

imagenes[0] = "<img border='0' src='http://3.bp.blogspot.com/_dsEG33PDaHw/TJwOlsQMK8I/AAAAAAAAAYw/11AQvn302kA/s1600/burns.png' style='position:fixed; bottom:0; right:0;'/>"
imagenes[1] = "<img border='0' src='http://2.bp.blogspot.com/_dsEG33PDaHw/TJwPFgpLp3I/AAAAAAAAAY0/_vUtfmE-Qc4/s1600/liza.png' style='position:fixed; bottom:0; right:0;'/>"

aleatorio = Math.random() * (imagenes.length)
aleatorio = Math.floor(aleatorio)
document.write(imagenes[aleatorio])

</script>
