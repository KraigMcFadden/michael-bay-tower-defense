var Main = Main || { };

// called when the gui params change and we need to update mesh
Main.particleSystemChangeCallback = function(InputSettings) {
    // Start game engine
    GameEngine.start();

    // Create new system
    var initializer = new InputSettings.initializerFunction(InputSettings.initializerSettings);
    var updater = new InputSettings.updaterFunction(InputSettings.updaterSettings);
    var emitter = create(Emitter, {
        maxParticles:  InputSettings.maxParticles,   // how many particles can be generated by this emitter?
        particlesFreq: InputSettings.particlesFreq,  // how many particle per second will we emit?
        initialize:    initializer,                  // initializer object
        update:        updater,                      // updater object
        material:      InputSettings.particleMaterial,
        cloth:         InputSettings.cloth,
        width:         InputSettings.width,
        height:        InputSettings.height,
    });
    if (!InputSettings.cloth) {
        // If we are not dealing with cloth, lets sort particles
        emitter.enableSorting(Gui.values.sorting);
    }

    // Create the scene
    InputSettings.createScene();
};

// when HTML is finished loading, do this
window.onload = function() {
    Student.updateHTML();

    // Setup renderer, scene and gui
    Gui.init( Main.controlsChangeCallback,
              Main.displayChangeCallback );
    Scene.create();
    Renderer.create(Scene, document.getElementById("canvas"));
    InputManager.initialize();

    // Set up scene
    Main.particleSystemChangeCallback(SystemSettings.basic);

    GameEngine.mainLoop();
};
