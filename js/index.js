const landingButton = document.getElementById('landing-button');
const nameSubmitButton = document.getElementById('name-question-button');
const startBreathingCatButton = document.getElementById('start-breathing-cat-button');

const landingCatReveal = TweenMax.to('.landing-cat-round', 2.5, {css: {'margin-top': '15%', opacity: 1}, ease: Elastic.easeInOut.config(0.5, 0.2), onComplete: function() {
  TweenMax.to('#landing-button', 0.5, { css: { opacity: 1 } });
  TweenMax.to('#landing-text', 0.5, { css: { opacity: 1 } });
} });


const start = function() {
  const tl = new TimelineMax();
  tl.add( TweenMax.to('.material-icons', 0.2, {css:{visibility: 'hidden'}} ))
  tl.add( TweenMax.fromTo('#landing-button', 0.4, {scale: 1, backgroundColor: '#5CA1C2'}, {scale: 30, backgroundColor: '#5CA1C2', ease: Power1.easeIn}) );
  tl.add( TweenMax.fromTo('.alt-intro', 0.5, { css:{ visibility: 'hidden' } }, { css:{ visibility: 'visible' }}));
  tl.add( TweenMax.to('.landing', 0.1, {css:{visibility: 'hidden'}}) );
  tl.add( TweenMax.to('.mountain1', 0.5, {y: -170}));
  tl.add( TweenMax.to('.mountain2', 0.5, {y: -300}));
  tl.add( TweenMax.to('.alt-info-box', 0.5, {y: 300 , opacity:1}));
};

const infoSwitch = function() {
  console.log('button pressed');
  const tl = new TimelineMax();
  tl.add( TweenMax.to('.alt-info-box', 0.2, {css:{ visibility: 'hidden', opacity: 0 }}));
  tl.add( TweenMax.to('.breathing-information', 0.2, {css:{visibility: 'visible', opacity: 1}}));
};

const breathingCat = function() {
  console.log('Start button pressed');
  const tl = new TimelineMax();
  tl.add( TweenMax.to('.mountain2', 0.5, {y: 0}));
  tl.add( TweenMax.to('.mountain1', 0.5, {y: 0}));
  tl.add( TweenMax.to('.breathing-information', 0.5, {css:{visibility: 'hidden', opacity: 0}}));
  tl.add( TweenMax.fromTo('.alt-intro', 0.2, {backgroundColor: '#5CA1C2'}, {backgroundColor: '#CEF7F0'}));
  tl.add( TweenMax.to('.breathing', 0.5))
};



const breatheOut = {
  visible: true,
  scale: 1,
  delay: 2
};
const breatheIn = {
  scale: 1.3,
  delay: 2,
  ease: Power1.easeInOut,
  yoyo: true,
  repeat: -1
};

const breathe = TweenMax.fromTo('#belly', 5, breatheOut, breatheIn);
const headMovement = TweenMax.fromTo('#head', 5, {y: -0, delay: 2}, {y: -19, delay: 2, ease: Power1.easeInOut, repeat: -1, yoyo: true});


landingButton.addEventListener('click', start);
nameSubmitButton.addEventListener('click', infoSwitch);
startBreathingCatButton.addEventListener('click', breathingCat);
