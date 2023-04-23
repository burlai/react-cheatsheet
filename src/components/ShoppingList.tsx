import React from "react";

interface ShoppingListInterface {
  shopping: string[];
}

const ShoppingList: React.FC<ShoppingListInterface> = ({ shopping }) => {
  return (
    <>
      <h2>Shopping List</h2>
      <ul>
        {shopping.map((shoppingItem: string) => (
          <li key={shoppingItem}>{shoppingItem}</li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
