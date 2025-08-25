//Música Móvel 4 Canais - Sketch Principal
let cenas = ["cena1", "cena2", "cena3"];
let pat_json, pat_json1, pat_json2, pat_json3;
var urlbase;

function preload(){
  pat_json1 = loadJSON('celular3105.json');
  pat_json2 = loadJSON('bibibi.json');
  pat_json3 = loadJSON('novasamples.json');
}

// Slider BPM
let slider_bpm = new Nexus.Slider("#slider_bpm");

function setup(){
  pat_json = pat_json1;
  slider_bpm.value = pat_json.bpm/400;  
}

// Players para os 4 canais
let player, player1, player2, player3, player4, player5, player6, player7, player8;
let playerb, playerb1, playerb2, playerb3, playerb4, playerb5, playerb6, playerb7, playerb8;
let playerc, playerc1, playerc2, playerc3, playerc4, playerc5, playerc6, playerc7, playerc8;
let playerd, playerd1, playerd2, playerd3, playerd4, playerd5, playerd6, playerd7, playerd8;

// Wavesurfers para os 4 canais
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    plugins: [WaveSurfer.regions.create({})]
});

var wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: 'rgb(130,238,174)',
    progressColor: 'rgb(61,128,44)',
    plugins: [WaveSurfer.regions.create({})]
});

var wavesurfer3 = WaveSurfer.create({
    container: '#waveform3',
    waveColor: 'rgb(255,165,0)',
    progressColor: 'rgb(255,140,0)',
    plugins: [WaveSurfer.regions.create({})]
});

var wavesurfer4 = WaveSurfer.create({
    container: '#waveform4',
    waveColor: 'rgb(255,69,0)',
    progressColor: 'rgb(220,20,60)',
    plugins: [WaveSurfer.regions.create({})]
});

// Radiobuttons para os 4 canais
let radiobutton = new Nexus.RadioButton('#radiobutton',{
  'size': [300,25],
  'numberOfButtons': 8,
  'active': 0
});

let radiobutton2 = new Nexus.RadioButton('#radiobutton2',{
  'size': [300,25],
  'numberOfButtons': 8,
  'active': 0
});

let radiobutton3 = new Nexus.RadioButton('#radiobutton3',{
  'size': [300,25],
  'numberOfButtons': 8,
  'active': 0
});

let radiobutton4 = new Nexus.RadioButton('#radiobutton4',{
  'size': [300,25],
  'numberOfButtons': 8,
  'active': 0
});

// Inicialização após carregamento
setTimeout(() => {
  urlbase = pat_json.urlbase;
  preloadsamples1();
  preloadsamples2();
  preloadsamples3();
  preloadsamples4();
  player = player1;
  playerb = playerb1;
  playerc = playerc1;
  playerd = playerd1;
  carregasample();
}, 2000);

function reloadsamples(){
setTimeout(() => {
  radiobutton.select(pat_json.sample1 || 0);
  radiobutton2.select(pat_json.sample2 || 0);
  radiobutton3.select(pat_json.sample3 || 0);
  radiobutton4.select(pat_json.sample4 || 0);
  }, 1000);
}

// Menu de cenas
var select_menu = new Nexus.Select('#menu_cenas',{
  'size': [100,30],
  'options': cenas
});

setTimeout(() => {
 select_menu.value = "cena2";
}, 3000);

select_menu.on('change',function(v) {
  if(select_menu.value === "cena1"){
    clearAllRegions();
    pat_json = pat_json1;
    reloadAllSamples();
  }
  if(select_menu.value === "cena2"){
    clearAllRegions();
    pat_json = pat_json2;
    reloadAllSamples();
  }
  if(select_menu.value === "cena3"){
    clearAllRegions();
    pat_json = pat_json3;
    reloadAllSamples();
  }
});

function clearAllRegions(){
  wavesurfer.clearRegions();
  wavesurfer2.clearRegions();
  wavesurfer3.clearRegions();
  wavesurfer4.clearRegions();
}

function reloadAllSamples(){
  preloadsamples1();
  preloadsamples2();
  preloadsamples3();
  preloadsamples4();
  regioes_json(pat_json.sample1 || 0);
  regioes_json2(pat_json.sample2 || 0);
  regioes_json3(pat_json.sample3 || 0);
  regioes_json4(pat_json.sample4 || 0);
  reloadsamples();
  criaregioes();
  pattern1();
}

// Controles
let region, region1, region2;
let fatiasn = 8;
let fatias = new Nexus.Number('#fatias',{
  'size': [60,30],
  'value': fatiasn,
  'min': 0,
  'max': 20000,
  'step': 1
});

let play_o = new Nexus.Toggle("#play_o");
let slider_dist = new Nexus.Slider("#slider_dist");
let slider_filtro = new Nexus.Slider("#slider_filtro");
slider_dist.value = 0.9; 

// Event listeners para radiobuttons
radiobutton.on('change',function(v) {
  radiosamples1(v);
});
radiobutton2.on('change',function(v) {
  radiosamples2(v);
});
radiobutton3.on('change',function(v) {
  radiosamples3(v);
});
radiobutton4.on('change',function(v) {
  radiosamples4(v);
});

// Event listeners para wavesurfers
wavesurfer.on('ready', function() {
   wavesurfer.setMute(true);
   regioes_json(radiobutton.active);
   criaregioes();
   pattern1();
});

wavesurfer2.on('ready', function() {
   wavesurfer2.setMute(true);
   regioes_json2(radiobutton2.active);
});

wavesurfer3.on('ready', function() {
   wavesurfer3.setMute(true);
   regioes_json3(radiobutton3.active);
});

wavesurfer4.on('ready', function() {
   wavesurfer4.setMute(true);
   regioes_json4(radiobutton4.active);
});

// Event listeners para controles
fatias.on('change',function(v) {
  clearAllRegions();
  regioes_simetricas();
});

slider_bpm.on('change', function(v){
  Tone.Transport.bpm.value = slider_bpm.value * 400; 
});

slider_filtro.on('change',function(v) {
  passabanda.frequency.value = v * 2000;
});

slider_dist.on('change',function(v) {
  distort.distortion = v;
});

function criaregioes(){ 
  player.loop = true;
  playerb.loop = true;
  playerc.loop = true;
  playerd.loop = true;
  Tone.Transport.bpm.value = 125;
  setTimeout(1000); 
}

// Event listeners para region updates
wavesurfer.on('region-updated', function(region){
  if(pat_json.regioes && pat_json.regioes[radiobutton.active]){
    pat_json.regioes[radiobutton.active][region.id*2] = region.start;
    pat_json.regioes[radiobutton.active][(region.id*2)+1] = region.end;
  }
  player.setLoopPoints(region.start, region.end);
  player.stop();
  wavesurfer.stop();
});

wavesurfer2.on('region-updated', function(region){
  if(pat_json.regioes2 && pat_json.regioes2[radiobutton2.active]){
    pat_json.regioes2[radiobutton2.active][region.id*2] = region.start;
    pat_json.regioes2[radiobutton2.active][(region.id*2)+1] = region.end;
  }
  playerb.setLoopPoints(region.start, region.end);
  playerb.stop();
  wavesurfer2.stop();
});

wavesurfer3.on('region-updated', function(region){
  if(pat_json.regioes3 && pat_json.regioes3[radiobutton3.active]){
    pat_json.regioes3[radiobutton3.active][region.id*2] = region.start;
    pat_json.regioes3[radiobutton3.active][(region.id*2)+1] = region.end;
  }
  playerc.setLoopPoints(region.start, region.end);
  playerc.stop();
  wavesurfer3.stop();
});

wavesurfer4.on('region-updated', function(region){
  if(pat_json.regioes4 && pat_json.regioes4[radiobutton4.active]){
    pat_json.regioes4[radiobutton4.active][region.id*2] = region.start;
    pat_json.regioes4[radiobutton4.active][(region.id*2)+1] = region.end;
  }
  playerd.setLoopPoints(region.start, region.end);
  playerd.stop();
  wavesurfer4.stop();
});

// Mixer expandido para 4 canais
var mixer = new Nexus.Multislider('#mixer',{
 'size': [300,100],
 'numberOfSliders': 4,
 'min': -100,
 'max': 6,
 'step': 0,
 'candycane': 3,
 'values': [0.9,0.8,0.7,0.6],
 'smoothing': 0,
 'mode': 'bar'
});

mixer.on('change',function(v) {
  player.volume.value = mixer.values[0];
  playerb.volume.value = mixer.values[1];
  playerc.volume.value = mixer.values[2];
  playerd.volume.value = mixer.values[3];
});

// Sequenciadores para 4 canais
let sequencer = new Nexus.Sequencer("#sequencer",{
 'size': [400,150],
 'mode': 'toggle',
 'rows': 8,
 'columns': 8,
 'paddingRow': 5,
 'paddingColumn': 5,
});

let sequencer2 = new Nexus.Sequencer("#sequencer2",{
 'size': [400,150],
 'mode': 'toggle',
 'rows': 8,
 'columns': 8,
 'paddingRow': 5,
 'paddingColumn': 5,
});
sequencer2.colorize("accent","#ff0");
sequencer2.colorize("fill","#333");

let sequencer3 = new Nexus.Sequencer("#sequencer3",{
 'size': [400,150],
 'mode': 'toggle',
 'rows': 8,
 'columns': 8,
 'paddingRow': 5,
 'paddingColumn': 5,
});
sequencer3.colorize("accent","#f80");
sequencer3.colorize("fill","#333");

let sequencer4 = new Nexus.Sequencer("#sequencer4",{
 'size': [400,150],
 'mode': 'toggle',
 'rows': 8,
 'columns': 8,
 'paddingRow': 5,
 'paddingColumn': 5,
});
sequencer4.colorize("accent","#f40");
sequencer4.colorize("fill","#333");

let beat = 0;

function pattern1(){
  if(pat_json.sequencia){
    for (let i = 0; i < pat_json.sequencia.length; i++){
      sequencer.matrix.set.row(i, pat_json.sequencia[i]);
      setTimeout(1000);
    }
  }
  if(pat_json.sequencia2){
    for (let i = 0; i < pat_json.sequencia2.length; i++){
      sequencer2.matrix.set.row(i, pat_json.sequencia2[i]);
      setTimeout(1000);
    }
  }
  if(pat_json.sequencia3){
    for (let i = 0; i < pat_json.sequencia3.length; i++){
      sequencer3.matrix.set.row(i, pat_json.sequencia3[i]);
      setTimeout(1000);
    }
  }
  if(pat_json.sequencia4){
    for (let i = 0; i < pat_json.sequencia4.length; i++){
      sequencer4.matrix.set.row(i, pat_json.sequencia4[i]);
      setTimeout(1000);
    }
  }
  Tone.Transport.bpm.value = pat_json.bpm;
}

// Loop principal expandido para 4 canais
const loops = new Tone.Loop((time) => {
  sequencer.next();
  sequencer2.next();
  sequencer3.next();
  sequencer4.next();
  
  // Canal 1
  for (let i = 0; i < 8; i++){
      let celula = sequencer.matrix.pattern[i][beat];
        if (celula && wavesurfer.regions.list[i]){
          player.stop();
          wavesurfer.stop();
          player.loop = false;
          player.fadeIn = 0.02;
          player.fadeOut = 0.02;
          wavesurfer.regions.list[i].loop = false;
          player.start(0, wavesurfer.regions.list[i].start,wavesurfer.regions.list[i].end - wavesurfer.regions.list[i].start );
          wavesurfer.regions.list[i].play(); 
        }
  }
  
  // Canal 2
  for (let i = 0; i < 8; i++){
      let celula2 = sequencer2.matrix.pattern[i][beat];
        if (celula2 && wavesurfer2.regions.list[i]){
          playerb.stop();
          wavesurfer2.stop();
          playerb.loop = false;
          playerb.fadeIn = 0.02;
          playerb.fadeOut = 0.02;
          wavesurfer2.regions.list[i].loop = false;
          playerb.start(0, wavesurfer2.regions.list[i].start,wavesurfer2.regions.list[i].end - wavesurfer2.regions.list[i].start );
          wavesurfer2.regions.list[i].play(); 
        }
  }
  
  // Canal 3
  for (let i = 0; i < 8; i++){
      let celula3 = sequencer3.matrix.pattern[i][beat];
        if (celula3 && wavesurfer3.regions.list[i]){
          playerc.stop();
          wavesurfer3.stop();
          playerc.loop = false;
          playerc.fadeIn = 0.02;
          playerc.fadeOut = 0.02;
          wavesurfer3.regions.list[i].loop = false;
          playerc.start(0, wavesurfer3.regions.list[i].start,wavesurfer3.regions.list[i].end - wavesurfer3.regions.list[i].start );
          wavesurfer3.regions.list[i].play(); 
        }
  }
  
  // Canal 4
  for (let i = 0; i < 8; i++){
      let celula4 = sequencer4.matrix.pattern[i][beat];
        if (celula4 && wavesurfer4.regions.list[i]){
          playerd.stop();
          wavesurfer4.stop();
          playerd.loop = false;
          playerd.fadeIn = 0.02;
          playerd.fadeOut = 0.02;
          wavesurfer4.regions.list[i].loop = false;
          playerd.start(0, wavesurfer4.regions.list[i].start,wavesurfer4.regions.list[i].end - wavesurfer4.regions.list[i].start );
          wavesurfer4.regions.list[i].play(); 
        }
  }
  
  beat++;
  beat = beat % sequencer.columns;
}, "4n").start(0);

// Play/Pause
play_o.on('change',function(v) {
	 v ? Tone.Transport.start() && loops.start() : Tone.Transport.stop() && loops.stop() && stopAllPlayers();
});

function stopAllPlayers(){
  player.stop();
  playerb.stop();
  playerc.stop();
  playerd.stop();
  wavesurfer.pause();
  wavesurfer2.pause();
  wavesurfer3.pause();
  wavesurfer4.pause();
}

