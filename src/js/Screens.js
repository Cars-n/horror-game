/**
 * 
 */


/**
 * Class for the settings sub menu
 */
class SettingsMenu {

	constructor() {
		//Creating all of the buttons, sliders, controls, etc. needed for the menu
		this.exitButton = createButton("Exit");


		//Sets up the background sprite to mask over the pause menu
		this.settingsMenu = new Sprite(1920/2,1080/2,1920,1080);
		this.settingsMenu.layer = SETTINGS_LAYER;		//ONE LAYER HIGHER THAN PAUSE MENU TO DISPLAY OVER IT
		this.settingsMenu.opacity = 0.4;
		this.settingsMenu.color = 'green';
        this.settingsMenu.visible = false;
        this.settingsMenu.collider = 'none';

		// Setup exit Button
		this.exitButton.position(300,300)
		this.exitButton.style('background-color', 'transparent'); 
		this.exitButton.style('color', 'white'); 
		this.exitButton.style('border', 'none'); 
		this.exitButton.style('font-size', '25px');
		this.exitButton.hide();		//Hides the button until pause menu is triggered

	}

	/**
	 * Makes all of the components of the settings menu visible
	 */
	showSettings() {
		if (this.settingsMenu.visible == false) {
			this.settingsMenu.visible = true;
			this.exitButton.show();
		}
	}


	/**
	 * Hides the components and menu background of the settings
	 */
	hideSettings() {
		if (this.settingsMenu.visible == true) {
			this.settingsMenu.visible = false;
			this.exitButton.hide();
		}
	}

	/**
	 * Closes the settings submenu of the pause menu
	 * 
	 * @param {*} CURRENTGAMESTATE 
	 * @returns The PAUSE game state
	 */
	exitSettings(CURRENTGAMESTATE) {
		this.hideSettings();
		CURRENTGAMESTATE = "PAUSE";

		return CURRENTGAMESTATE;
	}
}


/**
 * Class to handle the control of the pause menu and actions in the menu
 */
class PauseMenu {
	/**
	 * Default constructor, makes a background, resume and exit buttons
	 */
	constructor() {
		//Backdrop to the menu
		this.menu = new Sprite(1920/2,1080/2,1920,1080);
		this.menu.layer = PAUSE_LAYER;
		this.menu.opacity = 0.4;
		this.menu.color = 'black';
        this.menu.visible = false;
        this.menu.collider = 'none';




		//Make div to then put each button under
		this.resumeButtonDiv = createDiv();
		this.resumeButtonDiv.id("resumeButton");
		this.resumeButtonDiv.class("Resume");

		//Makes the button
		//this.resumeButton.position(1920/2, 1080/2)
		this.resumeButton = createButton('Resume');
		this.resumeButton.class("PauseMenuButtons");
	
		//Sets parent and hides div
		this.resumeButton.parent("resumeButton");
		this.resumeButtonDiv.hide();




		//Create the div to hold the button
		this.exitButtonDiv = createDiv();
		this.exitButtonDiv.id("exitButton");
		this.exitButtonDiv.class("Exit");
		

		// Setup exit Button
		this.exitButton = createButton('Exit');
		this.exitButton.class("PauseMenuButtons");

		//Sets the parent and hides the div
		this.exitButton.parent("exitButton");
		this.exitButtonDiv.hide();




		//Create the div to hold the button
		this.settingsButtonDiv = createDiv();
		this.settingsButtonDiv.id("settingsButton");
		this.settingsButtonDiv.class("Settings");

		// Setup settings Button
		this.settingsButton = createButton('Settings');
		this.settingsButton.class("PauseMenuButtons");

		//Sets the parent and hides the div
		this.settingsButton.parent("settingsButton");
		this.settingsButtonDiv.hide();
	}

	/**
	 * Shows the menu and buttons
	 * 
	 */
	showMenu() {
		if (this.menu.visible == false) {
			//Shows menu
			this.menu.visible = true;
			
			//Sets divs to visible
			this.resumeButtonDiv.show();
			this.exitButtonDiv.show();
			this.settingsButtonDiv.show();
			
			//Shows buttons
			this.resumeButton.show();
			this.exitButton.show();
			this.settingsButton.show();
			
		}
	}
	
	/**
	 * Hides the menu 
	 * 
	*/
	hideMenu() {
		if (this.menu.visible == true) {

			//Hides buttons
			this.resumeButton.hide();
			this.exitButton.hide();
			this.settingsButton.hide();

			//Hides divs
			this.exitButtonDiv.hide();
			this.resumeButtonDiv.hide();
			this.settingsButtonDiv.hide();


			//Makes menu hide
			this.menu.visible = false;
		}	
	}


	/**
	 * Exits the player from the game and returns them to the menu
	 * 
	 * @param {*} CURRENTGAMESTATE 
	 * @returns The "MENU" game state
	 */
	exitGame(CURRENTGAMESTATE) {
		this.hideMenu();
		CURRENTGAMESTATE = "MENU";
		return 	CURRENTGAMESTATE;
	}


	/**
	 * Resumes game play and closes the pause menu
	 * 
	 * @param {*} CURRENTGAMESTATE 
	 * @returns The "PLAYING" game state
	 */
	resumeGame(CURRENTGAMESTATE) {
		this.hideMenu();
		CURRENTGAMESTATE = "PLAYING";

		return CURRENTGAMESTATE;
	}

	/**
	 * Toggles the settings sub menu
	 * 
	 * @param {*} SETTINGSMENU 
	 * @param {*} CURRENTGAMESTATE 
	 * @returns The "SETTINGS" game state
	 */
	settingsToggle(SETTINGSMENU, CURRENTGAMESTATE) {
		this.hideMenu();
		//CURRENTGAMESTATE = "SETTINGS";
		//SETTINGSMENU.showSettings();
		//return CURRENTGAMESTATE;

	}

}

/**
 * Class to handle the control of the main menu and actions in the menu
 */
class MainMenu {
	/**
	 * Default constructor, makes a background, resume and exit buttons
	 */
	constructor() {
		this.startButton = createButton('> Start');
		this.tutorialButton = createButton('> Tutorial')
		this.controlsButton = createButton('> Controls')
		this.exitButton = createButton('> Exit');

		//Backdrop to the menu
		this.menu = new Sprite(1920/2,1080/2,1920,1080);
		this.menu.layer = MAIN_MENU_LAYER;
		this.menu.opacity = 0.4;
		this.menu.color = 'black';
		// this.menu.image = mainMenuBackground;
		this.menu.collider = 'none';
		

		//Setting up the start button
		this.startButton.class("MainMenuButtons");
		this.startButton.position(150, 100)
		this.startButton.hide();		//Hides the button until pause menu is triggered

		//Setting up the tutorial button
		this.tutorialButton.class("MainMenuButtons");
		this.tutorialButton.position(150, 150)
		this.tutorialButton.hide();		//Hides the button until pause menu is triggered

		//Setting up the controls button
		this.controlsButton.class("MainMenuButtons");
		this.controlsButton.position(150, 200)
		this.controlsButton.hide();		//Hides the button until pause menu is triggered

		// Setup exit Button
		this.exitButton.class("MainMenuButtons");
		this.exitButton.position(150,250)
		this.exitButton.hide();		//Hides the button until pause menu is triggered
	}

	/**
	 * Shows the menu and buttons
	 * 
	 * @param {*} CURRENTGAMESTATE 
	 */
	showMenu() {
		this.menu.visible = true;
		this.startButton.show();
		this.tutorialButton.show();
		this.controlsButton.show();
		this.exitButton.show();
	}

	/**
	 * Hides the menu 
	 * 
	 */
	hideMenu() {
		this.startButton.hide();
		this.tutorialButton.hide();
		this.controlsButton.hide();
		this.exitButton.hide();
		this.menu.visible = false;
	}


	/**
	 * Called when exit is clicked
	 * Takes you to the main menu
	 */
	exitGame(CURRENTGAMESTATE) {
		this.hideMenu();
		CURRENTGAMESTATE = "MENU";
	}


	/**
	 * Resumes the game when resume is clicked OR escape is pressed a second time
	 */
	startGame(CURRENTGAMESTATE) {
		this.hideMenu();
		CURRENTGAMESTATE = 'PLAYING';

		return CURRENTGAMESTATE;
	}
}
