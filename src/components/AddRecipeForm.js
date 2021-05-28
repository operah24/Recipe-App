import React from 'react';
import Input from './Input';
import Button from './Button';
function AddRecipeForm({chefName, recipe, handleChange, handleSubmit}) {
  return (
    <form onSubmit = {handleSubmit}>
          <Input type="text" name="chefName" value={chefName} label="Chef Name" handleChange={handleChange} />
          <Input type="text" name="recipe" value={recipe} label="Recipe" handleChange={handleChange} />
          <center>
            <Button name="Add" className="add-btn" type="submit"/>
          </center>

    </form>
  );
}

export default AddRecipeForm;
