import MovieModel from "../models/movies.model.js";
import fs from "fs";

const movieController = {

    showAddMovie(req, res) {
        return res.render("pages/addMoviePage");
    },

    async addMovie(req, res) {
        try {

            const { title, rating, about } = req.body;
            let image;

            if (req.file) {
                image = req.file.filename;
            } else {
                console.log("Image is required ❌");
                return res.status(400).send("Image is required");
            }

            await MovieModel.create({
                title,
                rating,
                image,
                about
            });
            console.log(req.body);

            return res.redirect("/admin/viewMovie");

        } catch (error) {
            console.error("Error adding movie:", error);
            return res.status(500).send("Error adding movie");
        }
    },
    async viewMovies(req, res) {
        try {

            const movies = await MovieModel.find();

            return res.render("pages/viewMoviePage", { movies });

        } catch (error) {
            console.log(error);
        }
    },
   async deleteMovie(req, res) {
    try {
        const { id } = req.params;

        const movie = await MovieModel.findById(id);


        if (movie.image) {
            try {
                fs.unlinkSync(`uploads/${movie.image}`);
                console.log("Image Deleted");
            } catch (err) {
                console.log("Image not found ");
            }
        }

        await MovieModel.findByIdAndDelete(id);

        return res.redirect("/admin/viewMovie");

    } catch (error) {
        console.log(error);
        return res.status(500).send("Error deleting movie");
    }
},
    async showEditMovie(req, res) {
        try {

            const { id } = req.params;

            const movie = await MovieModel.findById(id);

            return res.render("pages/editMoviePage", { movie });

        } catch (error) {
            console.log("Error loading edit page", error);
            res.status(500).send("Error loading edit page");
        }
    },

 
async updateMovie(req, res) {
    try {

        const { id } = req.params;
        const { title, rating, about } = req.body;


        const existingMovie = await MovieModel.findById(id);


        let image = existingMovie.image;

     
        if (req.file) {

        
            if (existingMovie.image) {
                try {
                    fs.unlinkSync(`uploads/${existingMovie.image}`);
                   
                    console.log("Old Image Deleted ");
                } catch (err) {
                    console.log("Old image not found ");
                }
            }

          
            image = req.file.filename;
        }

    
        let updateData = {
            title,
            rating,
            about,
            image
        };

        await MovieModel.findByIdAndUpdate(id, updateData);

        console.log("Movie Updated Successfully ✅");

        return res.redirect("/admin/viewMovie");

    } catch (error) {
        console.log("Error Updating Movie ", error);
        return res.status(500).send("Error updating movie");
    }
}
};

export default movieController;
