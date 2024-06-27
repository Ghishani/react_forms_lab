import {useState} from "react";

const CakeForm = ({ cakes, setCakes }) => {
    const[cakeName, setCakeName] = useState("");
    const[rating, setRating] = useState(1);
    const[ingredients, setIngredients] = useState([]);
    const[error, setError] = useState("");
    
    const validate = () => {
    if(cakeName === "" || ingredients === ""){
        setError("Please complete all fields");
        return false;
    }
    return true;
    }

    const handleSubmit = (e) => {
    e.preventDefault();

    if(!validate()) return;
    const newCake = {cakeName, ingredients, rating}
    console.log(newCake);
    setCakes([newCake, ...cakes]);
    }

    return (
        <>
        <form onSubmit = {handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input type="text" id="name" placeholder="Name" value= {cakeName} onChange={(e) => setCakeName(e.target.value)} />
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients" value= {ingredients} onChange={(e) => setIngredients(e.target.value.split(",")) }></textarea>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5} value= {rating} onChange={(e) => setRating(e.target.value)}/>
            <input type="submit" value="Submit" />
        </form>
        <p>{error}</p>
        </>
    );
};

export default CakeForm;