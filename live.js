########

  if(v == 1){
    wavesurfer.clearRegions();
    player.stop();
    player = player2;
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    
  }
  if(v == 2){
    wavesurfer.clearRegions();
    player.stop();
    player = player3;
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    
  }
  if(v == 3){
    wavesurfer.clearRegions();
    player.stop();
    player = player4;
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    
  }
  if(v == 1){
    wavesurfer.clearRegions();
    player.stop();
    player = player2;
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    
  }
##########//porque isso não funcionou??
for (let i = 0; i < 8; i++){
    if(v == i){
    wavesurfer.clearRegions();
    player.stop();
    player = "player" + (i+1);
      console.log(player);
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    }
  }
######


linha 91 -> função wavesurfer.on('ready', function() {
  não deve carregar o json de novo, o json deve
  ser substituido por um array temporario 



wavesurfer.on('audioprocess', function(i) {
  
 console.log(i);
 });



Object.values(wavesurfer.regions.list) 
Object.values(wavesurfer.regions.list)[0]
Object.values(wavesurfer.regions.list)[1]

player.setLoopPoints(region1.start, region1.end);
player.start() && region1.playLoop()

wavesurfer.addRegion({
                    start: 100.35397703289883,
                    end: 194.43852801055245,
                    loop: true,
                    drag: true,//não arrasta região de loop
                    color: '#C728D9A0'
                });

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    plugins :
   [
        WaveSurfer.regions.create({
                   regions: [
                {
                    start: 39.369262231728063,
                    end: 43.638314850105694,
                    loop: true,
                    drag: true,//não arrasta região de loop
                    color: '#D928715E'
                },
                     {
                    start: 82.35397703289883,
                    end: 86.43852801055245,
                    loop: true,
                    drag: true,//não arrasta região de loop
                    color: '#28D94D82'
                }
            ],
          dragSelection: {
                    slop: 5
                }
            
        })
    ]
});

function pattern1(){
sequencer.matrix.set.row(0, [1,0,0,0,0,0,0,0]); 
    sequencer.matrix.set.row(1, [1,0,1,0,1,0,1,0]);
    sequencer.matrix.set.row(2, [0,0,0,0,1,0,0,0]); 
    sequencer.matrix.set.row(3, [1,0,0,0,0,0,1,0]);
}

wavesurfer.clearRegions();
wavesurfer.empty();

wavesurfer.getDuration();

for (let i = 0; i < 8; i++){
  let size_region = wavesurfer.getDuration() / 8;
  wavesurfer.addRegion({
                    start: i * size_region,
                    end: (i * size_region) + size_region,
                    loop: false,
                    drag: true,//não arrasta região de loop
                    color: '#C728D9A0'
                });
}

wavesurfer.load('https://ia800602.us.archive.org/16/items/ImprovisoCwb/improviso_glerm_figo.ogg');

player = new Tone.Player('https://ia800602.us.archive.org/16/items/ImprovisoCwb/improviso_glerm_figo.ogg' , ()=>wavesurfer.loadDecodedBuffer(player.buffer._buffer) ).connect(distort);

player = new Tone.Player('https://ia601604.us.archive.org/7/items/cristianofigo_paulofreire/figo_loop8_1E_bateria.ogg' , ()=>wavesurfer.loadDecodedBuffer(player.buffer._buffer) ).connect(distort);

let url = "https://ia601604.us.archive.org/7/items/cristianofigo_paulofreire/figo_loop8_1E_bateria.ogg";
  
  padrão para usar URL base:
  https://editor.p5js.org/bigmths/sketches/O4PcJkQAz
  
  
  
  
  wavesurfer.regions.list[1].play();
  //como tocar essa região com tone.js sem habilitar o loop mode
  wavesurfer.regions.list[0].loop = false;
  
  player.loop = false;
  player.start(); /// depois de loop = false 
  
  player.start(0, wavesurfer.regions.list[1].start,wavesurfer.regions.list[1].end - wavesurfer.regions.list[1].start );
  
  ////loop backup 
  const loops = new Tone.Loop((time) => {
  sequencer.next();
  /////loop pra olhar em cada canal
  for (let i = 0; i < 8; i++){
      let celula = sequencer.matrix.pattern[i][beat];
        if (celula){
          player.stop();
          wavesurfer.stop();
    player.setLoopPoints(wavesurfer.regions.list[i].start, wavesurfer.regions.list[i].end);
          player.start() && wavesurfer.regions.list[i].playLoop();
          //console.log("teste" + i); 
        }
  }
  ////fim do loop 
  beat++;
  beat = beat % sequencer.columns;
  ///console.log(beat);
 }, "2n").start(0);
  /////
  
  Tone.Transport.bpm.value = 50
  
  
  ///tentativas
  
  //play pause (botão)
play_o.on('change',function(v) {
  if(v === true){
  
    if(loops_o.state === false){
      console.log("toca sem loop")
      Tone.Transport.start();
      loops1.start(); 
    } else{
      console.log("toca com loop")
      Tone.Transport.start();
      loops2.start();
    }
} else {
  console.log("pára")
  Tone.Transport.stop();
  loops1.stop();
  loops2.stop();
  player.stop();
  wavesurfer.pause();
}
}
  );
  
  ////// guardando URL
  var dataToCache = JSON.stringify("https://ia601604.us.archive.org/7/items/cristianofigo_paulofreire/");
  
 var testeurl = encodeURIComponent("https://ia601604.us.archive.org/7/items/cristianofigo_paulofreire/");
  
  ////
  //ainda não consigo pegar nomes das variaveis 
  function preloadsamples11(){
  for(let i = 0; i < pat_json.arquivos_lista.length; i++){
    let temp_player = "player"+(i+1);
    console.log(temp_player);
    temp_player = new Tone.Player(urlbase + pat_json.arquivos_lista[i]).connect(distort);
  }
}
  
  ///
  
  let testando = [[0,7,1], [8, 9.1, 13]];
  
  //arrumar essa funcao regioes_json()
function regioes_json(){ 
  let slicesj = pat_json.regioes.length;
  for (let i = 0; i < slicesj; i++){
    //let x = i * 2;
    //console.log(x);
    for (let y = 0; y < 8; y++){
      let x = y * 2;
    
  wavesurfer.addRegion({
           id: i,
           start: pat_json.regioes[i][x],
           end: pat_json.regioes[i][x+1],
           loop: false,
           drag: true,
           color: '#C728D963'
                });
  }
  }
}
  
  ///
  mixer.values
  mixer.values[0]
