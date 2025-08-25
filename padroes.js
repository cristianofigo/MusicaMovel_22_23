// Padrões.js - Adaptado para 4 Canais
let piano;
let element = document.getElementById("piano");
let btCheck = document.getElementById("bt");
let btCheck2 = document.getElementById("bt2");
let btCheck3 = document.getElementById("bt3");
let btCheck4 = document.getElementById("bt4");
let salva_regioes = [];
let salva_regioes2 = [];
let salva_regioes3 = [];
let salva_regioes4 = [];

function regioes_simetricas(){
  // Canal 1
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
  
  // Canal 2
  for (let i = 0; i < fatias.value; i++){
    let size_region = wavesurfer2.getDuration() / fatias.value;
    wavesurfer2.addRegion({
             id: i,
             start: i * size_region,
             end: (i * size_region) + size_region,
             loop: false,
             drag: true,
             color: '#28D96363'
    });
  }
  
  // Canal 3
  for (let i = 0; i < fatias.value; i++){
    let size_region = wavesurfer3.getDuration() / fatias.value;
    wavesurfer3.addRegion({
             id: i,
             start: i * size_region,
             end: (i * size_region) + size_region,
             loop: false,
             drag: true,
             color: '#FFA50063'
    });
  }
  
  // Canal 4
  for (let i = 0; i < fatias.value; i++){
    let size_region = wavesurfer4.getDuration() / fatias.value;
    wavesurfer4.addRegion({
             id: i,
             start: i * size_region,
             end: (i * size_region) + size_region,
             loop: false,
             drag: true,
             color: '#FF450063'
    });
  }
}

// Funções para carregar regiões dos JSONs
function regioes_json(nsample){ 
  if(!pat_json.regioes || !pat_json.regioes[nsample]) return;
  let slicesj = pat_json.regioes[nsample].length / 2;
  for (let i = 0; i < slicesj; i++){
    let x = i * 2;
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
  if(!pat_json.regioes2 || !pat_json.regioes2[nsample]) return;
  let slicesj = pat_json.regioes2[nsample].length / 2;
  for (let i = 0; i < slicesj; i++){
    let x = i * 2;
    wavesurfer2.addRegion({
             id: i,
             start: pat_json.regioes2[nsample][x],
             end: pat_json.regioes2[nsample][x+1],
             loop: false,
             drag: true,
             color: '#28D96363'
    });
  }
}

function regioes_json3(nsample){ 
  if(!pat_json.regioes3 || !pat_json.regioes3[nsample]) return;
  let slicesj = pat_json.regioes3[nsample].length / 2;
  for (let i = 0; i < slicesj; i++){
    let x = i * 2;
    wavesurfer3.addRegion({
             id: i,
             start: pat_json.regioes3[nsample][x],
             end: pat_json.regioes3[nsample][x+1],
             loop: false,
             drag: true,
             color: '#FFA50063'
    });
  }
}

function regioes_json4(nsample){ 
  if(!pat_json.regioes4 || !pat_json.regioes4[nsample]) return;
  let slicesj = pat_json.regioes4[nsample].length / 2;
  for (let i = 0; i < slicesj; i++){
    let x = i * 2;
    wavesurfer4.addRegion({
             id: i,
             start: pat_json.regioes4[nsample][x],
             end: pat_json.regioes4[nsample][x+1],
             loop: false,
             drag: true,
             color: '#FF450063'
    });
  }
}

function desenhapiano(){
   piano = new Nexus.Piano('#piano',{
    'size': [500,125],
    'mode': 'button',
    'lowNote': 24,
    'highNote': 60
   });
}

function apagapiano(){
  if(piano) piano.destroy();
  if(element) element.remove();
}

function saveSequence() {
  let formatjson = {};
  formatjson.sequencia = sequencer.matrix.pattern;
  formatjson.sequencia2 = sequencer2.matrix.pattern;
  formatjson.sequencia3 = sequencer3.matrix.pattern;
  formatjson.sequencia4 = sequencer4.matrix.pattern;
  
  // Salvar regiões dos 4 canais
  for (let y = 0; y < radiobutton.numberOfButtons; y++){
    salva_regioes[y] = [];
    for (let i = 0; i < fatiasn; i++){
      let x = i * 2;
      if(pat_json.regioes && pat_json.regioes[y]){
        salva_regioes[y][x] = pat_json.regioes[y][x];
        salva_regioes[y][x+1] = pat_json.regioes[y][x+1];
      }
    }
  }
  
  for (let y = 0; y < radiobutton2.numberOfButtons; y++){
    salva_regioes2[y] = [];
    for (let i = 0; i < fatiasn; i++){
      let x = i * 2;
      if(pat_json.regioes2 && pat_json.regioes2[y]){
        salva_regioes2[y][x] = pat_json.regioes2[y][x];
        salva_regioes2[y][x+1] = pat_json.regioes2[y][x+1];
      }
    }
  }
  
  for (let y = 0; y < radiobutton3.numberOfButtons; y++){
    salva_regioes3[y] = [];
    for (let i = 0; i < fatiasn; i++){
      let x = i * 2;
      if(pat_json.regioes3 && pat_json.regioes3[y]){
        salva_regioes3[y][x] = pat_json.regioes3[y][x];
        salva_regioes3[y][x+1] = pat_json.regioes3[y][x+1];
      }
    }
  }
  
  for (let y = 0; y < radiobutton4.numberOfButtons; y++){
    salva_regioes4[y] = [];
    for (let i = 0; i < fatiasn; i++){
      let x = i * 2;
      if(pat_json.regioes4 && pat_json.regioes4[y]){
        salva_regioes4[y][x] = pat_json.regioes4[y][x];
        salva_regioes4[y][x+1] = pat_json.regioes4[y][x+1];
      }
    }
  }
  
  formatjson.sample1 = radiobutton.active;
  formatjson.sample2 = radiobutton2.active;
  formatjson.sample3 = radiobutton3.active;
  formatjson.sample4 = radiobutton4.active;
  formatjson.regioes = salva_regioes;
  formatjson.regioes2 = salva_regioes2;
  formatjson.regioes3 = salva_regioes3;
  formatjson.regioes4 = salva_regioes4;
  formatjson.bpm = slider_bpm.value * 400;
  formatjson.urlbase = urlbase;
  formatjson.arquivos_lista = pat_json.arquivos_lista;
  formatjson.arquivos_lista2 = pat_json.arquivos_lista2;
  formatjson.arquivos_lista3 = pat_json.arquivos_lista3 || pat_json.arquivos_lista;
  formatjson.arquivos_lista4 = pat_json.arquivos_lista4 || pat_json.arquivos_lista;
  
  const nameFile = prompt('Digite o nome do arquivo');
  saveJSON(formatjson, nameFile);
}

// Event listeners para checkboxes
if(btCheck){
  btCheck.addEventListener('change', function() {
    let element2 = document.getElementById("waveform");
    if(this.checked) {
      element2.style.display = 'none';
    } else {
      element2.style.display = 'block';
    }
  });
}

if(btCheck2){
  btCheck2.addEventListener('change', function() {
    let element2 = document.getElementById("waveform2");
    if(this.checked) {
      element2.style.display = 'none';
    } else {
      element2.style.display = 'block';
    }
  });
}

if(btCheck3){
  btCheck3.addEventListener('change', function() {
    let element3 = document.getElementById("waveform3");
    if(this.checked) {
      element3.style.display = 'none';
    } else {
      element3.style.display = 'block';
    }
  });
}

if(btCheck4){
  btCheck4.addEventListener('change', function() {
    let element4 = document.getElementById("waveform4");
    if(this.checked) {
      element4.style.display = 'none';
    } else {
      element4.style.display = 'block';
    }
  });
}

function carregasample(){
  if(player && player.buffer) wavesurfer.loadDecodedBuffer(player.buffer._buffer);
  if(playerb && playerb.buffer) wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer);
  if(playerc && playerc.buffer) wavesurfer3.loadDecodedBuffer(playerc.buffer._buffer);
  if(playerd && playerd.buffer) wavesurfer4.loadDecodedBuffer(playerd.buffer._buffer);
}

// Efeitos de áudio
let distort = new Tone.Distortion(0.8);
let passabanda = new Tone.Filter(1500, "bandpass").toDestination();
distort.connect(passabanda);

// Controles de pan para os 4 canais
let pan1 = new Nexus.Pan('#pan1');
let espat1 = new Tone.Panner(0).connect(distort);

let pan2 = new Nexus.Pan('#pan2');
let espat2 = new Tone.Panner(0).connect(distort);

let pan3 = new Nexus.Pan('#pan3');
let espat3 = new Tone.Panner(0).connect(distort);

let pan4 = new Nexus.Pan('#pan4');
let espat4 = new Tone.Panner(0).connect(distort);

pan1.on('change',function(v) {
  espat1.pan.rampTo(pan1.value, 0.02);
});

pan2.on('change',function(v) {
  espat2.pan.rampTo(pan2.value, 0.02);
});

pan3.on('change',function(v) {
  espat3.pan.rampTo(pan3.value, 0.02);
});

pan4.on('change',function(v) {
  espat4.pan.rampTo(pan4.value, 0.02);
});

// Funções para carregar samples dos 4 canais
function preloadsamples1(){
  if(!pat_json.arquivos_lista) return;
  player1 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[0]).connect(espat1);
  player2 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[1]).connect(espat1);
  player3 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[2]).connect(espat1);
  player4 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[3]).connect(espat1);
  player5 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[4]).connect(espat1);
  player6 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[5]).connect(espat1);
  player7 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[6]).connect(espat1);
  player8 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista[7]).connect(espat1);
}

function preloadsamples2(){
  if(!pat_json.arquivos_lista2) return;
  playerb1 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[0]).connect(espat2);
  playerb2 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[1]).connect(espat2);
  playerb3 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[2]).connect(espat2);
  playerb4 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[3]).connect(espat2);
  playerb5 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[4]).connect(espat2);
  playerb6 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[5]).connect(espat2);
  playerb7 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[6]).connect(espat2);
  playerb8 = new Tone.Player(pat_json.urlbase + pat_json.arquivos_lista2[7]).connect(espat2);
}

function preloadsamples3(){
  let lista = pat_json.arquivos_lista3 || pat_json.arquivos_lista;
  if(!lista) return;
  playerc1 = new Tone.Player(pat_json.urlbase + lista[0]).connect(espat3);
  playerc2 = new Tone.Player(pat_json.urlbase + lista[1]).connect(espat3);
  playerc3 = new Tone.Player(pat_json.urlbase + lista[2]).connect(espat3);
  playerc4 = new Tone.Player(pat_json.urlbase + lista[3]).connect(espat3);
  playerc5 = new Tone.Player(pat_json.urlbase + lista[4]).connect(espat3);
  playerc6 = new Tone.Player(pat_json.urlbase + lista[5]).connect(espat3);
  playerc7 = new Tone.Player(pat_json.urlbase + lista[6]).connect(espat3);
  playerc8 = new Tone.Player(pat_json.urlbase + lista[7]).connect(espat3);
}

function preloadsamples4(){
  let lista = pat_json.arquivos_lista4 || pat_json.arquivos_lista;
  if(!lista) return;
  playerd1 = new Tone.Player(pat_json.urlbase + lista[0]).connect(espat4);
  playerd2 = new Tone.Player(pat_json.urlbase + lista[1]).connect(espat4);
  playerd3 = new Tone.Player(pat_json.urlbase + lista[2]).connect(espat4);
  playerd4 = new Tone.Player(pat_json.urlbase + lista[3]).connect(espat4);
  playerd5 = new Tone.Player(pat_json.urlbase + lista[4]).connect(espat4);
  playerd6 = new Tone.Player(pat_json.urlbase + lista[5]).connect(espat4);
  playerd7 = new Tone.Player(pat_json.urlbase + lista[6]).connect(espat4);
  playerd8 = new Tone.Player(pat_json.urlbase + lista[7]).connect(espat4);
}

// Funções para trocar samples nos radiobuttons
function radiosamples1(v){
  const players = [player1, player2, player3, player4, player5, player6, player7, player8];
  if(players[v]){
    wavesurfer.clearRegions();
    player.stop();
    player = players[v];
    wavesurfer.loadDecodedBuffer(player.buffer._buffer);
  }
}

function radiosamples2(v){
  const players = [playerb1, playerb2, playerb3, playerb4, playerb5, playerb6, playerb7, playerb8];
  if(players[v]){
    wavesurfer2.clearRegions();
    playerb.stop();
    playerb = players[v];
    wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer);
  }
}

function radiosamples3(v){
  const players = [playerc1, playerc2, playerc3, playerc4, playerc5, playerc6, playerc7, playerc8];
  if(players[v]){
    wavesurfer3.clearRegions();
    playerc.stop();
    playerc = players[v];
    wavesurfer3.loadDecodedBuffer(playerc.buffer._buffer);
  }
}

function radiosamples4(v){
  const players = [playerd1, playerd2, playerd3, playerd4, playerd5, playerd6, playerd7, playerd8];
  if(players[v]){
    wavesurfer4.clearRegions();
    playerd.stop();
    playerd = players[v];
    wavesurfer4.loadDecodedBuffer(playerd.buffer._buffer);
  }
}

