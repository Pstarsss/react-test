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
    const styleColor = stocked ? {color: 'red'} : {};
    return (
        <tr>
            <td style={styleColor}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

function productTable({data})　{
    const categoryArray = [];
    let rows = [];
    data.forEach((product) => {
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