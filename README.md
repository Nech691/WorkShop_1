# WorkShop_1
WS1 Project - Movement Art 

> https://nech691.github.io/WorkShop_1/ 

## Tasks 
* Make a p5.js sketch using 2D primitive shapes, loops, and random numbers
* Write your own functions and make calls to these functions in your code
* Experiment with at least one new item from the p5.js documentation
* Keep notes to document your process and learning
	
## Notes 

* Loops (e.g., drawing function)
  * While loop
    * E.g., 
      * *Introduce variable and set up canvas background and drawing function*
      * *x = x + BLA -> increases the variable by BLA each time*
		  
    > while(x < width) {
    > rect(x, 200, 25, 80);
    > x += 50;
    > }
    >> While (variable condition) {what happens in loop}
    
	* For loop 

    > for(x = 0; x < width; x += 50) {rect(x, 200, 25, 80)
    > }
    >> For (variable or enter condition; exit condition; incrementation of variable) {what happens in the loop}

* Functions
  * Named code
  * Calling = running code after you named chunk
  * Define function 
		* *function name (parametres) {what happens}*
    
	  > function makeHouse(x, y, height, color) {
   > fill(color);
   > noStroke();
   > rect(x, y, 50, height);
   > triangle(x, y, x +25, y - 20, x +50, y);
   > }
   > makeHouse(250, 200, 50, color(40, 100, 200))
			
* Functions and loops 
  * Random(min, max)	Randomises numbers between parameters

## Project 
  **Rainbow circles & Confetti**

* For my second workshop project, I decided to explore movement. I used *for* loops, colour changing *conditionals* and I explored a new shape: *circle()*
	
> RGB values used
>> - Violet	180, 145, 255
>> - Indigo	145, 162, 255
>> - Blue	162, 255, 251
>> - Green	190, 255, 110
>> - Yellow 	255, 243, 110
>> - Orange	255, 168, 110
>> - Red 	255, 110, 110
  

