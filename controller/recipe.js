import { Recipe } from "../Model/Recipe.js";
import { savedrecipe } from "../Model/savedrecipe.js";

const add = async (req, res) => {
    const { title, inst, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl } = req.body;
    try {
        const recipe = await Recipe.create({ title, inst, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl, user: req.user });
        res.json({ message: "recipe is created successfully..!", recipe });

    } catch (error) {
        console.log("recipe Error is : ", error)
    }

}

const getallRecipy = async (req, res) => {
    const recipy = await Recipe.find();
    res.json({ recipy });
}

const getrecipybyid = async (req, res) => {
    const id = req.params.id;
    try {
        const recipy = await Recipe.findById(id);
        if (!recipy) return res.json({ message: "Recipy is not exist" });

        res.json({ message: "Recipy by id", recipy });

    } catch (error) {
        console.log(error);
    }
}


const getRecipyByuserId = async (req, res) => {
    const userid = req.params.id;
    try {
        let recipy = await Recipe.find({ user: userid });
        if (!recipy) return res.json({ message: "Recipy is not exist..!" })

        res.json({ message: "Recipy By user id", recipy });

    } catch (error) {
        console.log(error);
    }
}

const savedrecipebyid = async (req, res) => {
    const id = req.params.id;
    let recipe = await savedrecipe.findOne({ recipe: id });

    if (recipe) return res.json({ message: "recipe all ready save..!" })

    recipe = await savedrecipe.create({ recipe: id });
    res.json({ message: "recipe save successfully..!"})

}

const getallsavedRecipy = async (req, res) => {
    const recipy = await Recipe.find();
    res.json({ recipy });
}

export default { add, getallRecipy, getrecipybyid, getRecipyByuserId, savedrecipebyid, getallsavedRecipy };