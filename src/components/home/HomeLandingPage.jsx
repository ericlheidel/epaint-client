import { useNavigate } from "react-router-dom"

export const HomeLandingPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="bomber-urban text-9xl mb-5">Welcome to Paintkillerz!</h1>
      <div className="flex flex-row justify-around m-16">
        <div className="text-center shrink-0">
          <img
            src="src/media/BLACK/black_2.jpg"
            alt="black logo"
            className="w-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
            onClick={() => {
              navigate("/1/paints")
            }}
          />
          <h2 className="w-fit ml-auto mr-auto text-5xl mt-5">Montana</h2>
          <h2 className="w-fit ml-auto mr-auto text-5xl">Black</h2>
        </div>
        <div className="text-cent shrink-0">
          <img
            src="src/media/GOLD/coke_2.jpg"
            alt="gold logo"
            className="w-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
            onClick={() => {
              navigate("/2/paints")
            }}
          />
          <h2 className="w-fit ml-auto mr-auto text-5xl mt-5">Montana</h2>
          <h2 className="w-fit ml-auto mr-auto text-5xl">Gold</h2>
        </div>
        <div className="text-cent shrink">
          <img
            src="src/media/WHITE/b_52_2.jpg"
            alt="white logo"
            className="size-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
            onClick={() => {
              navigate("/3/paints")
            }}
          />
          <h2 className="w-fit ml-auto mr-auto text-5xl mt-5">Montana</h2>
          <h2 className="w-fit ml-auto mr-auto text-5xl">White</h2>
        </div>
        <div className="text-cent shrink-0">
          <img
            src="src/media/SPECIAL/vintage_1.jpg"
            alt="special logo"
            className="size-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
            onClick={() => {
              navigate("/4/paints")
            }}
          />
          <h2 className="w-fit ml-auto mr-auto text-5xl mt-5">Montana</h2>
          <h2 className="w-fit ml-auto mr-auto text-5xl">Special</h2>
        </div>
      </div>
      <div className="mt-20 text-3xl">
        <img
          src="src/media/montana.jpg"
          alt="image of logo"
          className="size-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
          onClick={() => {
            navigate("/paints")
          }}
        />
        <h2 className="w-fit ml-auto mr-auto text-5xl mt-5">All Paints</h2>
      </div>
    </div>
  )
}
