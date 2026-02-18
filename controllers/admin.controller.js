
import MovieModel from "../models/movies.model.js"; // Make sure your Movie model is imported

const adminController = {
  async  homePages(req, res) {
        try {

            const movies = await MovieModel.find();

            return res.render("index", { movies });

        } catch (error) {
            console.log(error);
            res.render("index", { movies: [] });  // safety
        }
    },

    adminPage(req, res) {
        return res.render("pages/adminPage");
    },

    addMovies(req, res) {
        return res.render("pages/addMoviePage");
    },
    async viewMovies(req, res) {
        try {
            const movies = await MovieModel.find();
            return res.render("pages/viewMoviePage", { movies });
        } catch (error) {
            console.log(error);
        }
    }
};

export default adminController;
