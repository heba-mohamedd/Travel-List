import React from "react";

export function Stats({ items }) {
  const numItems = items.length;

  const totalPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((totalPacked / numItems) * 100);

  //   if (!items.length) {
  //   return (
  //     <p className="stats">
  //       <em>Start adding some items to your packing list 🚀</em>
  //     </p>
  //   );
  // }

  return (
    <footer className="stats">
      <em>
        {!items.length
          ? "Start adding some items to your packing list 🚀"
          : precentage === 100
          ? "You got everything! Ready to go. ✈️"
          : `
            👜 You have ${numItems} items on your list and you already packed
            ${totalPacked}, which is (${precentage}%)
          `}
      </em>
    </footer>
  );
}
