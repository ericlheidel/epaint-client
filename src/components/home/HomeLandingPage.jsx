import { useNavigate } from "react-router-dom"

export const HomeLandingPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="font-two text-9xl mb-5 text-white">
        Welcome to Paintkillerz!
      </h1>
      <div className="flex flex-row justify-around m-16">
        <div className="text-center shrink-0">
          <img
            src="https://paintkillerz.eheidel.com/media/BLACK/black_2.jpg"
            alt="black logo"
            draggable="false"
            className="w-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
            onClick={() => {
              navigate("/1/paints")
            }}
          />
          <h2 className="w-fit ml-auto mr-auto text-5xl mt-5 text-white">
            Montana
          </h2>
          <h2 className="w-fit ml-auto mr-auto text-5xl text-white">Black</h2>
        </div>
        <div className="text-cent shrink-0">
          <img
            src="https://paintkillerz.eheidel.com/media/GOLD/coke_2.jpg"
            alt="gold logo"
            draggable="false"
            className="w-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
            onClick={() => {
              navigate("/2/paints")
            }}
          />
          <h2 className="w-fit ml-auto mr-auto text-5xl mt-5 text-white">
            Montana
          </h2>
          <h2 className="w-fit ml-auto mr-auto text-5xl text-white">Gold</h2>
        </div>
        <div className="text-cent shrink-0">
          <img
            src="https://paintkillerz.eheidel.com/media/WHITE/b_52_2.jpg"
            alt="white logo"
            draggable="false"
            className="w-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
            onClick={() => {
              navigate("/3/paints")
            }}
          />
          <h2 className="w-fit ml-auto mr-auto text-5xl mt-5 text-white">
            Montana
          </h2>
          <h2 className="w-fit ml-auto mr-auto text-5xl text-white">White</h2>
        </div>
        <div className="text-cent shrink-0">
          <img
            src="https://paintkillerz.eheidel.com/media/SPECIAL/vintage_1.jpg"
            alt="special logo"
            draggable="false"
            className="size-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
            onClick={() => {
              navigate("/4/paints")
            }}
          />
          <h2 className="w-fit ml-auto mr-auto text-5xl mt-5 text-white">
            Montana
          </h2>
          <h2 className="w-fit ml-auto mr-auto text-5xl text-white">Special</h2>
        </div>
      </div>
      <div className="mt-20 text-3xl">
        <img
          src="https://paintkillerz.eheidel.com/media/montana.jpg"
          alt="image of logo"
          draggable="false"
          className="size-80 m-auto rounded-lg hover:cursor-pointer hover:scale-110 hover:opacity-80"
          onClick={() => {
            navigate("/paints")
          }}
        />
        <h2 className="w-fit ml-auto mr-auto text-5xl mt-5 text-white">
          All Paints
        </h2>
      </div>
    </div>
  )
}
