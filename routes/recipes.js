const express = require('express');
const router = express.Router();

let recipes = [
    {
    name: 'Grilled Cheese',
    ingredients: ['Bread', 'Cheese', 'Butter'],
    directions: `Preheat skillet over medium heat. Generously butter one side of a slice of bread 
    Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. 
    Butter a second slice of bread on one side and place butter-side-up on top of sandwich. 
    Grill until lightly browned and flip over; continue grilling until cheese is melted. 
    Repeat with remaining 2 slices of bread, butter and slice of cheese.`
    }
]


router.get('/', (req, res)=> {
    let newRecipe = req.body;
    recipes.push(newRecipe);
    res.json(recipes);
});

router.post('/', (req, res) => {
   let newRecipe = req.body;
   recipes.push(newRecipe);
   res.json(recipes);
    
});

router.delete('/:recipe_id', (req, res) => {
    res.send(`where you remove a recipe`);
});

router.patch('/:recipe_id', (req, res) =>{
    res.send(`where you update a recipe`)
})

router.get('/:ingredient', (req, res) => {
    res.send(`Where all recipes containing a specific ingredient`)
});

module.exports = router;