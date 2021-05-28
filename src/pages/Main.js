import React, { useState } from "react";
import "../styles/Main.css";
import AddRecipeForm from "../components/AddRecipeForm";
import Table from "../components/Table";
import Button from "../components/Button";

function Main(props) {
  const [inputs, setInputs] = useState({
    chefName: "",
    recipe: "",
  });
  let data = JSON.parse(localStorage.getItem("recipes")) || [{}];
  if (data === undefined) {
    data = [];
  }
  const [tableData, setTableData] = useState(data);
  const [action, setAction] = useState("Add");
  const [itemEdit, setItemEdit] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "Add") {
      const recipes = JSON.parse(localStorage.getItem("recipes")) || [{}];
      const data = {
        chefName: inputs.chefName,
        recipe: inputs.recipe,
      };
      recipes.push(data);
      localStorage.setItem("recipes", JSON.stringify(recipes));
      setTableData(recipes);
      setInputs({
        chefName: "",
        recipe: "",
      });
    } else {
      const recipes = JSON.parse(localStorage.getItem("recipes")) || [{}];
      const recipe = recipes.find(
        (item) => item.recipe === itemEdit.recipe
      );
      let index = recipes.indexOf(recipe);
      recipes[index] = inputs;
      localStorage.setItem("recipes", JSON.stringify(recipes));
      setTableData(recipes);
      setInputs({
        chefName: "",
        recipe: "",
      });
      setAction("Add");
    }
  };

  const handleEdit = (recip) => {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [{}];
    const recipe = recipes.find(
      (item) => item.recipe === recip.recipe
    );
    let index = recipes.indexOf(recipe);
    if (index !== -1) {
      setInputs(recipe);
      setItemEdit(recipe);
      setAction("Edit");
    }
  };
  const handleDelete = (recip) => {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [{}];
    const recipe = recipes.find(
      (item) => item.recipe === recip.recipe
    );
    console.log(recipes.indexOf(recipe));
    let index = recipes.indexOf(recipe);
    if (index > -1) {
      recipes.splice(index, 1);
    }
    localStorage.setItem("recipes", JSON.stringify(recipes));
    setTableData(recipes);
  };
   const signOut=(e) =>{
    //e.preventDefault();
    localStorage.clear();
    props.history.push('/')
  }

  return (
    <div>
      <h2>Recipe's Lounge</h2>
      <Button name="Logout" className="login-btn" onClick={signOut} />

      <div className="form-recipe">
        <AddRecipeForm
          chefName={inputs.chefName}
          recipe={inputs.recipe}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div>
        <Table
          tableData={tableData}
          deleteButton={handleDelete}
          editButton={handleEdit}
        />
      </div>
    </div>
  );
}
export default Main;
