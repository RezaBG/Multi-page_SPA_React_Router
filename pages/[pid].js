import fs from "fs/promises";
import path from "path";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  return (
    <div>
      <h2>{loadedProduct.title}</h2>
      <p>{loadedProduct.price}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { paraps } = context;

  const productId = paraps.pid;

  const filePath = path.join(process.cwd(), "data", "products.json");

  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  const product = data.products.find((item) => item.id === productId);

  return { props: { loadedProduct: product } };
}

export default ProductDetailPage;
