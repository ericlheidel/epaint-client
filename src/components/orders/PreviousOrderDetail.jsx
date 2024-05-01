import { useParams } from "react-router-dom"

export const PreviousOrderDetail = () => {
  const { orderId } = useParams()

  return (
    <div>
      <div>PreviousOrderDetail</div>
    </div>
  )
}
