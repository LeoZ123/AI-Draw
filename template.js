//jscs:disable
var img;  // Declare variable 'img'.
var pop_size = 50;
var mutation_rate = 0.01;
img = loadImage('assets/peter.jpg');  // Load the image
var population;
var mating_pool

function setup() {
  createCanvas(720, 400);
  image(img, 0, 0);

  population = new Array();

  for (var i = 0; i < pop_size; i++) {
    population.push(new DNA());
  }
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  for (var i = 0; i < pop_size; i++) {
    population[i].fitness();
  }

  // Mating pool
  mating_pool = new Array();
  for (var i = 0; i < pop_size; i++) {
    var n = Math.floor(population[i].fitness() * 100);
    for (var j = 0; j < n; j++) {
      mating_pool.push(population[i]);
    }
  }
  // Reproduction
  for (var i = 0; i < pop_size; i++) {
    var a = Math.floor(Math.random(mating_pool.length));
    var b = Math.floor(Math.random(mating_pool.length));
    var partnerA = matingPool[a];
    var partnerB = matingPool[b];
    // Crossover
    var child = partnerA.crossover(partnerB)
    // Mutate
    child.mutate(mutation_rate);
    // Add child to population
    population[i] = child;
  }
}
