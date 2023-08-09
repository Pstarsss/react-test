const data = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function ProductCategoryRow({category}) {
    return (
        <tr>
            <th colSpan='2'>
                {category}
            </th>
        </tr>
    )
}

function ProductTableRow({product}) {
    const {stocked, name, price} = product;
    const aa = stocked ? <span style={{color: 'red'}}>{name}</span> : name;
    return (
        <tr>
            <td>
               {aa}
            </td>
            <td>{price}</td>
        </tr>
    )
}

function productTable()　{
    const categoryArray = [];
    let rows = [];
    data.forEach((product, index) => {
        const {category, name} = product;
        if (!categoryArray.includes(category)) {
            categoryArray.push(category);
            rows.push(
                <ProductCategoryRow  
                    category={category} 
                    key={category}
                />
            )
        }

        rows.push(
            <ProductTableRow  
                product={product} 
                key={name}
            />
        )
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}


export default productTable;