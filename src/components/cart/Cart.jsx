import { useEffect, useState } from "react"
import { getCart } from "../../data/carts.jsx"

export const Cart = () => {
  const [cart, setCart] = useState({})

  useEffect(() => {
    getCart().then((res) => {
      if (res) {
        setCart(res)
      }
    })
  }, [])

  return (
    <div>
      <div className="flex justify-center">
        <table className="w-2/3">
          <thead>
            <tr>
              <th>{"Image"}</th>
              <th>{"Paint Color"}</th>
              <th>{"Paint Number"}</th>
              <th>{"Size"}</th>
              <th>{"Price"}</th>
            </tr>
          </thead>
          <tbody>
            {cart.items?.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.paint.image_one}
                      alt="image of paint"
                      className="size-12"
                    />
                  </td>
                  <td>{item.paint.color}</td>
                  <td>{item.paint.paint_number}</td>
                  <td>{item.size.size}</td>
                  <td>{item.size.price}</td>
                  <td>
                    <button className="test">Remove</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
