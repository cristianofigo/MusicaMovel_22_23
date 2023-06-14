//let pat_json = {};//usar esse objeto como escrita temporária da interface
let cenas = ["cena1", "cena2", "cena3"];
let pat_json, pat_json1, pat_json2, pat_json3;
var urlbase;
let url, url2;

function preload(){
  //pat_json = loadJSON('iiiiiiiii.json');
  //pat_json = loadJSON('aaaaaaaaaaa.json');
  ///pat_json = loadJSON('bibibi.json');
  pat_json1 = loadJSON('celular3105.json');
  pat_json2 = loadJSON('bibibi.json');
  pat_json3 = loadJSON('novasamples.json');
    }

////////
let slider_bpm = new Nexus.Slider("#slider_bpm"); //slider bpm
///////


function setup(){
  pat_json = pat_json1;
  slider_bpm.value = pat_json.bpm/400;  
}

let player, player1, player2, player3, player4, player5, player6, player7, player8;

let playerb, playerb1, playerb2, playerb3, playerb4, playerb5, playerb6, playerb7, playerb8;

let playerc, playerc1, playerc2, playerc3, playerc4, playerc5, playerc6, playerc7, playerc8;


var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    plugins :
   [
        WaveSurfer.regions.create({
                   
})
     ]
})

let radiobutton = new Nexus.RadioButton('#radiobutton',{
  'size': [300,25],
  'numberOfButtons': 8,
  'active': 0
});




var wavesurfer2 = WaveSurfer.create({
    container: '#waveform2',
    waveColor: 'rgb(130,238,174)',
    progressColor: 'rgb(61m28,44)',
    plugins :
   [
        WaveSurfer.regions.create({
                   
})
     ]
})

let radiobutton2 = new Nexus.RadioButton('#radiobutton2',{
  'size': [300,25],
  'numberOfButtons': 8,
  'active': 0
});


setTimeout(() => {
  urlbase = pat_json.urlbase; //sample url
  preloadsamples1();
  preloadsamples2();
  player = player1;
  playerb = playerb1;
  carregasample();
  
  }, 2000);

function reloadsamples(){
setTimeout(() => {
  radiobutton.select(pat_json.sample1);
  radiobutton2.select(pat_json.sample2);
  //wavesurfer2.loadDecodedBuffer(playerb.buffer._buffer);
  }, 1000);
}

//reloadsamples();

var select_menu = new Nexus.Select('#menu_cenas',{
  'size': [100,30],
  'options': cenas
})

select_menu.on('change',function(v) {
  if(select_menu.value === "cena1"){
    wavesurfer.clearRegions();
    wavesurfer2.clearRegions();
     pat_json = pat_json1;
    preloadsamples1();
    preloadsamples2();
    regioes_json(pat_json.sample1);
    regioes_json2(pat_json.sample2);
    reloadsamples();
    criaregioes();
   pattern1();  
  }
  if(select_menu.value === "cena2"){
    wavesurfer.clearRegions();
    wavesurfer2.clearRegions();
    pat_json = pat_json2;
    preloadsamples1();
    preloadsamples2();
    regioes_json(pat_json.sample1);
    regioes_json2(pat_json.sample2);
    reloadsamples();
    criaregioes();
   pattern1();
    }
  if(select_menu.value === "cena3"){
    wavesurfer.clearRegions();
    wavesurfer2.clearRegions();
    pat_json = pat_json3;
    preloadsamples1();
    preloadsamples2();
    regioes_json(pat_json.sample1);
    regioes_json2(pat_json.sample2);
    reloadsamples();
    criaregioes();
   pattern1();
  //seqmatrix = pat_json.cena1
  //patternseq();  
  }
  
})



let region, region1, region2;

let fatiasn = 8;
let fatias = new Nexus.Number('#fatias',{
  'size': [60,30],
  'value': fatiasn,
  'min': 0,
  'max': 20000,
  'step': 1
})





let play_o = new Nexus.Toggle("#play_o");//botão play pause




let slider_dist = new Nexus.Slider("#slider_dist"); //slider distorção
let slider_filtro = new Nexus.Slider("#slider_filtro"); //slider filtro
slider_dist.value = 0.9; 

///*


radiobutton.on('change',function(v) {
  radiosamples1(v);
})
radiobutton2.on('change',function(v) {
  radiosamples2(v);
})




//muta o audio nativo da wavesurfer
 wavesurfer.on('ready', function() {
   wavesurfer.setMute(true);
   //regioes_simetricas();
   regioes_json(radiobutton.active);  //aqui vai entrar o carrega da json
   criaregioes();
   pattern1();
   //radiobutton.select(0);
   //console.log("agora");
 });

 wavesurfer2.on('ready', function() {
   wavesurfer2.setMute(true);
   //regioes_simetricas();
   regioes_json2(radiobutton2.active);  //aqui vai entrar o carrega da json
   //criaregioes();
  // pattern1();
   //radiobutton.select(0);
   //console.log("agora");
 });


fatias.on('change',function(v) {
  wavesurfer.clearRegions();
  regioes_simetricas();
  //carregasample();
  console.log("não mexe em mim")
})

slider_bpm.on('change', function(v){
  Tone.Transport.bpm.value = slider_bpm.value * 400; 
  console.log(slider_bpm.value * 400);
})


slider_filtro.on('change',function(v) {
  passabanda.frequency.value = v * 2000;
})

slider_dist.on('change',function(v) {
  distort.distortion = v;
})

function criaregioes(){ 
player.loop = true;
  playerb.loop = true;
  Tone.Transport.bpm.value = 125;
setTimeout(1000); 
}

function criaregioes_nova(){
  let slicesj = pat_json.regioes.length/2;
  for(let i = 0; i < slicesj; i++){
    
  }
}


//atualiza loop após clicar e arrastar
wavesurfer.on('region-updated', function(region){
  //essa função deve atualizar o JSON em tela
 // wavesurfer.clearRegions(); 
 // regioes_json(radiobutton.active);
  pat_json.regioes[radiobutton.active][region.id*2] = region.start;
  pat_json.regioes[radiobutton.active][(region.id*2)+1] = region.end;
  player.setLoopPoints(region.start, region.end);
  player.stop();
  wavesurfer.stop() ;
  //player.start();//útil pra acertar o loop
  //region.playLoop();
  console.log(region.id);
  })

wavesurfer2.on('region-updated', function(region){
  //essa função deve atualizar o JSON em tela
 // wavesurfer.clearRegions(); 
 // regioes_json(radiobutton.active);
  pat_json.regioes2[radiobutton2.active][region.id*2] = region.start;
  pat_json.regioes2[radiobutton2.active][(region.id*2)+1] = region.end;
  playerb.setLoopPoints(region.start, region.end);
  playerb.stop();
  wavesurfer2.stop() ;
  //player.start();//útil pra acertar o loop
  //region.playLoop();
  console.log(region.id);
  })

////mixer
var mixer = new Nexus.Multislider('#mixer',{
 'size': [200,100],
 'numberOfSliders': 5,
 'min': -100,
 'max': 6,
 'step': 0,
 'candycane': 3,
 'values': [0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1],
 'smoothing': 0,
 'mode': 'bar'  // 'bar' or 'line'
})
mixer.on('change',function(v) {
  //console.log(v);
  player.volume.value = mixer.values[0];
  playerb.volume.value = mixer.values[1];
})


// sequencer
let sequencer= new Nexus.Sequencer("#sequencer",{
 'size': [400,150],
 'mode': 'toggle',
 'rows': 8,
 'columns': 8,
 'paddingRow': 5,
 'paddingColumn': 5,
 });

let sequencer2= new Nexus.Sequencer("#sequencer2",{
 'size': [400,150],
 'mode': 'toggle',
 'rows': 8,
 'columns': 8,
 'paddingRow': 5,
 'paddingColumn': 5,
  
 });
sequencer2.colorize("accent","#ff0");
sequencer2.colorize("fill","#333");
let beat = 0;

function pattern1(){
    for (let i = 0; i < pat_json.sequencia.length; i++){
    sequencer.matrix.set.row(i, pat_json.sequencia[i]);
      setTimeout(1000);
  }
  for (let i = 0; i < pat_json.sequencia2.length; i++){
    sequencer2.matrix.set.row(i, pat_json.sequencia2[i]);
      setTimeout(1000);
  }
  Tone.Transport.bpm.value = pat_json.bpm;
    }

//pattern1();


const loops = new Tone.Loop((time) => {
  sequencer.next();
   sequencer2.next();
  /////loop pra olhar em cada canal (e cada fatia tb)
  for (let i = 0; i < 8; i++){
      let celula = sequencer.matrix.pattern[i][beat];
        if (celula){
          player.stop();
          wavesurfer.stop();
          player.loop = false;
          player.fadeIn = 0.02;
         player.fadeOut = 0.02;
          wavesurfer.regions.list[i].loop = false;
          player.start(0, wavesurfer.regions.list[i].start,wavesurfer.regions.list[i].end - wavesurfer.regions.list[i].start );
          wavesurfer.regions.list[i].play(); 
          //console.log("teste" + i); 
        }
  }
  ////fim do loop
  for (let i = 0; i < 8; i++){
      let celula2 = sequencer2.matrix.pattern[i][beat];
        if (celula2){
          playerb.stop();
          wavesurfer2.stop();
          playerb.loop = false;
          playerb.fadeIn = 0.02;
         playerb.fadeOut = 0.02;
          wavesurfer2.regions.list[i].loop = false;
          playerb.start(0, wavesurfer2.regions.list[i].start,wavesurfer2.regions.list[i].end - wavesurfer2.regions.list[i].start );
          wavesurfer2.regions.list[i].play(); 
          //console.log("teste" + i); 
        }
  }
   //// 
  beat++;
  beat = beat % sequencer.columns;
  ///console.log(beat);
 }, "4n").start(0);


//play pause (botão)
play_o.on('change',function(v) {
	 v ? Tone.Transport.start() && loops.start() : Tone.Transport.stop() && loops.stop() && player.stop() && wavesurfer.pause();
});