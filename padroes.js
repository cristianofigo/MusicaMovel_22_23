let piano;
let element = document.getElementById("piano");
let element2 = document.getElementById("waveform");
let element3;
let btCheck = document.getElementById("bt");
let salva_regioes = [];
let salva_regioes2 = [];


function regioes_simetricas(){
  for (let i = 0; i < fatias.value; i++){
  let size_region = wavesurfer.getDuration() / fatias.value;
  wavesurfer.addRegion({
           id: i,
           start: i * size_region,
           end: (i * size_region) + size_region,
                    loop: false,
                    drag: true,
                    color: '#C728D963'
                });
}
 // wavesurfer.loadDecodedBuffer(player.buffer._buffer);
}

//arrumar essa funcao regioes_json()
function regioes_json(nsample){ 
  let slicesj = pat_json.regioes.length;
  for (let i = 0; i < slicesj; i++){
    let x = i * 2;
    //console.log(x);
    
  wavesurfer.addRegion({
           id: i,
           start: pat_json.regioes[nsample][x],
           end: pat_json.regioes[nsample][x+1],
           loop: false,
           drag: true,
           color: '#C728D963'
                });
  }
  }
function regioes_json2(nsample){ 
  let slicesj = pat_json.regioes2.length;
  for (let i = 0; i < slicesj; i++){
    let x = i * 2;
    //console.log(x);
    
  wavesurfer2.addRegion({
           id: i,
           start: pat_json.regioes2[nsample][x],
           end: pat_json.regioes2[nsample][x+1],
           loop: false,
           drag: true,
           color: '#C728D963'
                });
  }
  }




function apagaonda(){
  //wavesurfer.clearRegions();
  //wavesurfer.empty();
   element2.style.display = 'none';
  //element2.remove();
}

function desenhaonda(){
  //element3 = document.createElement('div');
  //element3.id = "waveform";
  element2.style.display = 'block';
 // carregasample();
  //wavesurfer.loadDecodedBuffer(player.buffer._buffer);
}

function desenhapiano(){
   piano = new Nexus.Piano('#piano',{
    'size': [500,125],
    'mode': 'button',  // 'button', 'toggle', or 'impulse'
    'lowNote': 24,  'highNote': 60
})
}

function apagapiano(){
  piano.destroy();
  element.remove();
}


function saveSequence() {
  let formatjson ={};
  formatjson.sequencia = sequencer.matrix.pattern;
  formatjson.sequencia2 = sequencer2.matrix.pattern;
  for (let y = 0; y < radiobutton.numberOfButtons; y++){
    salva_regioes[y] = [];
  for (let i = 0; i < fatiasn; i++){
  let x = i * 2;
    salva_regioes[y][x] = pat_json.regioes[y][x];
    salva_regioes[y][x+1] = pat_json.regioes[y][x+1];
         }}
  for (let y = 0; y < radiobutton2.numberOfButtons; y++){
    salva_regioes2[y] = [];
  for (let i = 0; i < fatiasn; i++){
  let x = i * 2;
    salva_regioes2[y][x] = pat_json.regioes2[y][x];
    salva_regioes2[y][x+1] = pat_json.regioes2[y][x+1];
         }}
  formatjson.sample1 = radiobutton.active;
  formatjson.sample2 = radiobutton2.active;
  formatjson.regioes = salva_regioes;
  formatjson.regioes2 = salva_regioes2;
  formatjson.bpm = slider_bpm.value * 400;
  formatjson.urlbase = urlbase;
  formatjson.arquivos_lista = pat_json.arquivos_lista;
  formatjson.arquivos_lista2 = pat_json.arquivos_lista2;
  formatjson.canal1 = pat_json.canal1; //teste
  const nameFile = prompt('Enter a name file');
  saveJSON(formatjson, nameFile);
}

btCheck.addEventListener('change', function() {
  if(this.checked) {
    apagaonda();
  }
  else {
    desenhaonda();
  }
})


function carregasample(){
  wavesurfer.loadDecodedBuffer(player.buffer._buffer);
  wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer);
}
let distort; //fx distorção
let passabanda; //fx filtro passabanda
//cria filtro(saída)
passabanda = new Tone.Filter(1500, "bandpass").toDestination();

//cria distorção
distort = new Tone.Distortion(0.8).connect(passabanda);


let pan1 = new Nexus.Pan('#pan1');
let espat1 = new Tone.Panner(0).connect(distort);

pan1.on('change',function(v) {
  espat1.pan.rampTo(pan1.value, 0.02);
  //console.log(v);
})

function preloadsamples1(){
   player1 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[0]).connect(espat1);
  player2 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[1]).connect(espat1);
  player3 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista[2]).connect(espat1);
  player4 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista[3]).connect(espat1);
  player5 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista[4]).connect(espat1);
  player6 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista[5]).connect(espat1);
  player7 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista[6]).connect(espat1);
  player8 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista[7]).connect(espat1);
}

let pan2 = new Nexus.Pan('#pan2');
let espat2 = new Tone.Panner(0).connect(distort);

pan2.on('change',function(v) {
  espat2.pan.rampTo(pan2.value, 0.02);
  //console.log(v);
})


function preloadsamples2(){
   playerb1 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[0]).connect(espat2);
  playerb2 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[1]).connect(espat2);
  playerb3 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista2[2]).connect(espat2);
  playerb4 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista2[3]).connect(espat2);
  playerb5 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista2[4]).connect(espat2);
  playerb6 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista2[5]).connect(espat2);
  playerb7 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista2[6]).connect(espat2);
  playerb8 = new Tone.Player(pat_json.urlbase +
pat_json.arquivos_lista2[7]).connect(espat2);
}
/// 
function radiosamples1(v){
   if(v == 0){
    wavesurfer.clearRegions();
    player.stop();
    player = player1;
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    
  }
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
  if(v == 4){
    wavesurfer.clearRegions();
    player.stop();
    player = player5;
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    
  }
  
  if(v == 5){
    wavesurfer.clearRegions();
    player.stop();
    player = player6;
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    
  }
  
  if(v == 6){
    wavesurfer.clearRegions();
    player.stop();
    player = player7;
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    
  }
  
  if(v == 7){
    wavesurfer.clearRegions();
    player.stop();
    player = player8;
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    
  }
}

function radiosamples2(v){
   if(v == 0){
    wavesurfer2.clearRegions();
    playerb.stop();
    playerb = playerb1;
    wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer)    
  }
  if(v == 1){
    wavesurfer2.clearRegions();
    playerb.stop();
    playerb = playerb2;
    wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer)    
  }
  if(v == 2){
    wavesurfer2.clearRegions();
    playerb.stop();
    playerb = playerb3;
    wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer)    
  }
  if(v == 3){
    wavesurfer2.clearRegions();
    playerb.stop();
    playerb = playerb4;
    wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer)    
  }
  if(v == 4){
    wavesurfer2.clearRegions();
    playerb.stop();
    playerb = playerb5;
    wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer)    
  }
  
  if(v == 5){
    wavesurfer2.clearRegions();
    playerb.stop();
    playerb = playerb6;
    wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer)    
  }
  
  if(v == 6){
    wavesurfer2.clearRegions();
    playerb.stop();
    playerb = playerb7;
    wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer)    
  }
  
  if(v == 7){
    wavesurfer2.clearRegions();
    playerb.stop();
    playerb = playerb8;
    wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer)    
  }
}

function radiosamples1_loop(v){
  for (let i = 0; i < 8; i++){
    if(v == i){
    wavesurfer.clearRegions();
    player.stop();
      let player_temp = "player" + (i+1);
    player = player_temp;
      console.log(player);
    wavesurfer.loadDecodedBuffer(player.buffer._buffer)    }
  }
}
