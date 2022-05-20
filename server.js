const express = require("express");
const pokemon = require('./models/pokemon');

//EXPRESS ()
const app = express();
const port = 3005;

//METHOD-OVERRIDE ()
const methodOverride = require("method-override");

//MIDDLEWARE ()
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));

//INDEX ()
app.get('/pokemon/', (req, res) => {
	res.render('index.ejs', { pokemon: pokemon });
	});

//NEW ()
app.get("/pokemon/new", (req, res) => {
	res.render("new.ejs");
});

//DELETE ()
app.delete("/pokemon/:id", (req, res) => {
	pokemon.splice(req.params.id, 1)
	res.redirect("/pokemon")
});

//UPDATE ()
app.put("/pokemon/:id", (req, res) => {
	pokemon[req.params.id] = req.body
	console.log(req.body)
	res.redirect("/pokemon")
})

//CREATE ()
app.post("/pokemon", (req, res) => {
	pokemon.unshift(req.body);
	console.log(pokemon);
	res.redirect("/pokemon");
})

//EDIT ()
app.get("/pokemon/:id/edit", (req, res) => {
	res.render("edit.ejs", {pokemon: pokemon[req.params.id],index:req.params.id,})
});

//SHOW ()
app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', { data: pokemon[req.params.id] });
	});

//PORT ()
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });