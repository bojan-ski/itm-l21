import getProductData from "@/utils/getData"
import Link from "next/link"
import { redirect } from "next/dist/server/api-utils"

const SelectedProduct = async ({ params }) => {
  const productDetails = await getProductData(params.product)

  if (!productDetails) {
    return <div className="error-page">
        <h1>Page does not exist</h1>
        <Link href='/' className="btn-back">
          Back to Home page
        </Link>
    </div>
  }

  const { title, description, price, discountPercentage, rating, thumbnail } = productDetails

  return (
    <div>
      <h1>
        {title}
      </h1>

      <div className="product-details">
        <img src={thumbnail} alt={title} />

        <div className="product-data">
          <p>
            Rating: <span>{rating}</span>
          </p>
          <p>
            Description: <span>{description}</span>
          </p>
          <p>
            Price: <span>{price}</span>
          </p>
          <p>
            Discounted price: <span>{discountPercentage}</span>
          </p>

          <Link href='/' className="btn-back">
            Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SelectedProduct