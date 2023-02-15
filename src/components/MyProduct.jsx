function MyProduct(props) {
  return (
    <div>
      {props.productName} er lagerført med {props.stockValue} items
    </div>
  );
}

export default MyProduct;
