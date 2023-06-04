import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer?min';


$(".audio").each(function(){
  const audioEl = $(this)[0];  
  const audioMotion = new AudioMotionAnalyzer(
  $(audioEl).parent().find(".container")[0],
  {
    source: audioEl,
    height: 210,
    // you can set other options below - check the docs!
    mode: 3,
    barSpace: .6,
    ledBars: true,
  }
);
})
// audio source


// instantiate analy