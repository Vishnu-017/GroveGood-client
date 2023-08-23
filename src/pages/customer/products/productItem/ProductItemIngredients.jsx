import React, { useState } from "react";

export const ProductItemIngredients = () => {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className="space-y-3 font-urbanist">
      <div>
        <h2 className="text-base font-semibold text-primary md:text-lg">
        1. Natural Hair Care: Organic hair oils are made from plant-based and herbal ingredients, providing natural and gentle care for your hair.
        <br></br>
        2. Chemical-Free: They are free from synthetic chemicals and additives, reducing the risk of hair damage.
        <br></br>
        3. Nourishes Hair: Organic hair oils moisturize and nourish the hair, keeping it healthy and hydrated.
        <br></br>
        4. Strengthens Hair: These oils help strengthen hair strands from root to tip, reducing breakage and split end s.
        <br></br>
        5. Promotes Hair Growth: Some organic hair oils may encourage hair growth, improving thickness and volume.     
        </h2>
        <p className="text-sm text-secondary md:text-base">
          
        </p>
      </div>

      {showIngredients && (
        <div>
          <h3 className="text-base font-semibold text-primary md:text-lg">
            
          </h3>
          <p className="text-sm text-secondary md:text-base">
            
          </p>
        </div>
      )}

      <button
        onClick={() => setShowIngredients(!showIngredients)}
        className="text-base underline"
      >
        {/* {showIngredients ? "Show Less" : "See all ingredients"} */}
      </button>
    </div>
  );
};
