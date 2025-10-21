localStorage.clear();
function startGame(e = null, state = null) {
   
    if(localStorage.getItem("saved") && e == null){
        getSave();
    }
    else{
        if(e == null){
            e = writeElements();
            elements = initialiseElements(e);
            state = initialiseStates();
        }
        else elements = initialiseElements(e);
        drawMap(elements, state);
        moveWorldStart(elements, data.importantStates);
        createImportantObjects(elements, state, e);
        creationTertiaryCharacters(elements, state, e);
        createMapDecorations(elements, state, e);
        moveImportantObjectsStart(elements);
        saveStatesElements(e, state);
        createInteractableKeys(elements, state);
        setupDialogue(elements, state, e);
        controlSkip(elements, state);
        gameScripts(elements, state);
        backgroundAdaption(elements, state);
        mobileAdaptation(elements, state);
        createOnClicks(elements, state);
        createListenersForRedraw(elements, state);
        writeMissions(elements, state);
        setInterval(() => {
            if(state.cond_movement) saveMats_ImportantStates();
        }, 2000);
        }  
    }

    function reset(){
        localStorage.clear();
        location.reload();
    }

const data = initialiseData();

function initialiseData(){
    return {
        matTert: initialiseMatTert(),
        importantObjects: initialiseImportantObjects(),
        seatForObjects: initialiseseatForObjects(),
        importantStates: initialiseimportantStates(),
        posWildNature: initialiseWildNature(),
        posIdleCycle: initialiseposIdle(),
        logConstructionMission: initialiseConstructionMission(),
    }
}

let N = 10;

function initialiseMatTert(){
    if(localStorage.getItem("saved") == null){
    const matTert = [
        [ '185vw', '-14vh', "group", 1, false, 'operaio'],
        [ '175vw', '-2vh', "group", -2, false, 'operaio' ],
        [ '175vw', '-26vh', "group", 2, false, 'operaio'],
        [ '25vw', '-26vh', "work-alone", 1, false, 'operaio'],
        [ '100vw', '111vh', "alone", -1, false, 'operaio'],
        [ '80vw', '41vh', "group", 1, false, 'Bob'],
        [ '90vw', '42vh', "group", 1, false, 'operaio'],
        [ '190vw', '101vh', "group", -1, false, 'operaio'],
        [ '200vw', '101vh', "group", 1, false, 'operaio'],
        [ '113vw', '51vh', "walk-casually", -1, false, 'operaio'],
        
        ];
        return matTert;
    } else{
        const matTert = JSON.parse(localStorage.getItem("matTert"));
        return matTert;
    }   
}

function initialiseseatForObjects(){
    if(localStorage.getItem("saved") == null){
        const seatForObjects = [
            [ '165vw', '2vh', '166vw', '-24vh', 'table_construction'],
            ['155vw', '112vh', 'stand'],
        ];
        return seatForObjects;
    } else{
        const seatForObjects= JSON.parse(localStorage.getItem("seatForObjects"));
        return seatForObjects;
    }
}

function initialiseimportantStates(){
    if(localStorage.getItem("saved") == null){
        return {
            posCanvasX: -200,
            posCanvasY: -550,
        }
    } else{
        return JSON.parse(localStorage.getItem("importantStates"));
    }
    
}

function initialiseWildNature(){
    if(localStorage.getItem("saved") == null) {
        let WildNature = [
            //Centro
            [null, null, "fiore1", 101, 0, 0],
            [null, null, "fiore2", 101, 0, 0],
            [null, null, "erba1", 101, 0, 0],
            [null, null, "erba2", 101, 0, 0],
            [null, null, "fiore1", 101, 0, 0],
            [null, null, "erba1", 101, 0, 0],
            [null, null, "erba2", 101, 0, 0],
            //Destra1
            [null, null, "fiore1", 101, 110, 0],
            [null, null, "fiore2", 101, 110, 0],
            [null, null, "erba1", 101, 110, 0],
            [null, null, "erba2", 101, 110, 0],
            [null, null, "fiore1", 101, 110, 0],
            [null, null, "erba1", 101, 110, 0],
            [null, null, "erba2", 101, 110, 0],
            //Sinistra1
            [null, null, "fiore1", 101, -110, -35],
            [null, null, "fiore2", 101, -110, -35],
            [null, null, "erba1", 101, -110, -35],
            [null, null, "erba2", 101, -110, -35],
            [null, null, "fiore1", 101, -110, -35],
            [null, null, "erba1", 101, -110, -35],
            [null, null, "erba2", 101, -110, -35],
            //Centro-alto1
            [null, null, "fiore1", 101, 0, -110],
            [null, null, "fiore2", 101, 0, -110],
            [null, null, "erba1", 101, 0, -110],
            [null, null, "erba2", 101, 0, -110],
            [null, null, "fiore1", 101, 0, -110],
            [null, null, "erba1", 101, 0, -110],
            [null, null, "erba2", 101, 0, -110],
            //Destra-alto1
            [null, null, "fiore1", 101, 110, -110],
            [null, null, "fiore2", 101, 110, -110],
            [null, null, "erba1", 101, 110, -110],
            [null, null, "erba2", 101, 110, -110],
            [null, null, "fiore1", 101, 110, -110],
            [null, null, "erba1", 101, 110, -110],
            [null, null, "erba2", 101, 110, -110],
            //Sinistra-alto1
            [null, null, "fiore1", 101, -110, -140],
            [null, null, "fiore2", 101, -110, -140],
            [null, null, "erba1", 101, -110, -140],
            [null, null, "erba2", 101, -110, -140],
            [null, null, "fiore1", 101, -110, -140],
            [null, null, "erba1", 101, -110, -140],
            [null, null, "erba2", 101, -110, -140],
        ];
        WildNature = setPositionWildNature(WildNature);
        return WildNature;
    }
    else return JSON.parse(localStorage.getItem("posWildNature"));
}

function initialiseposIdle() {
    if(localStorage.getItem("saved") == null){
        const posIdleCycle = [
            [60, 173],
        ];
        return posIdleCycle;
    } else{
        const posIdleCycle= JSON.parse(localStorage.getItem("posIdleCycle"));
        return posIdleCycle;
    }
}

function initialiseConstructionMission() {
    if(localStorage.getItem("saved") == null){
        const logConstructionMission = [
            ["Base della entrata", "15_M"],
            ["Muri della entrata", "5_M", "3_V"],
            ["Tetto della entrata", "5_L"],
        ];
        return logConstructionMission;
    } else{
        const logConstructionMission= JSON.parse(localStorage.getItem("logConstructionMission"));
        return logConstructionMission;
    }
}

function setPositionWildNature(mat_nature){
    let cond_while;
    for(let i=0;i<mat_nature.length;i++) {
        cond_while = false;
        while(cond_while == false) {
            cond_while = true;
            mat_nature[i][0] = (Math.floor(Math.random() * mat_nature[i][3]) + mat_nature[i][4]) + "vw";
            mat_nature[i][1] = (Math.floor(Math.random() * mat_nature[i][3]) + mat_nature[i][5]) + "vh";
            for(let j=i-1;j>0;j--){
                if(Math.abs(parseFloat(mat_nature[i][0]) - parseFloat(mat_nature[j][0])) <= 2) cond_while = false;
                if(Math.abs(parseFloat(mat_nature[i][1]) - parseFloat(mat_nature[j][1])) <= 2) cond_while = false;
            }
        }
    }
    return mat_nature;
}

function initialiseImportantObjects(){
    if(localStorage.getItem("saved") == null){
        const importantObjects = [
            [ '173vw', '-10vh','table_construction',  1, 'tavolo_costruzione.png'],
            ['14vw', '-20vh', 'barrow', 4, 'structure_barrow', 'cariola.png', 'structure_wheel', 'ruota_cariola.png'],
            ['140vw', '80vh', 'stand', 1, 'stand_libri.png']
        ];
        return importantObjects;
    } else{
        const importantObjects= JSON.parse(localStorage.getItem("importantObjects"));
        return importantObjects;
    }
}
function saveMats_ImportantStates(){
    localStorage.setItem("matTert", JSON.stringify(data.matTert));
    localStorage.setItem("seatForObjects", JSON.stringify(data.seatForObjects));
    localStorage.setItem("importantStates", JSON.stringify(data.importantStates));
    localStorage.setItem("importantObjects", JSON.stringify(data.importantObjects));
    localStorage.setItem("posWildNature", JSON.stringify(data.posWildNature));
    localStorage.setItem("logConstructionMission", JSON.stringify(data.logConstructionMission));
    localStorage.setItem("posIdleCycle", JSON.stringify(data.posIdleCycle));
}

function drawMap(e, state) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const scaleFactor = 4;
    canvas.width = window.innerWidth * scaleFactor;
    canvas.height = window.innerHeight * scaleFactor;


    canvas.style.width = '100vw';
    canvas.style.height = '100vh';

    function vw(v) { return window.innerWidth * (v / 100); }
    function vh(v) { return window.innerHeight * (v / 100); }

    let imgX = 200;   
    let imgY = 50;   
    let imgW = 100;    
    let imgH = 100;    
    let cols = 4;     
    let rows = 4;    

    const sources = [
    "giardino_bordo_alto1.jpg",
    "giardino_alto1.jpg",
    "giardino_alto2.jpg",
    "giardino_bordo_alto2.jpg",
    "giardino_bordo_mezzo1.jpg",
    "giardino_mezzo1.jpg",
    "giardino_mezzo2.jpg",
    "giardino_bordo_mezzo2.jpg",
    "giardino_bordo_basso1.jpg",
    "giardino_basso1.jpg",
    "giardino_basso2.jpg",
    "giardino_bordo_basso2.jpg",
    "strada_bordo1.jpg",
    "strada_mezzo1.jpg",
    "strada_mezzo2.jpg",
    "strada_bordo2.jpg"
    ];

    let images = [];
    let loadedCount = 0;

    sources.forEach((src, i) => {
    const img = new Image();
    img.onload = () => {
        loadedCount++;
        if (loadedCount === sources.length) drawImages(); 
    };
    img.src = src;
    images.push(img);
    });

    function drawImages() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const totalWidth = vw(imgW * cols);
    const startX = vw(imgX) - totalWidth / 2;

    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
        const index = i * cols + j;
        if (!images[index]) continue;

        ctx.drawImage(
            images[index],
            startX + vw(j * imgW),
            vh(imgY - imgH / 2 + i * imgH),
            vw(imgW),
            vh(imgH)
        );
        }
    }
    }

    window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawImages();
    });

}

saveMats_ImportantStates();



function moveWorldStart(e, importantStates){
    e.canvas.style.transition = "transform 0.25s linear, margin-top 1.5s ease-out, margin-left 1.5s ease-out";
    e.canvas.style.zIndex = '-9999';
}

function moveImportantObjectsStart(e){
    for(i=0;i<data.importantObjects.length;i++){
        element = document.getElementById(data.importantObjects[i][2]);
        element.style.transition = '';
        element.style.left = data.importantObjects[i][0];
        element.style.top = data.importantObjects[i][1];
        element.style.transition = "top 0.25s ease-out, left 0.25s ease-out";
    }
}

function gameScripts(e, state) {
    if(state.index >= 5){
        e.world.style.transform = 'scale(0.07)';
        e.world.style.transition = 'margin-top 1.5s ease-out, margin-left 1.5s ease-out, left 0.25s linear, top 0.25s linear';
        waitForImagesToLoad(document.getElementById("world"), () => {
            setTimeout(() => {
                e.world.style.transform = "scale(0.07)";
            }, 200);
            setTimeout(() => scaleWorld(e), 1200);
        });
        e.preside_container.style.left = '50vw';
        document.getElementById('cinematic-bars').classList.remove('cinematic');
        activateHud(e);
        activateHudStart(e, state);
    }
    else{
        activateCinematicMode(e);
        waitForImagesToLoad(document.getElementById("world"), () => {
            setTimeout(() => {
                e.world.style.transform = "scale(0.07)";
            }, 200);
            setTimeout(() => scaleWorld(e), 1200);
        });
        centralizationPreside(e, state);
        diaologueB_P1(e, state);
        
    }
    
}
function getSave(){
    const elements = JSON.parse(localStorage.getItem("elements"));
    const state = JSON.parse(localStorage.getItem("state"));
    startGame(elements, state);
}

function writeElements() {
  return {
    // Core del gioco
    canvas: "document.getElementById('canvas')",
    world: "document.getElementById('world')",
    moneyText: "document.getElementById('money')",
    menu: "document.getElementById('missions')",
    menu1: "document.getElementById('menu1')",
    menu_base: "document.getElementById('menu_base')",
    hud: "document.getElementById('hud')",
    construction_menu: "document.getElementById('construction_menu')",
    material_shop: "document.getElementById('material_shop')",
    lateral_icon: "document.getElementById('lateral_icon')",
    zoom: "document.getElementById('zoom')",
    standard: "document.getElementById('standard')",
    dezoom: "document.getElementById('dezoom')",
    camionBob: "document.getElementById('camionBob')",
    mission1: "document.getElementById('mission1')",
    mission2: "document.getElementById('mission2')",
    mission3: "document.getElementById('mission3')",
    first_c_m: "document.getElementById('first_c_m')",
    second_c_m: "document.getElementById('second_c_m')",
    third_c_m: "document.getElementById('third_c_m')",
    c_menu_main_text: "document.getElementById('c_menu_main_text')",
    blueprint_img: "document.getElementById('blueprint_img')",
    choices: "document.getElementById('choices')",
    display_choice: "document.querySelector('.display_choice')",
    display_img_choice1: "document.getElementById('display_img_choice1')",
    display_img_choice2: "document.getElementById('display_img_choice2')",

    // Giocatore e interazioni
    student: "document.querySelector('.student')",
    toggle_icon: "document.querySelector('.toggle-icon')",
    platform_1: "document.getElementById('platform_1')",
    platform_2: "document.getElementById('platform_2')",
    keyE: "document.getElementById('key_e')",
    circle1: "document.getElementById('circle1')",
    circle2: "document.getElementById('circle2')",
    circle3: "document.getElementById('circle3')",
    click_circle: "document.getElementById('click_circle')",
    button_shop1: "document.getElementById('button_shop-1')",
    button_shop2: "document.getElementById('button_shop-2')",
    button_shop3: "document.getElementById('button_shop-3')",

    // Dialoghi e narrativa
    dialogues: "document.getElementById('dialogues')",
    text_dialogue: "document.getElementById('dialogues_text')",
    container_dialogue: "document.getElementById('dialogues_container')",
    imgPreside: "document.getElementById('img_preside_dialogues')",
    anonymousCharacter: "document.getElementById('anonymous_character_dialogues')",
    characterName: "document.getElementById('character_name')",
    boxname: "document.getElementById('name_box')",
    preside: "document.getElementById('preside')",
    preside_container: "document.getElementById('preside_container')",

    // Decorazioni
    scuolaImgs: "document.querySelectorAll('.school_imgs')",
    imgsArray: "Array.from(document.querySelectorAll('.school_imgs'))",

    // Notifiche / sbloccabili
    unlockedText: "document.getElementById('unlocked')",

    //Elementi mobile
    right_arrow: "document.getElementById('right_arrow')",
    left_arrow: "document.getElementById('left_arrow')",
    top_arrow: "document.getElementById('top_arrow')",
    bottom_arrow: "document.getElementById('bottom_arrow')",
    rightTop_arrow: "document.getElementById('rightTop_arrow')",
    leftTop_arrow: "document.getElementById('leftTop_arrow')",
    rightBottom_arrow: "document.getElementById('rightBottom_arrow')",
    leftBottom_arrow: "document.getElementById('leftBottom_arrow')",

    //oggetti idle
    stand: "document.getElementById('stand')"
  };
}



function initialiseElements(e) {
  let out = {};
  for (let key in e) {
    out[key] = eval(e[key]);
  }
  return out;
}


function initialiseStates() {
  return {
    // state principale
    money: 20,
    classes: 0,
    language: navigator.language || navigator.userLanguage,

    // Interazioni e click
    cond_movement: false,
    cond_jumpB: true,
    cond_jumpT: false,
    cond_skip: true,
    cond_dialogue: false,
    cond_text: true,
    cond_other_character: true,
    condBP1: false,
    condFreeRoam: true,
    elementsHud: [],
    other_mission_opened: false,
    condMobileMovement: false,
    cond_interactionCircle: false,
    menu_opened: false,

    // Posizioni
    posX: 0,
    posY: 0,
    pos_student: 0,
    posBX: 70,
    posBY: 39,
    ids: [],
    index: -1,

    // Condizioni ambientali
    cond_platform_1: false,
    cond_deactivate_movement: false,
    cond_run_preside: false,

    // state generico
    maxTimeAnimationGroup: [N],
    maxTimeAnimationWorkAlone: [N],
    maxTimeAnimationAlone: [N],

    //risorse
    brick_resource: 0, 
    glass_resource: 0, 
    wood_resource: 0,

  };
}

function activateHudStart(e, state){
    for(i=0;i<state.elementsHud.length;i++){
        if(state.elementsHud[i] == true){
            switch (i){
                case 0:
                    e.moneyText.style.opacity = '1';
                    break;
            }
        } 
    }
}

let zoom = 0.8;
function scale(condition, e) {
    e.world.style.transition = "transform 0.25s linear, margin-top 1.5s ease-out, margin-left 1.5s ease-out, left 0.25s linear, top 0.25s linear";
    switch (condition){
        case true:
            if (zoom <= 1.32) {
                zoom += 0.07;
                e.world.style.transform = `scale(${zoom})`;
            }
            break;
        case false:
            if (zoom >= 0.65) {
                zoom -= 0.07;
                e.world.style.transform = `scale(${zoom})`;
            }
            break;
        case 'standard':
            zoom = 0.8;
            e.world.style.transform = `scale(${zoom})`;
            return;
            break;
        case 'wide': 
            e.world.style.transition = "transform 0.5s linear, margin-top 1.5s ease-out, margin-left 1.5s ease-out, left 0.25s linear, top 0.25s linear";
            zoom = 0.6;
            e.world.style.transform = `scale(${zoom})`;
            return;
            break;
    }
}

function waitForImagesToLoad(container, callback) {
  const images = container.querySelectorAll('img');
  let loaded = 0;

  if (images.length === 0) {
    callback();
    return;
  }

  images.forEach(img => {
    if (img.complete) {
      loaded++;
      if (loaded === images.length) callback();
    } else {
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === images.length) callback();
      };
    }
  });
}

function scaleWorld(e) {
  let scale = 0.07;
  const target = 0.8;
  const speed = 0.005;


  function animate() {
    scale += speed;
    if (scale >= target) {
      scale = target;
      e.world.style.transform = `scale(${target})`;
      return
    }
    e.world.style.transform = `scale(${scale})`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

function scaleWorld2(e) {
  let scale = 0.8;
  const target = 0.07;
  const speed = 0.006;

  
  let scale2 = 1;
  const target2 = 5;
const speed2 = 0.048;

  function animate() {
    scale -= speed;
    scale2 -= speed2;
    if (scale <= target) {
      scale = target;
      e.world.style.transform = `scale(${target})`;
    }
    else {
        if(scale2 >= target2) {
            e.canvas.style.transform = `scale(${target2})`;
            return; 
      }
    }

    e.world.style.transform = `scale(${scale})`;
    e.canvas.style.transform = `scale(${scale2})`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}


function createInteractableKeys(e, state) {
    const pos_keys = [
        ['90vw', '105vh'],
        ['152vw', '-20vh'],
    ]
    for(let i=0;i<pos_keys.length;i++){
        if(pos_keys[i][0] != false){
            const key = document.createElement('img');
            key.src = 'tasto_e.png';
            key.id = 'key_e' + i;
            key.className = 'school_imgs';
            key.style.width = '5vw';
            key.style.height = '5vw';
            key.style.opacity = '0';
            key.style.left = parseFloat(pos_keys[i][0]) + 8 + 'vw';
            key.style.top = parseFloat(pos_keys[i][1]) - 7 + 'vh';
            e.world.appendChild(key);
        }
    }
}

function setupDialogue(e, state, saved_e) {
  const lines = [
    ["Ciao! Sono Bob, della 'Bob & Company'!", "Bob", 2, 0, true],
    ["Questo posto è proprio enorme!", "Bob", 2, 0, false],
    [["Spero che ne sia valsa la pena comprarlo...", "Ho dovuto dare persino il portafoglio per poterlo acquistare."], "preside", 1, 0, false],
    ["Stai tranquillo! Quando sei con noi puoi contare sulle migliori braccia della città!", "Bob", 2, 0, false],
    ["Siamo quasi pronti, quando vuoi iniziare visita il tavolo da costruzione!", "Bob", 2, true, false, -100, 35],
    [true],
    ["Sembra che tu non abbia abbastanza materiali per costruire...", "preside", 1, 0, false],
    ['Non preoccuparti! come diceva mio padre "costruisci per mantenerti o mantieniti per costruire!"', "Bob", 2, 0, false],
    [true],
    ["Mhh.. Potrei vendere alcuni dei libri che ho portato con me.", "preside", 1, 0, false],
    [true],
    ["Ciao zio!", "Matthew", 2, 0, false],
    [["Ma come ti sei vestito?", "Matthew! Giusto in tempo!"], "preside", 1, 0, false],
    ["Da ora sarò il tuo manager, così mi sono messo il miglior abito del mio armadio!", "Matthew", 2, 0, false],
    ["Come mai non avete ancora iniziato a costruire?", "Matthew", 2, 0, false],
    ["Matt, ci servono soldi...", "preside", 1, 0, false],
    ["Tranquillo, lascia fare a me.", "Matthew", 2, 0, false],
    ["Organizzeremo una raccolta fondi con il sindaco come ospite speciale!", "Matthew", 2, 0, false],
    ["E come facciamo a convincere il sindaco?", "preside", 1, 0, false],
    ["Non ti preoccupare, è mio amico e mi deve anche un favore.", "Matthew", 2, 0, false],
    ["Preparerò anche delle squisite limonate. Conosco la tecnica perfetta!", "Matthew", 2, 0, false],
    ["E i limoni chi li compra? Il sindaco?", "preside", 1, 0, false],
    [true],
  ];
  if(state.language != 'it-IT'){
    changeLinesLanguage();
  }

  function changeLinesLanguage(){
        const lines_en = [
        "Hi! I'm Bob, from 'Bob & Company'!",
        "This place is really huge!",
        ["I hope it was worth buying...", "I even had to give up my wallet to purchase it."],
        "Don’t worry! When you’re with us, you can count on the best arms in the city!",
        "We’re almost ready, when you want to start come to the construction table!",
        true,
        "It seems I don’t have enough materials to build something...",
        'Don’t worry! As my father used to say, "build to sustain yourself, or sustain yourself to build!"',
        true,
        "I could sell some books I brought with me.",
        true,
        "Hi uncle!",
        ["What te heck are you wearing?", "Matthew! Just in time..."],
        "I’ll be your manager, so I put on the best suit from my wardrobe!",
        "Why haven’t you started building yet?",
        "We need money...",
        "Don’t worry, leave it to me.",
        "Let’s organize a fundraiser, with the mayor as special guest!",
        "And how do we convince the mayor?",
        "He’s my friend, and he also owes me a favor.",
        "I’ll also prepare some exquisite lemonades. I know the perfect technique!",
        "Does the mayor buy the lemons?",
        true,
        ];

        const lines_fr = [
        "Salut ! Je suis Bob, de 'Bob & Compagnie'!",
        "Cet endroit est vraiment immense !",
        ["J’espère que ça valait la peine de l’acheter...", "J’ai même dû donner mon portefeuille pour l’acquérir."],
        "Ne t’inquiète pas ! Avec nous, tu peux compter sur les meilleurs bras de la ville !",
        "On est presque prêts, quand tu veux commencer viens à la table de construction !",
        true,
        "Il semble que je n’ai pas assez de matériaux pour construire quelque chose...",
        'Ne t’inquiète pas ! Comme disait mon père : "construis pour subsister, ou subsiste pour construire !"',
        true,
        "Je pourrais vendre quelques livres que j’ai apportés avec moi.",
        true,
        "Salut, tonton !",
        ["Mais comment es-tu habillé ?", "Matthew ! Juste à temps..."],
        "Je serai ton manager, alors j’ai mis le meilleur costume de mon armoire !",
        "Pourquoi n’avez-vous pas encore commencé à construire ?",
        "Il nous faut de l’argent...",
        "Ne t’inquiète pas, laisse-moi faire.",
        "Organisons une collecte de fonds, avec le maire comme invité spécial !",
        "Et comment allons-nous convaincre le maire ?",
        "C’est mon ami, et il me doit aussi une faveur.",
        "Je préparerai aussi de délicieuses citronnades. Je connais la technique parfaite !",
        "C’est le maire qui achète les citrons ?",
        true,
        ];

        const lines_es = [
        "¡Hola! Soy Bob, de 'Bob & Company'!",
        "¡Este lugar es realmente enorme!",
        ["Espero que haya valido la pena comprarlo...", "Tuve que dar incluso mi cartera para poder adquirirlo."],
        "¡No te preocupes! Cuando estés con nosotros podrás contar con los mejores brazos de la ciudad.",
        "¡Estamos casi listos, cuando quieras empezar ven a la mesa de construcción!",
        true,
        "Parece que no tengo suficientes materiales para construir algo...",
        '¡No te preocupes! Como decía mi padre: "¡construye para mantenerte, o mantente para construir!"',
        true,
        "Podría vender algunos libros que traje conmigo.",
        true,
        "¡Hola, tío!",
        ["¿Pero cómo te has vestido?", "¡Matthew! Justo a tiempo..."],
        "Seré tu mánager, así que me puse el mejor traje de mi armario.",
        "¿Por qué no habéis empezado a construir todavía?",
        "Necesitamos dinero...",
        "Tranquilo, déjalo en mis manos.",
        "¡Organicemos una recaudación de fondos, con el alcalde como invitado especial!",
        "¿Y cómo convencemos al alcalde?",
        "Es mi amigo, y además me debe un favor.",
        "También prepararé unas exquisitas limonadas. ¡Conozco la técnica perfecta!",
        "¿El alcalde compra los limones?",
        true,
        ];

        const lines_pt = [
        "Oi! Eu sou o Bob, da 'Bob & Companhia'!",
        "Este lugar é realmente enorme!",
        ["Espero que tenha valido a pena comprá-lo...", "Tive até de dar a minha carteira para poder comprá-lo."],
        "Não se preocupe! Quando estiver conosco poderá contar com os melhores braços da cidade!",
        "Estamos quase prontos, quando quiser começar venha para a mesa de construção!",
        true,
        "Parece que não tenho materiais suficientes para construir algo...",
        'Não se preocupe! Como dizia meu pai: "constrói para te sustentares, ou sustenta-te para construíres!"',
        true,
        "Eu poderia vender alguns livros que trouxe comigo.",
        true,
        "Oi, tio!",
        ["Mas como é que te vestiste?", "Matthew! Mesmo a tempo..."],
        "Serei o teu gerente, então vesti o melhor terno do meu guarda-roupa!",
        "Por que ainda não começaram a construir?",
        "Precisamos de dinheiro...",
        "Tranquilo, deixa comigo.",
        "Vamos organizar uma angariação de fundos, com o prefeito como convidado especial!",
        "E como vamos convencer o prefeito?",
        "É meu amigo, e também me deve um favor.",
        "Também vou preparar limonadas deliciosas. Conheço a técnica perfeita!",
        "O prefeito compra os limões?",
        true,
        ];

        const lines_de = [
        "Hallo! Ich bin Bob von 'Bob & Company'!",
        "Dieser Ort ist wirklich riesig!",
        ["Ich hoffe, es hat sich gelohnt, es zu kaufen...", "Ich musste sogar meine Brieftasche hergeben, um es zu erwerben."],
        "Keine Sorge! Wenn du bei uns bist, kannst du auf die besten Arme der Stadt zählen!",
        "Wir sind fast fertig, wenn du anfangen willst, komm zum Bautisch!",
        true,
        "Es scheint, dass ich nicht genug Materialien habe, um etwas zu bauen...",
        'Keine Sorge! Wie mein Vater sagte: "Baue, um dich zu erhalten, oder erhalte dich, um zu bauen!"',
        true,
        "Ich könnte ein paar Bücher verkaufen, die ich mitgebracht habe.",
        true,
        "Hallo Onkel!",
        ["Aber was hast du da an?", "Matthew! Genau rechtzeitig..."],
        "Ich werde dein Manager sein, also habe ich meinen besten Anzug aus dem Schrank geholt!",
        "Warum habt ihr noch nicht angefangen zu bauen?",
        "Wir brauchen Geld...",
        "Keine Sorge, überlass das mir.",
        "Lass uns eine Spendenaktion organisieren, mit dem Bürgermeister als Ehrengast!",
        "Und wie überzeugen wir den Bürgermeister?",
        "Er ist mein Freund, und er schuldet mir auch einen Gefallen.",
        "Ich werde auch köstliche Limonaden zubereiten. Ich kenne die perfekte Technik!",
        "Kauft der Bürgermeister die Zitronen?",
        true,
        ];



    const langCode = state.language[0] + state.language[1];
    switch (langCode){
        case 'en':
            for(i=0;i<lines.length;i++){
                lines[i][0] = lines_en[i];
            }
            break;
        case 'fr':
            for(i=0;i<lines.length;i++){
                lines[i][0] = lines_fr[i];
            }
            break;
        case 'es':
            for(i=0;i<lines.length;i++){
                lines[i][0] = lines_es[i];
            }
            break;
        case 'pt':
            for(i=0;i<lines.length;i++){
                lines[i][0] = lines_pt[i];
            }
            break;
        case 'de':
            for(i=0;i<lines.length;i++){
                lines[i][0] = lines_de[i];
            }
            break;
        default:
            for(i=0;i<lines.length;i++){
                lines[i][0] = lines_en[i];
            }
            break;
    }
    
  }

  function showText(text, velocity = 15) {
    e.text_dialogue.textContent = "";
    let i = 0;
    state.cond_skip = true;
    let write = function () {
      if (!state.cond_text) {
        e.text_dialogue.textContent = text;
        state.cond_text = true;
        state.cond_skip = false;
        return;
      }
      if (i < text.length) {
        e.text_dialogue.textContent += text[i++];
        setTimeout(write, velocity);
      } else {
        state.cond_skip = false;
      }
    };
    write();
  }

  function changeName(name) {
    e.characterName.textContent = name;
  }

  function changeBoxName(pos) {
    const left = pos === 1;
    e.boxname.style.left = left ? "16vw" : "65vw";
    e.imgPreside.style.transform = left ? "scale(0.9)" : "scale(0.8)";
    e.anonymousCharacter.style.transform = left ? "scaleX(-1) scale(0.9)" : "scaleX(-1) scale(1)";
    e.imgPreside.style.opacity = left ? "1" : "0.8";
    e.anonymousCharacter.style.opacity = left ? "0.8" : "1";
  }

  function showNextLine() {
    if(state.index == -1) {
        showText("Prova dialogo animato");
        changeName("name preside");
        changeBoxName(1);
    }
    else{
        deactivateCinematicMode(e);
    if(lines[state.index][0] == true){
        switch (state.index) {
            case 5:
                state.cond_text = false;
                state.cond_skip = false;
                e.container_dialogue.style.opacity = 0;
                state.cond_movement = true;
                state.cond_dialogue = false;
                resetMoveWorld(e, -3, 5);
                setTimeout(() => {
                    data.matTert[5][2] = '';
                    passiveAnimationBob(document.getElementById('character_5'), 5 );
                }, 2000);
                activateHud(e);
                setUpPresideMovement(e, state);
                setUpFreeCamRoam(e, state);
                saveStatesElements(saved_e, state);
                createNewImportantObject(e, state, saved_e, data.importantObjects.length, '-30vw', '10vh', 'camionBob', 6, 'structure_camion', 'camionBOB.png', 'wheel_camion1', 'ruota_camion2.png', 'wheel_camion2', 'ruota_camion2.png')
                createInteractionCircle(e, state);
                moveInteractionCircle(e, state, '164vw', '-10vh');
                animateInteractionCircle(e, state);
                break;
            case 8:
                state.cond_text = false;
                state.cond_skip = false;
                e.container_dialogue.style.opacity = 0;
                state.cond_movement = true;
                state.cond_dialogue = false;
                deactivateHud(e);
                scale('wide', e);
                moveWorld(e, 40, -120, -60, 0, 3.9);
                activateCinematicMode(e);
                animationCamionCutscene(e, state);
                setTimeout(() => {
                    createNewImportantObject(e, state, saved_e, data.importantObjects.length, '70vw', '208vh', 'stacks_of_books', 1, 'cataste_di_libri.png');
                }, 7000);
                setTimeout(() => {
                    state.index++;
                    state.cond_text = true;
                    state.cond_skip = true;
                    e.container_dialogue.style.opacity = 1;
                    state.cond_dialogue = true;
                    state.cond_other_character = false;
                    deactivateCinematicMode(e);
                    showNextLine();
                }, 9000);
                break;
            case 10:
                state.cond_text = false;
                state.cond_skip = false;
                e.container_dialogue.style.opacity = 0;
                state.cond_movement = true;
                state.cond_dialogue = false;
                createNewCharacter('30vw', '68vh', "no_animation", -2, false, "Matthew", data.matTert.length, e, state, saved_e);
                activateHud(e);
                resetMoveWorld(e, -3, 5);
                scale('standard', e);
                saveStatesElements(saved_e, state);
                saveMats_ImportantStates(e, state);
                const jumps = [
                    ["topJump", "topJump", "topJump", "rightJump", "rightJump"],
                    [300, 400, 300, 300, 300],
                    [[false], [false], [false], [false], [true]],
                ];
                moveCharacter(document.getElementById('character_'+(data.matTert.length -1)), 5, jumps);
                setTimeout(() => {
                    state.index++;
                    state.cond_text = true;
                    state.cond_skip = true;
                    e.container_dialogue.style.opacity = 1;
                    state.cond_dialogue = true;
                    state.cond_other_character = true;
                    showNextLine();
                }, 3000);
                break;
            case 22:
                state.cond_text = false;
                state.cond_skip = false;
                e.container_dialogue.style.opacity = 0;
                state.cond_movement = true;
                state.cond_deactivate_movement = true;
                state.cond_dialogue = false;
                choose_in_display(e, state, saved_e);
                moveWorld(e, 23, -86);
                
                break;
        }
        
        return;
    }
    if (state.index < lines.length) {
        if(lines[state.index][3] == true){
        state.cond_dialogue = false;
        moveWorld(e, lines[state.index][5], lines[state.index][6]);
        setTimeout(() => {
            state.cond_dialogue = true;
        }, 2000);
      } 
      if(!state.cond_other_character){
        e.anonymousCharacter.style.display = 'none';
        e.boxname.style.display = 'none';
      } 
      else { 
        e.boxname.style.display = 'block';
        e.anonymousCharacter.style.display = 'block';
    }
      if(lines[state.index][4] == true) deactivateCinematicMode(e);
      if(lines[state.index][0].length == 2) activateChoice();
      else showText(lines[state.index][0]);
      changeName(lines[state.index][1]);
      changeCharacters(lines[state.index][1]);
      changeBoxName(lines[state.index][2]);
    }
    
    }
    state.index++;
  }

  function activateChoice(){
    state.cond_dialogue = false;
    e.text_dialogue.textContent = "";
    e.choices.style.display = 'block';
    const alternatives = lines[state.index][0];
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');
    const arrow_choice1 = document.getElementById('arrow_choice1');
    const arrow_choice2 = document.getElementById('arrow_choice2');
    let choice_for_key = 1;
    let answerLines;
        let answerLines_it = [
        "Facciamo valere ogni soldo che hai speso allora!",
        "Pensavo di essere in ritardo.."
        ];

        let answerLines_en = [
        "Let's make every penny you spent worth it then!",
        "I thought I was late.."
        ];

        let answerLines_fr = [
        "Faisons en sorte que chaque euro dépensé en vaille la peine !",
        "Je pensais être en retard.."
        ];

        let answerLines_es = [
        "¡Hagamos que valga cada centavo que gastaste entonces!",
        "Pensé que llegaba tarde.."
        ];

        let answerLines_pt = [
        "Vamos fazer cada centavo que você gastou valer a pena então!",
        "Achei que estava atrasado.."
        ];

        let answerLines_de = [
        "Lass uns dafür sorgen, dass sich jeder ausgegebene Cent lohnt!",
        "Ich dachte, ich wäre zu spät.."
        ];



    const langCode = state.language[0] + state.language[1];

    switch (langCode){
        case 'it':
            answerLines = answerLines_it;
            break;
        case 'en':
            answerLines = answerLines_en;
            break;
        case 'fr':
            answerLines = answerLines_fr;
            break;
        case 'es':
            answerLines = answerLines_es;
            break;
        case 'pt':
            answerLines = answerLines_pt;
            break;
        case 'de':
            answerLines = answerLines_de;
            break;
        default:
            answerLines = answerLines_en;
            break;
    }
    choice1.innerHTML = alternatives[0];
    choice2.innerHTML = alternatives[1];
    choice1.style.color = 'yellow';
    choice2.style.color = 'black';
    arrow_choice1.style.opacity = '1';
    arrow_choice1.style.pointerEvents = 'all';
    arrow_choice2.style.opacity = '0';
    arrow_choice2.style.pointerEvents = 'none';

    choice1.onmouseover = function(){
        changeToChoice1();
    }

    choice2.onmouseover = function(){
        changeToChoice2();
    }

    function changeToChoice1(){
        choice_for_key = 1;
        arrow_choice1.style.opacity = '1';
        arrow_choice1.style.pointerEvents = 'all';
        arrow_choice2.style.opacity = '0';
        arrow_choice2.style.pointerEvents = 'none';
        choice1.style.color = 'yellow';
        choice2.style.color = 'black';
    }

    function changeToChoice2(){
        choice_for_key = 2;
        arrow_choice1.style.opacity = '0';
        arrow_choice1.style.pointerEvents = 'none';
        arrow_choice2.style.opacity = '1';
        arrow_choice2.style.pointerEvents = 'all';
        choice2.style.color = 'yellow';
        choice1.style.color = 'black';
    }

    document.addEventListener("keydown", changeChoice);

    document.addEventListener("keydown", chosedWithKey);

    function changeChoice(event) {
        if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") {
            changeToChoice1();
        }
        if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") {
            changeToChoice2();
        }
    }

    choice1.addEventListener("mousedown", () => chosed(1));
    choice1.addEventListener("touchstart", () => chosed(1));

    choice2.addEventListener("mousedown", () => chosed(2));
    choice2.addEventListener("touchstart", () => chosed(2));

    function chosedWithKey(event) {
        if(event.key === "Enter") chosed(choice_for_key);
    }


    function chosed(num) {
        switch (state.index) {
            case 3:
                if(num == 2) lines[state.index][0] = answerLines[0];
                break;
            case 13:
                if(num == 2) lines[state.index][0] = answerLines[1];
                break;
            default:
                return;
        }
        
        e.choices.style.display = 'none';
        setTimeout(() => {
            state.cond_dialogue = true;
            state.cond_skip = true;
        }, 2);
        document.removeEventListener("keydown", changeChoice);
        document.removeEventListener("keydown", chosedWithKey);
        choice1.removeEventListener("mousedown", chosed);
        choice1.removeEventListener("touchstart", chosed);
        choice2.removeEventListener("mousedown", chosed);
        choice2.removeEventListener("touchstart", chosed);
        window.showNextLine();
    }

  }



  window.showNextLine = showNextLine;

  showNextLine()

  function changeCharacters(name){
        if(name != 'preside'){
            e.anonymousCharacter.src = name + ".png"; 
            e.anonymousCharacter.style.transition = '';
            e.anonymousCharacter.style.transform = 'scaleX(-1)';
        }
    }
}

function controlSkip(elements, state) {

  window.addEventListener('mousedown', e => {
    if (e.button === 0) {
        if (state.cond_skip && state.cond_dialogue) state.cond_text = false;
      else if (state.cond_dialogue) window.showNextLine();
    }
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        if (state.cond_skip && state.cond_dialogue) state.cond_text = false;
        else if (state.cond_dialogue) window.showNextLine();
    }
  });
  
}

function activateHud(e){
    e.hud.style.display = '';
}

function deactivateHud(e){
    e.hud.style.display = 'none';
}

function moveWorld(e, distanceX, distanceY, arriveDistanceX = null, arriveDistanceY = null, time = null){
    e.world.style.marginLeft = '-3vw';
    e.world.style.marginTop = '5vh';
    e.world.style.marginLeft = parseFloat(e.world.style.marginLeft) + distanceX + "vw";
    e.world.style.marginTop = parseFloat(e.world.style.marginTop) + distanceY + "vh";
    setTimeout(() => {
        if(arriveDistanceX != null) followObject(e, arriveDistanceX, arriveDistanceY, time);
    }, 1600);
    
}

function resetMoveWorld(e, distanceX, distanceY){
    e.world.style.transition = '';
    e.world.style.marginLeft = distanceX + "vw";
    e.world.style.marginTop = distanceY + "vh";

setTimeout(() => {
    e.world.style.transition = "transform 0.25s linear, margin-top 1.5s ease-out, margin-left 1.5s ease-out, left 0.25s linear, top 0.25s linear";
}, 1600);
}

function followObject(e, x, y, time){
    e.world.style.transition = `transform 0.25s linear, margin-top ${time}s linear, margin-left ${time}s linear, left 0.25s linear, top 0.25s linear`;
    e.world.style.marginLeft = parseFloat(e.world.style.marginLeft) + x + "vw";
    e.world.style.marginTop = parseFloat(e.world.style.marginTop) + y + "vh";
}

function saveStatesElements(e, state){
    if(localStorage.getItem("saved") == null) {
        localStorage.setItem("saved", true);
    }
    localStorage.setItem("state", JSON.stringify(state));
    localStorage.setItem("elements", JSON.stringify(e));
}

let intervalMovement;


function setUpPresideMovement(e, state) {
  const p = e.preside;
  assignZIndexP();
  p.style.top = '0vh';
  p.style.left = '0vw';
    let isCharging = false;
    let jumpStartTime = 0;
    let currentDir = { x: 0, y: 0 };
    let keys = {};

    if(state.cond_movement){
        window.addEventListener('keydown', handleKeydown);
        window.addEventListener('keyup', handleKeyup);
    } else {
        window.removeEventListener('keyup', handleKeyup);
        window.removeEventListener('keydown', handleKeydown);
        clearInterval(intervalMovement);
    }

function pointClickMovement(){
    e.click_circle.style.transform = 'translate(-50%, -50%) scale(0)';
    e.click_circle.style.opacity = '0';

    let clickTimer, clickTimer2;
    document.addEventListener('mousedown', (event) => {
        ClickMovement(event);
    });

    document.addEventListener('mouseup', () => {
        clearTimeout(clickTimer); 
        clearTimeout(clickTimer2);
        e.click_circle.style.opacity = '0';
        e.click_circle.style.transform = 'translate(-50%, -50%) scale(0)';
    });
    
    function ClickMovement(event){
        let rect = e.world.getBoundingClientRect();
        let xInWorld = (event.clientX - rect.left) / zoom;
        let yInWorld = (event.clientY - rect.top) / zoom;

        let xInVW = (xInWorld / window.innerWidth) * 100;
        let yInVH = (yInWorld / window.innerHeight) * 100;
        xInVW += state.posX;
        yInVH += state.posY;

        xInVW = xInVW.toFixed(2);
        yInVH = yInVH.toFixed(2);
        xInVW -= 50;
        yInVH -= 50;



        if(zoom == 0.8){
            clickTimer2 = setTimeout(() => {
                moveBar(e, state, xInVW, yInVH);
            }, 500);
        }
        
        clickTimer = setTimeout(() => {
            returnToObjectPreside(xInVW, yInVH);
            e.click_circle.style.opacity = '0';
            e.click_circle.style.transform = 'translate(-50%, -50%) scale(0)';
        }, 2000); 
        function controlClick(){
        let i;
        x = xInVW + 40;
        y = yInVH + 40;
        x -= state.posX;
        y -= state.posY;
            for(i=0;i<data.matTert.length;i++){
                if(Math.abs(parseFloat(data.matTert[i][0]) - x) < 4 && Math.abs(parseFloat(data.matTert[i][1]) - y) < 4){
                    console.log("Hai cliccato il personaggio e in futuro succederà qls");
            }
            }   
        }
        controlClick();
    }
}

pointClickMovement();




function moveBar(e, state, x, y){
    x += 45;
    y += 55;
    x -= state.posX;
    y -= state.posY;
    e.click_circle.style.left = `${x}vw`;
    e.click_circle.style.top = `${y}vh`;
    e.click_circle.style.opacity = '1';
    e.click_circle.style.transform = 'translate(-50%, -50%) scale(4)';
}

function returnToObjectPreside(xInVW, yInVH){
    let maxTime = 270;
    let maxDistance = 9;
    let msForVw = maxTime / maxDistance;
    xInVW -= state.posX;
    yInVH -= state.posY;
    let stepX = xInVW / maxDistance;
    stepX = Math.trunc(stepX);
    let differenceX = xInVW - (stepX * maxDistance);
    
    let stepY = yInVH / maxDistance;
    stepY = Math.trunc(stepY);
    let differenceY = yInVH - (stepY * maxDistance);

    let time = 0;
    selectKeysX(stepX, time, maxTime);
    selectKeysY(stepY, time, maxTime);
    setTimeout(() => {
        time = 0;
    maxTime2 = Math.abs(differenceX) * msForVw;
    maxTime3 = Math.abs(differenceY) * msForVw;
    if(differenceX > 0) selectKeysX(1, time, maxTime2);
    else if(differenceX < 0) selectKeysX(-1, time, maxTime2)
    time = 0;
    if(differenceY > 0) selectKeysY(1, time, maxTime3);
    else if(differenceY) selectKeysY(-1, time, maxTime3);
    }, (Math.abs(stepX) * (maxTime + 50))+(Math.abs(stepY) * (maxTime + 50)));
    
}

function selectKeysX(stepX, time, maxTime){
    time = 0;
    if(stepX > 0){
        for(i=0;i<stepX;i++){
                setTimeout(() => {
                    simulateKey('KeyD', maxTime);
                }, time);
                time += maxTime + 300;
        }
    } else if(stepX < 0){
        for(i=0;i>stepX;i--){
                setTimeout(() => {
                    simulateKey('KeyA', maxTime);
                }, time);
                time += maxTime + 300;
        }
    }
}

function selectKeysY(stepY, time, maxTime){
    time = 0;
    if(stepY > 0){
        for(i=0;i<stepY;i++){
                setTimeout(() => {
                    simulateKey('KeyS', maxTime);
                }, time);
                time += maxTime + 300;
        }
    } else if(stepY < 0){
        for(i=0;i>stepY;i--){
                setTimeout(() => {
                    simulateKey('KeyW', maxTime);
                }, time);
                time += maxTime + 300;
        }
    }
}

function simulateKey(code, duration){
    keys[code] = true;
    handleKeydown({ code }); 

    setTimeout(() => {
        keys[code] = false;
        handleKeyup({ code }); 
    }, duration);
}

function handleKeydown(event) {
if(!state.cond_deactivate_movement){
    e.imgsArray = Array.from(document.querySelectorAll('.school_imgs'));
    keys[event.code] = true;
    if (["KeyW", "KeyA", "KeyS", "KeyD"].includes(event.code)) {
        setTimeout(() => {
        if(jumpStartTime == 0) {
                currentDir = getDirection();
                if (currentDir.x === 0 && currentDir.y === 0) return;
                if(!isCharging){
                    jumpStartTime = performance.now();
                    isCharging = true;
                }
        }
        if(isCharging) {
            if(performance.now() - jumpStartTime > 350 && !state.cond_run_preside){
                state.cond_run_preside = true;
                runPreside(event, currentDir);
            } 
        }
        else {
            keys = {};
        }
        }, 50);
        }
    }
}

async function runPreside(event, currentDir, distance = 9) {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    
    if(isCharging){
        
        currentDir = getDirection();
        jumpDirection(distance, currentDir);
        await sleep(380);
        await runPreside(event);
    }
    else {
        state.cond_run_preside = false;
        keys = {};
        jumpStartTime = 0;
        return;
    } 
    
}

function handleKeyup(event){
    if(!state.cond_deactivate_movement){
        if(["KeyW", "KeyA", "KeyS", "KeyD"].includes(event.code)){
            if(state.cond_run_preside == false){
                    let heldFor = performance.now() - jumpStartTime;
                    setTimeout(() => {
                        jumpStartTime = 0;
                    }, 200);
                    if(heldFor > 270){
                        heldFor = 270;
                    } 
                    let distance = heldFor / 30;
                    keys = {};
                    jumpDirection(distance, currentDir);
            }
            isCharging = false;
        }
    }
}
function getDirection(){
    let dir = { x: 0, y: 0 };
    if (keys["KeyW"]) dir.y -= 1;
    if (keys["KeyS"]) dir.y += 1;
    if (keys["KeyA"]) dir.x -= 1;
    if (keys["KeyD"]) dir.x += 1;
    const magnitude = Math.hypot(dir.x, dir.y);
    if (magnitude > 0) {
        dir.x /= magnitude;
        dir.y /= magnitude;
    } else {
        dir.x = 0;
        dir.y = 0;
    }
    if(state.cond_run_preside == false){
        keys["KeyW"] = false;
        keys["KeyS"] = false;
        keys["KeyA"] = false;
        keys["KeyD"] = false;
    }
    return dir;
}

function jumpDirection(distance, dir){
    dir.x = parseFloat((dir.x).toFixed(1));
    dir.y = parseFloat((dir.y).toFixed(1));
    if(dir.x == -1 && dir.y == 0) left(distance);
    else if(dir.x == 1 && dir.y == 0) right(distance);
    if(dir.y == 1 && dir.x == 0) down(distance);
    else if(dir.y == -1 && dir.x == 0) top(distance);
    else if (dir.x == 0.7 && dir.y == -0.7) diagonalTopRight(distance/2);
    else if (dir.x == -0.7 && dir.y == -0.7) diagonalTopLeft(distance/2);
    else if (dir.x == 0.7 && dir.y == 0.7) diagonalLowRight(distance/2);
    else if (dir.x == -0.7 && dir.y == 0.7) diagonalBottomLeft(distance/2);
    control_position(state, e);
    assignZIndexP();
    changeZIndexElements();
    
}

function assignZIndexP(){
    e.preside.style.zIndex = `${Math.trunc(state.posY/5) + 10}`;
}

function changeZIndexElements(){
    for(let i=0;i<data.matTert.length;i++) {
        let Y = data.matTert[i][1];
        document.getElementById('character_'+ i).style.zIndex = `${Math.trunc(Y/5)}`;
    }
}

function left(distance){
    if(addParameters(distance, 0, "add") == true) {
        state.posX -= distance;
        e.imgsArray.forEach(img => {
            img.style.transition = 'left 0.25s linear, top 0.25s linear';
            img.style.left = (parseFloat(img.style.left) + distance) + 'vw';
        });
        for(let i=0;i<data.seatForObjects.length;i++){
            for(let j=0;j<data.seatForObjects[i].length-1;j+=2){
                data.seatForObjects[i][j] = (parseFloat(data.seatForObjects[i][j]) + distance) + 'vw';
            }   
        }
        data.importantStates.posCanvasX += distance;
        animationJumpLeft(distance);
    }
    else addParameters(distance, 0, "subtract")
}

async function animationJumpLeft(distance){
    
    p.style.transform = "scaleX(-1)";
    p.src = "Preside.png";
    const step = [0, 60, 120, 180, 240];
    const delta = [distance/2*-1, distance/2*-1, 0, distance/2, distance/2];
        step.forEach((ms, i) => {
            setTimeout(() => {
                p.style.top = (parseFloat(p.style.top) + delta[i]) + 'vh';
            }, ms);
        });
}

function right(distance){
    if(addParameters(distance, 0, "subtract") == true) {
    state.posX += distance;
    e.imgsArray.forEach(img => {
        img.style.transition = 'left 0.25s linear, top 0.25s linear';
        img.style.left = (parseFloat(img.style.left) - distance) + 'vw';
    });
    for(let i=0;i<data.seatForObjects.length;i++){
        for(let j=0;j<data.seatForObjects[i].length-1;j+=2){
            data.seatForObjects[i][j] = (parseFloat(data.seatForObjects[i][j]) - distance) + 'vw';
        }
    }

    data.importantStates.posCanvasX -= distance;
    animationJumpRight(distance);
} else addParameters(distance, 0, "add");
}

async function animationJumpRight(distance){
    p.style.transform = "scaleX(1)";
    p.src = "Preside.png";
    const step = [0, 60, 120, 180, 240];
    const delta = [distance/2*-1, distance/2*-1, 0, distance/2, distance/2];
        step.forEach((ms, i) => {
            setTimeout(() => {
                p.style.top = (parseFloat(p.style.top) + delta[i]) + 'vh';
            }, ms);
        });
}

function down(distance){
    if(addParameters(distance, 1, "subtract") == true) {
        state.posY += distance;
        e.imgsArray.forEach(img => {
            img.style.transition = 'left 0.25s linear, top 0.25s linear';
            img.style.top = (parseFloat(img.style.top) - distance) + 'vh';
        });
        for(let i=0;i<data.seatForObjects.length;i++){
            for(let j=0;j<data.seatForObjects[i].length-1;j+=2){
                data.seatForObjects[i][j+1] = (parseFloat(data.seatForObjects[i][j+1]) - distance) + 'vh';
            }
        }
        for(let i=0;i<data.posWildNature.length;i++){
            data.posWildNature[i][1] = (parseFloat(data.posWildNature[i][1])  - distance) + 'vh';
        }
        
        data.importantStates.posCanvasY -= distance;
        animationJumpDown(distance);
    } else addParameters(distance, 1, "add");
}

async function animationJumpDown(distance){
    p.src = "Preside_davanti.png";
    const step = [0, 60, 120, 180, 240];
    const delta = [distance/2, distance/2, 0, distance/2*-1, distance/2*-1];
        step.forEach((ms, i) => {
            setTimeout(() => {
                p.style.top = (parseFloat(p.style.top) + delta[i]) + 'vh';
            }, ms);
        });
}

function top(distance){
    if(addParameters(distance, 1, "add") == true) {
        state.posY -= distance;
        e.imgsArray.forEach(img => {
            img.style.transition = 'left 0.25s linear, top 0.25s linear';
            img.style.top = (parseFloat(img.style.top) + distance) + 'vh';
        });
        for(let i=0;i<data.seatForObjects.length;i++){
            for(let j=0;j<data.seatForObjects[i].length-1;j+=2){
                data.seatForObjects[i][j+1] = (parseFloat(data.seatForObjects[i][j+1]) + distance) + 'vh';
            }
        }
        for(let i=0;i<data.posWildNature.length;i++){
            data.posWildNature[i][1] = (parseFloat(data.posWildNature[i][1]) + distance) + 'vh';
        }
        
        data.importantStates.posCanvasY += distance;
        animationJumpTop(distance);
} else addParameters(distance, 1, "subtract");
}

async function animationJumpTop(distance){
    p.src = "Preside_dietro.png";
    const step = [0, 60, 120, 180, 240];
    const delta = [distance/2*-1, distance/2*-1, 0, distance/2, distance/2];
        step.forEach((ms, i) => {
            setTimeout(() => {
                p.style.top = (parseFloat(p.style.top) + delta[i]) + 'vh';
            }, ms);
        });
}

function addParameters(distance, j, operation, cond_check = true){
    if(j==0) unit = 'vw';
    else unit = 'vh';
    switch(operation) {
        case "add":
            for(i=0;i<data.matTert.length;i++){
            data.matTert[i][j] = (parseFloat(data.matTert[i][j]) + distance) + unit;
            }
            for(i=0;i<data.importantObjects.length;i++){
                data.importantObjects[i][j] = (parseFloat(data.importantObjects[i][j]) + distance) + unit;
            }
            for(i=0;i<data.posIdleCycle.length;i++){
                data.posIdleCycle[i][j] = (parseFloat(data.posIdleCycle[i][j]) + distance);
            }
            break;
        case "subtract": 
            for(i=0;i<data.matTert.length;i++){
            data.matTert[i][j] = (parseFloat(data.matTert[i][j]) - distance) + unit;
            }
            for(i=0;i<data.importantObjects.length;i++){
                data.importantObjects[i][j] = (parseFloat(data.importantObjects[i][j]) - distance) + unit;
            }
            for(i=0;i<data.posIdleCycle.length;i++){
                data.posIdleCycle[i][j] = (parseFloat(data.posIdleCycle[i][j]) - distance);
            }
            break;
    }
    if(cond_check) {
        for(let i=0;i<data.importantObjects.length;i++) {
            if(conditionCheck(i)) {
                return false;
            }
        }
    }
      
    return true;

}

function conditionCheck(i) {
    let width_px = document.getElementById(data.importantObjects[i][2]).offsetWidth;
    let height_px = document.getElementById(data.importantObjects[i][2]).offsetHeight;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;


    let width_vw = (width_px / viewportWidth) * 100;
    let height_vh = (height_px / viewportHeight) * 100;

    if(Math.abs(parseFloat(data.importantObjects[i][0]) - 48) < (width_vw/2) && Math.abs(parseFloat(data.importantObjects[i][1]) - 48) < (height_vh/2)) return true;
    else return false;
}

function diagonalTopRight(distance) {
    if(addParameters(distance, 0, "subtract") &&  addParameters(distance, 1, "add")) {
        state.posX += distance;
        state.posY -= distance;
        p.style.transform = 'scaleX(1)';
        e.imgsArray.forEach(img => {
            img.style.transition = 'left 0.25s linear, top 0.25s linear';
            img.style.left = (parseFloat(img.style.left) - distance) + 'vw';
            img.style.top = (parseFloat(img.style.top) + distance) + 'vh';
        });
        for (let i = 0; i < data.seatForObjects.length; i++) {
            for (let j = 0; j < data.seatForObjects[i].length - 1; j += 2) {
                data.seatForObjects[i][j] = (parseFloat(data.seatForObjects[i][j]) - distance) + 'vw';
                data.seatForObjects[i][j + 1] = (parseFloat(data.seatForObjects[i][j + 1]) + distance) + 'vh';
            }
        }
        for(let i=0;i<data.posWildNature.length;i++){
            data.posWildNature[i][1] = (parseFloat(data.posWildNature[i][1] + distance)) + 'vh';
        }
        
    
        data.importantStates.posCanvasX -= distance;
        data.importantStates.posCanvasY += distance;
        animationJumpDiagonal(distance);
    } else {
        addParameters(distance, 0, "add");
        addParameters(distance, 1, "subtract");
    }
}

function diagonalTopLeft(distance) {
    if(addParameters(distance, 0, "add") && addParameters(distance, 1, "add")) {
        state.posX -= distance;
        state.posY -= distance;
        p.style.transform = 'scaleX(-1)';
        e.imgsArray.forEach(img => {
            img.style.transition = 'left 0.25s linear, top 0.25s linear';
            img.style.left = (parseFloat(img.style.left) + distance) + 'vw';
            img.style.top = (parseFloat(img.style.top) + distance) + 'vh';
        });
        for (let i = 0; i < data.seatForObjects.length; i++) {
            for (let j = 0; j < data.seatForObjects[i].length - 1; j += 2) {
                data.seatForObjects[i][j] = (parseFloat(data.seatForObjects[i][j]) + distance) + 'vw';
                data.seatForObjects[i][j + 1] = (parseFloat(data.seatForObjects[i][j + 1]) + distance) + 'vh';
            }
        }
        for(let i=0;i<data.posWildNature.length;i++){
            data.posWildNature[i][1] = (parseFloat(data.posWildNature[i][1] + distance)) + 'vh';
        }
        
        
        data.importantStates.posCanvasX += distance;
        data.importantStates.posCanvasY += distance;
        animationJumpDiagonal(distance);
    } else {
        addParameters(distance, 0, "subtract");
        addParameters(distance, 1, "subtract");
    }
}

function diagonalLowRight(distance) {
    if(addParameters(distance, 0, "subtract") && addParameters(distance, 1, "subtract")) {
        state.posX += distance;
        state.posY += distance;
        p.style.transform = 'scaleX(1)';
        e.imgsArray.forEach(img => {
            img.style.transition = 'left 0.25s linear, top 0.25s linear';
            img.style.left = (parseFloat(img.style.left) - distance) + 'vw';
            img.style.top = (parseFloat(img.style.top) - distance) + 'vh';
        });
        for (let i = 0; i < data.seatForObjects.length; i++) {
            for (let j = 0; j < data.seatForObjects[i].length - 1; j += 2) {
                data.seatForObjects[i][j] = (parseFloat(data.seatForObjects[i][j]) - distance) + 'vw';
                data.seatForObjects[i][j + 1] = (parseFloat(data.seatForObjects[i][j + 1]) - distance) + 'vh';
            }
        }
        for(let i=0;i<data.posWildNature.length;i++){
            data.posWildNature[i][1] = (parseFloat(data.posWildNature[i][1]) - distance) + 'vh';
        }
        
        data.importantStates.posCanvasX -= distance;
        data.importantStates.posCanvasY -= distance;
        animationJumpDiagonal(distance);
    } else{
        addParameters(distance, 0, "add");
         addParameters(distance, 1, "add");
    }
}

function diagonalBottomLeft(distance) {
    if(addParameters(distance, 0, "add") && addParameters(distance, 1, "subtract")) {  
        state.posX -= distance;
        state.posY += distance;
        p.style.transform = 'scaleX(-1)';
        e.imgsArray.forEach(img => {
            img.style.transition = 'left 0.25s linear, top 0.25s linear';
            img.style.left = (parseFloat(img.style.left) + distance) + 'vw';
            img.style.top = (parseFloat(img.style.top) - distance) + 'vh';
        });
        for (let i = 0; i < data.seatForObjects.length; i++) {
            for (let j = 0; j < data.seatForObjects[i].length - 1; j += 2) {
                data.seatForObjects[i][j] = (parseFloat(data.seatForObjects[i][j]) + distance) + 'vw';
                data.seatForObjects[i][j + 1] = (parseFloat(data.seatForObjects[i][j + 1]) - distance) + 'vh';
            }
        }
        for(let i=0;i<data.posWildNature.length;i++){
            data.posWildNature[i][1] = (parseFloat(data.posWildNature[i][1]) - distance) + 'vh';
        }

        data.importantStates.posCanvasX += distance;
        data.importantStates.posCanvasY -= distance;
        animationJumpDiagonal(distance);
    } else {
        addParameters(distance, 0, "subtract");
         addParameters(distance, 1, "add");
    }
}

async function animationJumpDiagonal(distance) {
    p.src = "Preside_obliquo.png"; 
    const step = [0, 60, 120, 180, 240];
    const delta = [distance/2*-1, distance/2*-1, 0, distance/2, distance/2];
    step.forEach((ms, i) => {
        setTimeout(() => {
            p.style.top = (parseFloat(p.style.top) + delta[i]) + 'vh';
        }, ms);
    });
}

async function mobileMove(direction, e, state, direction2 = null) {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const step = async (action, delay, direction, direction2 = null) => {
        if(direction2 == null) {
            if(action == "simulate") simulateKey(direction, 270);
            else {
                await sleep(delay);
            }
        }
        else {
            if(action == "simulate") {
                simulateKey(direction, 270);
                simulateKey(direction2, 270);
            }
            else {
                await sleep(delay);
            }
        }
        
    }
    if(state.condMobileMovement){
        await step("simulate", 0, direction, direction2);
        await step("wait", 350, direction, direction2);
        await mobileMove(direction, e, state, direction2);
    } else return;
}

function start(dir, dir2 = null) {
    state.condMobileMovement = true;
    if(dir2 == null) mobileMove(dir, e, state, dir2); 
    else mobileMove(dir, e, state, dir2); 
}

function stop() {
  state.condMobileMovement = false;
}

e.right_arrow.addEventListener("mousedown", () => start("KeyD"));
e.right_arrow.addEventListener("mouseup", stop);
e.right_arrow.addEventListener("touchstart", () => start("KeyD"));
e.right_arrow.addEventListener("touchend", stop);

e.left_arrow.addEventListener("mousedown", () => start("KeyA"));
e.left_arrow.addEventListener("mouseup", stop);
e.left_arrow.addEventListener("touchstart", () => start("KeyA"));
e.left_arrow.addEventListener("touchend", stop);

e.top_arrow.addEventListener("mousedown", () => start("KeyW"));
e.top_arrow.addEventListener("mouseup", stop);
e.top_arrow.addEventListener("touchstart", () => start("KeyW"));
e.top_arrow.addEventListener("touchend", stop);

e.bottom_arrow.addEventListener("mousedown", () => start("KeyS"));
e.bottom_arrow.addEventListener("mouseup", stop);
e.bottom_arrow.addEventListener("touchstart", () => start("KeyS"));
e.bottom_arrow.addEventListener("touchend", stop);

e.rightTop_arrow.addEventListener("mousedown", () => start("KeyD", "KeyW"));
e.rightTop_arrow.addEventListener("mouseup", stop);
e.rightTop_arrow.addEventListener("touchstart", () => start("KeyD", "KeyW"));
e.rightTop_arrow.addEventListener("touchend", stop);

e.rightBottom_arrow.addEventListener("mousedown", () => start("KeyD", "KeyS"));
e.rightBottom_arrow.addEventListener("mouseup", stop);
e.rightBottom_arrow.addEventListener("touchstart", () => start("KeyD", "KeyS"));
e.rightBottom_arrow.addEventListener("touchend", stop);

e.leftTop_arrow.addEventListener("mousedown", () => start("KeyA", "KeyW"));
e.leftTop_arrow.addEventListener("mouseup", stop);
e.leftTop_arrow.addEventListener("touchstart", () => start("KeyA", "KeyW"));
e.leftTop_arrow.addEventListener("touchend", stop);

e.leftBottom_arrow.addEventListener("mousedown", () => start("KeyA", "KeyS"));
e.leftBottom_arrow.addEventListener("mouseup", stop);
e.leftBottom_arrow.addEventListener("touchstart", () => start("KeyA", "KeyS"));
e.leftBottom_arrow.addEventListener("touchend", stop);

window.addEventListener('keydown', handleKeydown);
window.addEventListener('keyup', handleKeyup);

    
    
  }
  
  function control_position(state, e) {
    state.posX = Math.round(state.posX);
    state.posY = Math.round(state.posY);
    if((state.posX >= 40 && state.posX <= 50) && (state.posY >= 66 && state.posY <= 79)){
        document.getElementById('key_e'+0).style.opacity = '1';
        window.addEventListener('keydown', function(event) {
            if (event.key === 'e' || event.key === 'E') {
               if((state.posX >= 40 && state.posX <= 50) && (state.posY >= 66 && state.posY <= 79)) if(data.matTert[4][4] == false) interaction(0, e, state);
            }
        });
    }
    else{
        document.getElementById('key_e'+0).style.opacity = '0';
        if((state.posX >= 103 && state.posX <= 110) && (state.posY >=-60 && state.posY <= -48)){
            if(!state.menu_opened) showInteractionCircle(e, state);
            document.getElementById('key_e'+1).style.opacity = '1';
            window.addEventListener('keydown', function(event) {
                if (event.key === 'e' || event.key === 'E') {
                    if((state.posX >= 103 && state.posX <= 110) && (state.posY >=-60 && state.posY <= -48)){
                        interaction(1, e, state);
                    } 
                }
            });
        } else{
            if(!state.cond_interactionCircle && !state.menu_opened) {
                state.cond_interactionCircle = true;
                animateInteractionCircle(e, state);
            }
            document.getElementById('key_e'+1).style.opacity = '0';
        }
    }
}

function setUpFreeCamRoam(e, state){
    state.condFreeRoam = true;
    let keys = {}
    document.addEventListener('keydown', function(event){
        if(event.key === 'f'){
            if(state.condFreeRoam){
                freeRoam(e, state, true);
                state.condFreeRoam = false;
            } 
        }
        if(event.key === 'Escape'){
            if(!state.condFreeRoam){
                freeRoam(e, state, false);
                state.condFreeRoam = true;
            }
        }
    })
    function freeRoam(e, state, cond){
        if(cond){
            state.cond_deactivate_movement = true;
            e.hud.style.display = 'none';
            e.world.style.transition = 'transform 0.25s linear';
            e.world.style.transform = 'scale(0.5)';
            setCamMovement(e, state);
        }
        else {
            state.cond_deactivate_movement = false;
            e.hud.style.display = '';
            removeCamMovement(e, state);
        }
    }
    function setCamMovement(e, state){
        window.addEventListener('keydown', movement);
        window.addEventListener('keyup', movementUp);
    }
    function removeCamMovement(e, state){
        e.world.style.marginLeft = '-3vw';
        e.world.style.marginTop = '5vh';
        e.world.style.transition = "transform 0.25s linear, margin-top 1.5s ease-out, margin-left 1.5s ease-out, left 0.25s linear, top 0.25s linear";
        e.world.style.transform = 'scale(0.8)';
        zoom = 0.8;
        window.removeEventListener('keydown', movement);
    }

    function movement(event){
        e.world.style.transition = 'margin-left 0.25s linear, margin-top 0.25s linear';
        keys[event.code] = true;
        if (["KeyW", "KeyA", "KeyS", "KeyD"].includes(event.code)) {
            dir = direction();
            if(dir == false) return;
            if(dir.x == -1 && dir.y == 0) l(e);
            else if(dir.x == 1 && dir.y == 0) r();
            else if(dir.y == 1 && dir.x == 0) d();
            else if(dir.y == -1 && dir.x == 0) t();
            else if (dir.x == 1 && dir.y == -1) dTR();
            else if (dir.x == -1 && dir.y == -1) dTL();
            else if (dir.x == 1 && dir.y == 1) dBR();
            else if (dir.x == -1 && dir.y == 1) dBL();
        }
        function l(e){
            e.world.style.marginLeft = (parseFloat(e.world.style.marginLeft) + 3) + 'vw';
        }
        function r(){
            e.world.style.marginLeft = (parseFloat(e.world.style.marginLeft) - 3) + 'vw';
        }
        function d(){
            e.world.style.marginTop = (parseFloat(e.world.style.marginTop) - 3) + 'vh';
        }
        function t(){
            e.world.style.marginTop = (parseFloat(e.world.style.marginTop) + 3) + 'vh';
        }
        function dTR(){
            e.world.style.marginTop = (parseFloat(e.world.style.marginTop) + 3) + 'vh';
            e.world.style.marginLeft = (parseFloat(e.world.style.marginLeft) - 3) + 'vw';
        }
        function dTL(){
            e.world.style.marginTop = (parseFloat(e.world.style.marginTop) + 3) + 'vh';
            e.world.style.marginLeft = (parseFloat(e.world.style.marginLeft) + 3) + 'vw';
        }
        function dBR(){
            e.world.style.marginTop = (parseFloat(e.world.style.marginTop) - 3) + 'vh';
            e.world.style.marginLeft = (parseFloat(e.world.style.marginLeft) - 3) + 'vw';
        }
        function dBL(){
            e.world.style.marginTop = (parseFloat(e.world.style.marginTop) - 3) + 'vh';
            e.world.style.marginLeft = (parseFloat(e.world.style.marginLeft) + 3) + 'vw';
        }
    }
    function direction(){
        let dir = {x: 0, y: 0};
        if (keys["KeyW"]) dir.y -= 1;
        if (keys["KeyS"]) dir.y += 1;
        if (keys["KeyA"]) dir.x -= 1;
        if (keys["KeyD"]) dir.x += 1;
        if(dir.x == 0 && dir.y == 0) {
            return false;
        }
        return dir;
    }

    function movementUp(event){
        keys = {};
    }
}

let openSidebar = false;

function toggleMenu() {
    const menu = document.getElementById('missions');
    menu.classList.toggle('open');
    menu.classList.toggle('closed');
    openSidebar = !openSidebar;
    if(openSidebar) {
        document.getElementById("sidebar_mission2").style.opacity = '1';
        document.getElementById("sidebar_mission3").style.opacity = '1';
    }
    else {
        document.getElementById("sidebar_mission2").style.opacity = '0';
        document.getElementById("sidebar_mission3").style.opacity = '0';
    }
}
        
    
        
let cont_menu = 0;
function openConstructionMenu(e, state){
        state.menu_opened = true;
        e.circle1.style.display = 'none';
        e.circle2.style.display = 'none';
        e.circle3.style.display = 'none';
        state.cond_deactivate_movement = true;
        e.menu_base.style.display = 'block';

        clearInterval(intervalMovement);
        e.construction_menu.style.animation = 'constructionLayoutAnimation 1s ease-out';
        e.construction_menu.style.opacity = '1';
        e.menu.style.opacity = '0';
        e.c_menu_main_text.style.opacity = '0';
        document.getElementById("overlay_mission").style.opacity = '0';

        showMoney(state);

         setTimeout(() => {
            e.menu.style.transition = 'opacity 0.1s linear';
            e.c_menu_main_text.style.transition = 'opacity 0.1s linear';
            e.menu.style.pointerEvents = 'all';
            e.menu.style.opacity = '1';
            e.c_menu_main_text.style.opacity = '1';
            document.getElementById("sidebar_mission1").style.opacity = '1';
            writeMissions(e, state);
            controlProgress(e, state);
        }, 1000);
        e.lateral_icon.style.display = 'block';

        document.getElementById('start_overlay').style.display = 'block';
        document.getElementById('start_overlay').style.opacity = '0';
        document.getElementById('start_overlay').style.transition = 'opacity 0.8s ease-out';
        document.getElementById('menu_base').style.zIndex = '1000';
        document.getElementById('start_overlay').style.zIndex = '9998';
         setTimeout(() => {
            document.getElementById('start_overlay').style.opacity = '0.2';
        }, 200);
        

        if(cont_menu == 0) assignLanguage(e, state);
        document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
                state.cond_deactivate_movement = false;
                state.cond_skip = true;
                state.cond_dialogue = true;
                closeConstructionMenu(e, state);
                showMoney(state);
                if(cont_menu == 0){
                    state.cond_skip = true;
                    state.cond_dialogue = true;
                    state.cond_text = true;
                    e.container_dialogue.style.opacity = '1';
                    state.index++;
                    showNextLine();
                    e.moneyText.style.opacity = '1';
                    state.elementsHud[0] = true;
                }
                cont_menu++;
            }
        });
}
let missionCompleted = 0;
function writeMissions(e, state) {
    e.first_c_m.textContent = data.logConstructionMission[0][0];
    e.second_c_m.textContent = data.logConstructionMission[1][0];
    e.third_c_m.textContent = data.logConstructionMission[2][0];
    let type;
    for(let index=0;index<3-missionCompleted;index++){
        let j = 0;
        while(j < (data.logConstructionMission[index].length -1)) {
            let i = 1;
            while(data.logConstructionMission[index][j+1][i] != "_") {
                document.getElementById("text"+index+"_cost"+j).textContent += parseFloat(data.logConstructionMission[index][j+1][i]);
                i++;
            }
            i++;
            switch(data.logConstructionMission[index][j+1][i]) {
                case 'M':
                    document.getElementById("img"+index+"_cost"+j).src = "mattone.png";
                    type = state.brick_resource;
                    break;
                case 'L':
                    document.getElementById("img"+index+"_cost"+j).src = "legno.png";
                    type = state.wood_resource;
                    break;
                case 'V':
                    document.getElementById("img"+index+"_cost"+j).src = "vetro.png";
                    type = state.glass_resource;
                    break;
            }
            document.getElementById("text"+index+"_cost"+j).style.display = 'block';
            document.getElementById("text"+index+"_cost"+j).textContent = type+'/' + parseFloat(data.logConstructionMission[index][j+1][0]);
            document.getElementById("img"+index+"_cost"+j).style.display = 'block';
            i = 1;
            while(data.logConstructionMission[index][j+1][i] != "_") {
                document.getElementById("text"+index+"_cost"+j).textContent += parseFloat(data.logConstructionMission[index][j+1][i]);
                i++;
            }
            j++;
        }
        
    }
    
}

function controlProgress(e, state) {
    let completed_materials = 0;
    let subtracted = false;
    writeMissions(e, state);
    for(let j=0;j<3;j++){
        completed_materials = 0;
        for(let i=1;i<data.logConstructionMission[j].length;i++) {
            subtracted = false;
            let resource = data.logConstructionMission[j][i];
            resource = resource[resource.length - 1];
            let q_resource = parseFloat(data.logConstructionMission[j][i]);
            switch (resource) {
                case 'M':
                    if(state.brick_resource >= q_resource) {
                        state.brick_resource -= q_resource;
                        completed_materials++;
                        subtracted = true;
                    } 
                    break;
                case 'V':
                    if(state.glass_resource >= q_resource){
                        state.glass_resource -= q_resource;
                        completed_materials++;
                        subtracted = true;
                    } 
                    break;
                case 'L':
                    if(state.wood_resource >= q_resource){
                        state.wood_resource -= q_resource;
                        completed_materials++;
                        subtracted = true;
                    } 
                    break;
            
            }
            if(data.logConstructionMission[j].length - 1 ==  completed_materials) completeMission(j, e, state);
            else if(subtracted) {
                switch (resource) {
                case 'M':
                    state.brick_resource += q_resource;
                    break;
                case 'V':
                    state.glass_resource += q_resource;
                    break;
                case 'L':
                    state.wood_resource += q_resource;
                    break;
            
            }
            }
        }
            
    }
}

function completeMission(index, e, state) {
    missionCompleted++;
    for(let i=0;i<3;i++) {
        document.getElementById("img"+index+"_cost"+i).style.display = 'none';
        document.getElementById("text"+index+"_cost"+i).style.display = 'none';
    }
    data.logConstructionMission.splice(index, 1);
    data.logConstructionMission.push(["Nient'altro da fare"]);
    writeMissions(e, state);
}

let overlay_mission = 1;
function overlayMission(mission) {
    if(mission != overlay_mission) {
        document.getElementById("sidebar_mission"+ mission).style.backgroundColor = 'yellow';
        document.getElementById("sidebar_mission"+ overlay_mission).style.backgroundColor = 'beige';
        overlay_mission = mission;
    }
}

function closeConstructionMenu(e, state) {
    document.getElementById('start_overlay').style.opacity = '0';
    e.construction_menu.style.opacity = '0';
    e.menu.style.pointerEvents = 'none';
    e.menu.style.opacity = '0';
    e.menu_base.style.opacity = '0';
    e.c_menu_main_text.style.opacity = '0';
    document.getElementById("overlay_mission").style.opacity = '1';
    
}

function assignLanguage(e, state) {
    let lines_italian = {
        c_menu_main_text: ["COSTRUISCI", "COMPRA"], 
        first_c_m: "Entrata scuola",
        second_c_m: "Seconda costruzione",
        third_c_m: "Terza costruzione",
    }
    const langCode = state.language[0] + state.language[1];
    switch (langCode) {
        case "it":
            SubstituteLanguage(lines_italian);
            break;
        default:
            return;
    }

    function SubstituteLanguage(lines_c_menu){
        e.c_menu_main_text.textContent = lines_c_menu.c_menu_main_text[0];
        e.first_c_m.textContent = lines_c_menu.first_c_m;
        e.second_c_m.textContent = lines_c_menu.second_c_m;
        e.third_c_m.textContent = lines_c_menu.third_c_m;
        state.lines_c_menu = lines_c_menu;
    }
}

let layout_menu = "construction";
function changeMenu(e, state){
    if(layout_menu == "construction") {
        document.getElementById('start_overlay').style.display = 'none';
        layout_menu = "material_shop";
        e.menu.style.opacity = '0';        
        e.menu.style.pointerEvents = 'none';
        e.menu_base.style.transform = 'scale(1.2) translate(-3.3vw)';
        e.c_menu_main_text.style.opacity = '0';
        document.getElementById('sidebar_mission1').style.opacity = '0';
        document.getElementById("overlay_mission").style.opacity = '1';
        changeMaterialShop(e);
        setTimeout(() => {
            e.lateral_icon.src = 'bollino_bob.png';
        }, 1000);
        setTimeout(() => {
            e.c_menu_main_text.style.opacity = '1';
        }, 2500);
    }
    else if(layout_menu == "material_shop"){
        document.getElementById('start_overlay').style.display = 'block';
        layout_menu = "construction";
        e.menu_base.style.transform = 'scale(1) translate(-3.3vw)';
        e.c_menu_main_text.style.opacity = '0';
        document.getElementById('sidebar_mission1').style.opacity = '1';
        document.getElementById("overlay_mission").style.opacity = '0';
        changeConstructionMenu(e, state);
         setTimeout(() => {
            e.menu.style.opacity = '1';    
            e.lateral_icon.style.left = '95vw';
            e.lateral_icon.style.transform = 'scaleX(1)';
        }, 1000);
        setTimeout(() => {
            e.menu.style.pointerEvents = 'all';
            e.menu.style.opacity = '1';
            e.c_menu_main_text.style.opacity = '1';
            e.c_menu_main_text.textContent = state.lines_c_menu.c_menu_main_text[1];
        }, 2500);
        
    }
}

function changeMaterialShop(e){
    e.construction_menu.style.animation = "swipeLeft 1.5s ease-out forwards";
    e.blueprint_img.style.display = 'none';
    setTimeout(() => {
            e.material_shop.style.display = 'block';
    }, 1500);
}

function changeConstructionMenu(e, state){
    e.material_shop.style.display = 'none';
    
    setTimeout(() => {
            e.construction_menu.style.animation = "changeMenuLeft 1s ease-out";
            e.blueprint_img.style.display = 'block';
            controlProgress(e, state);
    }, 1000);
}

function buyMaterial(type, state) {
    switch(type) {
        case 1:
            if(state.money >= 2) {
                state.money -= 2;
                state.brick_resource += 1;
                showMoney(state);
            }
            break;
        case 2:
            if(state.money >= 4) {
                state.money -= 4;
                state.glass_resource += 1;
                showMoney(state);
            }
            break;
        case 3:
            if(state.money >= 5) {
                state.money -= 5;
                state.wood_resource += 1;
                showMoney(state);
            }
            break;
    }
}

function setupMenuToggle(e) {
  e.toggle_icon.addEventListener('mouseenter', () => e.toggle_icon.style.opacity = '0.7');
  e.toggle_icon.addEventListener('mouseleave', () => e.toggle_icon.style.opacity = '1');
  e.toggle_icon.addEventListener('click', () => {
    e.menu.classList.toggle('open');
    e.menu.classList.toggle('closed');
  });
}

function choose_in_display(e, state, saved_e){
    e.display_choice.style.opacity = '1';
    e.display_img_choice1.style.pointerEvents = 'all';
    e.display_img_choice2.style.pointerEvents = 'all';
    e.stand.style.opacity = '1';
    
    e.display_img_choice1.onclick = function(){
        startFirstCycle(e, state, 1, saved_e);
    }
    e.display_img_choice1.onmouseover = function(){
        e.stand.src = 'stand_libri.png';
    }
    e.display_img_choice2.onclick = function(){
        startFirstCycle(e, state, 2, saved_e);
    }
    e.display_img_choice2.onmouseover = function(){
        e.stand.src = 'stand_con_sindaco.png';
    }
    e.stand.style.animation = 'choice_animation 2s infinite ease-in-out';
    setTimeout(() => {
        document.getElementById("start_overlay").style.opacity = '0.2';
    }, 1);
    
}

function startFirstCycle(e, state, chosed = null, saved_e){
    if(chosed == null) return;
    else {
        e.stand.style.animation = '';
        e.stand.style.opacity = '1';
        document.getElementById("start_overlay").style.opacity = '0';
        e.display_choice.style.opacity = '0';
        e.display_img_choice1.style.pointerEvents = 'none';
        e.display_img_choice2.style.pointerEvents = 'none';
        if(chosed == 1){
            bookCycle(e, state, saved_e);
            setTimeout(() => {
                bookCycle(e, state, saved_e);
            }, 500); 
        }
        else {
            fundraisingCycle(e, state, saved_e);
            setTimeout(() => {
                fundraisingCycle(e, state, saved_e);
            }, 500);
        }
        resetMoveWorld(e, -3, 5);
        state.cond_deactivate_movement = false;
        eliminateCharacter(e, 3, null);
    }
}
let cont_first_cycle = 0;
function bookCycle(e, state, saved_e){
    
    document.getElementById("stacks_of_books").style.display = 'none';
    setTimeout(() => {
        animationFirstCycle(e, state, saved_e, 1);
    }, 500);
}

function fundraisingCycle(e, state, saved_e){
    e.stand.src = 'stand_con_sindaco.png';
    document.getElementById("stacks_of_books").style.display = 'none';
    setTimeout(() => {
        animationFirstCycle(e, state, saved_e, 2);
    }, 500);
}

function createInteractionCircle(e, state){
    e.circle1.style.display = 'block';
    e.circle2.style.display = 'block';
    e.circle3.style.display = 'block';
}

function animationFirstCycle(e, state, saved_e, chosed) {
    let posX = Math.floor(Math.random() * 101) + Math.abs(data.posIdleCycle[0][0]);
    let posY = Math.floor(Math.random() * 10) + data.posIdleCycle[0][1];
    let posX_exit = Math.floor(Math.random() * 101) + Math.abs(data.posIdleCycle[0][0]);
    let posY_exit = Math.floor(Math.random() * 10) + data.posIdleCycle[0][1];
    createNewCharacter(`${posX}vw`, `${posY}vh`, "passiveAnimationStand", 1, false, "Personaggio_anonimo", data.matTert.length, e, state, saved_e);
    let i = data.matTert.length - 1;
    if(chosed == 2) passiveAnimationStand(document.getElementById("character_"+i), i, e, state, saved_e, chosed);
    else passiveAnimationStand(document.getElementById("character_"+i), i, e, state, saved_e);
}

async function passiveAnimationStand(character, i, e, state, saved_e, chosed){
    
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await returnToObject(character, data.seatForObjects[1][0], data.seatForObjects[1][1], false, state, e);
    await sleep(1000);
    await singleJumpAnimation(character, e, state);
    await sleep(1000);
    await singleJumpAnimation(character, e, state);
    await sleep(1000);
    if(chosed == 2) addMoney(3, state);
    else addMoney(2, state);
    let posX_exit = Math.floor(Math.random() * 101) + Math.abs(data.posIdleCycle[0][0]);
    let posY_exit = Math.floor(Math.random() * 10) + data.posIdleCycle[0][1];
    await returnToObject(character, posX_exit, posY_exit, true, state, e);
    eliminateCharacter(e, i, character);
    await sleep(500);
    cont_first_cycle++;
    if(chosed == 2) fundraisingCycle(e, state, saved_e);
    else bookCycle(e, state, saved_e);
}

function addMoney(qMoney, state) {
    state.money += qMoney;
    showMoney(state);
}

function showMoney(state) {
    document.getElementById("money").style.opacity = '1';
    document.getElementById("money").innerHTML = state.money + " 🪙";
}

function moveInteractionCircle(e, state, posX, posY){
    e.circle1.style.marginLeft = posX;
    e.circle1.style.marginTop = posY;
    e.circle2.style.marginLeft = posX;
    e.circle2.style.marginTop = posY;
    e.circle3.style.marginLeft = posX;
    e.circle3.style.marginTop = posY;
    state.cond_interactionCircle = true;
}

function animateInteractionCircle(e, state){

    const circles = [
      document.getElementById('circle1'),
      document.getElementById('circle2'),
      document.getElementById('circle3')
    ];
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    async function animateCircle(){
      while(state.cond_interactionCircle){

        for(let i=0; i<circles.length; i++){
            if(!state.cond_interactionCircle) {
                e.circle1.style.opacity = '1';
                e.circle2.style.opacity = '0';
                e.circle3.style.opacity = '0';
                return;
            }
          circles.forEach((c,j)=> c.style.opacity = j===i ? '1':'0');
          await sleep(700);
        }
      }
    }

    async function ripristineTransitionCircle(){
        document.getElementById('circle1').style.transition = 'left 0.25s linear, top 0.25s linear, opacity 0.4s ease-out';
        document.getElementById('circle2').style.transition = 'left 0.25s linear, top 0.25s linear, opacity 0.4s ease-out';
        document.getElementById('circle3').style.transition = 'left 0.25s linear, top 0.25s linear, opacity 0.4s ease-out';
        await sleep(100);
        await ripristineTransitionCircle();
    }

    animateCircle();
    ripristineTransitionCircle();
}

function showInteractionCircle(e, state){
        state.cond_interactionCircle = false;
        e.circle1.style.opacity = '1';
        e.circle2.style.opacity = '0';
        e.circle3.style.opacity = '0';
    }

function interaction(index, e, state){
    switch(index){
        case 0:
            data.matTert[4][4] = true;
            const character = document.getElementById('character_4');
            character.style.transform = 'scaleX(1)';
            document.getElementById('key_e' + index).style.display = 'none';        
            jolt(character, e, state);
            break;
        case 1:
            state.cond_table = true;
            openConstructionMenu(e, state);
            break;
    }
}




function creationTertiaryCharacters(e, state, saved_e) {
    let i;
    let scaleX;
    
    for(i=0;i<data.matTert.length;i++){
        createCharacter(e, state, i);
        assignZIndex(e, state, i);
    }
    saveStatesElements(saved_e, state);
    saveMats_ImportantStates();
}

function createNewCharacter(posX, posY, animation, rotation, no_illustration, src, i, e, state, saved_e){
    let parameters = [posX, posY, animation, rotation, no_illustration, src];
    data.matTert.push([]);
    for(let j=0;j<data.matTert[0].length;j++){
        data.matTert[i][j] = parameters[j];
    }
    createCharacter(e, state, i);
    assignZIndex(e, state, i);
}

function createMapDecorations(e, state, saved_e) {
    for(let i=0;i<data.posWildNature.length;i++){
        createDecoration(e, state, i);
    }
    saveStatesElements(saved_e, state);
    saveMats_ImportantStates();
}

function createDecoration(e, state, i) {
    const decoration_container = document.createElement('div');
    decoration_container.style.left = data.posWildNature[i][0];
    decoration_container.style.top = data.posWildNature[i][1];
    decoration_container.style.width = '7vw';
    decoration_container.style.height = '7vh';
    decoration_container.style.position = 'fixed';
    decoration_container.style.transformOrigin = 'center center';
    decoration_container.style.display = 'block';
    decoration_container.style.transition = 'left 0.25s linear, top 0.25s linear';
    decoration_container.style.zIndex = '-9998';
    decoration_container.id = 'decoration_container.'+i;
    decoration_container.className = 'school_imgs';
    const decoration_img = document.createElement('img');
    decoration_img.className = 'decoration';
    decoration_img.src = data.posWildNature[i][2] + '.png';
    decoration_container.appendChild(decoration_img);
    e.world.appendChild(decoration_container);
}

function createImportantObjects(e, state, saved_e) {
    for(let i=0;i<data.importantObjects.length;i++){
        createObjects(e, state, i, saved_e);
    }
}

function createNewImportantObject(e, state, saved_e, i, posX, posY, id_container, N_parameters, id1 = null, src1 = null, id2 = null, src2 = null, id3 = null, src3 = null, id4 = null, src4 = null) {
    data.importantObjects.push([]);
    let parameters_to_add = [id1, src1, id2, src2, id3, src3, id4, src4];
    data.importantObjects[i][0] = posX;
    data.importantObjects[i][1] = posY;
    data.importantObjects[i][2] = id_container;
    data.importantObjects[i][3] = N_parameters;
    for(let j=0;j<N_parameters;j++){
        data.importantObjects[i][j+4] = parameters_to_add[j];
    }
    createObjects(e, state, i, saved_e);
}

function createObjects(e, state, i, saved_e) {
    if(data.importantObjects[i][3] == 1){
        const object = document.createElement('img');
        object.style.left = data.importantObjects[i][0];
        object.style.top = data.importantObjects[i][1];
        object.id = data.importantObjects[i][2];
        object.className = 'school_imgs';
        object.src = data.importantObjects[i][4];
        e.world.appendChild(object);
        e[data.importantObjects[i][2]] = document.getElementById(`${object.id}`); 
        saved_e[data.importantObjects[i][2]] = `document.getElementById("${object.id}")`;
        return;
    }
    else {
        const object_container = document.createElement('div');
        object_container.style.left = data.importantObjects[i][0];
        object_container.style.top = data.importantObjects[i][1];
        object_container.id = data.importantObjects[i][2];
        object_container.className = 'school_imgs';
        for(let j=0;j<data.importantObjects[i][3];j+=2){
            const object_img = document.createElement('img');
            object_img.id = data.importantObjects[i][4 + j];
            object_img.src = data.importantObjects[i][5 + j];
            object_container.appendChild(object_img);
        }
        e.world.appendChild(object_container);
        e[data.importantObjects[i][2]] = document.getElementById(`${object_container.id}`); 
        saved_e[data.importantObjects[i][2]] = `document.getElementById("${object_container.id}")`;
        return;
    } 
}

function createCharacter(e, state, i) {
    let source;
    let src_added = '';
    const character_container = document.createElement('div');
    character_container.style.left = data.matTert[i][0];
    character_container.style.top = data.matTert[i][1];
    character_container.style.height = '20vh';
    character_container.id = 'character_' + i;
    character_container.className = 'school_imgs';
    character_container.style.position = 'fixed';
    character_container.style.transition = 'left 0.25s linear, top 0.25s linear';
    switch (data.matTert[i][3]) {
        case 1:
            character_container.style.transform = 'scaleX(1)';
            break;
        case -1:
            character_container.style.transform = 'scaleX(-1)';
            break;
        case 2:
            src_added = '_davanti';
            break;
        case -2:
            src_added = '_dietro';
            break;
        default:
            character_container.style.transform = 'scaleX(1)';
            break;
    }

    const character_img = document.createElement('img');
    character_img.style.width = '6vw';
    character_img.id = 'characterImg_' + i;
    character_img.style.height = '19vh';

    if(localStorage.getItem("saved") == null) {
        if(data.matTert[i][5] == "operaio") chooseSrc(i);
    }
    character_img.src = data.matTert[i][5] + src_added + '.png';

    character_container.appendChild(character_img);
    e.world.appendChild(character_container);
    e.world.appendChild(document.getElementById('character_'+i));
    switch (data.matTert[i][2]){
        case 'group':
            passiveAnimationGroup(character_container, i, e, state);
            break;
        case 'work-alone':
             passiveAnimationWorkAlone(character_container, i, e);
            break;
        case 'alone':
            let posX = parseFloat(data.matTert[i][0]) + 2;
            let posY = parseFloat(data.matTert[i][1]) - 10;
            const illustration = createIllustration('vignetta_musica.png', posX, posY, e, i);
        animateIllustration(illustration, i);
        setInterval(() => {
            passiveAnimationAlone(character_container, i, e, illustration);
            }, 1000);
            break;
        case 'walk-casually':
            let posX2 = parseFloat(data.matTert[i][0]) + 2;
            let posY2 = parseFloat(data.matTert[i][1]) - 10;
            const illustration2 = createIllustration('vignetta_fischietto.png', posX2, posY2, e, i);
            animateIllustration(illustration2, i);
            passiveAnimationWalking(character_container, i, e, illustration2, state);
           
            break;
    }
    function chooseSrc(i){
        let num = Math.floor(Math.random() * 3) + 1;
        src = `operaio${num}`;
        data.matTert[i][5] = src;
    }
}

function assignZIndex(e, state, i, cond = false){
    let Y;
    if(!cond) { 
        Y = parseFloat(data.matTert[i][1]);
        document.getElementById('character_'+ i).style.zIndex = `${Math.trunc(Y/5)}`;
    }
    else {
        Y = parseFloat(data.posWildNature[i][1]);
        document.getElementById('decoration_container.'+ i).style.zIndex = `${Math.trunc(Y/5)}`;
    }
    
    
}

function eliminateCharacter(e, i, character){
        if(document.getElementById('character_'+i) == null) i--;
        if(document.getElementById('character_'+i).id != character.id) i--;
            document.getElementById('character_'+i).remove();
            if (document.getElementById('illustration_' + i)) {
                document.getElementById('illustration_' + i).remove();
            }
            
                for(let j=i-1;j<data.matTert.length;j++){
                    if(document.getElementById('character_'+(j+1))){
                        document.getElementById('character_'+(j+1)).id = `character_${j}`;
                        document.getElementById('characterImg_'+(j+1)).id = `characterImg_${j}`;
                        if(data.matTert[j+1][2] != '' && data.matTert[j+1][2] != 'passiveAnimationStand') {
                            document.getElementById('illustration_'+(j+1)).id = `illustration_${j}`;
                        }
                        
                    }
                    
                }

                data.matTert.splice(i, 1);
}


function animateIllustration(illustration, i){
    let interval = setInterval(() => {
            if(data.matTert[i][4] == false){
                let illustration_time = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
                setTimeout(() => {
                                illustration.style.opacity = '1';
                            setTimeout(() => {
                                illustration.style.opacity = '0';
                            }, 2000);
                }, illustration_time);
            }
            else{
                clearInterval(interval);
                return;
            }
        }, 5000);
}
let cont_illustration = 0;
function createIllustration(sr, posX, posY, e, i_illustration){
        const illustration = document.createElement('img');
        illustration.src = sr;
        illustration.style.opacity = '0';
        illustration.style.transition = 'opacity 0.1s ease-out, left 0.25s linear, top 0.25s linear';
        illustration.style.width = '10vw';
        illustration.style.height = '15vh';
        illustration.style.left = `${posX}vw`;
        illustration.style.top = `${posY}vh`;
        illustration.style.zIndex = '-9997';
        illustration.className = 'school_imgs';
        illustration.id = 'illustration_'+i_illustration;
        cont_illustration++;
        e.world.appendChild(illustration);
        return illustration;
}

let interval = [];
    function passiveAnimationGroup(character, i, e, state, posX = 0, posY = 0) {
        state.maxTimeAnimationGroup[i] = 4000;
        passiveMovementGroup(character, i, e, state);
        passiveIllustrationGroup(posX, posY, i, e, state, character);
    }

    async function passiveMovementGroup(character, i, e, state){
        if(!existencecontrol(character)) return;
        character.style.transition = "left 0.25s linear, top 0.25s linear";
        switch (i){
            case 5:
                if(state.condBP1 == true){
                    return
                }
                break;
            case 6: 
            setTimeout(() => {
                if(state.condBP1 == false){
                    return;
                }
            }, 4900);
                break;
            case 10:
                break;
        }
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        time = Math.floor(Math.random() * (state.maxTimeAnimationGroup[i] - 1000 + 1)) + 1000;
        await sleep(time);
        switch (i){
            case 5:
                if(state.condBP1 == true){
                    return
                }
                break;
            case 6: 
                if(state.condBP1 == true){
                    return
                }
                break;
        }
        character.style.top = (parseFloat(character.style.top) - 3) + 'vh';
        await sleep(300);
        character.style.top = (parseFloat(character.style.top) + 3) + 'vh';
        await passiveMovementGroup(character, i, e, state);
    }

    function passiveIllustrationGroup(posX, posY, i, e, state, character){
        if(posX == 0){
                posX = parseFloat(data.matTert[i][0]) + 2;
                posY = parseFloat(data.matTert[i][1]) - 10;
        }
        const illustration = createIllustration('vignetta_dialogo.png', posX, posY, e, i);
        moveIllustrationGroup(illustration, i, state, character);
    }

    async function moveIllustrationGroup(illustration, i, state, character){
        if(!existencecontrol(character)) return;
        const sleep =  ms => new Promise(r => setTimeout(r, ms));
        switch (i){
            case 5:
                if(state.condBP1 == true){
                    illustration.style.opacity = '0';
                    return
                }
                break;
            case 6: 
                if(state.condBP1 == true){
                    illustration.style.opacity = '0';
                    return
                }
                break;
        }
        await sleep(Math.floor(Math.random() * (state.maxTimeAnimationGroup[i] - 1000 + 1)) + 1000);
        switch (i){
            case 5:
                if(state.condBP1 == true){
                    illustration.style.opacity = '0';
                    return
                }
                break;
            case 6: 
                if(state.condBP1 == true){
                    illustration.style.opacity = '0';
                    return
                }
                break;
        }
        illustration.style.opacity = '1';
        await sleep(3000);
        switch (i){
            case 5:
                if(state.condBP1 == true){
                    return
                }
                break;
        }
        illustration.style.opacity = '0';
        await moveIllustrationGroup(illustration, i, state, character);
    }

    async function singleJumpAnimation(character, e, state){
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        let time = Math.floor(Math.random() * (state.maxTimeAnimationGroup[i] - 1000 + 1)) + 1000;
        await sleep(time);
        character.style.top = (parseFloat(character.style.top) - 3) + 'vh';
        await sleep(300);
        character.style.top = (parseFloat(character.style.top) + 3) + 'vh';
    }

let cont_work_alone = 0;
async function passiveAnimationWorkAlone(character, i, e, state){
    if(!existencecontrol(character)) return;
    character.style.transition = "left 0.5s linear, top 0.5s linear";
    e.barrow.style.transition = "left 0.35s linear, top 0.35s linear, transform 0.35s linear";
    const sleep =  ms => new Promise(r => setTimeout(r, ms));
    const step = async (action, delay, scaleX) => {
        await sleep(delay);
        if(scaleX) {
            character.style.transform = 'scaleX(-1)';
            e.barrow.style.transform = 'scaleX(1)';
            cont_work_alone++;
            
            if(cont_work_alone == 1) e.barrow.style.left = (parseFloat(e.barrow.style.left) + 17.5) + "vw";
            else {
                setTimeout(() => {
                    cont_work_alone = 0;
                    e.barrow.style.left = (parseFloat(e.barrow.style.left) + 8.3) + "vw";
                    document.getElementById('structure_wheel').style.animation = 'animation_wheel 0.1s linear';
                    setTimeout(() => {
                        document.getElementById('structure_wheel').style.animation = '';
                    }, 500);
                }, 100);
            }
        } else {
            character.style.transform = 'scaleX(1)';
            e.barrow.style.transform = 'scaleX(-1)';
            cont_work_alone++;
            if(cont_work_alone == 1) e.barrow.style.left = (parseFloat(e.barrow.style.left) - 17.5) + "vw";
            else {
                setTimeout(() => {
                    cont_work_alone = 0;
                    e.barrow.style.left = (parseFloat(e.barrow.style.left) - 8.3) + "vw";
                    document.getElementById('structure_wheel').style.animation = 'animation_wheel 0.1s linear';
                    setTimeout(() => {
                        document.getElementById('structure_wheel').style.animation = '';
                    }, 500);
                }, 100);
            }
        }
        if (typeof window[action] === 'function') {
            window[action](character, false);
        }
    };
    await step("rightJump", Math.floor(Math.random() * (4000 - 1000 + 1)) + 2000, true);
    await step("rightJump", Math.floor(Math.random() * (4000 - 1000 + 1)) + 2000, true);
    await step("leftJump", Math.floor(Math.random() * (4000 - 1000 + 1)) + 2000, false);
    await step("leftJump", Math.floor(Math.random() * (4000 - 1000 + 1)) + 2000, false);
    await passiveAnimationWorkAlone(character, i, e, state);
}

async function passiveAnimationAlone(character, i, e, illustration, state){
    if(!existencecontrol(character)) return;
    character.style.transition = "left 0.25s linear, top 0.25s linear";
    illustration.style.transition = "left 0.25s linear, top 0.25s linear";
    let illustration_time = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
    const sleep =  ms => new Promise(r => setTimeout(r, ms));
    const step = async (delay) => {
        if(data.matTert[i][4] == true){
            illustration.style.opacity = '0';
            illustration.style.display = 'none';
            document.getElementById('key_e'+0).style.display = 'none';
            return;
        }
        else{
            let dec = (Math.floor(Math.random() * 1) + 2);
            character.style.top = parseFloat(character.style.top) - dec + 'vh';
            illustration.style.top = parseFloat(illustration.style.top) - dec + 'vh';
            setTimeout(() => {
                character.style.top = parseFloat(character.style.top) + dec + 'vh';
                illustration.style.top = parseFloat(illustration.style.top) + dec + 'vh';
            }, 350);
            await sleep(delay);
        }
        
    };
    step(Math.floor(Math.random() * (1000 - 200 + 1)) + 400);
    step(Math.floor(Math.random() * (1000 - 200 + 1)) + 400);
    step(Math.floor(Math.random() * (1000 - 200 + 1)) + 400);
}

let sommaX = 0;
let sommaY = 0;

function existencecontrol(c){
    if(document.body.contains(c)) return true;
    else return false;
}
function passiveAnimationWalking(character, i, e, illustration, state){
    if(!existencecontrol(character)) return;
    let stepX = Math.floor(Math.random() * (5 - (-5) + 1)) + (-5);
    sommaX+=(stepX*9);
    while(sommaX < -50 || sommaX > 150){
        sommaX -= (stepX*9);
        stepX = Math.floor(Math.random() * (5 - (-5) + 1)) + (-5);
        sommaX+=(stepX*9);
    }
    let stepY = Math.floor(Math.random() * (5 - (-5) + 1)) + (-5);    
    sommaY+=(stepY*9);
    while(sommaY < -150 || sommaY > 50){
        sommaY -= (stepY*9);
        stepY = Math.floor(Math.random() * (5 - (-5) + 1)) + (-5);
        sommaY+=(stepY*9);
    }
    
    returnToObject(character, false, false, false, state, e, stepX, stepY, illustration);
    setTimeout(() => {
        passiveAnimationWalking(character, i, e, illustration, state);
    }, Math.abs(stepX) * 750 + Math.abs(stepY) * 750); 
}

async function passiveAnimationBob(character, i, e, illustration, state){
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const step = async () => {
        let num;
        let list_removed = [3, 4, 5, 9];
        let cond = false;
        let cont = 0;
        while(!cond){
            cont = 0;
            num = Math.floor(Math.random() * 10);
            for(let i=0;i<list_removed.length;i++){
                if(num == list_removed[i]){
                    cont++;
                    cond = false;
                } 
            }
            if(cont == 0) cond = true;
        }
        let x = (parseFloat(data.matTert[num][0]) - 5) + 'vw';
        let y = (parseFloat(data.matTert[num][1]) - 5) + 'vh';
        let delay = (Math.abs(parseFloat(character.style.left) - parseFloat(x)) / 8 * 1000) + (Math.abs(parseFloat(character.style.top) - parseFloat(y)) / 5 * 1000);
        await returnToObject(character, x, y, false, state, e);
        await sleep(delay);
    };
    while(true){
        await step();
    } 
}

function animationCamionCutscene(e, state){
    e.camionBob.style.animation = 'animationCamionCutscene 0.5s linear infinite';
    e.camionBob.style.left = '-120vw';
    e.camionBob.style.opacity = '1';
    e.camionBob.style.transition = 'left 5.5s linear, top 0.25s linear';
    e.camionBob.style.left = '20vw';
    document.getElementById('wheel_camion1').style.animation = 'animation_wheel 1s linear infinite';
    document.getElementById('wheel_camion2').style.animation = 'animation_wheel 1s linear infinite';
    setTimeout(() => {
        e.camionBob.style.top = '200vh';
        e.camionBob.style.animation = '';
        document.getElementById('wheel_camion1').style.animation = '';
        document.getElementById('wheel_camion2').style.animation = '';
    }, 5500);
    setTimeout(() => {
            document.getElementById('start_overlay').style.display = '';
            document.getElementById('start_overlay').style.opacity = '0';
            document.getElementById('start_overlay').style.transition = 'opacity 0.8s ease-out';
            setTimeout(() => {
                document.getElementById('start_overlay').style.opacity = '1';
                setTimeout(() => {
                    document.getElementById('start_overlay').style.opacity = '0';
                }, 2000);
            }, 100);
            setTimeout(() => {
                e.camionBob.style.display = 'none';
            }, 1500);
            
    }, 6000);
}

async function jolt(character, e, state) {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    character.style.transition = "top 0.2s ease-out, left 0.2s ease-out";
    const step = async (topDelta, leftDelta, delay) => {
        if(topDelta == true) data.matTert[4][4] = true;
        else{
        await sleep(delay);
        character.style.top = (parseFloat(character.style.top) + topDelta) + 'vh';
        character.style.left = (parseFloat(character.style.left) + leftDelta) + 'vw';
        }
    };

    await step('true', 0, 0)
    await step(-3, 1, 0);
    await step(-2, 1.5, 90);
    await step(-2, 1.5, 90);
    await step(-1.5, 1.5, 90);
    await step(1.5, 1, 60);
    await step(2, 1, 60);
    await step(2, 1, 60);
    await step(2, 0.75, 60);
    await sleep(1500);
    await returnToObject(character, data.seatForObjects[0][2], data.seatForObjects[0][3], true, state, e);
}

function moveCharacter(character, total_jumps, jumps){
    async function jump(character) {
        const sleep = ms => new Promise(r => setTimeout(r, ms));
        for(let i=-1;i<total_jumps;i++){
            if(i==-1 && character.id == 'character_5') await sleep(1000);
            else {
                if (typeof window[jumps[0][i]] === 'function') {
                    await window[jumps[0][i]](character, jumps[2][i][0]);
                }
                await sleep(jumps[1][i]);
            }
        }
    }
    jump(character);
}

async function returnToObject(character, x, y, order = false, state, e, stepx, stepy, illustration){
    let halfStepX = false;
    let halfStepY = false;
    let aQuarterStepX = false;
    let aQuarterStepY = false;
    if(x != false){
        let stepX = (parseFloat(x) - parseFloat(character.style.left)) / 8;
        let stepY = (parseFloat(y) - parseFloat(character.style.top)) / 7;
        let diffStepX = Math.abs(stepX - Math.trunc(stepX));
        stepX -= diffStepX;

        if (diffStepX > 0.5) {
            halfStepX = true;
        }
        diffStepX = Math.abs(stepX - Math.trunc(stepX));
        if(diffStepX > 0.25){
            halfStepX = false;
            aQuarterStepX = true;
        }
        let diffStepY = Math.abs(stepY - Math.trunc(stepY));
        stepY -= diffStepY;
        if (diffStepY > 0.5) {
            halfStepY = true;
        }
        diffStepY = Math.abs(stepY - Math.trunc(stepY));
        if(diffStepY > 0.25){
            halfStepX = false;
            aQuarterStepY = true;
        }

        stepX = Math.trunc(stepX);
        stepY = Math.trunc(stepY);
        await move(character, order, stepX, stepY);
    }
    else{
        await move(character, order, stepx, stepy, x, state);
    }
    async function move(character, order, stepX, stepY, cond = true){
        const sleep =  ms => new Promise(r => setTimeout(r, ms));
        const step = async (action, delay, parameter = false, parameter2 = false) => {
            if (typeof window[action] === 'function') {
                window[action](character, parameter);
                if(!cond){
                    window[action](illustration, parameter);
                    typeAnimation = controlClose(character, state);
                    if(typeAnimation != null){
                        fastAnimations(state.ids, state);
                } 
        }
            }
            await sleep(delay);
        };
        if (!order) {
        if(stepX < 0) {
            for(let i = 0; i > stepX; i--) {
                await step("leftJump", 500);
            }
            if(halfStepX){
                parameter = true;
                await step("leftJump", 500, parameter);
            }
            if(aQuarterStepX){
                parameter2 = true;
                await step("leftJump", 500, false, parameter2);
            }
        } else {
            for(let i = 0; i < stepX; i++) {
                await step("rightJump", 500);
            }
            if(halfStepX){
                parameter = true;
                await step("rightJump", 500, parameter);
            }
            if(aQuarterStepX){
                parameter2 = true;
                await step("rightJump", 500, false, parameter2);
            }
        }

        if(stepY < 0) {
            for(let i = 0; i > stepY; i--) {
                await step("topJump", 500);
            }
            if(halfStepY){
                parameter = true;
                await step("topJump", 500, parameter);
            }
            if(aQuarterStepY){
                parameter2 = true;
                await step("topJump", 500, false, parameter2);
            }
        } else {
            for(let i = 0; i < stepY; i++) {
                await step("downJump", 500);
            }
            if(halfStepY){
                parameter = true;
                await step("downJump", 500, parameter);
            }
            if(aQuarterStepY){
                parameter2 = true;
                await step("downJump", 500, false, parameter2);
            }
        }

    } else {
        if(stepY < 0) {
            for(let i = 0; i > stepY; i--) {
                await step("topJump", 500);
            }
            if(halfStepY){
                parameter = true;
                await step("topJump", 500, parameter);
            }
            if(aQuarterStepY){
                parameter2 = true;
                await step("topJump", 500, false, parameter2);
            }
        } else {
            for(let i = 0; i < stepY; i++) {
                await step("downJump", 500);
            }
            if(halfStepY){
                parameter = true;
                await step("downJump", 500, parameter);
            }
            if(aQuarterStepY){
                parameter2 = true;
                await step("downJump", 500, false, parameter2);
            }
        }

        if(stepX < 0) {
            for(let i = 0; i > stepX; i--) {
                await step("leftJump", 500);
            }
            if(halfStepX){
                parameter = true;
                await step("leftJump", 500, parameter);
            }
            if(aQuarterStepX){
                parameter2 = true;
                await step("leftJump", 500, false, parameter2);
            }
        } else {
            for(let i = 0; i < stepX; i++) {
                await step("rightJump", 500);
            }
            if(halfStepX){
                parameter = true;
                await step("rightJump", 500, parameter);
            }
            if(aQuarterStepX){
                parameter2 = true;
                await step("rightJump", 500, false, parameter2);
            }
        }
}
let posId;
if(character.id.length == 11) posId = character.id[character.id.length - 1];
else if(character.id.length == 12) posId = parseFloat(character.id[character.id.length - 2] + character.id[character.id.length - 1]);
if(document.getElementById('character_'+posId) == null) posId--;
if(document.getElementById('character_'+posId).id != character.id) posId++;
    if(!cond || character.id == 'character_5' || data.matTert[posId][2] == 'passiveAnimationStand'){
        return 
    }
    else{
        data.matTert[posId][0] = parseFloat(character.style.left) + 'vw';
        data.matTert[posId][1] = parseFloat(character.style.top) + 'vh';
        state.condBP1 = false;
        await passiveAnimationGroup(character, 6, e, state, parseFloat(character.style.left) + 2, parseFloat(character.style.top) - 10);
    }
    }
}

function controlClose(character, state){
    if(!existencecontrol(character)) return;
    let cont = 0;
    for(i=0;i<data.matTert.length;i++){
        if(Math.abs(parseFloat(character.style.left) - parseFloat(data.matTert[i][0])) <= 50 && Math.abs(parseFloat(character.style.top) - parseFloat(data.matTert[i][1]) <= 50)){
            state.ids[cont] = i;
            cont++;
        }
    }
    if(cont == 0) return null;
    else return 0;
}
let cond_ripeti_controllo = true;
function fastAnimations(ids, state){
    
    let i;
    if(cond_ripeti_controllo){
        for(i=0;i<ids.length-1;i++){
            if(data.matTert[ids[i]] != undefined) {
                if(data.matTert[ids[i]][2] == 'group'){
                    cond_ripeti_controllo = false;
                    state.maxTimeAnimationGroup[ids[i]] /= 10;
                }
            }
        }
        
        for (let j = 0; j < ids.length - 1; j++) {
            if(data.matTert[ids[j]] != undefined) {
            if (data.matTert[ids[j]][2] == 'group') {
                setTimeout(() => {
                    state.maxTimeAnimationGroup[ids[j]] *= 10;
                    cond_ripeti_controllo = true;
                }, 2000);
            }
        }
        }
    }
    
}
    
function centralizationPreside(e, state) {
    const p = e.preside_container;
    p.style.top = "50vh";
    p.style.left = "30vw";
    doubleJump(p);
}
async function doubleJump(p) {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await sleep(2000); 
    await rightJumpP(p);
    await sleep(500); 
    await rightJumpP(p); 
}

async function rightJumpP(character) {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    character.style.transition = "top 0.1s ease-out, left 0.1s ease-out";

    const step = async (topDelta, leftDelta, delay) => {
        await sleep(delay);
        character.style.top = (parseFloat(character.style.top) + topDelta) + 'vh';
        character.style.left = (parseFloat(character.style.left) + leftDelta) + 'vw';
    };


    await step(-2, 1, 0);
    await step(-2, 2, 100);
    await step(-0.5, 2, 100);
    await step(0.5, 2, 100);
    await step(2, 2, 100);
    await step(2, 1, 100);
}

async function rightJump(character, half, a_quarter) {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    character.style.transition = "top 0.06s ease-out, left 0.06s ease-out";
    let posId = character.id.split("_")[1];
    const characterImg = document.getElementById('characterImg_'+posId);
    let source = characterImg.src.split("/").pop();
    let src_character = source.split("_")[0];
    src_character = src_character.split('.')[0];
    src_character += ".png";
    document.getElementById('characterImg_'+posId).src = src_character;

    const step = async (topDelta, leftDelta, delay) => {
        await sleep(delay);
        character.style.top = (parseFloat(character.style.top) + topDelta) + 'vh';
        character.style.left = (parseFloat(character.style.left) + leftDelta) + 'vw';
        
    };
    if (a_quarter) {
        await step(-0.375, 0.375, 0);
        await step(-0.375, 0.375, 60);
        await step(-0.25, 0.5, 60);
        await step(0.25, 0.5, 60);
        await step(0.375, 0.375, 60);
        await step(0.375, 0.375, 60);
        await ripristineTransition(character);
    }
    if(half){
        await step(-0.75, 0.75, 0);
        await step(-0.75, 0.75, 60);
        await step(-0.5, 1, 60);
        await step(0.5, 1, 60);
        await step(0.75, 0.75, 60);
        await step(0.75, 0.75, 60);
        await ripristineTransition(character);
    }
    else{
        await step(-1.5, 1.5, 0);
        await step(-1.5, 1.5, 60);
        await step(-0.5, 1, 60);
        await step(0.5, 1, 60);
        await step(1.5, 1.5, 60);
        await step(1.5, 1.5, 60);
        await ripristineTransition(character);
    }
    
}

async function topJump(character, half, a_quarter) {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    character.style.transition = "top 0.06s ease-out, left 0.06s ease-out";

    const step = async (topDelta, delay) => {
        await sleep(delay);
        character.style.top = (parseFloat(character.style.top) + topDelta) + 'vh';
        character.style.transition = "top 0.25s ease-out, left 0.25s ease-out";
    };
    if (a_quarter) {
        await step(-0.9, 0);
        await step(-0.9, 60);
        await step(-0.65, 60);
        await step(0.65, 60);
        await ripristineTransition(character);
    }
    if(half){
        await step(-1.75, 0);
        await step(-1.75, 60);
        await step(-1.2, 60);
        await step(1.2, 60);
        await ripristineTransition(character);
    }
    else{
        await step(-3.5, 0);
        await step(-3.5, 60);
        await step(-2.5, 60);
        await step(2.5, 60);
        await ripristineTransition(character);
    }
}
async function leftJump(character, half, a_quarter) {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    character.style.transition = "top 0.06s ease-out, left 0.06s ease-out";
    let i = character.id;
    i = i[i.length - 1];

    const step = async (topDelta, leftDelta, delay) => {
        await sleep(delay);
        character.style.top = (parseFloat(character.style.top) + topDelta) + 'vh';
        character.style.left = (parseFloat(character.style.left) + leftDelta) + 'vw';
        character.style.transition = "top 0.25s ease-out, left 0.25s ease-out";
        if(i==5 && delay == 0){
            if(a_quarter){
                data.matTert[i][0] = (parseFloat(data.matTert[i][0]) - 2.5) + "vw";
            }
            else if(half){
                data.matTert[i][0] = (parseFloat(data.matTert[i][0]) - 5) + "vw";
            } else{
                data.matTert[i][0] = (parseFloat(data.matTert[i][0]) - 8) + "vw";
            }
        }
    };
    if (a_quarter) {
        await step(-0.375, -0.375, 0);
        await step(-0.375, -0.375, 60);
        await step(-0.25, -0.5, 60);
        await step(0.25, -0.5, 60);
        await step(0.375, -0.375, 60);
        await step(0.375, -0.375, 60);
        await ripristineTransition(character);
    }
    if(half){
        await step(-0.75, -0.75, 0);
        await step(-0.75, -0.75, 60);
        await step(-0.5, -1, 60);
        await step(0.5, -1, 60);
        await step(0.75, -0.75, 60);
        await step(0.75, -0.75, 60);
        await ripristineTransition(character);
    }
    else{
        await step(-1.5, -1.5, 0);
        await step(-1.5, -1.5, 60);
        await step(-0.5, -1, 60);
        await step(0.5, -1, 60);
        await step(1.5, -1.5, 60);
        await step(1.5, -1.5, 60);
        await ripristineTransition(character);
    }
}

async function downJump(character, half, a_quarter) {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    character.style.transition = "top 0.06s ease-out, left 0.06s ease-out";

    const step = async (topDelta, delay) => {
        await sleep(delay);
        character.style.top = (parseFloat(character.style.top) + topDelta) + 'vh';
    };
    if (a_quarter) {
        await step(0.9, 0);
        await step(0.9, 60);
        await step(0.6, 60);
        await step(-0.6, 60);
        await ripristineTransition(character);
    }
    if(half){
        await step(1.75, 0);
        await step(1.75, 60);
        await step(1.25, 60);
        await step(-1.25, 60);
        await ripristineTransition(character);
    }
    else{
        await step(3.5, 0);
        await step(3.5, 60);
        await step(2.5, 60);
        await step(-2.5, 60);
        await ripristineTransition(character);
    }
}
function ripristineTransition(character){
    character.style.transition = "top 0.25s ease-out, left 0.25s ease-out";
    character.style.zIndex = `${Math.trunc(parseFloat(character.style.top)/5)}`;
}

function diaologueB_P1(e, state) {
    setTimeout(() => {
        const b = document.getElementById('character_5');
        const t = document.getElementById('character_6');
        const t_illustration = document.getElementById('illustration_6');
        const bob_illustration = document.getElementById('illustration_5');
        const jumps = [
                    ["leftJump","leftJump","leftJump"],
                    [300, 400, 0],
                    [[false], [false], [true]],
                ];
        t.style.left = '90vw';
        t.style.top = '42vh';
        t.style.transform = "scaleX(-1)";
        bob_illustration.style.opacity = '0';
        t_illustration.style.opacity = '0';
        state.condBP1 = true;
        removeIllustration(bob_illustration, t_illustration);

        async function exit(b, t) {
            const sleep = ms => new Promise(r => setTimeout(r, ms));
            await rightJump(t, false);
            await sleep(200); 
            await rightJump(t, false); 
            await sleep(200);
            await rotateBob(b);
            returnToObject(t, data.seatForObjects[0][0], data.seatForObjects[0][1], false, state, e);
            await moveCharacter(b, jumps[0].length, jumps);
            await sleep(700);
            await removeIllustration(bob_illustration, t_illustration);
            await sleep(2300);
            await dialogue(b, t);
        }

        function rotateBob(b) {
            b.style.transform = "scaleX(-1)";
            clearInterval(interval[5]);
            bob_illustration.style.opacity = '1';
            bob_illustration.src = 'vignetta_esclamazione.png';
        }
        
        function removeIllustration(b, t) {
            return new Promise(resolve => {
                b.style.opacity = '0';
                t.style.opacity = '0';
                setTimeout(() => {
                    resolve();
                }, 200);
            });
        }
        function dialogue(b, t){
            b.style.transition = "left 0.25s linear, top 0.25s linear";
            t.style.transition = "left 0.25s linear, top 0.25s linear";
            e.container_dialogue.style.opacity = '1';
            state.cond_skip = true;
            state.cond_dialogue = true;
            showNextLine();
        }
        exit(b, t);

    }, 5000);
}


function activateCinematicMode() {
  document.getElementById('cinematic-bars').classList.add('cinematic');
}

function deactivateCinematicMode() {
  document.getElementById('cinematic-bars').classList.remove('cinematic');
}

function mobileAdaptation(e, state){
    document.body.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, { passive: false });

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.querySelector(".mobile_movement").style.display = 'block';
        e.container_dialogue.style.transform = 'translateY(-5vh)';
    }

    function checkOrientation(){
        if (window.matchMedia("(orientation: portrait)").matches) {
             document.body.style.transform = 'rotate(90deg)';
        } else {
            document.body.style.transform = 'rotate(0deg)';
        }
    }

    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);
}

function backgroundAdaption(e, state) {
    document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    //pauseGame(e, state);
    document.getElementById('start_overlay').style.display = 'block';
  } else {
    setTimeout(() => {
        document.getElementById('start_overlay').style.display = 'none';
    }, 500);
  }
});

}

function createOnClicks(e, state){
    e.lateral_icon.onclick = function() {
        changeMenu(e, state);
    }
    e.zoom.onclick = function() {
        scale(true, e);
    }
    e.standard.onclick = function() {
        scale('standard', e);
    }
    e.dezoom.onclick = function() {
        scale(false, e);
    }
    e.mission1.onclick = function() {
        toggleMenu(e, state);
    }
    e.mission2.onclick = function() {
        toggleMenu(e, state);
    }
    e.mission3.onclick = function() {
        toggleMenu(e, state);
    }
    e.button_shop1.onclick = function() {
        buyMaterial(1, state);
    }
    e.button_shop2.onclick = function() {
        buyMaterial(2, state);
    }
    e.button_shop3.onclick = function() {
        buyMaterial(3, state);
    }
    document.getElementById("sidebar_mission1").onclick = function() {
        overlayMission(1);
    }
    document.getElementById("sidebar_mission2").onclick = function() {
        overlayMission(2);
    }
    document.getElementById("sidebar_mission3").onclick = function() {
        overlayMission(3);
    }
}

function createListenersForRedraw(elements, state){
    let redrawTimeout = null;
    function requestRedraw() {
        clearTimeout(redrawTimeout);
        redrawTimeout = setTimeout(() => {
            if (typeof drawMap === 'function' && typeof elements !== 'undefined' && typeof state !== 'undefined') {
                drawMap(elements, state);
            }
        }, 1);
    }

    window.addEventListener('resize', requestRedraw);

    const fsEvents = ['fullscreenchange','webkitfullscreenchange','mozfullscreenchange','MSFullscreenChange'];
    fsEvents.forEach(evt => document.addEventListener(evt, requestRedraw));
}



window.onload = function(){
    setTimeout(() => {
            document.getElementById('start_overlay').style.display = 'none';
    }, 350);
    
    startGame();
} 
