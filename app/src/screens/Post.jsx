import { Header } from "../components/Header"

export function Post() {
    return (
      <div className="block ">
        <Header />
        <div className="w-screen bg-gray-100">
          <form action="" className="block mx-20 bg-gray-100 mt-24">
            <label htmlFor="" className="text-2xl font-semibold">
              Product Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-64 p-1 rounded border-2 border-black"
            />
            <br />
            <label htmlFor="" className="text-2xl font-semibold">
              Product Description
            </label>{" "}
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-64 p-1 rounded border-2 border-black"
            ></textarea>
            <br />
            <label htmlFor="" className="text-2xl font-semibold">
              Product Price
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-64 p-1 rounded border-2 border-black"
            />
            <br />
            <label htmlFor="" className="text-2xl font-semibold">
              Product Quantity
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-64 p-1 rounded border-2 border-black"
            />
            <br />
            <label htmlFor="" className="text-2xl font-semibold">
              Product Image
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-64 p-1 rounded border-2 border-black"
            />
            <button
              className="border p-2 w-24 m-8 absolute left-28 border-black bg-black rounded text-white "
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
}