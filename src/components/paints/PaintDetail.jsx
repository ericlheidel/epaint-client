import { useParams } from "react-router-dom"

export const PaintDetail = () => {
  const { paintId } = useParams()

  console.log(paintId)

  return <div>PaintDetail</div>
}
